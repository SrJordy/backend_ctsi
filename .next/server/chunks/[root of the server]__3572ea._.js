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
"[project]/src/service/MedicamentoService.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createMedicamento": (()=>createMedicamento),
    "deleteMedicamento": (()=>deleteMedicamento),
    "getAllMedicamentos": (()=>getAllMedicamentos),
    "getMedicamento": (()=>getMedicamento),
    "updateMedicamento": (()=>updateMedicamento)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/Prisma.ts [api] (ecmascript)");
;
const getAllMedicamentos = async ()=>{
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].medicamento.findMany({
            include: {
                recetamedi: true
            }
        });
    } catch (error) {
        console.error("Error al obtener todos los medicamentos:", error);
        throw new Error("No se pudieron obtener los medicamentos");
    }
};
const getMedicamento = async (id)=>{
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].medicamento.findUnique({
            where: {
                cod_medicamento: id
            },
            include: {
                recetamedi: true
            }
        });
    } catch (error) {
        console.error("Error al obtener el medicamento:", error);
        throw new Error("No se pudo obtener el medicamento");
    }
};
const createMedicamento = async (data)=>{
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].medicamento.create({
            data
        });
    } catch (error) {
        console.error("Error al crear un medicamento:", error);
        throw new Error("No se pudo crear el medicamento");
    }
};
const updateMedicamento = async (id, data)=>{
    try {
        const existingMedicamento = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].medicamento.findUnique({
            where: {
                cod_medicamento: id
            }
        });
        if (!existingMedicamento) {
            throw new Error("Medicamento no encontrado");
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].medicamento.update({
            where: {
                cod_medicamento: id
            },
            data
        });
    } catch (error) {
        console.error("Error al actualizar un medicamento:", error);
        throw new Error("No se pudo actualizar el medicamento");
    }
};
const deleteMedicamento = async (id)=>{
    try {
        const existingMedicamento = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].medicamento.findUnique({
            where: {
                cod_medicamento: id
            }
        });
        if (!existingMedicamento) {
            throw new Error("Medicamento no encontrado");
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].medicamento.delete({
            where: {
                cod_medicamento: id
            }
        });
    } catch (error) {
        console.error("Error al eliminar un medicamento:", error);
        throw new Error("No se pudo eliminar el medicamento");
    }
};
}}),
"[project]/src/controller/MedicamentoController.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createMedicamento": (()=>createMedicamento),
    "deleteMedicamento": (()=>deleteMedicamento),
    "getMedicamento": (()=>getMedicamento),
    "getMedicamentos": (()=>getMedicamentos),
    "updateMedicamento": (()=>updateMedicamento)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$MedicamentoService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/service/MedicamentoService.ts [api] (ecmascript)");
;
const getMedicamentos = async (req, res)=>{
    try {
        const medicamentos = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$MedicamentoService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getAllMedicamentos();
        return res.status(200).json(medicamentos);
    } catch (error) {
        console.error("Error en getMedicamentos:", error);
        return res.status(500).json({
            error: "Error buscando medicamentos"
        });
    }
};
const getMedicamento = async (req, res)=>{
    const { id } = req.query;
    try {
        const medicamento = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$MedicamentoService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getMedicamento(Number(id));
        if (!medicamento) {
            return res.status(404).json({
                error: "Medicamento no encontrado"
            });
        }
        return res.status(200).json(medicamento);
    } catch (error) {
        console.error("Error en getMedicamento:", error);
        return res.status(500).json({
            error: "Error buscando medicamento"
        });
    }
};
const createMedicamento = async (req, res)=>{
    try {
        const { nombre, descripcion, frecuenciamin, cantidadtotal, receta_id } = req.body;
        if (!nombre || !descripcion || !frecuenciamin || !cantidadtotal || !receta_id) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }
        console.log(req.body);
        const newMedicamento = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$MedicamentoService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.createMedicamento({
            nombre,
            descripcion,
            frecuenciamin,
            cantidadtotal,
            receta_id
        });
        return res.status(201).json(newMedicamento);
    } catch (error) {
        console.error("Error en createMedicamento:", error);
        return res.status(500).json({
            error: "Error creando medicamento"
        });
    }
};
const updateMedicamento = async (req, res)=>{
    const { id } = req.query;
    try {
        const { nombre, descripcion, frecuenciamin, cantidadtotal, receta_id } = req.body;
        if (!id) {
            return res.status(400).json({
                error: "El ID es requerido para actualizar un medicamento"
            });
        }
        const updatedMedicamento = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$MedicamentoService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.updateMedicamento(Number(id), {
            nombre,
            descripcion,
            frecuenciamin,
            cantidadtotal,
            receta_id
        });
        return res.status(200).json(updatedMedicamento);
    } catch (error) {
        console.error("Error en updateMedicamento:", error);
        return res.status(500).json({
            error: "Error actualizando medicamento"
        });
    }
};
const deleteMedicamento = async (req, res)=>{
    const { id } = req.query;
    try {
        if (!id) {
            return res.status(400).json({
                error: "El ID es requerido para eliminar un medicamento"
            });
        }
        const deletedMedicamento = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$MedicamentoService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.deleteMedicamento(Number(id));
        return res.status(200).json({
            message: "Medicamento eliminado correctamente",
            medicamento: deletedMedicamento
        });
    } catch (error) {
        console.error("Error en deleteMedicamento:", error);
        return res.status(500).json({
            error: "Error eliminando medicamento"
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
"[project]/src/pages/api/ApiMedicamento.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$MedicamentoController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/controller/MedicamentoController.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/corsMiddleware.ts [api] (ecmascript)");
;
;
async function handler(req, res) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req, res);
        const { method } = req;
        const { id } = req.query;
        switch(method){
            case "GET":
                if (id) {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$MedicamentoController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getMedicamento(req, res);
                } else {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$MedicamentoController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getMedicamentos(req, res);
                }
            case "POST":
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$MedicamentoController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.createMedicamento(req, res);
            case "PUT":
                if (id) {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$MedicamentoController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.updateMedicamento(req, res);
                } else {
                    return res.status(400).json({
                        message: "El ID es requerido para realizar la actualización"
                    });
                }
            case "DELETE":
                if (id) {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$MedicamentoController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.deleteMedicamento(req, res);
                } else {
                    return res.status(400).json({
                        message: "El ID es requerido para eliminar un medicamento"
                    });
                }
            default:
                return res.status(405).json({
                    message: "Método no permitido"
                });
        }
    } catch (error) {
        console.error("Error en la API handler:", error);
        return res.status(500).json({
            error: "Error interno del servidor"
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
"[project]/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/src/pages/api/ApiMedicamento.ts [api] (ecmascript)\" } [api] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiMedicamento$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/api/ApiMedicamento.ts [api] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiMedicamento$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'default');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiMedicamento$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'config');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PagesAPIRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API,
        page: "/api/ApiMedicamento",
        pathname: "/api/ApiMedicamento",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiMedicamento$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages-api.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__3572ea._.js.map