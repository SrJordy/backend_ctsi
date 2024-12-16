import { NextApiRequest, NextApiResponse } from "next";
import * as PacienteController from "@/controller/PacienteController";
import corsMiddleware from "@/lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await corsMiddleware(req, res);
        const { method } = req;
        const { id, CID, nombre, apellido } = req.query;
        switch (method) {
            case "GET":
                if (id || CID || nombre || apellido) {
                    return await PacienteController.getPaciente(req, res);
                } else {
                    return await PacienteController.getPacientes(req, res);
                }
            case "POST":
                return await PacienteController.createPaciente(req, res);
            case "PUT":
                if (id) {
                    return await PacienteController.updatePaciente(req, res);
                } else {
                    return res.status(400).json({ message: "El ID es requerido para realizar la actualización" });
                }
            case "DELETE":
                if (id) {
                    return await PacienteController.deletePaciente(req, res);
                } else {
                    return res.status(400).json({ message: "El ID es requerido para eliminar un paciente" });
                }
            default:
                return res.status(405).json({ message: "Método no permitido" });
        }
    } catch (error) {
        console.error("Error en la API handler:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}
