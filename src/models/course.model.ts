import mongoose, {Schema, Document} from "mongoose"

// interface Video extends Document {
//     title: string;
//     courseId: mongoose.ObjectId,
//     videoUrl: string;
//     isChecked: boolean;
//     videoDescription: string;
// }

// const videoSchema: Schema<Video> = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     videoUrl: {
//         type: String,
//         required: true,
//     },
//     isChecked: {
//         type: Boolean,
//         default: false,
//     },
//     videoDescription: String,
// }, {timestamps: true})

interface Category extends Document{
    title: string;
}

// const categorySchema: Schema<Category> = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
// })

interface Syllabus extends Document{
    title: string;
    description: string;
    video: string;
}

const syllabusSchema: Schema<Syllabus> = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    video: {
        type: String,
        required: true,
    }
})

interface Course extends Document {
    courseTitle: string;
    instructor: mongoose.ObjectId;
    description: string;
    syllabus: Syllabus[];
    features: string[];
    category: string;
    level: string;
    price: number;
    discount: number;
    startIn: Date;
    language: string;
    endDate: Date;
    thumbnail: String;
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
    thumbnail: {
        type: String,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    instructor: {
        type: Schema.Types.ObjectId,
        ref: () => "User",
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
    category: String,
    level: {
        type: String,
        enum: ["beginner", "intermediate", "advanced"],
        default: "beginner",
    },
    startIn: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    language: {
        type: String,
        enum: ["Nepali", "Hindi", "English"],
        default: "Nepali"
    }
}, {timestamps: true})

const CourseModel = (mongoose.models.Course as mongoose.Model<Course>) || mongoose.model<Course>("Course", courseSchema);

export default CourseModel;