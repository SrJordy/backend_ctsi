import { Rol } from "@prisma/client";

export interface IUserCreate {
    nombre: string;
    apellido: string;
    CID: number;
    telefono: string;
    email: string;
    rol: Rol;
    password: string;
}

export interface IUserUpdate {
    nombre?: string;
    apellido?: string;
    CID?: number;
    telefono?: string;
    email?: string;
    rol?: Rol;
    password?: string;
}

export interface IUserSearch {
    id?: number;
    nombre?: string;
    apellido?: string;
    CID?: number;
    email?: string;
}