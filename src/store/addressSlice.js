import { addAddressApi, editAddressApi, getAddressesApi, removeAddressApi } from "@/api/addressApi";
import { findArrayIndex } from "@/utils/utils";
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

export const removeAddress = createAsyncThunk(
    "address/removeAddress",
    async ({ token, id }) => {
        console.log("id => ", id)
        const res = await removeAddressApi(token, id);
        return res;
    }
)

export const editAddress = createAsyncThunk(
    "address/editAddress",
    async ({ token, id, data }) => {
        console.log("data => ", data)
        const res = await editAddressApi(token, id, data);
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

        builder.addCase(removeAddress.fulfilled, (state, action) => {
            const addressId = action.meta.arg.id;
            state.addresses = state.addresses.filter(address => address._id !== addressId);
        })

        builder.addCase(editAddress.fulfilled, (state, action) => {
            const addressId = action.meta.arg.id;
            const addressData = action.meta.arg.data;
            const addressIndex = findArrayIndex(state.addresses , addressId)

            state.addresses[addressIndex] = addressData
            state.addresses[addressIndex]._id = addressId
        })

    }
})

export default slice.reducer;
