import { NextApiRequest, NextApiResponse } from "next";
import * as CitaMedicaController from "@/controller/CitaController";
import corsMiddleware from "@/lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await corsMiddleware(req, res);
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case "GET":
            if (id) return CitaMedicaController.getCita(req, res);
            return CitaMedicaController.getCitas(req, res);
        case "POST":
            return CitaMedicaController.createCita(req, res);
        case "PUT":
            if (id) return CitaMedicaController.updateCita(req, res);
            return res.status(400).json({ error: "ID requerido para actualizar una cita" });
        case "DELETE":
            if (id) return CitaMedicaController.deleteCita(req, res);
            return res.status(400).json({ error: "ID requerido para eliminar una cita" });
        default:
            return res.status(405).json({ error: "Método no permitido" });
    }
}
