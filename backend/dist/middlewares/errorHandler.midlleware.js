"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_config_1 = require("../config/http_config");
const app_error_1 = require("../utils/app_error");
const zod_1 = require("zod");
const error_code_enum_1 = require("../enums/error_code_enum");
const formatZodError = (res, error) => {
    const errors = error?.issues?.map((err) => ({
        field: err.path.join("."),
        message: err.message,
    }));
    return res.status(http_config_1.HTTPSTATUS.BAD_REQUEST).json({
        message: "Validation failed",
        errors: errors,
        errorCode: error_code_enum_1.ErrorCodeEnum.VALIDATION_ERROR,
    });
};
const errorHandler = (error, req, res, next) => {
    console.log("Error occurred on PATH:", req.path, "Error:", error);
    if (error instanceof zod_1.ZodError) {
        return formatZodError(res, error);
    }
    if (error instanceof app_error_1.AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
            errorCode: error.errorCode,
        });
    }
    return res.status(http_config_1.HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Error",
        error: error?.message || "Unknow error occurred",
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.midlleware.js.map