
import { addCoupenApi, changeStatusCoupenApi, editCoupenApi, getCoupensApi, removeCoupenApi } from "@/api/coupenApi";
import { findArrayIndex } from "@/utils/utils";
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
        const res = await removeCoupenApi(token,id);
        return res;
    }
)

export const editCoupen = createAsyncThunk(
    "coupens/editCoupen",
    async ({token,id,data}) => {
        const res = await editCoupenApi(token,id,data);
        return res;
    }
)

export const deactivateCoupen = createAsyncThunk(
    "coupens/deactivateCoupen",
    async ({token,id}) => {
        const res = await changeStatusCoupenApi(token,id);
        return res;
    }
)

export const activateCoupen = createAsyncThunk(
    "coupens/activateCoupen",
    async ({token,id}) => {
        const res = await changeStatusCoupenApi(token,id);
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
        });
        builder.addCase(removeCoupen.fulfilled, (state, action) => {
            // state.coupens.push(action.payload.coupen)
            const coupenID = action.meta.arg.id;
            state.coupens = state.coupens.filter(item => item._id!==coupenID)
        });

        builder.addCase(editCoupen.fulfilled, (state, action) => {
            const coupenID = action.meta.arg.id;
            const coupenIndex = findArrayIndex(state.coupens , coupenID)
            state.coupens[coupenIndex] = action.payload.coupen
        });

        builder.addCase(activateCoupen.fulfilled, (state, action) => {
            const coupenID = action.meta.arg.id;
            const coupenIndex = findArrayIndex(state.coupens , coupenID)
            state.coupens[coupenIndex].isActive = true
        });

        builder.addCase(deactivateCoupen.fulfilled, (state, action) => {
            const coupenID = action.meta.arg.id;
            const coupenIndex = findArrayIndex(state.coupens , coupenID)
            state.coupens[coupenIndex].isActive = false
        });
    }
})

export default slice.reducer;
