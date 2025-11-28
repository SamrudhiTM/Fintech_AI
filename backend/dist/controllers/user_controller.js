"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUserController = void 0;
const async_handler_1 = require("../middlewares/async_handler");
const user_service_1 = require("../services/user-service");
const http_config_1 = require("../config/http_config");
// import { updateUserSchema } from "../validators/auth.validator";
exports.getCurrentUserController = (0, async_handler_1.asyncHandler)(async (req, res) => {
    const userId = req.user?._id;
    const user = await (0, user_service_1.findByIdUserService)(userId);
    return res.status(http_config_1.HTTPSTATUS.OK).json({
        message: "User fetched successfully",
        user,
    });
});
// export const updateUserController = asyncHandler(
//   async (req: Request, res: Response) => {
//     const body = updateUserSchema.parse(req.body);
//     const userId = req.user?._id;
//     const profilePic = req.file;
//     const user = await updateUserService(userId, body, profilePic);
//     return res.status(HTTPSTATUS.OK).json({
//       message: "User profile updated successfully",
//       data: user,
//     });
//   }
// );
//# sourceMappingURL=user_controller.js.map