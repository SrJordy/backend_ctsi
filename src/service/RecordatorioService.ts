import prisma from "@/lib/Prisma";
import { recordatorioMedicamento } from "@prisma/client";

export const getAllRecordatorios = async (): Promise<recordatorioMedicamento[]> => {
    try {
        return await prisma.recordatorioMedicamento.findMany({
            include: {
                medicina: true,
                persona: true,
            },
        });
    } catch (error) {
        console.error("Error al obtener todos los recordatorios:", error);
        throw new Error("No se pudieron obtener los recordatorios");
    }
};

export const getRecordatorio = async (id: number): Promise<recordatorioMedicamento | null> => {
    try {
        const recordatorio = await prisma.recordatorioMedicamento.findUnique({
            where: { cod_recordatorio: id },
            include: {
                medicina: true,
                persona: true,
            },
        });
        if (!recordatorio) {
            throw new Error("Recordatorio no encontrado");
        }
        return recordatorio;
    } catch (error) {
        console.error("Error al obtener el recordatorio:", error);
        throw new Error("No se pudo obtener el recordatorio");
    }
};

export const createRecordatorio = async (
    data: Omit<recordatorioMedicamento, "cod_recordatorio" | "creadoEn">
): Promise<recordatorioMedicamento> => {
    try {
        const { medicamento_id, fechahora, persona_id } = data;
        if (!medicamento_id || !fechahora || !persona_id) {
            throw new Error("Faltan datos requeridos: medicamento_id, fechahora o persona_id");
        }
        const medicamentoExists = await prisma.medicamento.findUnique({
            where: { cod_medicamento: medicamento_id },
        });
        if (!medicamentoExists) {
            throw new Error("El medicamento especificado no existe");
        }
        const personaExists = await prisma.paciente.findUnique({
            where: { cod_paciente: persona_id },
        });
        if (!personaExists) {
            throw new Error("La persona especificada no existe");
        }
        return await prisma.recordatorioMedicamento.create({
            data,
        });
    } catch (error) {
        console.error("Error al crear un recordatorio:", error);
        throw new Error("No se pudo crear el recordatorio");
    }
};

export const updateRecordatorio = async (
    id: number,
    data: Partial<Omit<recordatorioMedicamento, "cod_recordatorio" | "creadoEn">>
): Promise<recordatorioMedicamento> => {
    try {
        const existingRecordatorio = await prisma.recordatorioMedicamento.findUnique({
            where: { cod_recordatorio: id },
        });
        if (!existingRecordatorio) {
            throw new Error("Recordatorio no encontrado");
        }
        if (data.medicamento_id) {
            const medicamentoExists = await prisma.medicamento.findUnique({
                where: { cod_medicamento: data.medicamento_id },
            });
            if (!medicamentoExists) {
                throw new Error("El medicamento especificado no existe");
            }
        }
        if (data.persona_id) {
            const personaExists = await prisma.paciente.findUnique({
                where: { cod_paciente: data.persona_id },
            });
            if (!personaExists) {
                throw new Error("La persona especificada no existe");
            }
        }
        return await prisma.recordatorioMedicamento.update({
            where: { cod_recordatorio: id },
            data,
        });
    } catch (error) {
        console.error("Error al actualizar el recordatorio:", error);
        throw new Error("No se pudo actualizar el recordatorio");
    }
};

export const deleteRecordatorio = async (id: number): Promise<recordatorioMedicamento> => {
    try {
        const existingRecordatorio = await prisma.recordatorioMedicamento.findUnique({
            where: { cod_recordatorio: id },
        });
        if (!existingRecordatorio) {
            throw new Error("Recordatorio no encontrado");
        }
        return await prisma.recordatorioMedicamento.update({
            where: { cod_recordatorio: id },
            data: { estado: false },
        });
    } catch (error) {
        console.error("Error al eliminar el recordatorio:", error);
        throw new Error("No se pudo eliminar el recordatorio");
    }
};

