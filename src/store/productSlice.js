
import { createProductApi, getProductsApi } from "@/api/productApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const addProduct = createAsyncThunk(
    "Product/addProduct",
    async ({ token, data }) => {
        const res = await createProductApi(token, data);
        return res;
    }
)

export const deleteProduct = createAsyncThunk(
    "Product/deleteProduct",
    async ({token,id}) => {
        console.log("token => " , token)
        console.log("id => " , id)
        // const res = await getProductsApi(token);
        // return res;
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
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products=action.payload.data
        });
    }
})

export default slice.reducer;
