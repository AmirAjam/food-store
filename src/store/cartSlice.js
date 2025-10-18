import { addToCartApi, deleteCartItemApi, getCartApi, updateCartApi } from "@/api/cartApi";
import { findArrayIndex } from "@/utils/utils";
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"

export const getCart = createAsyncThunk(
    "cart/getCart",
    async ({ token }) => {
        const res = await getCartApi(token);
        return res
    }
)

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async ({ token, data }) => {
        const res = await addToCartApi(token, data);
        return res;
    }
)

export const updateCart = createAsyncThunk(
    "cart/updateCart",
    async ({ token, data}) => {
        const res = await updateCartApi(token, data);
        return res;
    }
)

export const deleteCartItem = createAsyncThunk(
    "cart/deleteCartItem",
    async ({ token, productId}) => {
        const res = await deleteCartItemApi(token, productId);
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
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.cart = action.payload.cart.items
        });

        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.cart = action.payload.cart.items
        });

        builder.addCase(updateCart.fulfilled, (state, action) => {
            const productId =  action.meta.arg.data.productId
            const productQuantity = action.meta.arg.data.quantity

            const productIndex = state.cart.findIndex(item => item.product._id === productId)
            state.cart[productIndex].quantity = productQuantity
        });

        builder.addCase(deleteCartItem.fulfilled, (state, action) => {
            const productId =  action.meta.arg.productId
            console.log(productId)
            const productIndex = state.cart.findIndex(item => item.product._id === productId)
            state.cart.splice(productIndex, 1)
        });
    }
})

export default slice.reducer;
