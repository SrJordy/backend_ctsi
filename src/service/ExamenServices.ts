import prisma from "@/lib/Prisma";
import { examenes } from "@prisma/client";

export const getAllExamenes = async (): Promise<examenes[]> => {
    return await prisma.examenes.findMany({
        include: {
            historial: {
                include: {
                    persona: true,
                    profesional: true,
                }
            }
        },
    });
};

export const getExamen = async (id: number): Promise<examenes | null> => {
    const examen = await prisma.examenes.findUnique({
        where: { cod_examen: id },
        include: {
            historial: {
                include: {
                    persona: true,
                    profesional: true,
                }
            }
        },
    });
    if (!examen) throw new Error("Examen no encontrado");
    return examen;
};

export const createExamen = async (
    data: Omit<examenes, "cod_examen">
): Promise<examenes> => {
    const { tipo, resultados, fecha, historial_id } = data;
    if (!tipo || !resultados || !fecha || !historial_id)
        throw new Error("Faltan datos requeridos");

    const historialExists = await prisma.historialmedico.findUnique({
        where: { 
            cod_historial: historial_id,
            estado: true 
        },
    });
    if (!historialExists) throw new Error("El historial médico no existe o está inactivo");

    return await prisma.examenes.create({
        data,
        include: {
            historial: {
                include: {
                    persona: true,
                    profesional: true,
                }
            }
        },
    });
};

export const updateExamen = async (
    id: number,
    data: Partial<Omit<examenes, "cod_examen">>
): Promise<examenes> => {
    const existingExamen = await prisma.examenes.findUnique({
        where: { cod_examen: id },
    });
    if (!existingExamen) throw new Error("Examen no encontrado");

    if (data.historial_id) {
        const historialExists = await prisma.historialmedico.findUnique({
            where: { 
                cod_historial: data.historial_id,
                estado: true 
            },
        });
        if (!historialExists) throw new Error("El historial médico no existe o está inactivo");
    }

    return await prisma.examenes.update({
        where: { cod_examen: id },
        data,
        include: {
            historial: {
                include: {
                    persona: true,
                    profesional: true,
                }
            }
        },
    });
};

export const deleteExamen = async (id: number): Promise<examenes> => {
    const existingExamen = await prisma.examenes.findUnique({
        where: { cod_examen: id },
    });
    if (!existingExamen) throw new Error("Examen no encontrado");

    return await prisma.examenes.delete({
        where: { cod_examen: id },
    });
};