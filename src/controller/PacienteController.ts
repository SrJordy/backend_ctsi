import { NextApiRequest, NextApiResponse } from "next";
import { PacienteService } from "../service/PacienteService";
import { PacienteServiceError } from "../lib/paciente";

export class PacienteController {
    static async getPacientes(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { 
                page, 
                limit, 
                orderBy, 
                includeInactive, 
                cuidadorId 
            } = req.query;

            const options = {
                page: page ? parseInt(page as string) : undefined,
                limit: limit ? parseInt(limit as string) : undefined,
                orderBy: orderBy as 'nombre' | 'apellido' | 'fecha_nac' | undefined,
                includeInactive: includeInactive === 'true',
                cuidadorId: cuidadorId ? parseInt(cuidadorId as string) : undefined
            };

            const result = await PacienteService.getAllPacientes(options);
            
            return res.status(200).json({
                data: result.pacientes,
                total: result.total,
                page: options.page || 1,
                limit: options.limit,
                totalPages: options.limit ? Math.ceil(result.total / options.limit) : 1
            });
        } catch (error) {
            console.error("Error en getPacientes:", error);
            return res.status(500).json({
                error: "Error al obtener pacientes",
                details: error instanceof Error ? error.message : 'Error desconocido'
            });
        }
    }

    static async getPaciente(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { id, CID, nombre, apellido, cuidador_id } = req.query;

            const paciente = await PacienteService.getPaciente({
                id: id ? parseInt(id as string) : undefined,
                CID: CID ? parseInt(CID as string) : undefined,
                nombre: nombre as string,
                apellido: apellido as string,
                cuidador_id: cuidador_id ? parseInt(cuidador_id as string) : undefined
            });

            if (!paciente) {
                return res.status(404).json({
                    error: "Paciente no encontrado",
                    code: "NOT_FOUND"
                });
            }

            return res.status(200).json(paciente);
        } catch (error) {
            console.error("Error en getPaciente:", error);
            if (error instanceof PacienteServiceError) {
                return res.status(error.statusCode).json({
                    error: error.message,
                    code: error.code
                });
            }
            return res.status(500).json({
                error: "Error al buscar paciente",
                code: "INTERNAL_ERROR"
            });
        }
    }

    static async createPaciente(req: NextApiRequest, res: NextApiResponse) {
        try {
            const {
                nombre,
                apellido,
                CID,
                telefono,
                fecha_nac,
                genero,
                direccion,
                cuidador_id
            } = req.body;

            if (!nombre?.trim() || !apellido?.trim() || !CID || !telefono?.trim() || 
                !fecha_nac || !genero?.trim() || !cuidador_id) {
                return res.status(400).json({
                    error: "Faltan campos requeridos o son inválidos",
                    code: "MISSING_FIELDS"
                });
            }

            if (!/^\d{10}$/.test(CID.toString())) {
                return res.status(400).json({
                    error: "El CID debe tener 10 dígitos",
                    code: "INVALID_CID"
                });
            }

            const fechaNacDate = new Date(fecha_nac);
            if (isNaN(fechaNacDate.getTime())) {
                return res.status(400).json({
                    error: "Formato de fecha inválido",
                    code: "INVALID_DATE"
                });
            }

            const newPaciente = await PacienteService.createPaciente({
                nombre,
                apellido,
                CID: parseInt(CID),
                telefono,
                fecha_nac: fechaNacDate,
                genero,
                direccion,
                cuidador_id: parseInt(cuidador_id)
            });

            return res.status(201).json(newPaciente);
        } catch (error) {
            console.error("Error en createPaciente:", error);
            if (error instanceof PacienteServiceError) {
                return res.status(error.statusCode).json({
                    error: error.message,
                    code: error.code
                });
            }
            return res.status(500).json({
                error: "Error al crear paciente",
                code: "INTERNAL_ERROR"
            });
        }
    }

    static async updatePaciente(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { id } = req.query;
            const {
                nombre,
                apellido,
                CID,
                telefono,
                fecha_nac,
                genero,
                direccion,
                cuidador_id
            } = req.body;

            if (!id) {
                return res.status(400).json({
                    error: "ID de paciente requerido",
                    code: "MISSING_ID"
                });
            }

            if (!Object.keys(req.body).length) {
                return res.status(400).json({
                    error: "No se proporcionaron datos para actualizar",
                    code: "NO_DATA"
                });
            }

            let fechaNacDate;
            if (fecha_nac) {
                fechaNacDate = new Date(fecha_nac);
                if (isNaN(fechaNacDate.getTime())) {
                    return res.status(400).json({
                        error: "Formato de fecha inválido",
                        code: "INVALID_DATE"
                    });
                }
            }

            const updatedPaciente = await PacienteService.updatePaciente(
                parseInt(id as string),
                {
                    ...(nombre && { nombre }),
                    ...(apellido && { apellido }),
                    ...(CID && { CID: parseInt(CID) }),
                    ...(telefono && { telefono }),
                    ...(fecha_nac && { fecha_nac: fechaNacDate }),
                    ...(genero && { genero }),
                    ...(direccion && { direccion }),
                    ...(cuidador_id && { cuidador_id: parseInt(cuidador_id) })
                }
            );

            return res.status(200).json(updatedPaciente);
        } catch (error) {
            console.error("Error en updatePaciente:", error);
            if (error instanceof PacienteServiceError) {
                return res.status(error.statusCode).json({
                    error: error.message,
                    code: error.code
                });
            }
            return res.status(500).json({
                error: "Error al actualizar paciente",
                code: "INTERNAL_ERROR"
            });
        }
    }

    static async deletePaciente(req: NextApiRequest, res: NextApiResponse) {
        try {
            const { id } = req.query;

            if (!id) {
                return res.status(400).json({
                    error: "ID de paciente requerido",
                    code: "MISSING_ID"
                });
            }

            const deletedPaciente = await PacienteService.deletePaciente(parseInt(id as string));

            return res.status(200).json({
                message: "Paciente eliminado correctamente",
                data: deletedPaciente
            });
        } catch (error) {
            console.error("Error en deletePaciente:", error);
            if (error instanceof PacienteServiceError) {
                return res.status(error.statusCode).json({
                    error: error.message,
                    code: error.code
                });
            }
            return res.status(500).json({
                error: "Error al eliminar paciente",
                code: "INTERNAL_ERROR"
            });
        }
    }
}