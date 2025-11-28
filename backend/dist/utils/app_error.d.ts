import { HttpStatusCodeType } from "../config/http_config";
import { ErrorCodeEnumType } from "../enums/error_code_enum";
export declare class AppError extends Error {
    statusCode: HttpStatusCodeType;
    errorCode?: ErrorCodeEnumType;
    constructor(message: string, statusCode?: number, errorCode?: ErrorCodeEnumType);
}
export declare class HttpException extends AppError {
    constructor(message: string | undefined, statusCode: HttpStatusCodeType, errorCode?: ErrorCodeEnumType);
}
export declare class NotFoundException extends AppError {
    constructor(message?: string, errorCode?: ErrorCodeEnumType);
}
export declare class BadRequestException extends AppError {
    constructor(message?: string, errorCode?: ErrorCodeEnumType);
}
export declare class UnauthorizedException extends AppError {
    constructor(message?: string, errorCode?: ErrorCodeEnumType);
}
export declare class InternalServerException extends AppError {
    constructor(message?: string, errorCode?: ErrorCodeEnumType);
}
//# sourceMappingURL=app_error.d.ts.map