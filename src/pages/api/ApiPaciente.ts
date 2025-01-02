// pages/api/ApiPaciente.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PacienteController } from "@/controller/PacienteController";
import corsMiddleware from "@/lib/corsMiddleware";
import { PacienteServiceError } from "@/lib/paciente";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await corsMiddleware(req, res);
        const { method } = req;
        const { id, CID, nombre, apellido, page, limit, orderBy, includeInactive, cuidadorId } = req.query;

        switch (method) {
            case "GET":
                if (id || CID || nombre || apellido) {
                    return await PacienteController.getPaciente(req, res);
                }
                return await PacienteController.getPacientes(req, res);
            case "POST":
                return await PacienteController.createPaciente(req, res);
            case "PUT":
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        error: "El ID es requerido para actualizar un paciente",
                        code: "MISSING_ID"
                    });
                }
                return await PacienteController.updatePaciente(req, res);

            case "DELETE":
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        error: "El ID es requerido para eliminar un paciente",
                        code: "MISSING_ID"
                    });
                }
                return await PacienteController.deletePaciente(req, res);
            default:
                return res.status(405).json({
                    success: false,
                    error: "Método no permitido",
                    code: "METHOD_NOT_ALLOWED"
                });
        }
    } catch (error) {
        console.error("Error en la API de Pacientes:", error);
        if (error instanceof PacienteServiceError) {
            return res.status(error.statusCode).json({
                success: false,
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({
            success: false,
            error: "Error interno del servidor",
            code: "INTERNAL_SERVER_ERROR",
            message: process.env.NODE_ENV === "development" ? error.message : undefined
        });
    }
}