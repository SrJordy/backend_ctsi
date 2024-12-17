import { NextApiRequest, NextApiResponse } from "next";
import * as RecordatorioService from "../service/RecordatorioService";

export const getRecordatorios = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const recordatorios = await RecordatorioService.getAllRecordatorios();
        return res.status(200).json(recordatorios);
    } catch (error) {
        return res.status(500).json({ error: "Error buscando recordatorios" });
    }
};

export const getRecordatorio = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const recordatorio = await RecordatorioService.getRecordatorio(Number(id));
        return res.status(200).json(recordatorio);
    } catch (error) {
        return res.status(404).json({ error: "Recordatorio no encontrado" });
    }
};

export const createRecordatorio = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { medicamento_id, fechahora, persona_id } = req.body;
        const newRecordatorio = await RecordatorioService.createRecordatorio({
            medicamento_id,
            fechahora: new Date(fechahora),
            persona_id
        });
        return res.status(201).json(newRecordatorio);
    } catch (error) {
        return res.status(500).json({ error: "Error creando recordatorio" });
    }
};

export const updateRecordatorio = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const { medicamento_id, fechahora, persona_id, estado } = req.body;
        const updatedRecordatorio = await RecordatorioService.updateRecordatorio(Number(id), {
            medicamento_id,
            fechahora: fechahora ? new Date(fechahora) : undefined,
            persona_id
        });
        return res.status(200).json(updatedRecordatorio);
    } catch (error) {
        return res.status(500).json({ error: "Error actualizando recordatorio" });
    }
};

export const deleteRecordatorio = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const deletedRecordatorio = await RecordatorioService.deleteRecordatorio(Number(id));
        return res.status(200).json({ message: "Recordatorio eliminado correctamente", recordatorio: deletedRecordatorio });
    } catch (error) {
        return res.status(500).json({ error: "Error eliminando recordatorio" });
    }
};
