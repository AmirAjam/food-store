
import { AddToFavoriteApi, getFavoriteApi } from "@/api/favoriteApi";
import { findArrayIndex } from "@/utils/utils";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const getFavorite = createAsyncThunk(
    "favorite/getFavorite",
    async ({ token, id }) => {
        const res = await getFavoriteApi(token, id);
        return res;
    }
)
export const addToFavorite = createAsyncThunk(
    "favorite/addToFavorite",
    async ({ token, productId }) => {
        const res = await AddToFavoriteApi(token, productId);
        return res;
    }
)
export const removeFromFavorite = createAsyncThunk(
    "favorite/removeFromFavorite",
    async ({ token, productId }) => {
        const res = await AddToFavoriteApi(token, productId);
        return res;
    }
)

const slice = createSlice({
    name: "favorite",
    initialState: {
        favourite: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getFavorite.fulfilled, (state, action) => {
            state.favourite = action.payload.whislist
        });

        builder.addCase(addToFavorite.fulfilled, (state, action) => {
            state.favourite.push(action.payload.product)
        });

        builder.addCase(removeFromFavorite.fulfilled, (state, action) => {
            const productId = action.meta.arg.productId;
            state.favourite = state.favourite.filter(item => item !== productId)
        });
    }
})

export default slice.reducer;

export const findProduct = (products, id) => {
    return products.find(product => product._id === id)
}
