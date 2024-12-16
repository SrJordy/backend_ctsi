import { NextApiRequest, NextApiResponse } from "next";
import * as MedicamentoServices from "../service/MedicamentoService";

export const getMedicamentos = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const medicamentos = await MedicamentoServices.getAllMedicamentos();
        return res.status(200).json(medicamentos);
    } catch (error) {
        console.error("Error en getMedicamentos:", error);
        return res.status(500).json({ error: "Error buscando medicamentos" });
    }
};

export const getMedicamento = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const medicamento = await MedicamentoServices.getMedicamento(Number(id));
        if (!medicamento) {
            return res.status(404).json({ error: "Medicamento no encontrado" });
        }
        return res.status(200).json(medicamento);
    } catch (error) {
        console.error("Error en getMedicamento:", error);
        return res.status(500).json({ error: "Error buscando medicamento" });
    }
};

export const createMedicamento = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { nombre, dosis, frecuenciamin, cantidadtotal, pacienteCod_paciente } = req.body;
        if (!nombre || !dosis || !frecuenciamin || !cantidadtotal || !pacienteCod_paciente) {
            return res.status(400).json({ error: "Faltan datos requeridos" });
        }
        const newMedicamento = await MedicamentoServices.createMedicamento({
            nombre,
            dosis,
            frecuenciamin,
            cantidadtotal,
            pacienteCod_paciente,
        });
        return res.status(201).json(newMedicamento);
    } catch (error) {
        console.error("Error en createMedicamento:", error);
        return res.status(500).json({ error: "Error creando medicamento" });
    }
};

export const updateMedicamento = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const { nombre, dosis, frecuenciamin, cantidadtotal, pacienteCod_paciente } = req.body;
        if (!id) {
            return res.status(400).json({ error: "El ID es requerido para actualizar un medicamento" });
        }
        const updatedMedicamento = await MedicamentoServices.updateMedicamento(Number(id), {
            nombre,
            dosis,
            frecuenciamin,
            cantidadtotal,
        });
        return res.status(200).json(updatedMedicamento);
    } catch (error) {
        console.error("Error en updateMedicamento:", error);
        return res.status(500).json({ error: "Error actualizando medicamento" });
    }
};

export const deleteMedicamento = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        if (!id) {
            return res.status(400).json({ error: "El ID es requerido para eliminar un medicamento" });
        }
        const deletedMedicamento = await MedicamentoServices.deleteMedicamento(Number(id));
        return res.status(200).json({ message: "Medicamento eliminado correctamente", medicamento: deletedMedicamento });
    } catch (error) {
        console.error("Error en deleteMedicamento:", error);
        return res.status(500).json({ error: "Error eliminando medicamento" });
    }
};
