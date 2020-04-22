exports.id = "main";
exports.modules = {

/***/ "./src/middleware/auth.middleware.ts":
/*!*******************************************!*\
  !*** ./src/middleware/auth.middleware.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv.config();\nexports.verifyJwt = (token) => {\n    try {\n        var decoded = jsonwebtoken_1.default.verify(token, 'wrong-secret');\n        console.log(decoded);\n    }\n    catch (error) {\n        console.log(error);\n    }\n};\nexports.signJwt = (data) => {\n    try {\n        return jsonwebtoken_1.default.sign(Object.assign({}, data), 'secret', { expiresIn: '1h' });\n    }\n    catch (error) {\n        console.log(error);\n    }\n};\n\n\n//# sourceURL=webpack:///./src/middleware/auth.middleware.ts?");

/***/ })

};