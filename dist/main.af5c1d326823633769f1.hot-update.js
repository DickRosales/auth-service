exports.id = "main";
exports.modules = {

/***/ "./src/auth/auth.router.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.router.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst auth_middleware_1 = __webpack_require__(/*! ../middleware/auth.middleware */ \"./src/middleware/auth.middleware.ts\");\nconst AuthService = __importStar(__webpack_require__(/*! ./auth.service */ \"./src/auth/auth.service.ts\"));\nexports.authRouter = express_1.default.Router();\nexports.authRouter.post(\"/in\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        let { email, password } = req.body;\n        let currentUser = yield AuthService.find({ email });\n        // const token = req.header(\"authorization\")?.split(' ')[1];\n        // const match = await bcrypt.compare(password, user.passwordHash);\n        // if(token) {\n        //   verifyJwt(token);\n        // }\n        res.status(200).send(Object.assign(Object.assign({}, req.body), { token: 'ok' }));\n    }\n    catch (e) {\n        res.status(404).send(e.message);\n    }\n}));\nexports.authRouter.post(\"/up\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        let { email, first_name, last_name, picture, password } = req.body;\n        let newUser = yield AuthService.create({ email, first_name, last_name, picture, password });\n        const token = auth_middleware_1.signJwt({\n            id: newUser._id,\n            email: newUser.email,\n            first_name: newUser.first_name,\n            last_name: newUser.last_name,\n            picture: newUser.picture\n        });\n        res.status(200).send({ token });\n    }\n    catch (error) {\n        console.log('endpoint: /auth/up', error);\n        res.status(404).send(error.message);\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/auth/auth.router.ts?");

/***/ }),

/***/ "./src/auth/auth.schema.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.schema.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst { Schema, model } = mongoose_1.default;\nexports.UserSchema = new Schema({\n    email: String,\n    first_name: String,\n    last_name: String,\n    picture: String,\n    roles: [String],\n    permissions: [String],\n    password: String\n});\nexports.User = model('User', exports.UserSchema);\n\n\n//# sourceURL=webpack:///./src/auth/auth.schema.ts?");

/***/ }),

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst auth_schema_1 = __webpack_require__(/*! ./auth.schema */ \"./src/auth/auth.schema.ts\");\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nexports.find = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        return yield auth_schema_1.User.find({ id });\n    }\n    catch (error) {\n        console.log(error);\n    }\n});\nexports.findByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        return yield auth_schema_1.User.find({ email });\n    }\n    catch (error) {\n        console.log(error);\n    }\n});\nexports.findAll = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        return yield auth_schema_1.User.find();\n    }\n    catch (error) {\n        console.log(error);\n    }\n});\nexports.create = ({ email, first_name, last_name, picture, password }) => __awaiter(void 0, void 0, void 0, function* () {\n    let userExist = yield auth_schema_1.User.findOne({ email });\n    if (userExist) {\n        throw new Error('email already exist');\n    }\n    else {\n        const hash = yield bcrypt_1.default.hash(password, 10);\n        const newUser = new auth_schema_1.User({ email, first_name, last_name, picture, password: hash });\n        return yield newUser.save();\n    }\n});\n// export const update = async (updatedItem: Item): Promise<void> => {...};\n// export const remove = async (id: number): Promise<void> => {\n//   const record: Item = items[id];\n//   if (record) {\n//     delete items[id];\n//     return;\n//   }\n//   throw new Error(\"No record found to delete\");\n// };\n\n\n//# sourceURL=webpack:///./src/auth/auth.service.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst error_middleware_1 = __webpack_require__(/*! ./middleware/error.middleware */ \"./src/middleware/error.middleware.ts\");\nconst notFound_middleware_1 = __webpack_require__(/*! ./middleware/notFound.middleware */ \"./src/middleware/notFound.middleware.ts\");\nconst auth_router_1 = __webpack_require__(/*! ./auth/auth.router */ \"./src/auth/auth.router.ts\");\ndotenv.config();\nif (!process.env.PORT) {\n    process.exit(1);\n}\nconst PORT = parseInt(process.env.PORT, 10);\nconst app = express_1.default();\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use(express_1.default.json());\napp.use('/auth', auth_router_1.authRouter);\napp.use(error_middleware_1.errorHandler);\napp.use(notFound_middleware_1.notFoundHandler);\nconst connection = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        yield mongoose_1.default.connect('mongodb+srv://auth_user:Dodgers4ever@auth-service-f0txg.gcp.mongodb.net/mixlab?retryWrites=true&w=majority', { useNewUrlParser: true });\n        //Get the default connection\n        var db = mongoose_1.default.connection;\n        //Bind connection to error event (to get notification of connection errors)\n        db.on('error', console.error.bind(console, 'MongoDB connection error:'));\n    }\n    catch (error) {\n        console.log(error);\n    }\n});\nconst server = app.listen(PORT, () => {\n    // initialize database connection\n    connection();\n    console.log(`Listening on port ${PORT}`);\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(() => server.close());\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/middleware/auth.middleware.ts":
/*!*******************************************!*\
  !*** ./src/middleware/auth.middleware.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv.config();\nexports.verifyJwt = (token) => {\n    try {\n        var decoded = jsonwebtoken_1.default.verify(token, 'secret');\n        console.log(decoded);\n    }\n    catch (error) {\n        console.log(error);\n    }\n};\nexports.signJwt = (data) => {\n    try {\n        return jsonwebtoken_1.default.sign(Object.assign({}, data), 'secret', { expiresIn: '1h' });\n    }\n    catch (error) {\n        console.log(error);\n    }\n};\n\n\n//# sourceURL=webpack:///./src/middleware/auth.middleware.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ })

};