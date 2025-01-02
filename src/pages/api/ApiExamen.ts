import { NextApiRequest, NextApiResponse } from "next";
import * as ExamenController from "@/controller/ExamenController";
import corsMiddleware from "@/lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await corsMiddleware(req, res);
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case "GET":
            if (id) return ExamenController.getExamen(req, res);
            return ExamenController.getExamenes(req, res);
        case "POST":
            return ExamenController.createExamen(req, res);
        case "PUT":
            if (id) return ExamenController.updateExamen(req, res);
            return res.status(400).json({ error: "ID requerido para actualizar un examen" });
        case "DELETE":
            if (id) return ExamenController.deleteExamen(req, res);
            return res.status(400).json({ error: "ID requerido para eliminar un examen" });
        default:
            return res.status(405).json({ error: "Método no permitido" });
    }
}