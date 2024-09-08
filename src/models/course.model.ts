import { Video } from "lucide-react";
import mongoose, {Schema, Document} from "mongoose"

interface Video extends Document {
    title: string;
    courseId: mongoose.ObjectId,
    videoUrl: string;
    isChecked: boolean;
}

const videoSchema: Schema<Video> = new Schema({
    title: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    isChecked: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true})

interface Category extends Document{
    title: string;
}

const categorySchema: Schema<Category> = new Schema({
    title: {
        type: String,
        required: true,
    },
})

interface Syllabus extends Document{
    title: string;
    description: string;
    video: Video;
}

const syllabusSchema: Schema<Syllabus> = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    video: {
        type: videoSchema,
        required: true,
    }
})

interface Course extends Document {
    courseTitle: string;
    instructor: mongoose.ObjectId;
    description: string;
    syllabus: Syllabus[];
    features: string[];
    category: Category;
    level: string;
    videos: Video[];
    price: number;
    discount: number;
    startIn: Date;
    language: string;
    duration: string;
}

const courseSchema: Schema<Course> = new Schema({
    courseTitle: {
        type: String,
        required:true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    description: String,
    syllabus: [
        {
            type: syllabusSchema,
            required: true,
        }
    ],
    features: [
        {
            type: String,
        }
    ],
    category: categorySchema,
    level: {
        type: String,
        enum: ["beginner", "intermediate", "advanced"],
        default: "beginner",
    },
}, {timestamps: true})

const CourseModel = mongoose.model<Course>("Course", courseSchema);

export default CourseModel;