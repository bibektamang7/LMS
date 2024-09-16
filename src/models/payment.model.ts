import mongoose,{Schema,Document} from "mongoose"

interface Payment extends Document {
    userId: mongoose.ObjectId;
    courseId: mongoose.ObjectId;
    paymentAmount: number;
    paymentState: string;
    paymentMethod: string;
    transactionId: string;
    pidx: string;
    dataFromVerificationReq: object;
    apiQueryFromUser: object
}

const paymentSchema:Schema<Payment> = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    paymentAmount: {
        type: Number,
        required: true,
    },
    paymentState: {
        type: String,
        enum: ["Failed", "Success", "Pending"],
        default: "Pending",
    },
    paymentMethod: {
        type: String,
        enum: ["khalti", "esewa", "ImePay", "Banking"],
        required: true,
    },
    transactionId: {
        type: String,
        unique: true,
    },
    pidx: {
        type: String, 
        unique: true,
    },
    dataFromVerificationReq: {
        type: Object
    },
    apiQueryFromUser: {
        type: Object,
    }
}, { timestamps: true });

const PaymentModel = (mongoose.models.Payment as mongoose.Model<Payment>) || mongoose.model<Payment>("Payment", paymentSchema);
export default PaymentModel;