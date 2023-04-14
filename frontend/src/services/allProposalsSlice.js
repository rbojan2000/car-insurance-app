import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllProposalsThunk } from './allProposalsThunk';

const initialState = {
  proposals: [],
  pageIndex: 1,
  pageSize: 10,
  count: 0
};

export const getAllProposals = createAsyncThunk('allProposals/getProposals', getAllProposalsThunk);

const allProposalsSlice = createSlice({
  name: 'allProposals',
  initialState,
  reducers: {
    handleChange: (state, { payload: { pageIndex, pageSize } }) => {
      state.pageIndex = pageIndex;
      state.pageSize = pageSize;
    },
    changePage: (state, { payload }) => {
      state.pageIndex = payload;
    },
    clearAllProposalsState: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllProposals.pending, (state) => {

      })
      .addCase(getAllProposals.fulfilled, (state, { payload }) => {
        state.proposals = payload.proposals;
        state.count = payload.count;
      })
      .addCase(getAllProposals.rejected, (state, { payload }) => {

        toast.error(payload);
      });
  },
});

export const {
  handleChange,
  changePage,
  clearAllProposalsState,
} = allProposalsSlice.actions;
export default allProposalsSlice.reducer;