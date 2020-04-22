exports.id = "main";
exports.modules = {

/***/ "./src/auth/auth.router.ts":
/*!*********************************!*\
  !*** ./src/auth/auth.router.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\n// import * as ItemService from \"./items.service\";\n// import { Item } from \"./item.interface\";\n// import { Items } from \"./items.interface\";\nexports.authRouter = express_1.default.Router();\nexports.authRouter.get(\"/login\", (req, res) => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        // const items: Items = await ItemService.findAll();\n        res.status(200).send(req.body);\n    }\n    catch (e) {\n        res.status(404).send(e.message);\n    }\n}));\n\n\n//# sourceURL=webpack:///./src/auth/auth.router.ts?");

/***/ })

};