import mongoose, { Schema, Document } from "mongoose";
interface Syllabus extends Document {
    title: string;
    description?: string;
    video: mongoose.Schema.Types.ObjectId; // Ref to Video Schema
}

const syllabusSchema: Schema<Syllabus> = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    video: { type: Schema.Types.ObjectId, ref: "Video", required: true },  // Reference to Video
}, { timestamps: true });
