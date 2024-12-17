import { NextApiRequest, NextApiResponse } from "next";
import * as RecordatorioController from "@/controller/RecordatorioController";
import corsMiddleware from "@/lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await corsMiddleware(req, res);
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case "GET":
            if (id) return RecordatorioController.getRecordatorio(req, res);
            return RecordatorioController.getRecordatorios(req, res);
        case "POST":
            return RecordatorioController.createRecordatorio(req, res);
        case "PUT":
            if (id) return RecordatorioController.updateRecordatorio(req, res);
            return res.status(400).json({ error: "ID requerido para actualizar un recordatorio" });
        case "DELETE":
            if (id) return RecordatorioController.deleteRecordatorio(req, res);
            return res.status(400).json({ error: "ID requerido para eliminar un recordatorio" });
        default:
            return res.status(405).json({ error: "Método no permitido" });
    }
}
