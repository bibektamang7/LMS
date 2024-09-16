import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAddCourseWidgetOpen: false,
}

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        openAddCourseWidget(state) {
            state.isAddCourseWidgetOpen = true
        },
        closeOpenAddCourseWidget(state) {
            state.isAddCourseWidgetOpen = false;
        }
    }
});

export const { openAddCourseWidget, closeOpenAddCourseWidget} = dashboardSlice.actions;
export default dashboardSlice.reducer