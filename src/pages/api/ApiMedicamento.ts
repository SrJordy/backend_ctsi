import { NextApiRequest, NextApiResponse } from "next";
import * as MedicamentoController from "@/controller/MedicamentoController";
import corsMiddleware from "@/lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await corsMiddleware(req, res);
        const { method } = req;
        const { id } = req.query;
        switch (method) {
            case "GET":
                if (id) {
                    return await MedicamentoController.getMedicamento(req, res);
                } else {
                    return await MedicamentoController.getMedicamentos(req, res);
                }
            case "POST":
                return await MedicamentoController.createMedicamento(req, res);
            case "PUT":
                if (id) {
                    return await MedicamentoController.updateMedicamento(req, res);
                } else {
                    return res.status(400).json({ message: "El ID es requerido para realizar la actualización" });
                }
            case "DELETE":
                if (id) {
                    return await MedicamentoController.deleteMedicamento(req, res);
                } else {
                    return res.status(400).json({ message: "El ID es requerido para eliminar un medicamento" });
                }
            default:
                return res.status(405).json({ message: "Método no permitido" });
        }
    } catch (error) {
        console.error("Error en la API handler:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}
