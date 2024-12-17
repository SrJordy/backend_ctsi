import { NextApiRequest, NextApiResponse } from "next";
import * as AuthService from "../service/AuthService";

export const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password, token } = req.body;

    try {
        let result;

        if (token) {
            result = await AuthService.loginWithToken(token);
        } else if (email && password) {
            result = await AuthService.login(email, password);
        } else {
            return res.status(400).json({ error: "Por favor proporciona el email y la contraseña o un token" });
        }

        return res.status(200).json({
            token: result.token,
            user: result.user, // Retorna tanto el token como los datos del usuario
        });
    } catch (error: any) {
        return res.status(401).json({ error: error.message });
    }
};
