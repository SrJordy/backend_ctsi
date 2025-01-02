import prisma from "@/lib/Prisma";
import { diagnostico } from "@prisma/client";

export const getAllDiagnosticos = async (): Promise<diagnostico[]> => {
    return await prisma.diagnostico.findMany({
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

export const getDiagnostico = async (id: number): Promise<diagnostico | null> => {
    const diagnostico = await prisma.diagnostico.findUnique({
        where: { cod_diagnostico: id },
        include: {
            historial: {
                include: {
                    persona: true,
                    profesional: true,
                }
            }
        },
    });
    if (!diagnostico) throw new Error("Diagnóstico no encontrado");
    return diagnostico;
};

export const createDiagnostico = async (
    data: Omit<diagnostico, "cod_diagnostico">
): Promise<diagnostico> => {
    const { descripcion, fecha_diagnostico, historial_id } = data;
    if (!descripcion || !fecha_diagnostico || !historial_id)
        throw new Error("Faltan datos requeridos");

    const historialExists = await prisma.historialmedico.findUnique({
        where: { cod_historial: historial_id },
    });
    if (!historialExists) throw new Error("El historial médico no existe");

    return await prisma.diagnostico.create({
        data,
    });
};

export const updateDiagnostico = async (
    id: number,
    data: Partial<Omit<diagnostico, "cod_diagnostico">>
): Promise<diagnostico> => {
    const existingDiagnostico = await prisma.diagnostico.findUnique({
        where: { cod_diagnostico: id },
    });
    if (!existingDiagnostico) throw new Error("Diagnóstico no encontrado");

    if (data.historial_id) {
        const historialExists = await prisma.historialmedico.findUnique({
            where: { cod_historial: data.historial_id },
        });
        if (!historialExists) throw new Error("El historial médico no existe");
    }

    return await prisma.diagnostico.update({
        where: { cod_diagnostico: id },
        data,
    });
};

export const deleteDiagnostico = async (id: number): Promise<diagnostico> => {
    const existingDiagnostico = await prisma.diagnostico.findUnique({
        where: { cod_diagnostico: id },
    });
    if (!existingDiagnostico) throw new Error("Diagnóstico no encontrado");

    return await prisma.diagnostico.delete({
        where: { cod_diagnostico: id },
    });
};