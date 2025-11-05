import { getUserOrdersApi } from "@/api/orderApi";
import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit"

export const getUserOrder = createAsyncThunk(
    "order/getUserOrder",
    async (token) => {
        const res = await getUserOrdersApi(token);
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
        builder.addCase(getUserOrder.fulfilled, (state, action) => {
            state.orders = action.payload.orders
        });
    }
})

export default slice.reducer;
