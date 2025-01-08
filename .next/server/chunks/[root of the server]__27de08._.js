module.exports = {

"[externals]/next/dist/compiled/next-server/pages-api.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/pages-api.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/src/lib/Prisma.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_import__("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
const __TURBOPACK__default__export__ = prisma;
}}),
"[project]/src/lib/paciente.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PacienteServiceError": (()=>PacienteServiceError)
});
class PacienteServiceError extends Error {
    message;
    code;
    statusCode;
    constructor(message, code, statusCode = 400){
        super(message), this.message = message, this.code = code, this.statusCode = statusCode;
        this.name = 'PacienteServiceError';
    }
}
}}),
"[project]/src/service/PacienteService.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PacienteService": (()=>PacienteService)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/Prisma.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/paciente.ts [api] (ecmascript)");
;
;
class PacienteService {
    static async getAllPacientes(options) {
        try {
            const skip = options?.page && options?.limit ? (options.page - 1) * options.limit : undefined;
            const take = options?.limit;
            const [pacientes, total] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findMany({
                    where: {
                        estado: options?.includeInactive ? undefined : true,
                        cuidador_id: options?.cuidadorId
                    },
                    include: {
                        cuidador: true,
                        historialmedico: true,
                        citamedica: {
                            where: {
                                status: true
                            }
                        }
                    },
                    skip,
                    take,
                    orderBy: options?.orderBy ? {
                        [options.orderBy]: 'asc'
                    } : undefined
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.count({
                    where: {
                        estado: options?.includeInactive ? undefined : true,
                        cuidador_id: options?.cuidadorId
                    }
                })
            ]);
            return {
                pacientes,
                total
            };
        } catch (error) {
            console.error("Error al obtener pacientes:", error);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Error al obtener pacientes", "FETCH_ERROR", 500);
        }
    }
    static async getPaciente(criteria) {
        try {
            const { id, CID, nombre, apellido, cuidador_id } = criteria;
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findFirst({
                where: {
                    OR: [
                        id ? {
                            cod_paciente: id
                        } : undefined,
                        CID ? {
                            CID
                        } : undefined,
                        nombre ? {
                            nombre: {
                                contains: nombre,
                                mode: 'insensitive'
                            }
                        } : undefined,
                        apellido ? {
                            apellido: {
                                contains: apellido,
                                mode: 'insensitive'
                            }
                        } : undefined,
                        cuidador_id ? {
                            cuidador_id
                        } : undefined
                    ].filter(Boolean),
                    estado: true
                },
                include: {
                    cuidador: true,
                    historialmedico: true,
                    citamedica: {
                        where: {
                            status: true
                        }
                    }
                }
            });
        } catch (error) {
            console.error("Error al buscar paciente:", error);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Error al buscar paciente", "SEARCH_ERROR", 500);
        }
    }
    static async createPaciente(data) {
        try {
            if (!data.nombre || !data.apellido || !data.CID || !data.telefono || !data.fecha_nac || !data.genero || !data.cuidador_id) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Faltan campos requeridos", "MISSING_FIELDS", 400);
            }
            if (!/^\+?[1-9]\d{1,14}$/.test(data.telefono)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Formato de teléfono inválido", "INVALID_PHONE", 400);
            }
            const existingPaciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findFirst({
                where: {
                    CID: data.CID,
                    estado: true
                }
            });
            if (existingPaciente) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Ya existe un paciente con este CID", "DUPLICATE_CID", 409);
            }
            const cuidador = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.findFirst({
                where: {
                    cod_usuario: data.cuidador_id,
                    estado: true
                }
            });
            if (!cuidador) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("El cuidador especificado no existe", "INVALID_CUIDADOR", 404);
            }
            const fecha_nac = new Date(data.fecha_nac);
            if (isNaN(fecha_nac.getTime())) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Formato de fecha inválido", "INVALID_DATE", 400);
            }
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.create({
                data: {
                    ...data,
                    fecha_nac,
                    estado: true
                },
                include: {
                    cuidador: true
                }
            });
        } catch (error) {
            console.error("Error al crear paciente:", error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) throw error;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Error al crear paciente", "CREATE_ERROR", 500);
        }
    }
    static async updatePaciente(id, data) {
        try {
            const existingPaciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findUnique({
                where: {
                    cod_paciente: id
                }
            });
            if (!existingPaciente || !existingPaciente.estado) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Paciente no encontrado o inactivo", "NOT_FOUND", 404);
            }
            if (data.CID) {
                const duplicateCID = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findFirst({
                    where: {
                        CID: data.CID,
                        cod_paciente: {
                            not: id
                        },
                        estado: true
                    }
                });
                if (duplicateCID) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Ya existe otro paciente con este CID", "DUPLICATE_CID", 409);
                }
            }
            if (data.cuidador_id) {
                const cuidador = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.findFirst({
                    where: {
                        cod_usuario: data.cuidador_id,
                        estado: true
                    }
                });
                if (!cuidador) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("El cuidador especificado no existe", "INVALID_CUIDADOR", 404);
                }
            }
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.update({
                where: {
                    cod_paciente: id
                },
                data,
                include: {
                    cuidador: true
                }
            });
        } catch (error) {
            console.error("Error al actualizar paciente:", error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) throw error;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Error al actualizar paciente", "UPDATE_ERROR", 500);
        }
    }
    static async deletePaciente(id) {
        try {
            const existingPaciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findUnique({
                where: {
                    cod_paciente: id
                },
                include: {
                    citamedica: {
                        where: {
                            status: true
                        }
                    }
                }
            });
            if (!existingPaciente || !existingPaciente.estado) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Paciente no encontrado o ya está inactivo", "NOT_FOUND", 404);
            }
            if (existingPaciente.citamedica.length > 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("No se puede eliminar el paciente porque tiene citas médicas activas", "ACTIVE_APPOINTMENTS", 400);
            }
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.update({
                where: {
                    cod_paciente: id
                },
                data: {
                    estado: false
                },
                include: {
                    cuidador: true
                }
            });
        } catch (error) {
            console.error("Error al eliminar paciente:", error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) throw error;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Error al eliminar paciente", "DELETE_ERROR", 500);
        }
    }
}
}}),
"[project]/src/controller/PacienteController.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PacienteController": (()=>PacienteController)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/service/PacienteService.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/paciente.ts [api] (ecmascript)");
;
;
class PacienteController {
    static async getPacientes(req, res) {
        try {
            const { page, limit, orderBy, includeInactive, cuidadorId } = req.query;
            const options = {
                page: page ? parseInt(page) : undefined,
                limit: limit ? parseInt(limit) : undefined,
                orderBy: orderBy,
                includeInactive: includeInactive === 'true',
                cuidadorId: cuidadorId ? parseInt(cuidadorId) : undefined
            };
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteService"].getAllPacientes(options);
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
    static async getPaciente(req, res) {
        try {
            const { id, CID, nombre, apellido, cuidador_id } = req.query;
            const paciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteService"].getPaciente({
                id: id ? parseInt(id) : undefined,
                CID: CID ? parseInt(CID) : undefined,
                nombre: nombre,
                apellido: apellido,
                cuidador_id: cuidador_id ? parseInt(cuidador_id) : undefined
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
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) {
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
    static async createPaciente(req, res) {
        try {
            const { nombre, apellido, CID, telefono, fecha_nac, genero, direccion, cuidador_id } = req.body;
            console.log(req.body);
            if (!nombre?.trim() || !apellido?.trim() || !CID || !telefono?.trim() || !fecha_nac || !genero?.trim() || !cuidador_id) {
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
            const newPaciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteService"].createPaciente({
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
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) {
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
    static async updatePaciente(req, res) {
        try {
            const { id } = req.query;
            const { nombre, apellido, CID, telefono, fecha_nac, genero, direccion, cuidador_id } = req.body;
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
            const updatedPaciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteService"].updatePaciente(parseInt(id), {
                ...nombre && {
                    nombre
                },
                ...apellido && {
                    apellido
                },
                ...CID && {
                    CID: parseInt(CID)
                },
                ...telefono && {
                    telefono
                },
                ...fecha_nac && {
                    fecha_nac: fechaNacDate
                },
                ...genero && {
                    genero
                },
                ...direccion && {
                    direccion
                },
                ...cuidador_id && {
                    cuidador_id: parseInt(cuidador_id)
                }
            });
            return res.status(200).json(updatedPaciente);
        } catch (error) {
            console.error("Error en updatePaciente:", error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) {
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
    static async deletePaciente(req, res) {
        try {
            const { id } = req.query;
            if (!id) {
                return res.status(400).json({
                    error: "ID de paciente requerido",
                    code: "MISSING_ID"
                });
            }
            const deletedPaciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteService"].deletePaciente(parseInt(id));
            return res.status(200).json({
                message: "Paciente eliminado correctamente",
                data: deletedPaciente
            });
        } catch (error) {
            console.error("Error en deletePaciente:", error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) {
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
}}),
"[externals]/cors [external] (cors, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("cors", () => require("cors"));

module.exports = mod;
}}),
"[project]/src/lib/corsMiddleware.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$cors__$5b$external$5d$__$28$cors$2c$__cjs$29$__ = __turbopack_import__("[externals]/cors [external] (cors, cjs)");
;
const cors = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$cors__$5b$external$5d$__$28$cors$2c$__cjs$29$__["default"])({
    methods: [
        'GET',
        'HEAD',
        'PUT',
        'PATCH',
        'POST',
        'DELETE',
        'OPTIONS'
    ],
    origin: [
        'http://localhost:5173',
        '*'
    ],
    credentials: true,
    optionsSuccessStatus: 200,
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Requested-With'
    ]
});
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject)=>{
        fn(req, res, (result)=>{
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}
const corsMiddleware = async (req, res)=>{
    if (req.method === 'OPTIONS') {
        try {
            await runMiddleware(req, res, cors);
            res.status(200).end();
            return;
        } catch (error) {
            console.error('Error en OPTIONS:', error);
            res.status(500).end();
            return;
        }
    }
    await runMiddleware(req, res, cors);
};
const __TURBOPACK__default__export__ = corsMiddleware;
}}),
"[project]/src/pages/api/ApiPaciente.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// pages/api/ApiPaciente.ts
__turbopack_esm__({
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/controller/PacienteController.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/corsMiddleware.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/paciente.ts [api] (ecmascript)");
;
;
;
async function handler(req, res) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req, res);
        const { method } = req;
        const { id, CID, nombre, apellido, page, limit, orderBy, includeInactive, cuidadorId } = req.query;
        switch(method){
            case "GET":
                if (id || CID || nombre || apellido) {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteController"].getPaciente(req, res);
                }
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteController"].getPacientes(req, res);
            case "POST":
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteController"].createPaciente(req, res);
            case "PUT":
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        error: "El ID es requerido para actualizar un paciente",
                        code: "MISSING_ID"
                    });
                }
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteController"].updatePaciente(req, res);
            case "DELETE":
                if (!id) {
                    return res.status(400).json({
                        success: false,
                        error: "El ID es requerido para eliminar un paciente",
                        code: "MISSING_ID"
                    });
                }
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteController"].deletePaciente(req, res);
            default:
                return res.status(405).json({
                    success: false,
                    error: "Método no permitido",
                    code: "METHOD_NOT_ALLOWED"
                });
        }
    } catch (error) {
        console.error("Error en la API de Pacientes:", error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) {
            return res.status(error.statusCode).json({
                success: false,
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({
            success: false,
            error: "Error interno del servidor",
            code: "INTERNAL_SERVER_ERROR",
            message: ("TURBOPACK compile-time truthy", 1) ? error.message : ("TURBOPACK unreachable", undefined)
        });
    }
}
}}),
"[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        module.exports = __turbopack_require__("[externals]/next/dist/compiled/next-server/pages-api.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api.runtime.dev.js, cjs)");
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RouteKind": (()=>RouteKind)
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_esm__({
    "hoist": (()=>hoist)
});
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
} //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/src/pages/api/ApiPaciente.ts [api] (ecmascript)\" } [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__),
    "routeModule": (()=>routeModule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiPaciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/api/ApiPaciente.ts [api] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiPaciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'default');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiPaciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'config');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PagesAPIRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API,
        page: "/api/ApiPaciente",
        pathname: "/api/ApiPaciente",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiPaciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages-api.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__27de08._.js.map