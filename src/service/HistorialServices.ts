import prisma from "@/lib/Prisma";
import { historialmedico } from "@prisma/client";

export const getAllHistoriales = async (): Promise<historialmedico[]> => {
    try {
        return await prisma.historialmedico.findMany({
            where: { estado: true },
            include: {
                profesional: {
                    select: {
                        nombre: true,
                        apellido: true,
                        email: true
                    }
                },
                persona: {
                    select: {
                        nombre: true,
                        apellido: true,
                        fecha_nac: true
                    }
                },
                diagnostico: true,
                tratamiento: true,
                examenes: true
            },
            orderBy: { fecha: 'desc' }
        });
    } catch (error) {
        console.error('Error en getAllHistoriales:', error);
        throw new Error('Error al obtener historiales médicos');
    }
};

export const getHistorial = async (id: number): Promise<historialmedico | null> => {
    try {
        const historial = await prisma.historialmedico.findUnique({
            where: { 
                cod_historial: id,
                estado: true 
            },
            include: {
                profesional: {
                    select: {
                        nombre: true,
                        apellido: true,
                        email: true
                    }
                },
                persona: {
                    select: {
                        nombre: true,
                        apellido: true,
                        fecha_nac: true
                    }
                },
                diagnostico: true,
                tratamiento: true,
                examenes: true
            }
        });

        if (!historial) throw new Error('Historial no encontrado');
        return historial;
    } catch (error) {
        console.error('Error en getHistorial:', error);
        throw error;
    }
};

export const createHistorial = async (data: {
    descripcion?: string;
    tipo_sangre?: string;
    presion_arterial: string;
    peso: number;
    estatura: number;
    temperatura?: number;
    nivel_glucosa?: number;
    fecha: Date;
    profesional_id: number;
    persona_id: number;
}): Promise<historialmedico> => {
    try {
        const [profesional, paciente] = await Promise.all([
            prisma.usuario.findUnique({
                where: { cod_usuario: data.profesional_id }
            }),
            prisma.paciente.findUnique({
                where: { cod_paciente: data.persona_id }
            })
        ]);

        if (!profesional) throw new Error('Profesional no encontrado');
        if (!paciente) throw new Error('Paciente no encontrado');

        return await prisma.historialmedico.create({
            data: {
                ...data,
                estado: true
            },
            include: {
                profesional: true,
                persona: true
            }
        });
    } catch (error) {
        console.error('Error en createHistorial:', error);
        throw error;
    }
};

export const updateHistorial = async (
    id: number,
    data: Partial<Omit<historialmedico, "cod_historial">>
): Promise<historialmedico> => {
    try {
        const historial = await prisma.historialmedico.findUnique({
            where: { cod_historial: id }
        });

        if (!historial || !historial.estado) {
            throw new Error('Historial no encontrado');
        }

        return await prisma.historialmedico.update({
            where: { cod_historial: id },
            data,
            include: {
                profesional: true,
                persona: true
            }
        });
    } catch (error) {
        console.error('Error en updateHistorial:', error);
        throw error;
    }
};

export const deleteHistorial = async (id: number): Promise<historialmedico> => {
    try {
        const historial = await prisma.historialmedico.findUnique({
            where: { cod_historial: id }
        });

        if (!historial || !historial.estado) {
            throw new Error('Historial no encontrado');
        }

        return await prisma.historialmedico.update({
            where: { cod_historial: id },
            data: { estado: false }
        });
    } catch (error) {
        console.error('Error en deleteHistorial:', error);
        throw error;
    }
};