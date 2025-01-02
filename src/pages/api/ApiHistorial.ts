import { NextApiRequest, NextApiResponse } from "next";
import * as HistorialController from "@/controller/HistorialController";
import corsMiddleware from "../../lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await corsMiddleware(req, res);
        if (req.method === 'OPTIONS') {
            res.status(200).end();
            return;
        }
        const { method } = req;
        const { id } = req.query;
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        switch (method) {
            case "GET":
                if (id) {
                    return await HistorialController.getHistorial(req, res);
                }
                return await HistorialController.getHistoriales(req, res);

            case "POST":
                return await HistorialController.createHistorial(req, res);

            case "PUT":
                if (!id) {
                    return res.status(400).json({ 
                        error: "ID requerido para actualizar un historial" 
                    });
                }
                return await HistorialController.updateHistorial(req, res);

            case "DELETE":
                if (!id) {
                    return res.status(400).json({ 
                        error: "ID requerido para eliminar un historial" 
                    });
                }
                return await HistorialController.deleteHistorial(req, res);

            default:
                return res.status(405).json({ 
                    error: "Método no permitido",
                    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
                });
        }
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ 
            error: 'Error interno del servidor',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}