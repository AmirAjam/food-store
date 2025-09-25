import { addToCartApi } from "@/api/cartApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({ token, data }) => {
        const res = await addToCartApi(token, data);
        return res;
    }
)

const slice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.cart = action.payload.cart.items
        });
    }
})

export default slice.reducer;
