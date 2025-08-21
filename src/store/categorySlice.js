import { createCategoryApi, getCategoryApi, removeCategoryApi } from "@/api/categoryApi";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getCategories = createAsyncThunk(
    "category/getCategory",
    async (token) => {
        const res = await getCategoryApi(token);
        console.log(res)
        return res;
    }
)

export const addCategory = createAsyncThunk(
    "category/addCategory",
    async ({ token, data }) => {
        const res = await createCategoryApi(token, data);
        return res;
    }
)

export const deleteCategory = createAsyncThunk(
    "category/deleteCategory",
    async ({ token, id }) => {
        const res = await removeCategoryApi(token, id);
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
        });
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.categories.push(action.payload.category);
        });
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            const deletedId = action.meta.arg.id;
            state.categories = state.categories.filter(category => category._id !== deletedId);
            // state.categories.push(action.payload.category);
        });

    }
})

export default slice.reducer;
