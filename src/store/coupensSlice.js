
import { addCoupenApi, getCoupensApi } from "@/api/coupenApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const getCoupens = createAsyncThunk(
    "coupens/getCoupens",
    async (token) => {
        const res = await getCoupensApi(token);
        return res;
    }
)

export const addCoupen = createAsyncThunk(
    "coupens/addCoupen",
    async ({token,data}) => {
        const res = await addCoupenApi(token,data);
        return res;
    }
)

export const removeCoupen = createAsyncThunk(
    "coupens/removeCoupen",
    async ({token,id}) => {
        const res = await addCoupenApi(token,data);
        return res;
    }
)

const slice = createSlice({
    name: "coupens",
    initialState: {
        coupens: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCoupens.fulfilled, (state, action) => {
            state.coupens = action.payload.coupens
        });

        builder.addCase(addCoupen.fulfilled, (state, action) => {
            state.coupens.push(action.payload.coupen)
            console.log(action.payload)
        });
    }
})

export default slice.reducer;
