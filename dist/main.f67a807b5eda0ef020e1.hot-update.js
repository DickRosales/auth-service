exports.id = "main";
exports.modules = {

/***/ "./src/auth/auth.router.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.router.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst auth_middleware_1 = __webpack_require__(/*! ../middleware/auth.middleware */ \"./src/middleware/auth.middleware.ts\");\n// import { Item } from \"./item.interface\";\n// import { Items } from \"./items.interface\";\nexports.authRouter = express_1.default.Router();\nexports.authRouter.post(\"/login\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        // await AuthService.findAll();\n        // const token = signJwt({\n        //   id: \"#{USER_ID}\",\n        //   email: \"#{USER_EMAIL}\",\n        //   first_name: \"#{USER_FIRST_NAME}\",\n        //   last_name: \"#{USER_LAST_NAME}\",\n        //   name: \"#{USER_NAME}\",\n        //   picture: \"#{USER_PROFILE_PICTURE}\",\n        //   roles: {\n        //     \"#{ROLE_NAME}\": \"#{ROLE_ID}\"\n        //   },\n        //   permissions: {\n        //     \"#{PERMISSION_NAME}\": \"#{PERMISSION_ID}\",\n        //   }\n        // })\n        res.status(200).send(Object.assign(Object.assign({}, req.body), { token: 'ok' }));\n    }\n    catch (e) {\n        res.status(404).send(e.message);\n    }\n}));\nexports.authRouter.post(\"/register\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    var _a;\n    try {\n        const token = (_a = req.header(\"authorization\")) === null || _a === void 0 ? void 0 : _a.split(' ')[1];\n        if (token) {\n            auth_middleware_1.verifyJwt(token);\n        }\n        res.status(200).send({ token });\n    }\n    catch (e) {\n        res.status(404).send(e.message);\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/auth/auth.router.ts?");

/***/ }),

/***/ "./src/auth/auth.schema.ts":
false,

/***/ "./src/auth/auth.service.ts":
false,

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst error_middleware_1 = __webpack_require__(/*! ./middleware/error.middleware */ \"./src/middleware/error.middleware.ts\");\nconst notFound_middleware_1 = __webpack_require__(/*! ./middleware/notFound.middleware */ \"./src/middleware/notFound.middleware.ts\");\nconst auth_router_1 = __webpack_require__(/*! ./auth/auth.router */ \"./src/auth/auth.router.ts\");\ndotenv.config();\nif (!process.env.PORT) {\n    process.exit(1);\n}\nconst PORT = parseInt(process.env.PORT, 10);\nconst app = express_1.default();\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use(express_1.default.json());\napp.use('/auth', auth_router_1.authRouter);\napp.use(error_middleware_1.errorHandler);\napp.use(notFound_middleware_1.notFoundHandler);\nconst server = app.listen(PORT, () => {\n    console.log(`Listening on port ${PORT}`);\n});\nconst connection = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        yield mongoose_1.default.connect('mongodb+srv://auth_user:Dodgers4ever@auth-service-f0txg.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });\n    }\n    catch (error) {\n        console.log(error);\n    }\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(() => server.close());\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};