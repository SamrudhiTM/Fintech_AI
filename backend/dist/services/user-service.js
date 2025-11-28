"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByIdUserService = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
// import { UpdateUserType } from "../validators/user.validator";
const findByIdUserService = async (userId) => {
    const user = await user_model_1.default.findById(userId);
    return user?.omitPassword();
};
exports.findByIdUserService = findByIdUserService;
// export const updateUserService = async (
//   userId: string,
//   body: UpdateUserType,
//   profilePic?: Express.Multer.File
// ) => {
//   const user = await UserModel.findById(userId);
//   if (!user) throw new NotFoundException("User not found");
//   if (profilePic) {
//     user.profilePicture = profilePic.path;
//   }
//   user.set({
//     name: body.name,
//   });
//   await user.save();
//   return user.omitPassword();
// };
//# sourceMappingURL=user-service.js.map