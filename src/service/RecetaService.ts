import prisma from "@/lib/Prisma";
import { receta } from "@prisma/client";

export const getAllRecetas = async (): Promise<receta[]> => {
    try {
        return await prisma.receta.findMany({
            where: { status: true },
            include: {
                persona: true,
                profesional: true,
                medicamento: true,
            },
        });
    } catch (error) {
        console.error("Error al obtener todas las recetas:", error);
        throw new Error("No se pudieron obtener las recetas");
    }
};

export const getRecetaConMedicamentos = async (id: number): Promise<receta | null> => {
    try {
        return await prisma.receta.findUnique({
            where: { cod_receta: id, status: true }, 
            include: {
                persona: true,
                profesional: true,
                medicamento: true,
            },
        });
    } catch (error) {
        console.error("Error al obtener la receta con medicamentos:", error);
        throw new Error("No se pudo obtener la receta con medicamentos");
    }
};

export const getReceta = async (id: number): Promise<receta | null> => {
    try {
        return await prisma.receta.findUnique({
            where: { cod_receta: id, status: true },
            include: {
                persona: true,
                profesional: true,
                medicamento: true,
            },
        });
    } catch (error) {
        console.error("Error al obtener la receta:", error);
        throw new Error("No se pudo obtener la receta");
    }
};

export const createReceta = async (data: Omit<receta, "cod_receta" | "fecha">): Promise<receta> => {
    try {
        return await prisma.receta.create({
            data,
        });
    } catch (error) {
        console.error("Error al crear una receta:", error);
        throw new Error("No se pudo crear la receta");
    }
};

export const updateReceta = async (id: number, data: Partial<Omit<receta, "cod_receta" | "fecha">>): Promise<receta> => {
    try {
        const existingReceta = await prisma.receta.findUnique({
            where: { cod_receta: id },
        });
        if (!existingReceta) {
            throw new Error("Receta no encontrada");
        }
        return await prisma.receta.update({
            where: { cod_receta: id },
            data,
        });
    } catch (error) {
        console.error("Error al actualizar la receta:", error);
        throw new Error("No se pudo actualizar la receta");
    }
};

export const deleteReceta = async (id: number): Promise<receta> => {
    try {
        const existingReceta = await prisma.receta.findUnique({
            where: { cod_receta: id },
        });
        if (!existingReceta) {
            throw new Error("Receta no encontrada");
        }
        return await prisma.receta.update({
            where: { cod_receta: id },
            data: { status: false },
        });
    } catch (error) {
        console.error("Error al eliminar la receta:", error);
        throw new Error("No se pudo eliminar la receta");
    }
};