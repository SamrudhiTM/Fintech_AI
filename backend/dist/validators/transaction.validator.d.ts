import { z } from "zod";
import { PaymentMethodEnum, RecurringIntervalEnum, TransactionTypeEnum } from "../models/transaction.model";
export declare const transactionIdSchema: z.ZodString;
export declare const baseTransactionSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<[TransactionTypeEnum.INCOME, TransactionTypeEnum.EXPENSE]>;
    amount: z.ZodNumber;
    category: z.ZodString;
    date: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, Date, string | Date>;
    isRecurring: z.ZodDefault<z.ZodBoolean>;
    recurringInterval: z.ZodOptional<z.ZodNullable<z.ZodEnum<[RecurringIntervalEnum.DAILY, RecurringIntervalEnum.WEEKLY, RecurringIntervalEnum.MONTHLY, RecurringIntervalEnum.YEARLY]>>>;
    receiptUrl: z.ZodOptional<z.ZodString>;
    paymentMethod: z.ZodDefault<z.ZodEnum<[PaymentMethodEnum.CARD, PaymentMethodEnum.BANK_TRANSFER, PaymentMethodEnum.MOBILE_PAYMENT, PaymentMethodEnum.AUTO_DEBIT, PaymentMethodEnum.CASH, PaymentMethodEnum.OTHER]>>;
}, "strip", z.ZodTypeAny, {
    type: TransactionTypeEnum;
    date: Date;
    title: string;
    amount: number;
    category: string;
    isRecurring: boolean;
    paymentMethod: PaymentMethodEnum;
    description?: string | undefined;
    receiptUrl?: string | undefined;
    recurringInterval?: RecurringIntervalEnum | null | undefined;
}, {
    type: TransactionTypeEnum;
    date: string | Date;
    title: string;
    amount: number;
    category: string;
    description?: string | undefined;
    receiptUrl?: string | undefined;
    recurringInterval?: RecurringIntervalEnum | null | undefined;
    isRecurring?: boolean | undefined;
    paymentMethod?: PaymentMethodEnum | undefined;
}>;
export declare const createTransactionSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<[TransactionTypeEnum.INCOME, TransactionTypeEnum.EXPENSE]>;
    amount: z.ZodNumber;
    category: z.ZodString;
    date: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, Date, string | Date>;
    isRecurring: z.ZodDefault<z.ZodBoolean>;
    recurringInterval: z.ZodOptional<z.ZodNullable<z.ZodEnum<[RecurringIntervalEnum.DAILY, RecurringIntervalEnum.WEEKLY, RecurringIntervalEnum.MONTHLY, RecurringIntervalEnum.YEARLY]>>>;
    receiptUrl: z.ZodOptional<z.ZodString>;
    paymentMethod: z.ZodDefault<z.ZodEnum<[PaymentMethodEnum.CARD, PaymentMethodEnum.BANK_TRANSFER, PaymentMethodEnum.MOBILE_PAYMENT, PaymentMethodEnum.AUTO_DEBIT, PaymentMethodEnum.CASH, PaymentMethodEnum.OTHER]>>;
}, "strip", z.ZodTypeAny, {
    type: TransactionTypeEnum;
    date: Date;
    title: string;
    amount: number;
    category: string;
    isRecurring: boolean;
    paymentMethod: PaymentMethodEnum;
    description?: string | undefined;
    receiptUrl?: string | undefined;
    recurringInterval?: RecurringIntervalEnum | null | undefined;
}, {
    type: TransactionTypeEnum;
    date: string | Date;
    title: string;
    amount: number;
    category: string;
    description?: string | undefined;
    receiptUrl?: string | undefined;
    recurringInterval?: RecurringIntervalEnum | null | undefined;
    isRecurring?: boolean | undefined;
    paymentMethod?: PaymentMethodEnum | undefined;
}>;
export declare const updateTransactionSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    type: z.ZodOptional<z.ZodEnum<[TransactionTypeEnum.INCOME, TransactionTypeEnum.EXPENSE]>>;
    amount: z.ZodOptional<z.ZodNumber>;
    category: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, Date, string | Date>>;
    isRecurring: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    recurringInterval: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<[RecurringIntervalEnum.DAILY, RecurringIntervalEnum.WEEKLY, RecurringIntervalEnum.MONTHLY, RecurringIntervalEnum.YEARLY]>>>>;
    receiptUrl: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    paymentMethod: z.ZodOptional<z.ZodDefault<z.ZodEnum<[PaymentMethodEnum.CARD, PaymentMethodEnum.BANK_TRANSFER, PaymentMethodEnum.MOBILE_PAYMENT, PaymentMethodEnum.AUTO_DEBIT, PaymentMethodEnum.CASH, PaymentMethodEnum.OTHER]>>>;
}, "strip", z.ZodTypeAny, {
    type?: TransactionTypeEnum | undefined;
    date?: Date | undefined;
    description?: string | undefined;
    title?: string | undefined;
    amount?: number | undefined;
    category?: string | undefined;
    receiptUrl?: string | undefined;
    recurringInterval?: RecurringIntervalEnum | null | undefined;
    isRecurring?: boolean | undefined;
    paymentMethod?: PaymentMethodEnum | undefined;
}, {
    type?: TransactionTypeEnum | undefined;
    date?: string | Date | undefined;
    description?: string | undefined;
    title?: string | undefined;
    amount?: number | undefined;
    category?: string | undefined;
    receiptUrl?: string | undefined;
    recurringInterval?: RecurringIntervalEnum | null | undefined;
    isRecurring?: boolean | undefined;
    paymentMethod?: PaymentMethodEnum | undefined;
}>;
export type CreateTransactionType = z.infer<typeof createTransactionSchema>;
export type UpdateTransactionType = z.infer<typeof updateTransactionSchema>;
//# sourceMappingURL=transaction.validator.d.ts.map