import { NextApiRequest, NextApiResponse } from "next";
import * as AuthController from "@/controller/AuthController";
import corsMiddleware from "@/lib/corsMiddleware";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await corsMiddleware(req, res);
    const { method } = req;

    switch (method) {
        case "POST":
            return AuthController.loginUser(req, res);
        default:
            return res.status(405).json({ error: "Método no permitido" });
    }
}
