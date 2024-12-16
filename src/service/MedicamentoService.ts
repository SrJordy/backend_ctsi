import prisma from "@/lib/Prisma";
import { medicamento } from "@prisma/client";

export const getAllMedicamentos = async (): Promise<medicamento[]> => {
    try {
        return await prisma.medicamento.findMany({
            include: {
                recetamedi: true, // Incluir la receta asociada a cada medicamento
            }
        });
    } catch (error) {
        console.error("Error al obtener todos los medicamentos:", error);
        throw new Error("No se pudieron obtener los medicamentos");
    }
};

export const getMedicamento = async (id: number): Promise<medicamento | null> => {
    try {
        return await prisma.medicamento.findUnique({
            where: { cod_medicamento: id },
            include: {
                recetamedi: true,  // Incluir la receta asociada al medicamento
            }
        });
    } catch (error) {
        console.error("Error al obtener el medicamento:", error);
        throw new Error("No se pudo obtener el medicamento");
    }
};

export const createMedicamento = async (data: Omit<medicamento, "cod_medicamento">): Promise<medicamento> => {
    try {
        return await prisma.medicamento.create({
            data,
        });
    } catch (error) {
        console.error("Error al crear un medicamento:", error);
        throw new Error("No se pudo crear el medicamento");
    }
};

export const updateMedicamento = async (id: number,data: Partial<Omit<medicamento, "cod_medicamento">>): Promise<medicamento> => {
    try {
        const existingMedicamento = await prisma.medicamento.findUnique({
            where: { cod_medicamento: id },
        });
        if (!existingMedicamento) {
            throw new Error("Medicamento no encontrado");
        }
        return await prisma.medicamento.update({
            where: { cod_medicamento: id },
            data,
        });
    } catch (error) {
        console.error("Error al actualizar un medicamento:", error);
        throw new Error("No se pudo actualizar el medicamento");
    }
};

export const deleteMedicamento = async (id: number): Promise<medicamento> => {
    try {
        const existingMedicamento = await prisma.medicamento.findUnique({
            where: { cod_medicamento: id },
        });
        if (!existingMedicamento) {
            throw new Error("Medicamento no encontrado");
        }
        return await prisma.medicamento.delete({
            where: { cod_medicamento: id },
        });
    } catch (error) {
        console.error("Error al eliminar un medicamento:", error);
        throw new Error("No se pudo eliminar el medicamento");
    }
};
