import { NextApiRequest, NextApiResponse } from "next";
import * as ExamenService from "../service/ExamenServices";

export const getExamenes = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const examenes = await ExamenService.getAllExamenes();
        return res.status(200).json(examenes);
    } catch (error) {
        return res.status(500).json({ error: "Error buscando exámenes" });
    }
};

export const getExamen = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const examen = await ExamenService.getExamen(Number(id));
        return res.status(200).json(examen);
    } catch (error) {
        return res.status(404).json({ error: "Examen no encontrado" });
    }
};

export const createExamen = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { tipo, resultados, fecha, historial_id } = req.body;
        const newExamen = await ExamenService.createExamen({
            tipo,
            resultados,
            fecha: new Date(fecha),
            historial_id,
        });
        return res.status(201).json(newExamen);
    } catch (error: any) {
        return res.status(500).json({ error: error.message || "Error creando examen" });
    }
};

export const updateExamen = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const { tipo, resultados, fecha, historial_id } = req.body;
        const updatedExamen = await ExamenService.updateExamen(Number(id), {
            tipo,
            resultados,
            fecha: fecha ? new Date(fecha) : undefined,
            historial_id,
        });
        return res.status(200).json(updatedExamen);
    } catch (error: any) {
        return res.status(500).json({ error: error.message || "Error actualizando examen" });
    }
};

export const deleteExamen = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const deletedExamen = await ExamenService.deleteExamen(Number(id));
        return res.status(200).json({ 
            message: "Examen eliminado correctamente", 
            examen: deletedExamen 
        });
    } catch (error) {
        return res.status(500).json({ error: "Error eliminando examen" });
    }
};