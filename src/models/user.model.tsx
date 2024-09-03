import mongoose,{Schema,Document} from "mongoose"

interface User extends Document{
    email: string,
    password: string,
}
const userSchema: Schema<User> = new Schema({
    email: {
        type: String,
        match: [/.+\@.+\..+/,'please use a valid email address'],
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true });

// you need to check first whether their is already model

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema);

export default UserModel

