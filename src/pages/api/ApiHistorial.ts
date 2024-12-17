import { NextApiRequest, NextApiResponse } from "next";
import * as HistorialController from "@/controller/HistorialController";
import corsMiddleware from "@/lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await corsMiddleware(req, res);
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case "GET":
            if (id) return HistorialController.getHistorial(req, res);
            return HistorialController.getHistoriales(req, res);
        case "POST":
            return HistorialController.createHistorial(req, res);
        case "PUT":
            if (id) return HistorialController.updateHistorial(req, res);
            return res.status(400).json({ error: "ID requerido para actualizar un historial" });
        case "DELETE":
            if (id) return HistorialController.deleteHistorial(req, res);
            return res.status(400).json({ error: "ID requerido para eliminar un historial" });
        default:
            return res.status(405).json({ error: "Método no permitido" });
    }
}
