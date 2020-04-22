exports.id = "main";
exports.modules = {

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
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst auth_schema_1 = __webpack_require__(/*! ./auth.schema */ \"./src/auth/auth.schema.ts\");\nconst bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ \"bcrypt\"));\nexports.findAll = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        return yield auth_schema_1.User.find();\n    }\n    catch (error) {\n        console.log(error);\n    }\n});\nexports.find = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        return yield auth_schema_1.User.find({ id });\n    }\n    catch (error) {\n        console.log(error);\n    }\n});\nexports.create = ({ email, first_name, last_name, picture, password }) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const hash = yield bcrypt_1.default.hashSync(password, 10);\n        const newUser = new auth_schema_1.User({ email, first_name, last_name, picture, hash });\n        // const match = await bcrypt.compare(password, user.passwordHash);\n        return yield newUser.save();\n    }\n    catch (error) {\n        console.log(error);\n    }\n});\n// export const update = async (updatedItem: Item): Promise<void> => {...};\n// export const remove = async (id: number): Promise<void> => {\n//   const record: Item = items[id];\n//   if (record) {\n//     delete items[id];\n//     return;\n//   }\n//   throw new Error(\"No record found to delete\");\n// };\n\n\n//# sourceURL=webpack:///./src/auth/auth.service.ts?");

/***/ })

};