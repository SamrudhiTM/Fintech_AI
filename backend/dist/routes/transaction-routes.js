"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transaction_controller_1 = require("../controllers/transaction-controller");
const transactionRoutes = (0, express_1.Router)();
transactionRoutes.post("/create", transaction_controller_1.createTransactionController);
exports.default = transactionRoutes;
//# sourceMappingURL=transaction-routes.js.map