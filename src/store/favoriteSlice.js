
import { getFavoriteApi } from "@/api/favoriteApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const getFavorite = createAsyncThunk(
    "favorite/getFavorite",
    async ({ token, id }) => {
        const res = await getFavoriteApi(token, id);
        return res;
    }
)
export const addProduct = createAsyncThunk(
    "favorite/addProduct",
    async ({ token, data }) => {
        const res = await createProductApi(token, data);
        return res;
    }
)

const slice = createSlice({
    name: "favorite",
    initialState: {
        favorites: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getFavorite.fulfilled, (state, action) => {
            state.favorites = action.payload.whislist
        });
    }
})

export default slice.reducer;

export const findProduct = (products, id) => {
    return products.find(product => product._id === id)
}
