import mongoose from "mongoose";
export declare enum ReportStatusEnum {
    SENT = "SENT",
    PENDING = "PENDING",
    FAILED = "FAILED",
    NO_ACTIVITY = "NO_ACTIVITY"
}
export interface ReportDocument extends Document {
    userId: mongoose.Types.ObjectId;
    period: string;
    sentDate: Date;
    status: keyof typeof ReportStatusEnum;
    createdAt: Date;
    updatedAt: Date;
}
declare const ReportModel: mongoose.Model<ReportDocument, {}, {}, {}, mongoose.Document<unknown, {}, ReportDocument, {}, {}> & ReportDocument & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export default ReportModel;
//# sourceMappingURL=report.model.d.ts.map