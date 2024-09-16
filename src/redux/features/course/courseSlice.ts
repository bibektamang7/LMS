import {createSlice} from "@reduxjs/toolkit"
import { Course } from "@/types/Course";

interface CourseState {
    courses: Course[],
    paymentCourse: any,
}

const initialState: CourseState = {
    courses: [],
    paymentCourse: {
    }
}
const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state, action) => {
            state.courses.push(...action.payload);
        },
        deleteCourse: (state, action) => {
            state.courses = state.courses.filter((course: Course) => course._id !== action.payload.courseId);
        },
        addPaymentCourse: (state,action) => {
            state.paymentCourse = action.payload;
        }
    }
    
})

export const { addCourse, deleteCourse, addPaymentCourse } = courseSlice.actions;

export default courseSlice.reducer;