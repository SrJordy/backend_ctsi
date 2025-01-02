import prisma from "@/lib/Prisma";
import { paciente } from "@prisma/client";
import { ICreatePacienteInput, IUpdatePacienteInput, IPacienteSearch, PacienteServiceError } from "../lib/paciente";

export class PacienteService {
    static async getAllPacientes(options?: { 
        includeInactive?: boolean,
        cuidadorId?: number,
        page?: number,
        limit?: number,
        orderBy?: 'nombre' | 'apellido' | 'fecha_nac'
    }): Promise<{ pacientes: paciente[], total: number }> {
        try {
            const skip = options?.page && options?.limit ? (options.page - 1) * options.limit : undefined;
            const take = options?.limit;

            const [pacientes, total] = await Promise.all([
                prisma.paciente.findMany({
                    where: {
                        estado: options?.includeInactive ? undefined : true,
                        cuidador_id: options?.cuidadorId
                    },
                    include: {
                        cuidador: true,
                        historialmedico: true,
                        citamedica: {
                            where: {
                                status: true
                            }
                        }
                    },
                    skip,
                    take,
                    orderBy: options?.orderBy ? { [options.orderBy]: 'asc' } : undefined
                }),
                prisma.paciente.count({
                    where: {
                        estado: options?.includeInactive ? undefined : true,
                        cuidador_id: options?.cuidadorId
                    }
                })
            ]);

            return { pacientes, total };
        } catch (error) {
            console.error("Error al obtener pacientes:", error);
            throw new PacienteServiceError(
                "Error al obtener pacientes",
                "FETCH_ERROR",
                500
            );
        }
    }

    static async getPaciente(criteria: IPacienteSearch): Promise<paciente | null> {
        try {
            const { id, CID, nombre, apellido, cuidador_id } = criteria;
            
            return await prisma.paciente.findFirst({
                where: {
                    OR: [
                        id ? { cod_paciente: id } : undefined,
                        CID ? { CID } : undefined,
                        nombre ? { nombre: { contains: nombre, mode: 'insensitive' } } : undefined,
                        apellido ? { apellido: { contains: apellido, mode: 'insensitive' } } : undefined,
                        cuidador_id ? { cuidador_id } : undefined
                    ].filter(Boolean),
                    estado: true
                },
                include: {
                    cuidador: true,
                    historialmedico: true,
                    citamedica: {
                        where: {
                            status: true
                        }
                    }
                }
            });
        } catch (error) {
            console.error("Error al buscar paciente:", error);
            throw new PacienteServiceError(
                "Error al buscar paciente",
                "SEARCH_ERROR",
                500
            );
        }
    }

    static async createPaciente(data: ICreatePacienteInput): Promise<paciente> {
        try {
            if (!data.nombre || !data.apellido || !data.CID || !data.telefono || !data.fecha_nac || !data.genero || !data.cuidador_id) {
                throw new PacienteServiceError(
                    "Faltan campos requeridos",
                    "MISSING_FIELDS",
                    400
                );
            }

            if (!/^\+?[1-9]\d{1,14}$/.test(data.telefono)) {
                throw new PacienteServiceError(
                    "Formato de teléfono inválido",
                    "INVALID_PHONE",
                    400
                );
            }

            const existingPaciente = await prisma.paciente.findFirst({
                where: { 
                    CID: data.CID,
                    estado: true 
                }
            });

            if (existingPaciente) {
                throw new PacienteServiceError(
                    "Ya existe un paciente con este CID",
                    "DUPLICATE_CID",
                    409
                );
            }

            const cuidador = await prisma.usuario.findFirst({
                where: { 
                    cod_usuario: data.cuidador_id,
                    estado: true 
                }
            });

            if (!cuidador) {
                throw new PacienteServiceError(
                    "El cuidador especificado no existe",
                    "INVALID_CUIDADOR",
                    404
                );
            }

            const fecha_nac = new Date(data.fecha_nac);
            if (isNaN(fecha_nac.getTime())) {
                throw new PacienteServiceError(
                    "Formato de fecha inválido",
                    "INVALID_DATE",
                    400
                );
            }

            return await prisma.paciente.create({
                data: {
                    ...data,
                    fecha_nac,
                    estado: true
                },
                include: {
                    cuidador: true
                }
            });
        } catch (error) {
            console.error("Error al crear paciente:", error);
            if (error instanceof PacienteServiceError) throw error;
            throw new PacienteServiceError(
                "Error al crear paciente",
                "CREATE_ERROR",
                500
            );
        }
    }

    static async updatePaciente(id: number, data: IUpdatePacienteInput): Promise<paciente> {
        try {
            const existingPaciente = await prisma.paciente.findUnique({
                where: { cod_paciente: id }
            });

            if (!existingPaciente || !existingPaciente.estado) {
                throw new PacienteServiceError(
                    "Paciente no encontrado o inactivo",
                    "NOT_FOUND",
                    404
                );
            }

            if (data.CID) {
                const duplicateCID = await prisma.paciente.findFirst({
                    where: {
                        CID: data.CID,
                        cod_paciente: { not: id },
                        estado: true
                    }
                });

                if (duplicateCID) {
                    throw new PacienteServiceError(
                        "Ya existe otro paciente con este CID",
                        "DUPLICATE_CID",
                        409
                    );
                }
            }

            if (data.cuidador_id) {
                const cuidador = await prisma.usuario.findFirst({
                    where: { 
                        cod_usuario: data.cuidador_id,
                        estado: true 
                    }
                });

                if (!cuidador) {
                    throw new PacienteServiceError(
                        "El cuidador especificado no existe",
                        "INVALID_CUIDADOR",
                        404
                    );
                }
            }

            return await prisma.paciente.update({
                where: { cod_paciente: id },
                data,
                include: {
                    cuidador: true
                }
            });
        } catch (error) {
            console.error("Error al actualizar paciente:", error);
            if (error instanceof PacienteServiceError) throw error;
            throw new PacienteServiceError(
                "Error al actualizar paciente",
                "UPDATE_ERROR",
                500
            );
        }
    }

    static async deletePaciente(id: number): Promise<paciente> {
        try {
            const existingPaciente = await prisma.paciente.findUnique({
                where: { cod_paciente: id },
                include: {
                    citamedica: {
                        where: {
                            status: true
                        }
                    }
                }
            });

            if (!existingPaciente || !existingPaciente.estado) {
                throw new PacienteServiceError(
                    "Paciente no encontrado o ya está inactivo",
                    "NOT_FOUND",
                    404
                );
            }

            if (existingPaciente.citamedica.length > 0) {
                throw new PacienteServiceError(
                    "No se puede eliminar el paciente porque tiene citas médicas activas",
                    "ACTIVE_APPOINTMENTS",
                    400
                );
            }

            return await prisma.paciente.update({
                where: { cod_paciente: id },
                data: { estado: false },
                include: {
                    cuidador: true
                }
            });
        } catch (error) {
            console.error("Error al eliminar paciente:", error);
            if (error instanceof PacienteServiceError) throw error;
            throw new PacienteServiceError(
                "Error al eliminar paciente",
                "DELETE_ERROR",
                500
            );
        }
    }
}