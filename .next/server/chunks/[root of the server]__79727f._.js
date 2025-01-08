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
"[project]/src/service/HistorialServices.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createHistorial": (()=>createHistorial),
    "deleteHistorial": (()=>deleteHistorial),
    "getAllHistoriales": (()=>getAllHistoriales),
    "getHistorial": (()=>getHistorial),
    "updateHistorial": (()=>updateHistorial)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/Prisma.ts [api] (ecmascript)");
;
const getAllHistoriales = async ()=>{
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].historialmedico.findMany({
            where: {
                estado: true
            },
            include: {
                profesional: {
                    select: {
                        nombre: true,
                        apellido: true,
                        email: true
                    }
                },
                persona: true,
                diagnostico: true,
                tratamiento: true,
                examenes: true
            },
            orderBy: {
                fecha: 'desc'
            }
        });
    } catch (error) {
        console.error('Error en getAllHistoriales:', error);
        throw new Error('Error al obtener historiales médicos');
    }
};
const getHistorial = async (id)=>{
    try {
        const historial = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].historialmedico.findUnique({
            where: {
                cod_historial: id,
                estado: true
            },
            include: {
                persona: true,
                profesional: {
                    select: {
                        nombre: true,
                        apellido: true,
                        email: true
                    }
                },
                diagnostico: true,
                tratamiento: true,
                examenes: true
            }
        });
        if (!historial) throw new Error('Historial no encontrado');
        return historial;
    } catch (error) {
        console.error('Error en getHistorial:', error);
        throw error;
    }
};
const createHistorial = async (data)=>{
    try {
        const [profesional, paciente] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.findUnique({
                where: {
                    cod_usuario: data.profesional_id
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findUnique({
                where: {
                    cod_paciente: data.persona_id
                }
            })
        ]);
        if (!profesional) throw new Error('Profesional no encontrado');
        if (!paciente) throw new Error('Paciente no encontrado');
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].historialmedico.create({
            data: {
                ...data,
                estado: true
            },
            include: {
                profesional: true,
                persona: true
            }
        });
    } catch (error) {
        console.error('Error en createHistorial:', error);
        throw error;
    }
};
const updateHistorial = async (id, data)=>{
    try {
        const historial = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].historialmedico.findUnique({
            where: {
                cod_historial: id
            }
        });
        if (!historial || !historial.estado) {
            throw new Error('Historial no encontrado');
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].historialmedico.update({
            where: {
                cod_historial: id
            },
            data,
            include: {
                profesional: true,
                persona: true
            }
        });
    } catch (error) {
        console.error('Error en updateHistorial:', error);
        throw error;
    }
};
const deleteHistorial = async (id)=>{
    try {
        const historial = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].historialmedico.findUnique({
            where: {
                cod_historial: id
            }
        });
        if (!historial || !historial.estado) {
            throw new Error('Historial no encontrado');
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].historialmedico.update({
            where: {
                cod_historial: id
            },
            data: {
                estado: false
            }
        });
    } catch (error) {
        console.error('Error en deleteHistorial:', error);
        throw error;
    }
};
}}),
"[project]/src/controller/HistorialController.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createHistorial": (()=>createHistorial),
    "deleteHistorial": (()=>deleteHistorial),
    "getHistorial": (()=>getHistorial),
    "getHistoriales": (()=>getHistoriales),
    "updateHistorial": (()=>updateHistorial)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$HistorialServices$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/service/HistorialServices.ts [api] (ecmascript)");
