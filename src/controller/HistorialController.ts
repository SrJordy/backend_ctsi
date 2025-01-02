import { NextApiRequest, NextApiResponse } from "next";
import * as HistorialService from "../service/HistorialServices";

export const getHistoriales = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const historiales = await HistorialService.getAllHistoriales();
        return res.status(200).json(historiales);
    } catch (error) {
        console.error('Error en getHistoriales controller:', error);
        return res.status(500).json({ error: "Error al obtener historiales médicos" });
    }
};

export const getHistorial = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id } = req.query;
        const historial = await HistorialService.getHistorial(Number(id));
        return res.status(200).json(historial);
    } catch (error) {
        console.error('Error en getHistorial controller:', error);
        return res.status(404).json({ error: "Historial no encontrado" });
    }
};

export const createHistorial = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const {
            descripcion,
            tipo_sangre,
            presion_arterial,
            peso,
            estatura,
            temperatura,
            nivel_glucosa,
            fecha,
            profesional_id,
            persona_id
        } = req.body;

        // Validar campos obligatorios
        if (!presion_arterial || !peso || !estatura || !fecha || !profesional_id || !persona_id) {
            return res.status(400).json({
                error: "Faltan campos requeridos",
                details: "presion_arterial, peso, estatura, fecha, profesional_id y persona_id son obligatorios"
            });
        }

        // Validar tipos de datos
        if (isNaN(peso) || isNaN(estatura) || isNaN(profesional_id) || isNaN(persona_id)) {
            return res.status(400).json({
                error: "Datos inválidos",
                details: "peso, estatura, profesional_id y persona_id deben ser números válidos"
            });
        }

        // Crear historial
        const newHistorial = await HistorialService.createHistorial({
            descripcion,
            tipo_sangre,
            presion_arterial,
            peso: Number(peso),
            estatura: Number(estatura),
            temperatura: temperatura ? Number(temperatura) : undefined,
            nivel_glucosa: nivel_glucosa ? Number(nivel_glucosa) : undefined,
            fecha: new Date(fecha),
            profesional_id: Number(profesional_id),
            persona_id: Number(persona_id)
        });

        return res.status(201).json(newHistorial);
    } catch (error) {
        console.error('Error en createHistorial controller:', error);
        return res.status(400).json({
            error: "Error al crear historial médico",
            details: error instanceof Error ? error.message : "Error desconocido"
        });
    }
};

export const updateHistorial = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id } = req.query;
        const historialId = Number(id);
        const data = req.body;

        const updatedHistorial = await HistorialService.updateHistorial(historialId, data);
        return res.status(200).json(updatedHistorial);
    } catch (error) {
        console.error('Update Error:', error);
        return res.status(500).json({ 
            error: 'Error al actualizar el historial médico',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

export const deleteHistorial = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id } = req.query;
        const historialId = Number(id);

        await HistorialService.deleteHistorial(historialId);
        return res.status(200).json({ 
            message: 'Historial médico eliminado correctamente' 
        });
    } catch (error) {
        console.error('Delete Error:', error);
        return res.status(500).json({ 
            error: 'Error al eliminar el historial médico',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};