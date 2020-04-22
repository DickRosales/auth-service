exports.id = "main";
exports.modules = {

/***/ "./src/auth/auth.router.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.router.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst auth_middleware_1 = __webpack_require__(/*! ../middleware/auth.middleware */ \"./src/middleware/auth.middleware.ts\");\n// import * as ItemService from \"./items.service\";\n// import { Item } from \"./item.interface\";\n// import { Items } from \"./items.interface\";\nexports.authRouter = express_1.default.Router();\nexports.authRouter.post(\"/login\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        // const items: Items = await ItemService.findAll();\n        const token = auth_middleware_1.signJwt({\n            id: \"#{USER_ID}\",\n            email: \"#{USER_EMAIL}\",\n            first_name: \"#{USER_FIRST_NAME}\",\n            last_name: \"#{USER_LAST_NAME}\",\n            name: \"#{USER_NAME}\",\n            picture: \"#{USER_PROFILE_PICTURE}\",\n            roles: {\n                \"#{ROLE_NAME}\": \"#{ROLE_ID}\"\n            },\n            permissions: {\n                \"#{PERMISSION_NAME}\": \"#{PERMISSION_ID}\",\n            }\n        });\n        res.status(200).send(Object.assign(Object.assign({}, req.body), { token: token }));\n    }\n    catch (e) {\n        res.status(404).send(e.message);\n    }\n}));\nexports.authRouter.post(\"/register\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        // const items: Items = await ItemService.findAll();\n        res.status(200).send(Object.assign(Object.assign({}, req.body), { message: 'success' }));\n    }\n    catch (e) {\n        res.status(404).send(e.message);\n    }\n}));\n// id,\n// name,\n// password,\n// email,\n// password,\n// date_created\n\n\n//# sourceURL=webpack:///./src/auth/auth.router.ts?");

/***/ }),

/***/ "./src/middleware/auth.middleware.ts":
/*!*******************************************!*\
  !*** ./src/middleware/auth.middleware.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv.config();\nexports.verifyJwt = () => {\n    try {\n        var decoded = jsonwebtoken_1.default.verify('ok', 'wrong-secret');\n        console.log(decoded);\n    }\n    catch (error) {\n        console.log(error);\n    }\n};\nexports.signJwt = (data) => {\n    try {\n        return jsonwebtoken_1.default.sign(Object.assign({}, data), 'secret', { expiresIn: '1h' });\n    }\n    catch (error) {\n        console.log(error);\n    }\n};\n\n\n//# sourceURL=webpack:///./src/middleware/auth.middleware.ts?");

/***/ })

};