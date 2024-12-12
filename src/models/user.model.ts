import mongoose, { Schema, Document } from "mongoose";
// Define the User interface extending Document
interface User extends Document {
  _id: mongoose.Types.ObjectId,
  username: string;
  email: string;
  password: string;
  role: string;
  expertise: string[],
  avatar: String,
  bio: String,
  enrolledCourses: mongoose.ObjectId[]
  createdAt: Date,
  updatedAt: Date,
}

// Define the schema
const userSchema: Schema<User> = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Please use a valid email address"],
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: true, // Ensure password is hashed before saving to DB
    },
    role: {
      type: String,
      enum: ["user", "instructor", "admin"],
      default: "user", // Default userType to "user"
    },
    avatar: String,
    bio: String,
    expertise: [
      {
        type: String
      }
    ],
    enrolledCourses: [
      {
        type: Schema.Types.ObjectId,
        ref: () => "Course",
      }
    ]
  },
  { timestamps: true } 
);

// Check if the User model exists before defining it
const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', userSchema);
// 
export default UserModel;
