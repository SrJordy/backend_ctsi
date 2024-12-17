import { NextApiRequest, NextApiResponse } from "next";
import * as CitaMedicaService from "@/service/CitaServices";

export const getCitas = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const citas = await CitaMedicaService.getAllCitas();
        return res.status(200).json(citas);
    } catch (error) {
        return res.status(500).json({ error: "Error buscando citas médicas" });
    }
};

export const getCita = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const cita = await CitaMedicaService.getCita(Number(id));
        return res.status(200).json(cita);
    } catch (error) {
        return res.status(404).json({ error: "Cita no encontrada" });
    }
};

export const createCita = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { profesional_id, persona_id, fechahora, lugar, motivo } = req.body;
        const newCita = await CitaMedicaService.createCita({
            profesional_id,
            persona_id,
            fechahora: new Date(fechahora),
            lugar,
            motivo,
        });
        return res.status(201).json(newCita);
    } catch (error) {
        return res.status(500).json({ error: "Error creando cita médica" });
    }
};

export const updateCita = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const { profesional_id, persona_id, fechahora, lugar, motivo} = req.body;
        const updatedCita = await CitaMedicaService.updateCita(Number(id), {
            profesional_id,
            persona_id,
            fechahora: fechahora ? new Date(fechahora) : undefined,
            lugar,
            motivo
        });
        return res.status(200).json(updatedCita);
    } catch (error) {
        return res.status(500).json({ error: "Error actualizando cita médica" });
    }
};

export const deleteCita = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const deletedCita = await CitaMedicaService.deleteCita(Number(id));
        return res.status(200).json({ message: "Cita eliminada correctamente", cita: deletedCita });
    } catch (error) {
        return res.status(500).json({ error: "Error eliminando cita médica" });
    }
};
