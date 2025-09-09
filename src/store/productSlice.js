
import { createProductApi, getProductsApi } from "@/api/productApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const addProduct = createAsyncThunk(
    "category/addProduct",
    async ({ token, data }) => {
        const res = await createProductApi(token, data);
        console.log(res)
        return res;
    }
)
export const getProducts = createAsyncThunk(
    "category/getProducts",
    async (token) => {
        const res = await getProductsApi(token);
        console.log(res)
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
            console.log("action.payload => ",action.payload.product)
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products=action.payload.data
        });
    }
})

export default slice.reducer;
