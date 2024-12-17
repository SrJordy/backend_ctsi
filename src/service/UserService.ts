import prisma from "@/lib/Prisma";
import { usuario } from "@prisma/client";

export const getAllUsers = async (): Promise<usuario[]> => {
    try {
        return await prisma.usuario.findMany({
            where: { estado: true },
        });
    } catch (error) {
        console.error("Error al obtener todos los usuarios:", error);
        throw new Error("No se pudieron obtener los usuarios");
    }
};

export const getUser = async (criteria: { id?: number; nombre?: string; apellido?: string; CID?: number }): Promise<usuario | null> => {
    try {
        const { id, nombre, apellido, CID } = criteria;

        return await prisma.usuario.findFirst({
            where: {
                OR: [
                    { cod_usuario: id },
                    { nombre: nombre },
                    { apellido: apellido },
                    { CID: CID },
                ],
                estado: true,
            },
        });
    } catch (error) {
        console.error("Error al obtener un usuario:", error);
        throw new Error("No se pudo obtener el usuario");
    }
};

export const createUser = async (data: Omit<usuario, "cod_usuario" | "creadoEn" | "actualizadoEn" | "estado">): Promise<usuario> => {
    try {
        return await prisma.usuario.create({
            data,
        });
    } catch (error) {
        console.error("Error al crear un usuario:", error);
        throw new Error("No se pudo crear el usuario");
    }
};

export const updateUser = async (id: number, data: Partial<Omit<usuario, "cod_usuario" | "creadoEn" | "actualizadoEn">>): Promise<usuario> => {
    try {
        const existingUser = await prisma.usuario.findUnique({
            where: { cod_usuario: id },
        });

        if (!existingUser || !existingUser.estado) {
            throw new Error("Usuario no encontrado o está inactivo");
        }

        return await prisma.usuario.update({
            where: { cod_usuario: id },
            data,
        });
    } catch (error) {
        console.error("Error al actualizar un usuario:", error);
        throw new Error("No se pudo actualizar el usuario");
    }
};


export const deleteUser = async (idusuario: number): Promise<usuario> => {
    try {
        const existingUser = await prisma.usuario.findUnique({
            where: { cod_usuario: idusuario },
        });

        if (!existingUser || !existingUser.estado) {
            throw new Error("Usuario no encontrado o ya está inactivo");
        }

        return await prisma.usuario.update({
            where: { cod_usuario: idusuario },
            data: { estado: false },
        });
    } catch (error) {
        console.error("Error al eliminar (inactivar) un usuario:", error);
        throw new Error("No se pudo inactivar el usuario");
    }
};
