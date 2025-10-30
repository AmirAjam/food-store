import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({ token, data }) => {
        const res = await addToCartApi(token, data);
        return res;
    }
)

const slice = createSlice({
    name: "order",
    initialState: {
        orders:[]
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.cart = action.payload.cart
        });
    }
})

export default slice.reducer;
