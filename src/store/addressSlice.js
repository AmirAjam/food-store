import { addAddressApi, getAddressesApi } from "@/api/addressApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getAddresses = createAsyncThunk(
    "address/getAddresses",
    async (token) => {
        const res = await getAddressesApi(token);
        return res;
    }
)

export const addAddress = createAsyncThunk(
    "address/addAddress",
    async ({ token, data }) => {
        const res = await addAddressApi(token, data);
        return res;
    }
)

const slice = createSlice({
    name: "address",
    initialState: {
        addresses: []
    },
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(getAddresses.fulfilled, (state, action) => {
            state.addresses = action.payload.addresses
        })
        builder.addCase(addAddress.fulfilled, (state, action) => {
            state.addresses.push(action.payload.address)
        })

    }
})

export default slice.reducer;
