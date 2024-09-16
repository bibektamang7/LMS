import { profile } from "console";
import mongoose, { Schema, Document } from "mongoose";

// Define the User interface extending Document
interface User extends Document {
  username: string;
  email: string;
  password: string;
  emailVerificationCode?: string;  // Make optional for cases where it's not immediately populated
  emailVerificationExpiry?: Date;  // Same for expiry
  isVerified: boolean;
  userType: string;
  expertise: string[],
  profile: String,
  bio: String,
  enrolledCourses: mongoose.ObjectId[]
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
    userType: {
      type: String,
      enum: ["user", "instructor", "admin"],
      default: "user", // Default userType to "user"
    },
    emailVerificationCode: {
      type: String,
      default: null, // Set default value if not provided
    },
    isVerified: {
      type: Boolean,
      default: false, // Default to false until email verification
    },
    emailVerificationExpiry: {
      type: Date,
      default: null, // Same for expiry date
    },
    profile: String,
    bio: String,
    expertise: [
      {
        type: String
      }
    ],
    enrolledCourses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      }
    ]
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Check if the User model exists before defining it
const UserModel = mongoose.models?.User || mongoose.model<User>('User', userSchema);
// 
export default UserModel;
