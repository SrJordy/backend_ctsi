import { NextApiRequest, NextApiResponse } from "next";
import * as UserController from "@/controller/UserController";
import corsMiddleware from "@/lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await corsMiddleware(req, res);
        const { method } = req;
        const { id, nombre, apellido, CID, telefono, email } = req.query;

        switch (method) {
            case "GET":
                if (!id && !nombre && !apellido && !CID && !telefono && !email) {
                    return await UserController.getUsers(req, res);
                } else {
                    return await UserController.getUser(req, res);
                }

            case "POST":
                return await UserController.createUser(req, res);

            case "PUT":
                if (!id) {
                    return res.status(400).json({ 
                        error: "El ID es requerido para realizar la actualización",
                        code: "MISSING_ID"
                    });
                }
                return await UserController.updateUser(req, res);

            case "DELETE":
                if (!id) {
                    return res.status(400).json({ 
                        error: "El ID es requerido para eliminar un usuario",
                        code: "MISSING_ID"
                    });
                }
                return await UserController.deleteUser(req, res);

            default:
                return res.status(405).json({ 
                    error: "Método no permitido",
                    code: "METHOD_NOT_ALLOWED"
                });
        }
    } catch (error) {
        console.error("Error en la API handler:", error);
        return res.status(500).json({ 
            error: "Error interno del servidor",
            code: "INTERNAL_SERVER_ERROR"
        });
    }
}