;
const getHistoriales = async (req, res)=>{
    try {
        const historiales = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$HistorialServices$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getAllHistoriales();
        return res.status(200).json(historiales);
    } catch (error) {
        console.error('Error en getHistoriales controller:', error);
        return res.status(500).json({
            error: "Error al obtener historiales médicos"
        });
    }
};
const getHistorial = async (req, res)=>{
    try {
        const { id } = req.query;
        const historial = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$HistorialServices$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getHistorial(Number(id));
        return res.status(200).json(historial);
    } catch (error) {
        console.error('Error en getHistorial controller:', error);
        return res.status(404).json({
            error: "Historial no encontrado"
        });
    }
};
const createHistorial = async (req, res)=>{
    try {
        const { descripcion, tipo_sangre, presion_arterial, peso, estatura, temperatura, nivel_glucosa, fecha, profesional_id, persona_id } = req.body;
        // Validar campos obligatorios
        if (!presion_arterial || !peso || !estatura || !fecha || !profesional_id || !persona_id) {
            return res.status(400).json({
                error: "Faltan campos requeridos",
                details: "presion_arterial, peso, estatura, fecha, profesional_id y persona_id son obligatorios"
            });
        }
        // Validar tipos de datos
        if (isNaN(peso) || isNaN(estatura) || isNaN(profesional_id) || isNaN(persona_id)) {
            return res.status(400).json({
                error: "Datos inválidos",
                details: "peso, estatura, profesional_id y persona_id deben ser números válidos"
            });
        }
        // Crear historial
        const newHistorial = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$HistorialServices$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.createHistorial({
            descripcion,
            tipo_sangre,
            presion_arterial,
            peso: Number(peso),
            estatura: Number(estatura),
            temperatura: temperatura ? Number(temperatura) : undefined,
            nivel_glucosa: nivel_glucosa ? Number(nivel_glucosa) : undefined,
            fecha: new Date(fecha),
            profesional_id: Number(profesional_id),
            persona_id: Number(persona_id)
        });
        return res.status(201).json(newHistorial);
    } catch (error) {
        console.error('Error en createHistorial controller:', error);
        return res.status(400).json({
            error: "Error al crear historial médico",
            details: error instanceof Error ? error.message : "Error desconocido"
        });
    }
};
const updateHistorial = async (req, res)=>{
    try {
        const { id } = req.query;
        const historialId = Number(id);
        const data = req.body;
        const updatedHistorial = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$HistorialServices$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.updateHistorial(historialId, data);
        return res.status(200).json(updatedHistorial);
    } catch (error) {
        console.error('Update Error:', error);
        return res.status(500).json({
            error: 'Error al actualizar el historial médico',
            details: ("TURBOPACK compile-time truthy", 1) ? error.message : ("TURBOPACK unreachable", undefined)
        });
    }
};
const deleteHistorial = async (req, res)=>{
    try {
        const { id } = req.query;
        const historialId = Number(id);
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$HistorialServices$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.deleteHistorial(historialId);
        return res.status(200).json({
            message: 'Historial médico eliminado correctamente'
        });
    } catch (error) {
        console.error('Delete Error:', error);
        return res.status(500).json({
            error: 'Error al eliminar el historial médico',
            details: ("TURBOPACK compile-time truthy", 1) ? error.message : ("TURBOPACK unreachable", undefined)
        });
    }
};
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
"[project]/src/pages/api/ApiHistorial.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$HistorialController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/controller/HistorialController.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/corsMiddleware.ts [api] (ecmascript)");
;
;
async function handler(req, res) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req, res);
        if (req.method === 'OPTIONS') {
            res.status(200).end();
            return;
        }
        const { method } = req;
        const { id } = req.query;
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        switch(method){
            case "GET":
                if (id) {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$HistorialController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getHistorial(req, res);
                }
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$HistorialController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getHistoriales(req, res);
            case "POST":
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$HistorialController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.createHistorial(req, res);
            case "PUT":
                if (!id) {
                    return res.status(400).json({
                        error: "ID requerido para actualizar un historial"
                    });
                }
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$HistorialController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.updateHistorial(req, res);
            case "DELETE":
                if (!id) {
                    return res.status(400).json({
                        error: "ID requerido para eliminar un historial"
                    });
                }
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$HistorialController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.deleteHistorial(req, res);
            default:
                return res.status(405).json({
                    error: "Método no permitido",
                    allowedMethods: [
                        'GET',
                        'POST',
                        'PUT',
                        'DELETE',
                        'OPTIONS'
                    ]
                });
        }
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({
            error: 'Error interno del servidor',
            details: ("TURBOPACK compile-time truthy", 1) ? error.message : ("TURBOPACK unreachable", undefined)
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
"[project]/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/src/pages/api/ApiHistorial.ts [api] (ecmascript)\" } [api] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiHistorial$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/api/ApiHistorial.ts [api] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiHistorial$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'default');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiHistorial$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'config');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PagesAPIRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API,
        page: "/api/ApiHistorial",
        pathname: "/api/ApiHistorial",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiHistorial$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages-api.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__79727f._.js.map