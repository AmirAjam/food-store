import { createOrdersApi, getAllOrdersApi, getUserOrdersApi } from "@/api/orderApi";
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"

export const getUserOrder = createAsyncThunk(
    "order/getUserOrder",
    async (token) => {
        const res = await getUserOrdersApi(token);
        return res;
    }
)
export const getAllOrders = createAsyncThunk(
    "order/getAllOrders",
    async (token) => {
        const res = await getAllOrdersApi(token);
        return res;
    }
)

export const createOrder = createAsyncThunk(
    "order/createOrder",
    async ({token,addressId,paymentMethod}) => {
        const res = await createOrdersApi(token,addressId,paymentMethod);
        return res;
    }
)

const slice = createSlice({
    name: "order",
    initialState: {
        orders:[],
        adminOrders:[]
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUserOrder.fulfilled, (state, action) => {
            state.orders = action.payload.orders
        });

        builder.addCase(getAllOrders.fulfilled, (state, action) => {
            state.adminOrders = action.payload.orders
            console.log(action.payload)
        });

        builder.addCase(createOrder.fulfilled, (state, action) => {
            // state.orders = action.payload.orders
            console.log(action.payload)
        });
    }
})

export default slice.reducer;
