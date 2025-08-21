import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blockUserApi, changeUserRoleApi, deleteUserApi, editUserApi, getUsers, signupApi, unBlockUserApi } from "@/api/usersApi";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (token) => {
    const res = await getUsers(token);
    return res;
  }
);

export const addUser = createAsyncThunk(
  "users/addUser",
  async (data, { rejectWithValue }) => {
    try {
      const res = await signupApi(data);
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data || "خطای ناشناخته از سرور");
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async ({ token, id }) => {
    const res = await deleteUserApi(token, id);
    return res;
  }
);

export const blockUser = createAsyncThunk(
  "users/blockUser",
  async ({ token, id }) => {
    const res = await blockUserApi(token, id);
    return res;
  }
);

export const changeUserRole = createAsyncThunk(
  "users/changeUserRole",
  async ({ token, id }) => {
    const res = await changeUserRoleApi(token, id);
    return res;
  }
);

export const unBlockUser = createAsyncThunk(
  "users/unBlockUser",
  async ({ token, id }) => {
    const res = await unBlockUserApi(token, id);
    return res;
  }
);

export const editUser = createAsyncThunk(
  "users/editUser",
  async ({ token, id, data }) => {
    const res = await editUserApi(token, id, data);
    return res;
  }
);

const slice = createSlice({
  name: "users",
  initialState: {
    users: { users: "" },
    error: null,
    status: "idle",
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      const deletedId = action.meta.arg.id;
      state.users.users = state.users.users.filter(user => user._id !== deletedId);
    });

    builder.addCase(blockUser.fulfilled, (state, action) => {
      const userId = action.meta.arg.id;
      const index = state.users.users.findIndex(user => user._id === userId);
      if (index !== -1) {
        state.users.users[index].isBlock = true;
      }
    });

    builder.addCase(unBlockUser.fulfilled, (state, action) => {
      const userId = action.meta.arg.id;
      const index = state.users.users.findIndex(user => user._id === userId);
      if (index !== -1) {
        state.users.users[index].isBlock = false;
      }
    });

    builder
      .addCase(addUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users.users.push(action.payload.user);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    builder
      .addCase(editUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedUser = action.meta.arg.data;
        const updatedUserId = action.meta.arg.id;
        const index = state.users.users.findIndex(user => user._id === updatedUserId);
        if (index !== -1) {
          state.users.users[index].firstname = updatedUser.firstname;
          state.users.users[index].lastname = updatedUser.lastname;
          state.users.users[index].email = updatedUser.email;
        }
      })
      .addCase(editUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
