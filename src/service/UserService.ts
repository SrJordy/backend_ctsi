import prisma from "@/lib/Prisma";
import { usuario, Rol } from "@prisma/client";
import { IUserCreate, IUserUpdate, IUserSearch } from "@/lib/user";
import { validateEmail, validatePhone} from "@/lib/validators";

export class UserServiceError extends Error {
    constructor(message: string, public code: string) {
        super(message);
        this.name = 'UserServiceError';
    }
}

export class UserService {
    static async getAllUsers(options?: { 
        rol?: Rol, 
        includeRelations?: boolean 
    }): Promise<usuario[]> {
        try {
            return await prisma.usuario.findMany({
                where: { 
                    estado: true,
                    ...(options?.rol && { rol: options.rol })
                },
                ...(options?.includeRelations && {
                    include: {
                        paciente: true,
                        citamedica: true,
                        historialmedico: true,
                        receta: true,
                    }
                })
            });
        } catch (error) {
            throw new UserServiceError(
                "Error al obtener usuarios",
                "FETCH_ERROR"
            );
        }
    }

    static async getUser(criteria: IUserSearch): Promise<usuario | null> {
        try {
            const { id, nombre, apellido, CID, email } = criteria;

            const user = await prisma.usuario.findFirst({
                where: {
                    OR: [
                        { cod_usuario: id },
                        { nombre: { contains: nombre, mode: 'insensitive' } },
                        { apellido: { contains: apellido, mode: 'insensitive' } },
                        { CID },
                        { email },
                    ].filter(Boolean),
                    estado: true,
                },
                include: {
                    paciente: true,
                    citamedica: true,
                    historialmedico: true,
                    receta: true,
                }
            });

            return user;
        } catch (error) {
            throw new UserServiceError(
                "Error al buscar usuario",
                "SEARCH_ERROR"
            );
        }
    }

    static async createUser(data: IUserCreate): Promise<usuario> {
        try {
            // Validaciones
            if (!validateEmail(data.email)) {
                throw new UserServiceError(
                    "Email inválido",
                    "INVALID_EMAIL"
                );
            }

            if (!validatePhone(data.telefono)) {
                throw new UserServiceError(
                    "Número de teléfono inválido",
                    "INVALID_PHONE"
                );
            }

            // Verificar si ya existe un usuario con el mismo email o CID
            const existingUser = await prisma.usuario.findFirst({
                where: {
                    OR: [
                        { email: data.email },
                        { CID: data.CID }
                    ],
                    estado: true
                }
            });

            if (existingUser) {
                throw new UserServiceError(
                    "Ya existe un usuario con ese email o CID",
                    "DUPLICATE_USER"
                );
            }

            return await prisma.usuario.create({
                data: {
                    ...data,
                    estado: true
                }
            });
        } catch (error) {
            if (error instanceof UserServiceError) throw error;
            throw new UserServiceError(
                "Error al crear usuario",
                "CREATE_ERROR"
            );
        }
    }

    static async updateUser(id: number, data: IUserUpdate): Promise<usuario> {
        try {
            const existingUser = await prisma.usuario.findUnique({
                where: { cod_usuario: id }
            });

            if (!existingUser || !existingUser.estado) {
                throw new UserServiceError(
                    "Usuario no encontrado",
                    "NOT_FOUND"
                );
            }

            if (data.email && !validateEmail(data.email)) {
                throw new UserServiceError(
                    "Email inválido",
                    "INVALID_EMAIL"
                );
            }

            if (data.telefono && !validatePhone(data.telefono)) {
                throw new UserServiceError(
                    "Número de teléfono inválido",
                    "INVALID_PHONE"
                );
            }


            // Verificar duplicados solo si se está actualizando email o CID
            if (data.email || data.CID) {
                const duplicateUser = await prisma.usuario.findFirst({
                    where: {
                        OR: [
                            data.email ? { email: data.email } : {},
                            data.CID ? { CID: data.CID } : {}
                        ],
                        NOT: {
                            cod_usuario: id
                        },
                        estado: true
                    }
                });

                if (duplicateUser) {
                    throw new UserServiceError(
                        "Ya existe un usuario con ese email o CID",
                        "DUPLICATE_USER"
                    );
                }
            }

            return await prisma.usuario.update({
                where: { cod_usuario: id },
                data
            });
        } catch (error) {
            if (error instanceof UserServiceError) throw error;
            throw new UserServiceError(
                "Error al actualizar usuario",
                "UPDATE_ERROR"
            );
        }
    }

    static async deleteUser(id: number): Promise<usuario> {
        try {
            const existingUser = await prisma.usuario.findUnique({
                where: { cod_usuario: id }
            });

            if (!existingUser || !existingUser.estado) {
                throw new UserServiceError(
                    "Usuario no encontrado",
                    "NOT_FOUND"
                );
            }

            // Verificar si el usuario tiene relaciones activas
            const hasActiveRelations = await this.checkActiveRelations(id);
            if (hasActiveRelations) {
                throw new UserServiceError(
                    "No se puede eliminar el usuario porque tiene registros asociados activos",
                    "ACTIVE_RELATIONS"
                );
            }

            return await prisma.usuario.update({
                where: { cod_usuario: id },
                data: { estado: false }
            });
        } catch (error) {
            if (error instanceof UserServiceError) throw error;
            throw new UserServiceError(
                "Error al eliminar usuario",
                "DELETE_ERROR"
            );
        }
    }

    private static async checkActiveRelations(userId: number): Promise<boolean> {
        const relations = await prisma.usuario.findUnique({
            where: { cod_usuario: userId },
            include: {
                paciente: {
                    where: { estado: true }
                },
                citamedica: {
                    where: { status: true }
                },
                historialmedico: {
                    where: { estado: true }
                },
                receta: true
            }
        });

        return !!(
            relations?.paciente.length ||
            relations?.citamedica.length ||
            relations?.historialmedico.length ||
            relations?.receta.length
        );
    }
}