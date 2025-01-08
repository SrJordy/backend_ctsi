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
"[project]/src/lib/validators.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "validateEmail": (()=>validateEmail),
    "validatePhone": (()=>validatePhone)
});
const validateEmail = (email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const validatePhone = (phone)=>{
    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    return phoneRegex.test(phone);
};
}}),
"[project]/src/service/UserService.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UserService": (()=>UserService),
    "UserServiceError": (()=>UserServiceError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/Prisma.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validators$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/validators.ts [api] (ecmascript)");
;
;
class UserServiceError extends Error {
    code;
    constructor(message, code){
        super(message), this.code = code;
        this.name = 'UserServiceError';
    }
}
class UserService {
    static async getAllUsers(options) {
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.findMany({
                where: {
                    estado: true,
                    ...options?.rol && {
                        rol: options.rol
                    }
                },
                ...options?.includeRelations && {
                    include: {
                        paciente: true,
                        citamedica: true,
                        historialmedico: true,
                        receta: true
                    }
                }
            });
        } catch (error) {
            throw new UserServiceError("Error al obtener usuarios", "FETCH_ERROR");
        }
    }
    static async getUser(criteria) {
        try {
            const { id, nombre, apellido, CID, email } = criteria;
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.findFirst({
                where: {
                    OR: [
                        {
                            cod_usuario: id
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
                            CID
                        },
                        {
                            email
                        }
                    ].filter(Boolean),
                    estado: true
                },
                include: {
                    paciente: true,
                    citamedica: true,
                    historialmedico: true,
                    receta: true
                }
            });
            return user;
        } catch (error) {
            throw new UserServiceError("Error al buscar usuario", "SEARCH_ERROR");
        }
    }
    static async createUser(data) {
        try {
            // Validaciones
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validators$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["validateEmail"])(data.email)) {
                throw new UserServiceError("Email inválido", "INVALID_EMAIL");
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validators$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["validatePhone"])(data.telefono)) {
                throw new UserServiceError("Número de teléfono inválido", "INVALID_PHONE");
            }
            // Verificar si ya existe un usuario con el mismo email o CID
            const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.findFirst({
                where: {
                    OR: [
                        {
                            email: data.email
                        },
                        {
                            CID: data.CID
                        }
                    ],
                    estado: true
                }
            });
            if (existingUser) {
                throw new UserServiceError("Ya existe un usuario con ese email o CID", "DUPLICATE_USER");
            }
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.create({
                data: {
                    ...data,
                    estado: true
                }
            });
        } catch (error) {
            if (error instanceof UserServiceError) throw error;
            throw new UserServiceError("Error al crear usuario", "CREATE_ERROR");
        }
    }
    static async updateUser(id, data) {
        try {
            const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.findUnique({
                where: {
                    cod_usuario: id
                }
            });
            if (!existingUser || !existingUser.estado) {
                throw new UserServiceError("Usuario no encontrado", "NOT_FOUND");
            }
            if (data.email && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validators$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["validateEmail"])(data.email)) {
                throw new UserServiceError("Email inválido", "INVALID_EMAIL");
            }
            if (data.telefono && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validators$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["validatePhone"])(data.telefono)) {
                throw new UserServiceError("Número de teléfono inválido", "INVALID_PHONE");
            }
            if (data.email || data.CID) {
                const duplicateUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.findFirst({
                    where: {
                        OR: [
                            data.email ? {
                                email: data.email
                            } : {},
                            data.CID ? {
                                CID: data.CID
                            } : {}
                        ],
                        NOT: {
                            cod_usuario: id
                        },
                        estado: true
                    }
                });
                if (duplicateUser) {
                    throw new UserServiceError("Ya existe un usuario con ese email o CID", "DUPLICATE_USER");
                }
            }
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.update({
                where: {
                    cod_usuario: id
                },
                data
            });
        } catch (error) {
            if (error instanceof UserServiceError) throw error;
            throw new UserServiceError("Error al actualizar usuario", "UPDATE_ERROR");
        }
    }
    static async deleteUser(id) {
        try {
            const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.findUnique({
                where: {
                    cod_usuario: id
                }
            });
            if (!existingUser || !existingUser.estado) {
                throw new UserServiceError("Usuario no encontrado", "NOT_FOUND");
            }
            // Verificar si el usuario tiene relaciones activas
            const hasActiveRelations = await this.checkActiveRelations(id);
            if (hasActiveRelations) {
                throw new UserServiceError("No se puede eliminar el usuario porque tiene registros asociados activos", "ACTIVE_RELATIONS");
            }
            return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.update({
                where: {
                    cod_usuario: id
                },
                data: {
                    estado: false
                }
            });
        } catch (error) {
            if (error instanceof UserServiceError) throw error;
            throw new UserServiceError("Error al eliminar usuario", "DELETE_ERROR");
        }
    }
    static async checkActiveRelations(userId) {
        const relations = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].usuario.findUnique({
            where: {
                cod_usuario: userId
            },
            include: {
                paciente: {
                    where: {
                        estado: true
                    }
                },
                citamedica: {
                    where: {
                        status: true
                    }
                },
                historialmedico: {
                    where: {
                        estado: true
                    }
                },
                receta: true
            }
        });
        return !!(relations?.paciente.length || relations?.citamedica.length || relations?.historialmedico.length || relations?.receta.length);
    }
}
}}),
"[externals]/bcryptjs [external] (bcryptjs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("bcryptjs", () => require("bcryptjs"));

