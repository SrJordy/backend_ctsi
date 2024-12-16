import { NextApiRequest, NextApiResponse } from "next";
import * as UserController from "@/controller/UserController";
import corsMiddleware from "@/lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await corsMiddleware(req, res);
    const { method } = req;
    const { id, nombre, apellido, CID, telefono, email } = req.query;

    switch (method) {
        case "GET":
            if (id || nombre || apellido || CID || telefono || email) {
                return UserController.getUser(req, res);
            } else {
                return UserController.getUsers(req, res);
            }

        case "POST":
            return UserController.createUser(req, res);

        case "PUT":
            if (id) {
                return UserController.updateUser(req, res);
            } else {
                return res.status(400).json({ message: "El ID es requerido para realizar la actualización" });
            }

        case "DELETE":
            if (id) {
                return UserController.deleteUser(req, res);
            } else {
                return res.status(400).json({ message: "El ID es requerido para eliminar un usuario" });
            }

        default:
            return res.status(405).json({ message: "Método no permitido" });
    }
}
