import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage
} from '../utils/localStorage';
import {
  loginUserThunk,
  clearStoreThunk,
} from './userThunk';

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserFromLocalStorage()
};


export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    return loginUserThunk('/auth/login', user, thunkAPI);
  }
);

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
       const accessToken = payload.accessToken;
        const tokenPayload = accessToken.split('.')[1];
        const decodedPayload = JSON.parse(atob(tokenPayload));

        const user = {
          id: decodedPayload.id,
          token: payload.accessToken,
          name: decodedPayload.name,
          role: decodedPayload.role
        };

        state.user = user;
        addUserToLocalStorage(user);
  
        state.isLoading = false;
        toast.success(`Welcome Back ${user.name}`);
     
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        toast.error(`Wrong username or password! Try again.`);
     
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(clearStore.rejected, () => {
        toast.error('There was an error..');
      });
  },
});

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
