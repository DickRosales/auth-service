exports.id = "main";
exports.modules = {

/***/ "./src/auth/auth.router.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.router.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nconst auth_middleware_1 = __webpack_require__(/*! ../middleware/auth.middleware */ \"./src/middleware/auth.middleware.ts\");\nconst AuthService = __importStar(__webpack_require__(/*! ./auth.service */ \"./src/auth/auth.service.ts\"));\nexports.authRouter = express_1.default.Router();\nexports.authRouter.post(\"/in\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        let { email, password } = req.body;\n        let foundUser = yield AuthService.find({ email });\n        if (!foundUser)\n            throw new Error('user not found');\n        const passwordValid = yield bcrypt_1.default.compare(password, foundUser.hash);\n        if (!passwordValid)\n            throw new Error('password not valid');\n        const token = auth_middleware_1.signJwt({\n            id: foundUser._id,\n            email: foundUser.email,\n            first_name: foundUser.first_name,\n            last_name: foundUser.last_name,\n            picture: foundUser.picture\n        });\n        res.status(200).send({ userInfo: foundUser, token: token });\n    }\n    catch (error) {\n        console.log('endpoint: /auth/in', error);\n        res.status(404).send(error.message);\n    }\n}));\nexports.authRouter.post(\"/up\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        let { email, first_name, last_name, picture, password } = req.body;\n        let newUser = yield AuthService.create({ email, first_name, last_name, picture, password });\n        const token = auth_middleware_1.signJwt({\n            id: newUser._id,\n            email: newUser.email,\n            first_name: newUser.first_name,\n            last_name: newUser.last_name,\n            picture: newUser.picture\n        });\n        res.status(200).send({ userInfo: newUser, token: token });\n    }\n    catch (error) {\n        console.log('endpoint: /auth/up', error);\n        res.status(404).send(error.message);\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/auth/auth.router.ts?");

/***/ }),

/***/ "./src/middleware/auth.middleware.ts":
/*!*******************************************!*\
  !*** ./src/middleware/auth.middleware.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv.config();\nexports.verifyJwt = (token) => {\n    try {\n        var decoded = jsonwebtoken_1.default.verify(token, 'secret');\n        // const token = req.header(\"authorization\")?.split(' ')[1];\n        // if(token) {\n        //   verifyJwt(token);\n        // }\n        console.log(decoded);\n    }\n    catch (error) {\n        console.log(error);\n    }\n};\nexports.signJwt = (data) => {\n    try {\n        return jsonwebtoken_1.default.sign(Object.assign({}, data), 'secret', { expiresIn: '1h' });\n    }\n    catch (error) {\n        console.log(error);\n    }\n};\n\n\n//# sourceURL=webpack:///./src/middleware/auth.middleware.ts?");

/***/ })

};