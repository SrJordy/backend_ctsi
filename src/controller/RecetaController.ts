import { NextApiRequest, NextApiResponse } from "next";
import * as RecetaServices from "../service/RecetaService";

export const getRecetas = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const recetas = await RecetaServices.getAllRecetas();
        return res.status(200).json(recetas);
    } catch (error) {
        console.error("Error en getRecetas:", error);
        return res.status(500).json({ error: "Error buscando recetas" });
    }
};
export const getRecetaConMedicamentos = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const receta = await RecetaServices.getRecetaConMedicamentos(Number(id));
        if (!receta) {
            return res.status(404).json({ error: "Receta no encontrada" });
        }
        return res.status(200).json(receta);
    } catch (error) {
        console.error("Error en getRecetaConMedicamentos:", error);
        return res.status(500).json({ error: "Error buscando receta con medicamentos" });
    }
};

export const getReceta = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const receta = await RecetaServices.getReceta(Number(id));
        if (!receta) {
            return res.status(404).json({ error: "Receta no encontrada" });
        }
        return res.status(200).json(receta);
    } catch (error) {
        console.error("Error en getReceta:", error);
        return res.status(500).json({ error: "Error buscando receta" });
    }
};

export const createReceta = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { persona_id, profesional_id } = req.body;
        if (!persona_id || !profesional_id ) {
            return res.status(400).json({ error: "Faltan datos requeridos" });
        }
        const newReceta = await RecetaServices.createReceta({
            persona_id,
            profesional_id,
        });
        return res.status(201).json(newReceta);
    } catch (error) {
        console.error("Error en createReceta:", error);
        return res.status(500).json({ error: "Error creando receta" });
    }
};

export const updateReceta = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const { persona_id, profesional_id} = req.body;
        if (!id) {
            return res.status(400).json({ error: "El ID es requerido para actualizar una receta" });
        }
        const updatedReceta = await RecetaServices.updateReceta(Number(id), {
            persona_id,
            profesional_id,
        });
        return res.status(200).json(updatedReceta);
    } catch (error) {
        console.error("Error en updateReceta:", error);
        return res.status(500).json({ error: "Error actualizando receta" });
    }
};

export const deleteReceta = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        if (!id) {
            return res.status(400).json({ error: "El ID es requerido para eliminar una receta" });
        }
        const deletedReceta = await RecetaServices.deleteReceta(Number(id));
        return res.status(200).json({ message: "Receta eliminada correctamente", receta: deletedReceta });
    } catch (error) {
        console.error("Error en deleteReceta:", error);
        return res.status(500).json({ error: "Error eliminando receta" });
    }
};
