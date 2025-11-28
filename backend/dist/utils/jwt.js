"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signJwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const evn_config_1 = require("../config/evn_config");
const defaults = {
    audience: ["user"],
};
const accessTokenSignOptions = {
    expiresIn: evn_config_1.Env.JWT_EXPIRES_IN,
    secret: evn_config_1.Env.JWT_SECRET,
};
const signJwtToken = (payload, options) => {
    const isAccessToken = !options || options === accessTokenSignOptions;
    const { secret, ...opts } = options || accessTokenSignOptions;
    const token = jsonwebtoken_1.default.sign(payload, secret, {
        ...defaults,
        ...opts,
    });
    const expiresAt = isAccessToken
        ? jsonwebtoken_1.default.decode(token)?.exp * 1000
        : undefined;
    return {
        token,
        expiresAt,
    };
};
exports.signJwtToken = signJwtToken;
//# sourceMappingURL=jwt.js.map