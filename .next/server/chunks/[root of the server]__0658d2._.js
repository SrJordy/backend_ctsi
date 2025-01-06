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
    code;
    constructor(message, code){
        super(message);
        this.code = code;
        this.name = 'PacienteServiceError';
    }
}
}}),
"[project]/src/lib/validators.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "validateAge": (()=>validateAge),
    "validateCID": (()=>validateCID),
    "validateEmail": (()=>validateEmail),
    "validatePacienteData": (()=>validatePacienteData),
    "validatePhone": (()=>validatePhone)
});
let fechaNac;
const validateEmail = (email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const validatePhone = (phone)=>{
    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    return phoneRegex.test(phone);
};
const validateCID = (CID)=>{
    return CID.toString().length === 10;
};
const validateAge = (birthDate)=>{
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age >= 0 && age <= 120;
};
const validatePacienteData = (data)=>{
    if (!data.nombre || !data.apellido || !data.CID || !data.telefono || !data.fecha_nac || !data.genero || !data.cuidador_id) {
        throw new Error("Faltan campos requeridos");
    }
    if (!/^\d{10}$/.test(data.CID.toString())) {
        throw new Error("El CID debe tener 10 dígitos");
    }
    if (!/^\+?[1-9]\d{1,14}$/.test(data.telefono)) {
        throw new Error("Formato de teléfono inválido");
    }
    if (typeof data.fecha_nac === 'string') {
        fechaNac = new Date(data.fecha_nac);
        if (data.fecha_nac.length === 10) {
            fechaNac = new Date(data.fecha_nac + 'T00:00:00.000Z');
        }
    } else if (data.fecha_nac instanceof Date) {
        fechaNac = data.fecha_nac;
    } else {
        throw new Error("Formato de fecha inválido");
    }
    let fechaNac = new Date(data.fecha_nac);
    if (isNaN(fechaNac.getTime())) {
        throw new Error("Fecha de nacimiento inválida");
    }
    data.fecha_nac = fechaNac;
    if (fechaNac > new Date()) {
        throw new Error("La fecha de nacimiento no puede ser futura");
    }
    const edadMaxima = new Date();
    edadMaxima.setFullYear(edadMaxima.getFullYear() - 120);
    if (fechaNac < edadMaxima) {
        throw new Error("La fecha de nacimiento es demasiado antigua");
    }
    if (!/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/.test(data.nombre)) {
        throw new Error("El nombre solo debe contener letras y espacios");
    }
    if (!/^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/.test(data.apellido)) {
        throw new Error("El apellido solo debe contener letras y espacios");
    }
};
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validators$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/validators.ts [api] (ecmascript)");
;
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Error al obtener pacientes", "FETCH_ERROR");
        }
    }
    static async getPaciente(criteria) {
        try {
            const { id, CID, nombre, apellido, cuidador_id } = criteria;
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findFirst({
                where: {
                    OR: [
                        {
                            cod_paciente: id
                        },
                        {
                            CID
                        },
                        {
                            nombre: {
                                contains: nombre,
                                mode: 'insensitive'
                            }
                        },
                        {
                            apellido: {
                                contains: apellido,
                                mode: 'insensitive'
                            }
                        },
                        {
                            cuidador_id
                        }
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
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Error al buscar paciente", "SEARCH_ERROR");
        }
    }
    static async createPaciente(data) {
        try {
            if (typeof data.fecha_nac === 'string') {
                if (data.fecha_nac.length === 10) {
                    data.fecha_nac = new Date(data.fecha_nac + 'T00:00:00.000Z');
                } else {
                    data.fecha_nac = new Date(data.fecha_nac);
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validators$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["validatePacienteData"])(data);
            const existingPaciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findFirst({
                where: {
                    CID: data.CID,
                    estado: true
                }
            });
            if (existingPaciente) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Ya existe un paciente con este CID", "DUPLICATE_CID");
            }
            const cuidador = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.findFirst({
                where: {
                    cod_usuario: data.cuidador_id,
                    estado: true
                }
            });
            if (!cuidador) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("El cuidador especificado no existe", "INVALID_CUIDADOR");
            }
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.create({
                data: {
                    ...data,
                    estado: true
                },
                include: {
                    cuidador: true
                }
            });
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) throw error;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Error al crear paciente", "CREATE_ERROR");
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
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Paciente no encontrado o inactivo", "NOT_FOUND");
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Ya existe otro paciente con este CID", "DUPLICATE_CID");
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
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("El cuidador especificado no existe", "INVALID_CUIDADOR");
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
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) throw error;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Error al actualizar paciente", "UPDATE_ERROR");
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
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Paciente no encontrado o ya está inactivo", "NOT_FOUND");
            }
            if (existingPaciente.citamedica.length > 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("No se puede eliminar el paciente porque tiene citas médicas activas", "ACTIVE_APPOINTMENTS");
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
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) throw error;
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]("Error al eliminar paciente", "DELETE_ERROR");
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
            const { includeInactive, cuidadorId, page, limit, orderBy } = req.query;
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteService"].getAllPacientes({
                includeInactive: includeInactive === 'true',
                cuidadorId: cuidadorId ? Number(cuidadorId) : undefined,
                page: page ? Number(page) : undefined,
                limit: limit ? Number(limit) : undefined,
                orderBy: orderBy
            });
            return res.status(200).json(result);
        } catch (error) {
            console.error("Error en getPacientes:", error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) {
                return res.status(400).json({
                    error: error.message,
                    code: error.code
                });
            }
            return res.status(500).json({
                error: "Error interno del servidor",
                code: "INTERNAL_ERROR"
            });
        }
    }
    static async getPaciente(req, res) {
        try {
            const { id, CID, nombre, apellido, cuidador_id } = req.query;
            const paciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteService"].getPaciente({
                id: id ? Number(id) : undefined,
                CID: CID ? Number(CID) : undefined,
                nombre: nombre ? String(nombre) : undefined,
                apellido: apellido ? String(apellido) : undefined,
                cuidador_id: cuidador_id ? Number(cuidador_id) : undefined
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
                return res.status(400).json({
                    error: error.message,
                    code: error.code
                });
            }
            return res.status(500).json({
                error: "Error interno del servidor",
                code: "INTERNAL_ERROR"
            });
        }
    }
    static async createPaciente(req, res) {
        try {
            const data = req.body;
            if (typeof data.fecha_nac === 'string') {
                // Verificar si es una fecha válida
                const fechaNac = new Date(data.fecha_nac);
                if (isNaN(fechaNac.getTime())) {
                    return res.status(400).json({
                        error: "Formato de fecha inválido",
                        code: "INVALID_DATE_FORMAT"
                    });
                }
            }
            const paciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteService"].createPaciente(data);
            return res.status(201).json(paciente);
        } catch (error) {
            console.error("Error en createPaciente:", error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) {
                return res.status(400).json({
                    error: error.message,
                    code: error.code
                });
            }
            return res.status(500).json({
                error: "Error interno del servidor",
                code: "INTERNAL_ERROR"
            });
        }
    }
    static async updatePaciente(req, res) {
        try {
            const { id } = req.query;
            if (!id) {
                return res.status(400).json({
                    error: "ID requerido",
                    code: "MISSING_ID"
                });
            }
            const paciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteService"].updatePaciente(Number(id), req.body);
            return res.status(200).json(paciente);
        } catch (error) {
            console.error("Error en updatePaciente:", error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) {
                return res.status(400).json({
                    error: error.message,
                    code: error.code
                });
            }
            return res.status(500).json({
                error: "Error interno del servidor",
                code: "INTERNAL_ERROR"
            });
        }
    }
    static async deletePaciente(req, res) {
        try {
            const { id } = req.query;
            if (!id) {
                return res.status(400).json({
                    error: "ID requerido",
                    code: "MISSING_ID"
                });
            }
            const paciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteService"].deletePaciente(Number(id));
            return res.status(200).json({
                message: "Paciente eliminado correctamente",
                paciente
            });
        } catch (error) {
            console.error("Error en deletePaciente:", error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$paciente$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteServiceError"]) {
                return res.status(400).json({
                    error: error.message,
                    code: error.code
                });
            }
            return res.status(500).json({
                error: "Error interno del servidor",
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
    "default": (()=>corsMiddleware)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$cors__$5b$external$5d$__$28$cors$2c$__cjs$29$__ = __turbopack_import__("[externals]/cors [external] (cors, cjs)");
;
const cors = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$cors__$5b$external$5d$__$28$cors$2c$__cjs$29$__["default"])({
    methods: [
        "GET",
        "POST",
        "PUT",
        "DELETE"
    ],
    origin: "*"
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
async function corsMiddleware(req, res) {
    await runMiddleware(req, res, cors);
}
}}),
"[project]/src/pages/api/ApiPaciente.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/controller/PacienteController.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/corsMiddleware.ts [api] (ecmascript)");
;
;
async function handler(req, res) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req, res);
        const { method } = req;
        switch(method){
            case "GET":
                if (req.query.id || req.query.CID || req.query.nombre || req.query.apellido || req.query.cuidador_id) {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteController"].getPaciente(req, res);
                } else {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteController"].getPacientes(req, res);
                }
            case "POST":
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteController"].createPaciente(req, res);
            case "PUT":
                if (req.query.id) {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteController"].updatePaciente(req, res);
                } else {
                    return res.status(400).json({
                        error: "El ID es requerido para actualizar un paciente",
                        code: "MISSING_ID"
                    });
                }
            case "DELETE":
                if (req.query.id) {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PacienteController"].deletePaciente(req, res);
                } else {
                    return res.status(400).json({
                        error: "El ID es requerido para eliminar un paciente",
                        code: "MISSING_ID"
                    });
                }
            default:
                return res.status(405).json({
                    error: "Método no permitido",
                    code: "METHOD_NOT_ALLOWED"
                });
        }
    } catch (error) {
        console.error("Error en la API de pacientes:", error);
        return res.status(500).json({
            error: "Error interno del servidor",
            code: "INTERNAL_SERVER_ERROR"
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

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__0658d2._.js.map