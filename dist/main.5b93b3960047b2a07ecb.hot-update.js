exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst error_middleware_1 = __webpack_require__(/*! ./middleware/error.middleware */ \"./src/middleware/error.middleware.ts\");\nconst notFound_middleware_1 = __webpack_require__(/*! ./middleware/notFound.middleware */ \"./src/middleware/notFound.middleware.ts\");\nconst auth_router_1 = __webpack_require__(/*! ./auth/auth.router */ \"./src/auth/auth.router.ts\");\ndotenv.config();\nif (!process.env.PORT) {\n    process.exit(1);\n}\nconst PORT = parseInt(process.env.PORT, 10);\nconst app = express_1.default();\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use(express_1.default.json());\napp.use('/auth', auth_router_1.authRouter);\napp.use(error_middleware_1.errorHandler);\napp.use(notFound_middleware_1.notFoundHandler);\nconst server = app.listen(PORT, () => {\n    console.log(`Listening on port ${PORT}`);\n});\n//Set up default mongoose connection\n// var mongoDB = 'mongodb://127.0.0.1/my_database';\nmongoose_1.default.connect('mongodb+srv://auth_user:Dodgers4ever@auth-service-f0txg.gcp.mongodb.net/mixlab?retryWrites=true&w=majority', { useNewUrlParser: true });\n// mongodb+srv://auth_user:<password>@auth-service-f0txg.gcp.mongodb.net/test?retryWrites=true&w=majority\n//Get the default connection\nvar db = mongoose_1.default.connection;\nconsole.log(db);\n//Bind connection to error event (to get notification of connection errors)\ndb.on('error', console.error.bind(console, 'MongoDB connection error:'));\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(() => server.close());\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};