import mongoose, { Document } from "mongoose";
export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    profilePicture: string | null;
    createdAt: Date;
    updatedAt: Date;
    comparePassword: (password: string) => Promise<boolean>;
    omitPassword: () => Omit<UserDocument, "password">;
}
export type SafeUser = Document<Omit<UserDocument, "password">>;
declare const UserModel: mongoose.Model<UserDocument, {}, {}, {}, mongoose.Document<unknown, {}, UserDocument, {}, {}> & UserDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default UserModel;
//# sourceMappingURL=user.model.d.ts.map