import { NextApiRequest, NextApiResponse } from "next";
import * as UserServices from '../service/UserService'
import bcrypt from 'bcryptjs'

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
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error buscando usuario' });
    }
};

export const createUser=async(req:NextApiRequest, res:NextApiResponse)=>{
    try{
        const { nombre, apellido, CID, telefono, email, rol, password } = req.body;
        const hashedPassword=await bcrypt.hash(password,10)
        const newUser=await UserServices.createUser({nombre,apellido,CID,telefono,email,rol,password:hashedPassword})
        return res.status(201).json(newUser)
    } catch(error){
        console.error(error);
        return res.status(500).json({error:'Error creando usuario'})
    }
}

export const updateUser=async(req:NextApiRequest, res:NextApiResponse)=>{
    const {id}=req.query;
    try{
        console.log(req.body)
        
        const {nombre,apellido,CID,telefono,email,rol,password}=req.body
        console.log(req.body)
        const hashedPassword=await bcrypt.hash(password,10);
        const updatedUser=await UserServices.updateUser(Number(id),{nombre,apellido,CID,telefono,email,rol,password:hashedPassword})
        if (!updatedUser) {
            return res.status(404).json({message:'Usuario no encontrado'})
        }
        return res.status(200).json(updatedUser)
    }catch(error){
        console.error(error)
        return res.status(500).json({error:'Error al actualizar datos'})
    }
}

export const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        const deletedUser = await UserServices.deleteUser(Number(id));
        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        return res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al eliminar un usuario' });
    }
};