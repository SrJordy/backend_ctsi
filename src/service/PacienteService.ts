import prisma from "@/lib/Prisma";
import { paciente } from "@prisma/client";

export const getAllPacientes = async (): Promise<paciente[]> => {
    try {
        return await prisma.paciente.findMany({
            where: { estado: true },
            include: {
                cuidador: true,
            },
        });
    } catch (error) {
        console.error("Error al obtener todos los pacientes:", error);
        throw new Error("No se pudieron obtener los pacientes");
    }
};

export const getPaciente = async (criteria: { id?: number; CID?: number; nombre?: string; apellido?: string }): Promise<paciente | null> => {
    try {
        const { id, CID, nombre, apellido } = criteria;
        return await prisma.paciente.findFirst({
            where: {
                OR: [
                    { cod_paciente: id },
                    { CID: CID },
                    { nombre: nombre },
                    { apellido: apellido },
                ],
                estado: true,
            },
            include: {
                cuidador: true,
            },
        });
    } catch (error) {
        console.error("Error al obtener un paciente:", error);
        throw new Error("No se pudo obtener el paciente");
    }
};

export const createPaciente = async (data: Omit<paciente, "cod_paciente" | "creadoEn" | "actualizadoEn">): Promise<paciente> => {
    try {
        console.log("Datos enviados al servicio:", data);
        return await prisma.paciente.create({
            data,
        });
    } catch (error) {
        console.error("Error al crear un paciente:", error);
        throw new Error("No se pudo crear el paciente");
    }
};


export const updatePaciente = async (
    id: number,
    data: Partial<Omit<paciente, "cod_paciente" | "creadoEn" | "actualizadoEn">>
): Promise<paciente> => {
    try {
        const existingPaciente = await prisma.paciente.findUnique({
            where: { cod_paciente: id },
        });
        if (!existingPaciente || !existingPaciente.estado) {
            throw new Error("Paciente no encontrado o está inactivo");
        }
        return await prisma.paciente.update({
            where: { cod_paciente: id },
            data,
        });
    } catch (error) {
        console.error("Error al actualizar un paciente:", error);
        throw new Error("No se pudo actualizar el paciente");
    }
};

export const deletePaciente = async (id: number): Promise<paciente> => {
    try {
        const existingPaciente = await prisma.paciente.findUnique({
            where: { cod_paciente: id },
        });
        if (!existingPaciente || !existingPaciente.estado) {
            throw new Error("Paciente no encontrado o ya está inactivo");
        }
        return await prisma.paciente.update({
            where: { cod_paciente: id },
            data: { estado: false },
        });
    } catch (error) {
        console.error("Error al eliminar (inactivar) un paciente:", error);
        throw new Error("No se pudo inactivar el paciente");
    }
};
