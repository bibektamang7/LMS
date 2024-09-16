import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    theme: "light",
    isLoading: false,
}

const themeSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
        },

    }
});

export const { toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;