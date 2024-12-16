import { NextApiRequest, NextApiResponse } from "next";
import * as PacienteServices from "../service/PacienteService";

export const getPacientes = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const pacientes = await PacienteServices.getAllPacientes();
        return res.status(200).json(pacientes);
    } catch (error) {
        console.error("Error en getPacientes:", error);
        return res.status(500).json({ error: "Error buscando pacientes" });
    }
};

export const getPaciente = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id, CID, nombre, apellido } = req.query;
    try {
        const paciente = await PacienteServices.getPaciente({
            id: id ? Number(id) : undefined,
            CID: CID ? Number(CID) : undefined,
            nombre: nombre ? String(nombre) : undefined,
            apellido: apellido ? String(apellido) : undefined,
        });
        if (!paciente) {
            return res.status(404).json({ error: "Paciente no encontrado" });
        }
        return res.status(200).json(paciente);
    } catch (error) {
        console.error("Error en getPaciente:", error);
        return res.status(500).json({ error: "Error buscando paciente" });
    }
};

export const createPaciente = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        console.log("Cuerpo recibido:", req.body);
        const { nombre, apellido, CID, telefono, fecha_nac, genero, direccion, cuidador_id } = req.body;
        if (!nombre || !apellido || !CID || !telefono || !fecha_nac || !genero || !cuidador_id) {
            return res.status(400).json({ error: "Faltan datos requeridos" });
        }
        const fechaNacParse = new Date(fecha_nac);
        if (isNaN(fechaNacParse.getTime())) {
            return res.status(400).json({ message: "El formato de la fecha de nacimiento no es válido" });
        }
        const newPaciente = await PacienteServices.createPaciente({
            nombre,
            apellido,
            CID,
            telefono,
            fecha_nac: fechaNacParse,
            genero,
            direccion,
            cuidador_id,
        });
        return res.status(201).json(newPaciente);
    } catch (error) {
        console.error("Error en createPaciente:", error);
        return res.status(500).json({ error: "Error creando paciente" });
    }
};


export const updatePaciente = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        if (!id) {
            return res.status(400).json({ error: "El ID es requerido para actualizar un paciente" });
        }
        const { nombre, apellido, CID, telefono, fecha_nac, genero, direccion, cuidador_id } = req.body;
        if (!nombre && !apellido && !CID && !telefono && !fecha_nac && !genero && !direccion && !cuidador_id) {
            return res.status(400).json({ error: "No se proporcionaron datos para actualizar" });
        }
        const fechaNacParse = new Date(fecha_nac);
        if (isNaN(fechaNacParse.getTime())) {
            return res.status(400).json({ message: "El formato de la fecha de nacimiento no es válido" });
        }
        const updatedPaciente = await PacienteServices.updatePaciente(Number(id), { nombre, apellido, CID, telefono, fecha_nac:fechaNacParse, genero, direccion, cuidador_id, });
        return res.status(200).json(updatedPaciente);
    } catch (error) {
        console.error("Error en updatePaciente:", error);
        return res.status(500).json({ error: "Error actualizando paciente" });
    }
};

export const deletePaciente = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;
    try {
        if (!id) {
            return res.status(400).json({ error: "El ID es requerido para eliminar un paciente" });
        }
        const deletedPaciente = await PacienteServices.deletePaciente(Number(id));
        return res.status(200).json({ message: "Paciente eliminado correctamente", paciente: deletedPaciente });
    } catch (error) {
        console.error("Error en deletePaciente:", error);
        return res.status(500).json({ error: "Error eliminando paciente" });
    }
};
