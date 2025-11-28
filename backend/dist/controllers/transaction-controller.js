"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionController = void 0;
const async_handler_1 = require("../middlewares/async_handler");
const http_config_1 = require("../config/http_config");
const transaction_validator_1 = require("../validators/transaction.validator");
const TransactionService_1 = require("../services/TransactionService");
exports.createTransactionController = (0, async_handler_1.asyncHandler)(async (req, res) => {
    const body = transaction_validator_1.createTransactionSchema.parse(req.body);
    const userId = req.user?._id;
    const result = await (0, TransactionService_1.createTransactionService)(body, userId);
    return res.status(http_config_1.HTTPSTATUS.CREATED).json({
        message: "Transaction created succesfully",
        data: result,
    });
});
//# sourceMappingURL=transaction-controller.js.map