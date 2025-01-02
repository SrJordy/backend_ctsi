import { NextApiRequest, NextApiResponse } from "next";
import * as TratamientoService from "../service/TratamientoServices";

export const getTratamientos = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const tratamientos = await TratamientoService.getAllTratamientos();
        return res.status(200).json(tratamientos);
    } catch (error) {
        return res.status(500).json({ error: "Error buscando tratamientos" });
    }
};

export const getTratamiento = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const tratamiento = await TratamientoService.getTratamiento(Number(id));
        return res.status(200).json(tratamiento);
    } catch (error) {
        return res.status(404).json({ error: "Tratamiento no encontrado" });
    }
};

export const createTratamiento = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { descripcion, fechainicio, fechafin, historial_id } = req.body;
        const newTratamiento = await TratamientoService.createTratamiento({
            descripcion,
            fechainicio: new Date(fechainicio),
            fechafin: new Date(fechafin),
            historial_id,
        });
        return res.status(201).json(newTratamiento);
    } catch (error: any) {
        return res.status(500).json({ error: error.message || "Error creando tratamiento" });
    }
};

export const updateTratamiento = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const { descripcion, fechainicio, fechafin, historial_id } = req.body;
        const updatedTratamiento = await TratamientoService.updateTratamiento(Number(id), {
            descripcion,
            fechainicio: fechainicio ? new Date(fechainicio) : undefined,
            fechafin: fechafin ? new Date(fechafin) : undefined,
            historial_id,
        });
        return res.status(200).json(updatedTratamiento);
    } catch (error: any) {
        return res.status(500).json({ error: error.message || "Error actualizando tratamiento" });
    }
};

export const deleteTratamiento = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const deletedTratamiento = await TratamientoService.deleteTratamiento(Number(id));
        return res.status(200).json({ message: "Tratamiento eliminado correctamente", tratamiento: deletedTratamiento });
    } catch (error) {
        return res.status(500).json({ error: "Error eliminando tratamiento" });
    }
};