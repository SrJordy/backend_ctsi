import { NextApiRequest, NextApiResponse } from "next";
import * as AuthService from "@/service/AuthService";

export const authenticate = async (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Acceso no autorizado, token no proporcionado" });
    try {
        const user = AuthService.verifyToken(token);
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Token inválido o expirado" });
    }
};
