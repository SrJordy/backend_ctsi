import prisma from "@/lib/Prisma";
import { tratamiento } from "@prisma/client";

export const getAllTratamientos = async (): Promise<tratamiento[]> => {
    return await prisma.tratamiento.findMany({
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

export const getTratamiento = async (id: number): Promise<tratamiento | null> => {
    const tratamiento = await prisma.tratamiento.findUnique({
        where: { cod_tratamiento: id },
        include: {
            historial: {
                include: {
                    persona: true,
                    profesional: true,
                }
            }
        },
    });
    if (!tratamiento) throw new Error("Tratamiento no encontrado");
    return tratamiento;
};

export const createTratamiento = async (
    data: Omit<tratamiento, "cod_tratamiento">
): Promise<tratamiento> => {
    const { descripcion, fechainicio, fechafin, historial_id } = data;
    if (!descripcion || !fechainicio || !fechafin || !historial_id)
        throw new Error("Faltan datos requeridos");

    const historialExists = await prisma.historialmedico.findUnique({
        where: { cod_historial: historial_id },
    });
    if (!historialExists) throw new Error("El historial médico no existe");

    // Validar que la fecha de fin sea posterior a la fecha de inicio
    if (new Date(fechafin) <= new Date(fechainicio)) {
        throw new Error("La fecha de fin debe ser posterior a la fecha de inicio");
    }

    return await prisma.tratamiento.create({
        data,
    });
};

export const updateTratamiento = async (
    id: number,
    data: Partial<Omit<tratamiento, "cod_tratamiento">>
): Promise<tratamiento> => {
    const existingTratamiento = await prisma.tratamiento.findUnique({
        where: { cod_tratamiento: id },
    });
    if (!existingTratamiento) throw new Error("Tratamiento no encontrado");

    if (data.historial_id) {
        const historialExists = await prisma.historialmedico.findUnique({
            where: { cod_historial: data.historial_id },
        });
        if (!historialExists) throw new Error("El historial médico no existe");
    }

    // Validar fechas si se están actualizando
    if (data.fechainicio && data.fechafin) {
        if (new Date(data.fechafin) <= new Date(data.fechainicio)) {
            throw new Error("La fecha de fin debe ser posterior a la fecha de inicio");
        }
    }

    return await prisma.tratamiento.update({
        where: { cod_tratamiento: id },
        data,
    });
};

export const deleteTratamiento = async (id: number): Promise<tratamiento> => {
    const existingTratamiento = await prisma.tratamiento.findUnique({
        where: { cod_tratamiento: id },
    });
    if (!existingTratamiento) throw new Error("Tratamiento no encontrado");

    return await prisma.tratamiento.delete({
        where: { cod_tratamiento: id },
    });
};