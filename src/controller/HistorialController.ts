import { NextApiRequest, NextApiResponse } from "next";
import * as HistorialService from "../service/HistorialServices";

export const getHistoriales = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const historiales = await HistorialService.getAllHistoriales();
        return res.status(200).json(historiales);
    } catch (error) {
        return res.status(500).json({ error: "Error buscando historiales médicos" });
    }
};

export const getHistorial = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const historial = await HistorialService.getHistorial(Number(id));
        return res.status(200).json(historial);
    } catch (error) {
        return res.status(404).json({ error: "Historial no encontrado" });
    }
};

export const createHistorial = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { profesional_id, persona_id, fecha, presion_arterial, peso, estatura, descripcion } = req.body;
        const newHistorial = await HistorialService.createHistorial({
            profesional_id,
            persona_id,
            fecha: new Date(fecha),
            presion_arterial,
            peso,
            estatura,
            descripcion,
        });
        return res.status(201).json(newHistorial);
    } catch (error) {
        return res.status(500).json({ error: "Error creando historial médico" });
    }
};

export const updateHistorial = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const { profesional_id, persona_id, fecha, presion_arterial, peso, estatura, descripcion } = req.body;
        const updatedHistorial = await HistorialService.updateHistorial(Number(id), {
            profesional_id,
            persona_id,
            fecha: fecha ? new Date(fecha) : undefined,
            presion_arterial,
            peso,
            estatura,
            descripcion,
        });
        return res.status(200).json(updatedHistorial);
    } catch (error) {
        return res.status(500).json({ error: "Error actualizando historial médico" });
    }
};

export const deleteHistorial = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const deletedHistorial = await HistorialService.deleteHistorial(Number(id));
        return res.status(200).json({ message: "Historial eliminado correctamente", historial: deletedHistorial });
    } catch (error) {
        return res.status(500).json({ error: "Error eliminando historial médico" });
    }
};
