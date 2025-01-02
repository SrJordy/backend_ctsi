import { NextApiRequest, NextApiResponse } from "next";
import { UserService, UserServiceError } from '../service/UserService';
import bcrypt from 'bcryptjs';
import { Rol } from "@prisma/client";

export const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { rol } = req.query;
        const users = await UserService.getAllUsers({
            rol: rol as Rol,
            includeRelations: true  
        });
        return res.status(200).json(users);
    } catch (error: any) {
        return res.status(500).json({ 
            error: error.message,
            code: error.code || 'UNKNOWN_ERROR'
        });
    }
};

export const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id, nombre, apellido, CID, email } = req.query;
        const user = await UserService.getUser({
            id: id ? Number(id) : undefined,
            nombre: nombre ? String(nombre) : undefined,
            apellido: apellido ? String(apellido) : undefined,
            CID: CID ? Number(CID) : undefined,
            email: email ? String(email) : undefined,
        });

        if (!user) {
            return res.status(404).json({ 
                error: "Usuario no encontrado",
                code: "NOT_FOUND"
            });
        }

        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(500).json({ 
            error: error.message,
            code: error.code || 'UNKNOWN_ERROR'
        });
    }
};

export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { nombre, apellido, CID, telefono, email, rol, password } = req.body;
        
        if (!nombre || !apellido || !CID || !telefono || !email || !rol || !password) {
            return res.status(400).json({ 
                error: "Faltan datos requeridos",
                code: "MISSING_DATA"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserService.createUser({
            nombre,
            apellido,
            CID,
            telefono,
            email,
            rol,
            password: hashedPassword
        });

        return res.status(201).json(newUser);
    } catch (error: any) {
        if (error instanceof UserServiceError) {
            return res.status(400).json({ 
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({ 
            error: "Error creando usuario",
            code: 'UNKNOWN_ERROR'
        });
    }
};

export const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ 
                error: "ID requerido",
                code: "MISSING_ID"
            });
        }

        const { nombre, apellido, CID, telefono, email, rol, password } = req.body;
        const updateData: any = {};

        if (nombre) updateData.nombre = nombre;
        if (apellido) updateData.apellido = apellido;
        if (CID) updateData.CID = CID;
        if (telefono) updateData.telefono = telefono;
        if (email) updateData.email = email;
        if (rol) updateData.rol = rol;
        if (password) updateData.password = await bcrypt.hash(password, 10);

        const updatedUser = await UserService.updateUser(Number(id), updateData);
        return res.status(200).json(updatedUser);
    } catch (error: any) {
        if (error instanceof UserServiceError) {
            return res.status(400).json({ 
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({ 
            error: "Error actualizando usuario",
            code: 'UNKNOWN_ERROR'
        });
    }
};

export const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({ 
                error: "ID requerido",
                code: "MISSING_ID"
            });
        }

        const deletedUser = await UserService.deleteUser(Number(id));
        return res.status(200).json({ 
            message: "Usuario eliminado correctamente",
            usuario: deletedUser
        });
    } catch (error: any) {
        if (error instanceof UserServiceError) {
            return res.status(400).json({ 
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({ 
            error: "Error eliminando usuario",
            code: 'UNKNOWN_ERROR'
        });
    }
};