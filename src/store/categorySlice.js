import { getCategoryApi } from "@/api/categoryApi";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getCategories = createAsyncThunk(
    "category/getCategory",
    async (token) => {
        const res = await getCategoryApi(token);
        console.log(res)
        return res;
    }
)

const slice = createSlice({
    name: "category",
    initialState: {
        categories: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload.categories;
            console.log("state.categories => ",action.payload.categories)
        });
    }
})

export default slice.reducer;
