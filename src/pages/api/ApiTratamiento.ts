import { NextApiRequest, NextApiResponse } from "next";
import * as TratamientoController from "@/controller/TratamientoController";
import corsMiddleware from "@/lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await corsMiddleware(req, res);
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case "GET":
            if (id) return TratamientoController.getTratamiento(req, res);
            return TratamientoController.getTratamientos(req, res);
        case "POST":
            return TratamientoController.createTratamiento(req, res);
        case "PUT":
            if (id) return TratamientoController.updateTratamiento(req, res);
            return res.status(400).json({ error: "ID requerido para actualizar un tratamiento" });
        case "DELETE":
            if (id) return TratamientoController.deleteTratamiento(req, res);
            return res.status(400).json({ error: "ID requerido para eliminar un tratamiento" });
        default:
            return res.status(405).json({ error: "Método no permitido" });
    }
}