"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth_controller");
const authroutes = (0, express_1.Router)();
authroutes.post("/register", auth_controller_1.RegisterController);
authroutes.post("/login", auth_controller_1.loginController);
exports.default = authroutes;
//# sourceMappingURL=auth.route.js.map