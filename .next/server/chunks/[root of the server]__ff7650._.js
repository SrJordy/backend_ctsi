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
"[project]/src/lib/RecordatorioServiceError.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RecordatorioServiceError": (()=>RecordatorioServiceError)
});
class RecordatorioServiceError extends Error {
    code;
    constructor(code, message){
        super(message);
        this.code = code;
        this.name = 'RecordatorioServiceError';
    }
}
}}),
"[project]/src/service/RecordatorioService.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RecordatorioService": (()=>RecordatorioService)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_import__("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/RecordatorioServiceError.ts [api] (ecmascript)");
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
class RecordatorioService {
    async createRecordatorio(data) {
        try {
            // Validar que el medicamento existe
            const medicamento = await prisma.medicamento.findUnique({
                where: {
                    cod_medicamento: data.medicamento_id
                }
            });
            if (!medicamento) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]('MEDICAMENTO_NOT_FOUND', 'El medicamento no existe');
            }
            // Validar que el paciente existe
            const paciente = await prisma.paciente.findUnique({
                where: {
                    cod_paciente: data.persona_id
                }
            });
            if (!paciente) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]('PACIENTE_NOT_FOUND', 'El paciente no existe');
            }
            const recordatorio = await prisma.recordatorioMedicamento.create({
                data: {
                    medicamento_id: data.medicamento_id,
                    fechahora: new Date(data.fechahora),
                    persona_id: data.persona_id,
                    estado: true
                },
                include: {
                    medicina: true,
                    persona: true
                }
            });
            return recordatorio;
        } catch (error) {
            console.error('Error en createRecordatorio:', error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]) {
                throw error;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]('CREATE_ERROR', 'Error al crear el recordatorio');
        }
    }
    async getRecordatorios() {
        try {
            return await prisma.recordatorioMedicamento.findMany({
                include: {
                    medicina: true,
                    persona: true
                }
            });
        } catch (error) {
            console.error('Error en getRecordatorios:', error);
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]('FETCH_ERROR', 'Error al obtener los recordatorios');
        }
    }
    async getRecordatorio(id) {
        try {
            const recordatorio = await prisma.recordatorioMedicamento.findUnique({
                where: {
                    cod_recordatorio: id
                },
                include: {
                    medicina: true,
                    persona: true
                }
            });
            if (!recordatorio) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]('NOT_FOUND', 'Recordatorio no encontrado');
            }
            return recordatorio;
        } catch (error) {
            console.error('Error en getRecordatorio:', error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]) {
                throw error;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]('FETCH_ERROR', 'Error al obtener el recordatorio');
        }
    }
    async updateRecordatorio(id, data) {
        try {
            // Verificar si el recordatorio existe
            const existingRecordatorio = await prisma.recordatorioMedicamento.findUnique({
                where: {
                    cod_recordatorio: id
                }
            });
            if (!existingRecordatorio) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]('NOT_FOUND', 'Recordatorio no encontrado');
            }
            // Si se actualiza el medicamento, verificar que existe
            if (data.medicamento_id) {
                const medicamento = await prisma.medicamento.findUnique({
                    where: {
                        cod_medicamento: data.medicamento_id
                    }
                });
                if (!medicamento) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]('MEDICAMENTO_NOT_FOUND', 'El medicamento no existe');
                }
            }
            // Si se actualiza el paciente, verificar que existe
            if (data.persona_id) {
                const paciente = await prisma.paciente.findUnique({
                    where: {
                        cod_paciente: data.persona_id
                    }
                });
                if (!paciente) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]('PACIENTE_NOT_FOUND', 'El paciente no existe');
                }
            }
            return await prisma.recordatorioMedicamento.update({
                where: {
                    cod_recordatorio: id
                },
                data: {
                    ...data,
                    fechahora: data.fechahora ? new Date(data.fechahora) : undefined
                },
                include: {
                    medicina: true,
                    persona: true
                }
            });
        } catch (error) {
            console.error('Error en updateRecordatorio:', error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]) {
                throw error;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]('UPDATE_ERROR', 'Error al actualizar el recordatorio');
        }
    }
    async deleteRecordatorio(id) {
        try {
            // Verificar si el recordatorio existe
            const recordatorio = await prisma.recordatorioMedicamento.findUnique({
                where: {
                    cod_recordatorio: id
                }
            });
            if (!recordatorio) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]('NOT_FOUND', 'Recordatorio no encontrado');
            }
            // Realizar un soft delete actualizando el estado
            return await prisma.recordatorioMedicamento.update({
                where: {
                    cod_recordatorio: id
                },
                data: {
                    estado: false
                }
            });
        } catch (error) {
            console.error('Error en deleteRecordatorio:', error);
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]) {
                throw error;
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]('DELETE_ERROR', 'Error al eliminar el recordatorio');
        }
    }
}
}}),
"[project]/src/controller/RecordatorioController.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createRecordatorio": (()=>createRecordatorio),
    "deleteRecordatorio": (()=>deleteRecordatorio),
    "getRecordatorio": (()=>getRecordatorio),
    "getRecordatorios": (()=>getRecordatorios),
    "updateRecordatorio": (()=>updateRecordatorio)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$RecordatorioService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/service/RecordatorioService.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/RecordatorioServiceError.ts [api] (ecmascript)");
