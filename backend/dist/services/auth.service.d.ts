import { LoginSchemaType, RegisterSchemaType } from "../validators/auth.validator";
import { SafeUser } from "../models/user.model";
export declare const registerService: (body: RegisterSchemaType) => Promise<void>;
export declare const loginService: (body: LoginSchemaType) => Promise<{
    user: SafeUser;
    accessToken: string;
    expiresAt: number | undefined;
    reportSetting: unknown;
}>;
//# sourceMappingURL=auth.service.d.ts.map