import { NextApiRequest, NextApiResponse } from "next";
import * as DiagnosticoService from "../service/DiagnosticoService";

export const getDiagnosticos = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const diagnosticos = await DiagnosticoService.getAllDiagnosticos();
        return res.status(200).json(diagnosticos);
    } catch (error) {
        return res.status(500).json({ error: "Error buscando diagnósticos" });
    }
};

export const getDiagnostico = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const diagnostico = await DiagnosticoService.getDiagnostico(Number(id));
        return res.status(200).json(diagnostico);
    } catch (error) {
        return res.status(404).json({ error: "Diagnóstico no encontrado" });
    }
};

export const createDiagnostico = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { descripcion, fecha_diagnostico, historial_id } = req.body;
        const newDiagnostico = await DiagnosticoService.createDiagnostico({
            descripcion,
            fecha_diagnostico: new Date(fecha_diagnostico),
            historial_id,
        });
        return res.status(201).json(newDiagnostico);
    } catch (error) {
        return res.status(500).json({ error: "Error creando diagnóstico" });
    }
};

export const updateDiagnostico = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const { descripcion, fecha_diagnostico, historial_id } = req.body;
        const updatedDiagnostico = await DiagnosticoService.updateDiagnostico(Number(id), {
            descripcion,
            fecha_diagnostico: fecha_diagnostico ? new Date(fecha_diagnostico) : undefined,
            historial_id,
        });
        return res.status(200).json(updatedDiagnostico);
    } catch (error) {
        return res.status(500).json({ error: "Error actualizando diagnóstico" });
    }
};

export const deleteDiagnostico = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const deletedDiagnostico = await DiagnosticoService.deleteDiagnostico(Number(id));
        return res.status(200).json({ message: "Diagnóstico eliminado correctamente", diagnostico: deletedDiagnostico });
    } catch (error) {
        return res.status(500).json({ error: "Error eliminando diagnóstico" });
    }
};