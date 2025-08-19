import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUserApi, getUsers } from "@/api/usersApi";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (token) => {
    const res = await getUsers(token);
    return res;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async ({ token, id }) => {
    const res = await deleteUserApi(token, id);
    return res;
  }
);

const slice = createSlice({
  name: "users",
  initialState: {
    users: { users: "" },
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
      console.log(action.payload)
    }),
      builder.addCase(deleteUser.fulfilled, (state, action) => {
        const deletedId = action.meta.arg.id; 
        state.users.users = state.users.users.filter(user => user._id !== deletedId);
      });
  },
});

export default slice.reducer;
