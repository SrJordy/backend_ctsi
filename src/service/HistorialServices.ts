import prisma from "@/lib/Prisma";
import { historialmedico } from "@prisma/client";

export const getAllHistoriales = async (): Promise<historialmedico[]> => {
    return await prisma.historialmedico.findMany({
        where:{estado:true},
        include: {
            profesional: true,
            persona: true,
            diagnostico: true,
            tratamiento: true,
            examenes: true,
        },
    });
};

export const getHistorial = async (id: number): Promise<historialmedico | null> => {
    const historial = await prisma.historialmedico.findUnique({
        where: { cod_historial: id , estado:true},
        include: {
            profesional: true,
            persona: true,
            diagnostico: true,
            tratamiento: true,
            examenes: true,
        },
    });
    if (!historial) throw new Error("Historial no encontrado");
    return historial;
};

export const createHistorial = async (
    data: Omit<historialmedico, "cod_historial">
): Promise<historialmedico> => {
    const { profesional_id, persona_id, fecha, presion_arterial, peso, estatura, descripcion } = data;
    if (!profesional_id || !persona_id || !fecha || !presion_arterial || !peso || !estatura)
        throw new Error("Faltan datos requeridos");
    const profesionalExists = await prisma.usuario.findUnique({
        where: { cod_usuario: profesional_id },
    });
    if (!profesionalExists) throw new Error("El profesional no existe");
    const personaExists = await prisma.paciente.findUnique({
        where: { cod_paciente: persona_id },
    });
    if (!personaExists) throw new Error("La persona no existe");
    return await prisma.historialmedico.create({
        data,
    });
};

export const updateHistorial = async (
    id: number,
    data: Partial<Omit<historialmedico, "cod_historial">>
): Promise<historialmedico> => {
    const existingHistorial = await prisma.historialmedico.findUnique({
        where: { cod_historial: id },
    });
    if (!existingHistorial) throw new Error("Historial no encontrado");
    if (data.profesional_id) {
        const profesionalExists = await prisma.usuario.findUnique({
            where: { cod_usuario: data.profesional_id },
        });
        if (!profesionalExists) throw new Error("El profesional no existe");
    }
    if (data.persona_id) {
        const personaExists = await prisma.paciente.findUnique({
            where: { cod_paciente: data.persona_id },
        });
        if (!personaExists) throw new Error("La persona no existe");
    }
    return await prisma.historialmedico.update({
        where: { cod_historial: id },
        data,
    });
};

export const deleteHistorial = async (id: number): Promise<historialmedico> => {
    const existingHistorial = await prisma.historialmedico.findUnique({
        where: { cod_historial: id, estado: true },
    });
    if (!existingHistorial) throw new Error("Historial no encontrado");

    return await prisma.historialmedico.update({
        where: { cod_historial: id },
        data: { estado: false },
    });
};
