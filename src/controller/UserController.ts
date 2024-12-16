import { NextApiRequest, NextApiResponse } from "next";
import * as UserServices from '../service/UserService'
import bcrypt from 'bcryptjs'
import { log } from "console";

export const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const users = await UserServices.getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error buscando usuarios' });
    }
};

export const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id, nombre, apellido, CID } = req.query;

    try {
        const user = await UserServices.getUser({
            id: id ? Number(id) : undefined,
            nombre: nombre ? String(nombre) : undefined,
            apellido: apellido ? String(apellido) : undefined,
            CID: CID ? Number(CID) : undefined,
        });
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error("Error en getUser:", error);
        return res.status(500).json({ error: "Error buscando usuario" });
    }
};

export const createUser = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { nombre, apellido, CID, telefono, email, rol, password } = req.body;
        if (!nombre || !apellido || !CID || !telefono || !email || !rol || !password) {
            return res.status(400).json({ error: "Faltan datos requeridos" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserServices.createUser({ nombre, apellido, CID, telefono, email, rol, password: hashedPassword });
        return res.status(201).json(newUser);
    } catch (error) {
        console.error("Error en createUser:", error);
        return res.status(500).json({ error: "Error creando usuario" });
    }
};


export const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        console.log(req.query)
        if (!id) {
            return res.status(400).json({ error: "El ID es requerido para actualizar un usuario" });
        }
        const { nombre, apellido, CID, telefono, email, rol, password } = req.body;
        if (!nombre && !apellido && !CID && !telefono && !email && !rol && !password) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
        }
        const updatedData = {
            nombre, apellido, CID, telefono, email, rol, password: password ? await bcrypt.hash(password, 10) : undefined,
        };
        const updatedUser = await UserServices.updateUser(Number(id), updatedData);
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error en updateUser:", error);
        return res.status(500).json({ error: "Error actualizando usuario" });
    }
};


export const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        if (!id) {
            return res.status(400).json({ error: "El ID es requerido para eliminar un usuario" });
        }
        const deletedUser = await UserServices.deleteUser(Number(id));
        return res.status(200).json({ message: "Usuario eliminado correctamente", usuario: deletedUser });
    } catch (error) {
        console.error("Error en deleteUser:", error);
        return res.status(500).json({ error: "Error eliminando usuario" });
    }
};
