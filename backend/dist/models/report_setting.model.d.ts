import mongoose from "mongoose";
export declare enum ReportFrequencyEnum {
    MONTHLY = "MONTHLY"
}
export interface ReportSettingDocument extends Document {
    userId: mongoose.Types.ObjectId;
    frequency: keyof typeof ReportFrequencyEnum;
    isEnabled: boolean;
    nextReportDate?: Date;
    lastSentDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}
declare const ReportSettingModel: mongoose.Model<ReportSettingDocument, {}, {}, {}, mongoose.Document<unknown, {}, ReportSettingDocument, {}, {}> & ReportSettingDocument & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
export default ReportSettingModel;
//# sourceMappingURL=report_setting.model.d.ts.map