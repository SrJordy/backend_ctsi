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
"[project]/src/service/PacienteService.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createPaciente": (()=>createPaciente),
    "deletePaciente": (()=>deletePaciente),
    "getAllPacientes": (()=>getAllPacientes),
    "getPaciente": (()=>getPaciente),
    "updatePaciente": (()=>updatePaciente)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/Prisma.ts [api] (ecmascript)");
;
const getAllPacientes = async ()=>{
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findMany({
            where: {
                estado: true
            },
            include: {
                cuidador: true
            }
        });
    } catch (error) {
        console.error("Error al obtener todos los pacientes:", error);
        throw new Error("No se pudieron obtener los pacientes");
    }
};
const getPaciente = async (criteria)=>{
    try {
        const { id, CID, nombre, apellido } = criteria;
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findFirst({
            where: {
                OR: [
                    {
                        cod_paciente: id
                    },
                    {
                        CID: CID
                    },
                    {
                        nombre: nombre
                    },
                    {
                        apellido: apellido
                    }
                ],
                estado: true
            },
            include: {
                cuidador: true
            }
        });
    } catch (error) {
        console.error("Error al obtener un paciente:", error);
        throw new Error("No se pudo obtener el paciente");
    }
};
const createPaciente = async (data)=>{
    try {
        console.log("Datos enviados al servicio:", data);
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.create({
            data
        });
    } catch (error) {
        console.error("Error al crear un paciente:", error);
        throw new Error("No se pudo crear el paciente");
    }
};
const updatePaciente = async (id, data)=>{
    try {
        const existingPaciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findUnique({
            where: {
                cod_paciente: id
            }
        });
        if (!existingPaciente || !existingPaciente.estado) {
            throw new Error("Paciente no encontrado o está inactivo");
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.update({
            where: {
                cod_paciente: id
            },
            data
        });
    } catch (error) {
        console.error("Error al actualizar un paciente:", error);
        throw new Error("No se pudo actualizar el paciente");
    }
};
const deletePaciente = async (id)=>{
    try {
        const existingPaciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.findUnique({
            where: {
                cod_paciente: id
            }
        });
        if (!existingPaciente || !existingPaciente.estado) {
            throw new Error("Paciente no encontrado o ya está inactivo");
        }
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].paciente.update({
            where: {
                cod_paciente: id
            },
            data: {
                estado: false
            }
        });
    } catch (error) {
        console.error("Error al eliminar (inactivar) un paciente:", error);
        throw new Error("No se pudo inactivar el paciente");
    }
};
}}),
"[project]/src/controller/PacienteController.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createPaciente": (()=>createPaciente),
    "deletePaciente": (()=>deletePaciente),
    "getPaciente": (()=>getPaciente),
    "getPacientes": (()=>getPacientes),
    "updatePaciente": (()=>updatePaciente)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/service/PacienteService.ts [api] (ecmascript)");
;
const getPacientes = async (req, res)=>{
    try {
        const pacientes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getAllPacientes();
        return res.status(200).json(pacientes);
    } catch (error) {
        console.error("Error en getPacientes:", error);
        return res.status(500).json({
            error: "Error buscando pacientes"
        });
    }
};
const getPaciente = async (req, res)=>{
    const { id, CID, nombre, apellido } = req.query;
    try {
        const paciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getPaciente({
            id: id ? Number(id) : undefined,
            CID: CID ? Number(CID) : undefined,
            nombre: nombre ? String(nombre) : undefined,
            apellido: apellido ? String(apellido) : undefined
        });
        if (!paciente) {
            return res.status(404).json({
                error: "Paciente no encontrado"
            });
        }
        return res.status(200).json(paciente);
    } catch (error) {
        console.error("Error en getPaciente:", error);
        return res.status(500).json({
            error: "Error buscando paciente"
        });
    }
};
const createPaciente = async (req, res)=>{
    try {
        console.log("Cuerpo recibido:", req.body);
        const { nombre, apellido, CID, telefono, fecha_nac, genero, direccion, cuidador_id } = req.body;
        if (!nombre || !apellido || !CID || !telefono || !fecha_nac || !genero || !cuidador_id) {
            return res.status(400).json({
                error: "Faltan datos requeridos"
            });
        }
        const fechaNacParse = new Date(fecha_nac);
        if (isNaN(fechaNacParse.getTime())) {
            return res.status(400).json({
                message: "El formato de la fecha de nacimiento no es válido"
            });
        }
        const newPaciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.createPaciente({
            nombre,
            apellido,
            CID,
            telefono,
            fecha_nac: fechaNacParse,
            genero,
            direccion,
            cuidador_id
        });
        return res.status(201).json(newPaciente);
    } catch (error) {
        console.error("Error en createPaciente:", error);
        return res.status(500).json({
            error: "Error creando paciente"
        });
    }
};
const updatePaciente = async (req, res)=>{
    const { id } = req.query;
    try {
        if (!id) {
            return res.status(400).json({
                error: "El ID es requerido para actualizar un paciente"
            });
        }
        const { nombre, apellido, CID, telefono, fecha_nac, genero, direccion, cuidador_id } = req.body;
        if (!nombre && !apellido && !CID && !telefono && !fecha_nac && !genero && !direccion && !cuidador_id) {
            return res.status(400).json({
                error: "No se proporcionaron datos para actualizar"
            });
        }
        const fechaNacParse = new Date(fecha_nac);
        if (isNaN(fechaNacParse.getTime())) {
            return res.status(400).json({
                message: "El formato de la fecha de nacimiento no es válido"
            });
        }
        const updatedPaciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.updatePaciente(Number(id), {
            nombre,
            apellido,
            CID,
            telefono,
            fecha_nac: fechaNacParse,
            genero,
            direccion,
            cuidador_id
        });
        return res.status(200).json(updatedPaciente);
    } catch (error) {
        console.error("Error en updatePaciente:", error);
        return res.status(500).json({
            error: "Error actualizando paciente"
        });
    }
};
const deletePaciente = async (req, res)=>{
    const { id } = req.query;
    try {
        if (!id) {
            return res.status(400).json({
                error: "El ID es requerido para eliminar un paciente"
            });
        }
        const deletedPaciente = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$PacienteService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.deletePaciente(Number(id));
        return res.status(200).json({
            message: "Paciente eliminado correctamente",
            paciente: deletedPaciente
        });
    } catch (error) {
        console.error("Error en deletePaciente:", error);
        return res.status(500).json({
            error: "Error eliminando paciente"
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
        const { id, CID, nombre, apellido } = req.query;
        switch(method){
            case "GET":
                if (id || CID || nombre || apellido) {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getPaciente(req, res);
                } else {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getPacientes(req, res);
                }
            case "POST":
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.createPaciente(req, res);
            case "PUT":
                if (id) {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.updatePaciente(req, res);
                } else {
                    return res.status(400).json({
                        message: "El ID es requerido para realizar la actualización"
                    });
                }
            case "DELETE":
                if (id) {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$PacienteController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.deletePaciente(req, res);
                } else {
                    return res.status(400).json({
                        message: "El ID es requerido para eliminar un paciente"
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

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__cdfc93._.js.map