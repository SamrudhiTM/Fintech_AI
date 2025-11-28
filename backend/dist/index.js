"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
require("./config/passport");
const http_config_1 = require("./config/http_config");
const express_1 = __importDefault(require("express"));
const evn_config_1 = require("./config/evn_config");
const errorHandler_midlleware_1 = require("./middlewares/errorHandler.midlleware");
const async_handler_1 = require("./middlewares/async_handler");
const app_error_1 = require("./utils/app_error");
const database_config_1 = __importDefault(require("./config/database_config"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = require("./config/passport");
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const transaction_routes_1 = __importDefault(require("./routes/transaction-routes"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const BASE_PATH = evn_config_1.Env.BASE_PATH;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(passport_1.default.initialize());
app.use((0, cors_1.default)({
    origin: evn_config_1.Env.FRONTEND_ORIGIN,
    credentials: true,
}));
console.log("MONGO_URI =", process.env.MONGO_URI);
app.get("/", (0, async_handler_1.asyncHandler)(async (req, res, next) => {
    throw new app_error_1.BadRequestException("This is a test error");
    res.status(http_config_1.HTTPSTATUS.OK).json({
        message: "Hello Subcribe to the channel",
    });
}));
app.use(`${BASE_PATH}/auth`, auth_route_1.default);
app.use(`${BASE_PATH}/user`, passport_2.passportAuthenticateJwt, user_routes_1.default);
app.use(`${BASE_PATH}/transaction`, passport_2.passportAuthenticateJwt, transaction_routes_1.default);
app.use(errorHandler_midlleware_1.errorHandler);
app.listen(evn_config_1.Env.PORT, async () => {
    await (0, database_config_1.default)();
    console.log(`server is running on port ${evn_config_1.Env.PORT} in ${evn_config_1.Env.NODE_ENV} mode`);
});
//# sourceMappingURL=index.js.map