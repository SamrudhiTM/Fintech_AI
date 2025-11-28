"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const gte_env_1 = require("../utils/gte_env");
const envConfig = () => ({
    NODE_ENV: (0, gte_env_1.getEnv)("NODE_ENV", "development"),
    PORT: (0, gte_env_1.getEnv)("PORT", "8000"),
    BASE_PATH: (0, gte_env_1.getEnv)("BASE_PATH", "/api"),
    MONGO_URI: (0, gte_env_1.getEnv)("MONGO_URI"),
    JWT_SECRET: (0, gte_env_1.getEnv)("JWT_SECRET", "secert_jwt"),
    JWT_EXPIRES_IN: (0, gte_env_1.getEnv)("JWT_EXPIRES_IN", "15m"),
    JWT_REFRESH_SECRET: (0, gte_env_1.getEnv)("JWT_REFRESH_SECRET", "secert_jwt_refresh"),
    JWT_REFRESH_EXPIRES_IN: (0, gte_env_1.getEnv)("JWT_REFRESH_EXPIRES_IN", "7d"),
    // // GEMINI_API_KEY: getEnv("GEMINI_API_KEY"),
    // CLOUDINARY_CLOUD_NAME: getEnv("CLOUDINARY_CLOUD_NAME"),
    // CLOUDINARY_API_KEY: getEnv("CLOUDINARY_API_KEY"),
    // CLOUDINARY_API_SECRET: getEnv("CLOUDINARY_API_SECRET"),
    // RESEND_API_KEY: getEnv("RESEND_API_KEY"),
    // RESEND_MAILER_SENDER: getEnv("RESEND_MAILER_SENDER", ""),
    FRONTEND_ORIGIN: (0, gte_env_1.getEnv)("FRONTEND_ORIGIN", "localhost"),
});
exports.Env = envConfig();
//# sourceMappingURL=evn_config.js.map