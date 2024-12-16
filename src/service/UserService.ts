import prisma from "@/lib/Prisma";
import { usuario } from "@prisma/client";

export const getAllUsers = async (): Promise<usuario[]> => {
    return await prisma.usuario.findMany({
        where:{
            estado:true
        }
    })
}

export const getUser = async (criteria: { id?: number; nombre?: string; apellido?: string; CID?: number }): Promise<usuario | null> => {
    const { id, nombre, apellido, CID } = criteria;

    return await prisma.usuario.findFirst({
        where: {
            OR: [
                { cod_usuario: id },
                { nombre: nombre },
                { apellido: apellido },
                { CID: CID },
            ],
            estado:true
        },
    });
};


export const createUser = async (data: Omit<usuario, 'cod_usuario' | 'creadoEn' | 'actualizadoEn'>): Promise<usuario> => {
    return await prisma.usuario.create({
        data,
    });
};


export const updateUser = async (id: number, data: Partial<Omit<usuario, 'cod_usuario' | 'creadoEn' | 'actualizadoEn'>>): Promise<usuario> => {
    return await prisma.usuario.update({
        where: { cod_usuario: id, estado:true },
        data,
    });
};


export const deleteUser = async (idusuario: number): Promise<usuario> => {
    return await prisma.usuario.update({
        where: { cod_usuario: idusuario },
        data:{estado:false}
    });
};