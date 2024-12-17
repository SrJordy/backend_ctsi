import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/lib/Prisma";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables.");
}

export const login = async (email: string, password: string): Promise<{ token: string, user: any }> => {
    const user = await prisma.usuario.findUnique({
        where: { email },
    });

    if (!user) throw new Error("Credenciales inválidas");

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) throw new Error("Credenciales inválidas");

    const token = jwt.sign(
        { userId: user.cod_usuario, email: user.email },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    return { token, user }; 
};

export const loginWithToken = async (token: string): Promise<{ token: string, user: any }> => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await prisma.usuario.findUnique({
            where: { cod_usuario: decoded.userId },
        });
        return { token, user };
    } catch (error) {
        throw new Error("Token inválido o expirado");
    }
};
