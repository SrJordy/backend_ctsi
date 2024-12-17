import prisma from "@/lib/Prisma";
import { citamedica } from "@prisma/client";

export const getAllCitas = async (): Promise<citamedica[]> => {
    return await prisma.citamedica.findMany({
        include: {
            profesion: true,
            persona: true,
        },
    });
};

export const getCita = async (id: number): Promise<citamedica | null> => {
    const cita = await prisma.citamedica.findUnique({
        where: { cod_cita: id },
        include: {
            profesion: true,
            persona: true,
        },
    });
    if (!cita) throw new Error("Cita no encontrada");
    return cita;
};

export const createCita = async (
    data: Omit<citamedica, "cod_cita" | "status">
): Promise<citamedica> => {
    const { profesional_id, persona_id, fechahora, lugar, motivo } = data;
    if (!profesional_id || !persona_id || !fechahora || !lugar || !motivo)
        throw new Error("Faltan datos requeridos");
    const profesionalExists = await prisma.usuario.findUnique({
        where: { cod_usuario: profesional_id },
    });
    if (!profesionalExists) throw new Error("El profesional no existe");
    const personaExists = await prisma.paciente.findUnique({
        where: { cod_paciente: persona_id },
    });
    if (!personaExists) throw new Error("La persona no existe");
    return await prisma.citamedica.create({
        data,
    });
};

export const updateCita = async (
    id: number,
    data: Partial<Omit<citamedica, "cod_cita">>
): Promise<citamedica> => {
    const existingCita = await prisma.citamedica.findUnique({
        where: { cod_cita: id },
    });
    if (!existingCita) throw new Error("Cita no encontrada");
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

    return await prisma.citamedica.update({
        where: { cod_cita: id },
        data,
    });
};

export const deleteCita = async (id: number): Promise<citamedica> => {
    const existingCita = await prisma.citamedica.findUnique({
        where: { cod_cita: id },
    });
    if (!existingCita) throw new Error("Cita no encontrada");
    return await prisma.citamedica.update({
        where: { cod_cita: id },
        data: { status: false },
    });
};
