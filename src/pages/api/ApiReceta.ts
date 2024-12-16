import { NextApiRequest, NextApiResponse } from "next";
import * as RecetaController from "@/controller/RecetaController";
import corsMiddleware from "@/lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await corsMiddleware(req, res);
        const { method } = req;
        const { id } = req.query;
        switch (method) {
            case "GET":
                if (id) {
                    return await RecetaController.getReceta(req, res);
                } else {
                    return await RecetaController.getRecetas(req, res);
                }
            case "POST":
                return await RecetaController.createReceta(req, res);
            case "PUT":
                if (id) {
                    return await RecetaController.updateReceta(req, res);
                } else {
                    return res.status(400).json({ message: "El ID es requerido para realizar la actualización" });
                }
            case "DELETE":
                if (id) {
                    return await RecetaController.deleteReceta(req, res);
                } else {
                    return res.status(400).json({ message: "El ID es requerido para eliminar una receta" });
                }
            default:
                return res.status(405).json({ message: "Método no permitido" });
        }
    } catch (error) {
        console.error("Error en la API handler:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}
