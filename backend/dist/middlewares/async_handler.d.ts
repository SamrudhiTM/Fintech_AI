import { Request, Response, NextFunction } from "express";
type AsyncControllerType = (req: Request, res: Response, next: NextFunction) => Promise<any>;
export declare const asyncHandler: (controller: AsyncControllerType) => AsyncControllerType;
export {};
//# sourceMappingURL=async_handler.d.ts.map