module.exports = mod;
}}),
"[project]/src/controller/UserController.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createUser": (()=>createUser),
    "deleteUser": (()=>deleteUser),
    "getUser": (()=>getUser),
    "getUsers": (()=>getUsers),
    "updateUser": (()=>updateUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$UserService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/service/UserService.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__cjs$29$__ = __turbopack_import__("[externals]/bcryptjs [external] (bcryptjs, cjs)");
;
;
const getUsers = async (req, res)=>{
    try {
        const { rol } = req.query;
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$UserService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["UserService"].getAllUsers({
            rol: rol,
            includeRelations: true
        });
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            code: error.code || 'UNKNOWN_ERROR'
        });
    }
};
const getUser = async (req, res)=>{
    try {
        const { id, nombre, apellido, CID, email } = req.query;
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$UserService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["UserService"].getUser({
            id: id ? Number(id) : undefined,
            nombre: nombre ? String(nombre) : undefined,
            apellido: apellido ? String(apellido) : undefined,
            CID: CID ? Number(CID) : undefined,
            email: email ? String(email) : undefined
        });
        if (!user) {
            return res.status(404).json({
                error: "Usuario no encontrado",
                code: "NOT_FOUND"
            });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            code: error.code || 'UNKNOWN_ERROR'
        });
    }
};
const createUser = async (req, res)=>{
    try {
        const { nombre, apellido, CID, telefono, email, rol, password } = req.body;
        if (!nombre || !apellido || !CID || !telefono || !email || !rol || !password) {
            return res.status(400).json({
                error: "Faltan datos requeridos",
                code: "MISSING_DATA"
            });
        }
        const hashedPassword = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__cjs$29$__["default"].hash(password, 10);
        const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$UserService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["UserService"].createUser({
            nombre,
            apellido,
            CID,
            telefono,
            email,
            rol,
            password: hashedPassword
        });
        return res.status(201).json(newUser);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$UserService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["UserServiceError"]) {
            return res.status(400).json({
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({
            error: "Error creando usuario",
            code: 'UNKNOWN_ERROR'
        });
    }
};
const updateUser = async (req, res)=>{
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({
                error: "ID requerido",
                code: "MISSING_ID"
            });
        }
        const { nombre, apellido, CID, telefono, email, rol, password } = req.body;
        const updateData = {};
        if (nombre) updateData.nombre = nombre;
        if (apellido) updateData.apellido = apellido;
        if (CID) updateData.CID = CID;
        if (telefono) updateData.telefono = telefono;
        if (email) updateData.email = email;
        if (rol) updateData.rol = rol;
        if (password) updateData.password = await __TURBOPACK__imported__module__$5b$externals$5d2f$bcryptjs__$5b$external$5d$__$28$bcryptjs$2c$__cjs$29$__["default"].hash(password, 10);
        const updatedUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$UserService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["UserService"].updateUser(Number(id), updateData);
        return res.status(200).json(updatedUser);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$UserService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["UserServiceError"]) {
            return res.status(400).json({
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({
            error: "Error actualizando usuario",
            code: 'UNKNOWN_ERROR'
        });
    }
};
const deleteUser = async (req, res)=>{
    try {
        const { id } = req.query;
        if (!id) {
            return res.status(400).json({
                error: "ID requerido",
                code: "MISSING_ID"
            });
        }
        const deletedUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$UserService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["UserService"].deleteUser(Number(id));
        return res.status(200).json({
            message: "Usuario eliminado correctamente",
            usuario: deletedUser
        });
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$service$2f$UserService$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["UserServiceError"]) {
            return res.status(400).json({
                error: error.message,
                code: error.code
            });
        }
        return res.status(500).json({
            error: "Error eliminando usuario",
            code: 'UNKNOWN_ERROR'
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
"[project]/src/pages/api/ApiUser.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$UserController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/controller/UserController.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/corsMiddleware.ts [api] (ecmascript)");
;
;
async function handler(req, res) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$corsMiddleware$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"])(req, res);
        const { method } = req;
        const { id, nombre, apellido, CID, telefono, email } = req.query;
        switch(method){
            case "GET":
                if (!id && !nombre && !apellido && !CID && !telefono && !email) {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$UserController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getUsers(req, res);
                } else {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$UserController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.getUser(req, res);
                }
            case "POST":
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$UserController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.createUser(req, res);
            case "PUT":
                if (!id) {
                    return res.status(400).json({
                        error: "El ID es requerido para realizar la actualización",
                        code: "MISSING_ID"
                    });
                }
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$UserController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.updateUser(req, res);
            case "DELETE":
                if (!id) {
                    return res.status(400).json({
                        error: "El ID es requerido para eliminar un usuario",
                        code: "MISSING_ID"
                    });
                }
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$controller$2f$UserController$2e$ts__$5b$api$5d$__$28$ecmascript$29$__.deleteUser(req, res);
            default:
                return res.status(405).json({
                    error: "Método no permitido",
                    code: "METHOD_NOT_ALLOWED"
                });
        }
    } catch (error) {
        console.error("Error en la API handler:", error);
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
"[project]/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/src/pages/api/ApiUser.ts [api] (ecmascript)\" } [api] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiUser$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/api/ApiUser.ts [api] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiUser$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'default');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiUser$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'config');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PagesAPIRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API,
        page: "/api/ApiUser",
        pathname: "/api/ApiUser",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$ApiUser$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages-api.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__8573f4._.js.map