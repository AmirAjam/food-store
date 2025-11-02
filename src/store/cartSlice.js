import { addToCartApi, applyCoupenApi, clearCartApi, deleteCartItemApi, getCartApi, updateCartApi } from "@/api/cartApi";
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
    async ({ token, data }) => {
        const res = await updateCartApi(token, data);
        return res;
    }
)

export const deleteCartItem = createAsyncThunk(
    "cart/deleteCartItem",
    async ({ token, productId }) => {
        const res = await deleteCartItemApi(token, productId);
        return res;
    }
)

export const clearCart = createAsyncThunk(
    "cart/clearCart",
    async (token) => {
        const res = await clearCartApi(token);
        return res;
    }
)
export const applyCoupen = createAsyncThunk(
    "cart/applyCoupen",
    async ({ token, data }) => {
        const res = await applyCoupenApi(token, data);
        return res;
    }
)

const slice = createSlice({
    name: "cart",
    initialState: {
        cart: {
            items: [],
            totalPrice: 0,
            totalQuantity: 0,
            finalPrice: 0
        },
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.cart = action.payload.cart
        });

        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.cart = action.payload.cart
        });

        builder.addCase(updateCart.fulfilled, (state, action) => {

            state.cart.totalPrice = action.payload.cart.totalPrice
            state.cart.totalQuantity = action.payload.cart.totalQuantity

            const productId = action.meta.arg.data.productId
            const productQuantity = action.meta.arg.data.quantity

            const productIndex = state.cart.items.findIndex(item => item.product._id === productId)
            state.cart.items[productIndex].quantity = productQuantity
        });

        builder.addCase(deleteCartItem.fulfilled, (state, action) => {

            state.cart.totalPrice = action.payload.cart.totalPrice
            state.cart.totalQuantity = action.payload.cart.totalQuantity

            const productId = action.meta.arg.productId
            const productIndex = state.cart.items.findIndex(item => item.product._id === productId)
            state.cart.items.splice(productIndex, 1)
        });

        builder.addCase(clearCart.fulfilled, (state, action) => {
            console.log(action.payload)
            state.cart.items = []
        });

        builder.addCase(applyCoupen.fulfilled, (state, action) => {
            state.cart = action.payload.cart
            console.log(action.payload.cart)
        });
    }
})

export default slice.reducer;
