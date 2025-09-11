
import {
    createProductApi,
    deleteProductApi,
    getProductsApi,
    publisProductApi,
    unpublisProductApi,
    uploadProducImageApi,
} from "@/api/productApi";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const addProduct = createAsyncThunk(
    "Product/addProduct",
    async ({ token, data }) => {
        const res = await createProductApi(token, data);
        return res;
    }
)
export const uploadProductImage = createAsyncThunk(
    "Product/uploadProductImage",
    async ({ token, id, file }) => {
        const res = await uploadProducImageApi(token, id, file);
        console.log("uploadProductImage => ", res)
        return res;
    }
)

export const deleteProduct = createAsyncThunk(
    "Product/deleteProduct",
    async ({ token, id }) => {
        const res = await deleteProductApi(token, id);
        return res;
    }
)

export const publisProduct = createAsyncThunk(
    "Product/publisProduct",
    async ({ token, id }) => {
        const res = await publisProductApi(token, id);
        return res;
    }
)

export const unpublisProduct = createAsyncThunk(
    "Product/unpublisProduct",
    async ({ token, id }) => {
        const res = await unpublisProductApi(token, id);
        return res;
    }
)

export const getProducts = createAsyncThunk(
    "Product/getProducts",
    async (token) => {
        const res = await getProductsApi(token);
        return res;
    }
)

const slice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products.unshift(action.payload.product);
        });

        builder.addCase(uploadProductImage.fulfilled, (state, action) => {
            const productID = action.meta.arg.id;
            const productIndex = state.products.findIndex(product => product._id === productID)
            state.products[productIndex].gallery = action.payload.gallery
        });

        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const productID = action.meta.arg.id;
            state.products = state.products.filter(product => product._id !== productID)
        });

        builder.addCase(publisProduct.fulfilled, (state, action) => {
            const productID = action.meta.arg.id;
            const productIndex = state.products.findIndex(product => product._id === productID)
            state.products[productIndex].statusProduct = "published"
        });

        builder.addCase(unpublisProduct.fulfilled, (state, action) => {
            const productID = action.meta.arg.id;
            const productIndex = state.products.findIndex(product => product._id === productID)
            state.products[productIndex].statusProduct = "Unpublished"
        });

        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload.data
        });
    }
})

export default slice.reducer;

export const findProduct = (products,id) => {
    return products.find(product => product._id === id)
}
