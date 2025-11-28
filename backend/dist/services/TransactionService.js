"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionService = void 0;
const transaction_model_1 = __importDefault(require("../models/transaction.model"));
const helper_1 = require("../utils/helper");
const createTransactionService = async (body, userId) => {
    let nextRecurringDate;
    const currentDate = new Date();
    if (body.isRecurring && body.recurringInterval) {
        const calulatedDate = (0, helper_1.calculateNextOccurrence)(body.date, body.recurringInterval);
        nextRecurringDate = calulatedDate < currentDate
            ? (0, helper_1.calculateNextOccurrence)(currentDate, body.recurringInterval) : calulatedDate;
    }
    const transaction = await transaction_model_1.default.create({
        ...body,
        userId,
        category: body.category,
        amount: Number(body.amount),
        isRecurring: body.isRecurring || false,
        recurringInterval: body.recurringInterval || null,
        nextRecurringDate,
        lastProcessed: null,
    });
    return transaction;
};
exports.createTransactionService = createTransactionService;
//# sourceMappingURL=TransactionService.js.map