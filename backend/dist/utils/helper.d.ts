import { RecurringIntervalEnum } from "../models/transaction.model";
export declare function calulateNextReportDate(lastSentDate?: Date): Date;
export declare function calculateNextOccurrence(date: Date, recurringInterval: keyof typeof RecurringIntervalEnum): Date;
//# sourceMappingURL=helper.d.ts.map