;
;
const recordatorioService = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$RecordatorioService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioService"]();
async function createRecordatorio(req, res) {
    try {
        console.log('Datos recibidos en createRecordatorio:', req.body);
        const recordatorio = await recordatorioService.createRecordatorio(req.body);
        console.log('Recordatorio creado:', recordatorio);
        return res.status(201).json(recordatorio);
    } catch (error) {
        console.error('Error en createRecordatorio controller:', error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]) {
            return res.status(400).json({
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({
            error: 'Error interno del servidor',
            code: 'INTERNAL_ERROR'
        });
    }
}
async function getRecordatorios(req, res) {
    try {
        const recordatorios = await recordatorioService.getRecordatorios();
        return res.status(200).json(recordatorios);
    } catch (error) {
        console.error('Error en getRecordatorios controller:', error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]) {
            return res.status(400).json({
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({
            error: 'Error interno del servidor',
            code: 'INTERNAL_ERROR'
        });
    }
}
async function getRecordatorio(req, res) {
    try {
        const id = Number(req.query.id);
        if (isNaN(id)) {
            return res.status(400).json({
                error: 'ID inválido',
                code: 'INVALID_ID'
            });
        }
        const recordatorio = await recordatorioService.getRecordatorio(id);
        return res.status(200).json(recordatorio);
    } catch (error) {
        console.error('Error en getRecordatorio controller:', error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]) {
            return res.status(400).json({
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({
            error: 'Error interno del servidor',
            code: 'INTERNAL_ERROR'
        });
    }
}
async function updateRecordatorio(req, res) {
    try {
        const id = Number(req.query.id);
        if (isNaN(id)) {
            return res.status(400).json({
                error: 'ID inválido',
                code: 'INVALID_ID'
            });
        }
        console.log('Datos recibidos en updateRecordatorio:', {
            id,
            data: req.body
        });
        const recordatorio = await recordatorioService.updateRecordatorio(id, req.body);
        console.log('Recordatorio actualizado:', recordatorio);
        return res.status(200).json(recordatorio);
    } catch (error) {
        console.error('Error en updateRecordatorio controller:', error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]) {
            return res.status(400).json({
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({
            error: 'Error interno del servidor',
            code: 'INTERNAL_ERROR'
        });
    }
}
async function deleteRecordatorio(req, res) {
    try {
        const id = Number(req.query.id);
        if (isNaN(id)) {
            return res.status(400).json({
                error: 'ID inválido',
                code: 'INVALID_ID'
            });
        }
        await recordatorioService.deleteRecordatorio(id);
        return res.status(200).json({
            message: 'Recordatorio eliminado correctamente'
        });
    } catch (error) {
        console.error('Error en deleteRecordatorio controller:', error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$RecordatorioServiceError$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RecordatorioServiceError"]) {
            return res.status(400).json({
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({
            error: 'Error interno del servidor',
            code: 'INTERNAL_ERROR'
        });
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
    origin: 'http://localhost:5173',
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
"[project]/src/pages/api/ApiRecordatorios.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$RecordatorioController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/controller/RecordatorioController.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/corsMiddleware.ts [api] (ecmascript)");
;
;
async function handler(req, res) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req, res);
        if (req.method === 'OPTIONS') {
            return res.status(200).end();
        }
        const { method } = req;
        const { id } = req.query;
        switch(method){
            case "GET":
                if (id) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$RecordatorioController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getRecordatorio(req, res);
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$RecordatorioController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getRecordatorios(req, res);
            case "POST":
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$RecordatorioController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.createRecordatorio(req, res);
            case "PUT":
                if (id) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$RecordatorioController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.updateRecordatorio(req, res);
                return res.status(400).json({
                    error: "ID requerido para actualizar un recordatorio"
                });
            case "DELETE":
                if (id) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$RecordatorioController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.deleteRecordatorio(req, res);
                return res.status(400).json({
                    error: "ID requerido para eliminar un recordatorio"
                });
            default:
                return res.status(405).json({
                    error: "Método no permitido"
                });
        }
    } catch (error) {
        console.error('Error en el handler:', error);
        return res.status(500).json({
            error: 'Error interno del servidor'
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
"[project]/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/src/pages/api/ApiRecordatorios.ts [api] (ecmascript)\" } [api] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiRecordatorios$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/api/ApiRecordatorios.ts [api] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiRecordatorios$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'default');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiRecordatorios$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'config');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PagesAPIRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API,
        page: "/api/ApiRecordatorios",
        pathname: "/api/ApiRecordatorios",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiRecordatorios$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages-api.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__ff7650._.js.map