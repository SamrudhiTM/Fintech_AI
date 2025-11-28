import { CreateTransactionType } from "../validators/transaction.validator";
export declare const createTransactionService: (body: CreateTransactionType, userId: string) => Promise<import("mongoose").Document<unknown, {}, import("../models/transaction.model").TransactionDocument, {}, {}> & import("../models/transaction.model").TransactionDocument & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=TransactionService.d.ts.map