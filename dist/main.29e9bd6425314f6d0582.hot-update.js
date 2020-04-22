exports.id = "main";
exports.modules = {

/***/ "./src/auth/auth.router.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.router.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst auth_middleware_1 = __webpack_require__(/*! ../middleware/auth.middleware */ \"./src/middleware/auth.middleware.ts\");\nconst mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nexports.authRouter = express_1.default.Router();\nexports.authRouter.post(\"/login\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        // await AuthService.findAll();\n        // const token = signJwt({\n        //   id: \"#{USER_ID}\",\n        //   email: \"#{USER_EMAIL}\",\n        //   first_name: \"#{USER_FIRST_NAME}\",\n        //   last_name: \"#{USER_LAST_NAME}\",\n        //   name: \"#{USER_NAME}\",\n        //   picture: \"#{USER_PROFILE_PICTURE}\",\n        //   roles: {\n        //     \"#{ROLE_NAME}\": \"#{ROLE_ID}\"\n        //   },\n        //   permissions: {\n        //     \"#{PERMISSION_NAME}\": \"#{PERMISSION_ID}\",\n        //   }\n        // })\n        console.log(mongoose_1.connection);\n        // listingsAndReviews\n        res.status(200).send(Object.assign(Object.assign({}, req.body), { token: 'ok' }));\n    }\n    catch (e) {\n        res.status(404).send(e.message);\n    }\n}));\nexports.authRouter.post(\"/register\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    var _a;\n    try {\n        const token = (_a = req.header(\"authorization\")) === null || _a === void 0 ? void 0 : _a.split(' ')[1];\n        if (token) {\n            auth_middleware_1.verifyJwt(token);\n        }\n        res.status(200).send({ token });\n    }\n    catch (e) {\n        res.status(404).send(e.message);\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/auth/auth.router.ts?");

/***/ })

};