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
"[project]/src/service/RecordatorioService.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createRecordatorio": (()=>createRecordatorio),
    "deleteRecordatorio": (()=>deleteRecordatorio),
    "getAllRecordatorios": (()=>getAllRecordatorios),
    "getRecordatorio": (()=>getRecordatorio),
    "updateRecordatorio": (()=>updateRecordatorio)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/Prisma.ts [api] (ecmascript)");
;
const getAllRecordatorios = async ()=>{
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].recordatorioMedicamento.findMany({
            include: {
                medicina: true,
                persona: true
            }
        });
    } catch (error) {
        console.error("Error al obtener todos los recordatorios:", error);
        throw new Error("No se pudieron obtener los recordatorios");
    }
};
const getRecordatorio = async (id)=>{
    try {
        const recordatorio = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].recordatorioMedicamento.findUnique({
            where: {
                cod_recordatorio: id
            },
            include: {
                medicina: true,
                persona: true
            }
        });
        if (!recordatorio) {
            throw new Error("Recordatorio no encontrado");
        }
        return recordatorio;
    } catch (error) {
        console.error("Error al obtener el recordatorio:", error);
        throw new Error("No se pudo obtener el recordatorio");
    }
};
const createRecordatorio = async (data)=>{
    try {
        const { medicamento_id, fechahora, persona_id } = data;
        if (!medicamento_id || !fechahora || !persona_id) {
            throw new Error("Faltan datos requeridos: medicamento_id, fechahora o persona_id");
        }
        const medicamentoExists = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].medicamento.findUnique({
            where: {
                cod_medicamento: medicamento_id
            }
        });
        if (!medicamentoExists) {
            throw new Error("El medicamento especificado no existe");
        }
        const personaExists = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findUnique({
            where: {
                cod_paciente: persona_id
            }
        });
        if (!personaExists) {
            throw new Error("La persona especificada no existe");
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].recordatorioMedicamento.create({
            data
        });
    } catch (error) {
        console.error("Error al crear un recordatorio:", error);
        throw new Error("No se pudo crear el recordatorio");
    }
};
const updateRecordatorio = async (id, data)=>{
    try {
        const existingRecordatorio = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].recordatorioMedicamento.findUnique({
            where: {
                cod_recordatorio: id
            }
        });
        if (!existingRecordatorio) {
            throw new Error("Recordatorio no encontrado");
        }
        if (data.medicamento_id) {
            const medicamentoExists = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].medicamento.findUnique({
                where: {
                    cod_medicamento: data.medicamento_id
                }
            });
            if (!medicamentoExists) {
                throw new Error("El medicamento especificado no existe");
            }
        }
        if (data.persona_id) {
            const personaExists = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findUnique({
                where: {
                    cod_paciente: data.persona_id
                }
            });
            if (!personaExists) {
                throw new Error("La persona especificada no existe");
            }
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].recordatorioMedicamento.update({
            where: {
                cod_recordatorio: id
            },
            data
        });
    } catch (error) {
        console.error("Error al actualizar el recordatorio:", error);
        throw new Error("No se pudo actualizar el recordatorio");
    }
};
const deleteRecordatorio = async (id)=>{
    try {
        const existingRecordatorio = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].recordatorioMedicamento.findUnique({
            where: {
                cod_recordatorio: id
            }
        });
        if (!existingRecordatorio) {
            throw new Error("Recordatorio no encontrado");
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].recordatorioMedicamento.update({
            where: {
                cod_recordatorio: id
            },
            data: {
                estado: false
            }
        });
    } catch (error) {
        console.error("Error al eliminar el recordatorio:", error);
        throw new Error("No se pudo eliminar el recordatorio");
    }
};
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
;
const getRecordatorios = async (req, res)=>{
    try {
        const recordatorios = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$RecordatorioService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getAllRecordatorios();
        return res.status(200).json(recordatorios);
    } catch (error) {
        return res.status(500).json({
            error: "Error buscando recordatorios"
        });
    }
};
const getRecordatorio = async (req, res)=>{
    const { id } = req.query;
    try {
        const recordatorio = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$RecordatorioService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getRecordatorio(Number(id));
        return res.status(200).json(recordatorio);
    } catch (error) {
        return res.status(404).json({
            error: "Recordatorio no encontrado"
        });
    }
};
const createRecordatorio = async (req, res)=>{
    try {
        const { medicamento_id, fechahora, persona_id } = req.body;
        const newRecordatorio = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$RecordatorioService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.createRecordatorio({
            medicamento_id,
            fechahora: new Date(fechahora),
            persona_id
        });
        return res.status(201).json(newRecordatorio);
    } catch (error) {
        return res.status(500).json({
            error: "Error creando recordatorio"
        });
    }
};
const updateRecordatorio = async (req, res)=>{
    const { id } = req.query;
    try {
        const { medicamento_id, fechahora, persona_id, estado } = req.body;
        const updatedRecordatorio = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$RecordatorioService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.updateRecordatorio(Number(id), {
            medicamento_id,
            fechahora: fechahora ? new Date(fechahora) : undefined,
            persona_id
        });
        return res.status(200).json(updatedRecordatorio);
    } catch (error) {
        return res.status(500).json({
            error: "Error actualizando recordatorio"
        });
    }
};
const deleteRecordatorio = async (req, res)=>{
    const { id } = req.query;
    try {
        const deletedRecordatorio = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$RecordatorioService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.deleteRecordatorio(Number(id));
        return res.status(200).json({
            message: "Recordatorio eliminado correctamente",
            recordatorio: deletedRecordatorio
        });
    } catch (error) {
        return res.status(500).json({
            error: "Error eliminando recordatorio"
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
    "default": (()=>corsMiddleware)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$cors__$5b$external$5d$__$28$cors$2c$__cjs$29$__ = __turbopack_import__("[externals]/cors [external] (cors, cjs)");
;
const cors = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$cors__$5b$external$5d$__$28$cors$2c$__cjs$29$__["default"])({
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ],
    origin: '*',
    allowedHeaders: [
        'Content-Type',
        'Authorization'
    ],
    credentials: true
});
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject)=>{
        fn(req, res, (result)=>{
            if (result instanceof Error) {
                reject(result);
            } else {
                resolve(result);
            }
        });
    });
}
async function corsMiddleware(req, res) {
    try {
        await runMiddleware(req, res, cors);
    } catch (error) {
        console.error('Error en CORS middleware:', error);
        res.status(500).json({
            error: 'Error en el manejo de CORS'
        });
    }
}
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req, res);
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

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__c14b0a._.js.map