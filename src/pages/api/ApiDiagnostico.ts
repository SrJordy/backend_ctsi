import { NextApiRequest, NextApiResponse } from "next";
import * as DiagnosticoController from "@/controller/DiagnosticoController";
import corsMiddleware from "@/lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await corsMiddleware(req, res);
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case "GET":
            if (id) return DiagnosticoController.getDiagnostico(req, res);
            return DiagnosticoController.getDiagnosticos(req, res);
        case "POST":
            return DiagnosticoController.createDiagnostico(req, res);
        case "PUT":
            if (id) return DiagnosticoController.updateDiagnostico(req, res);
            return res.status(400).json({ error: "ID requerido para actualizar un diagnóstico" });
        case "DELETE":
            if (id) return DiagnosticoController.deleteDiagnostico(req, res);
            return res.status(400).json({ error: "ID requerido para eliminar un diagnóstico" });
        default:
            return res.status(405).json({ error: "Método no permitido" });
    }
}