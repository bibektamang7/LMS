import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    instructors: [],
    user: {
        enrolledCourses: []
    }
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addInstructors: (state, action) => {
            state.instructors.push(action.payload);
        },
        addUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { addInstructors, addUser} = userSlice.actions;
export default userSlice.reducer;