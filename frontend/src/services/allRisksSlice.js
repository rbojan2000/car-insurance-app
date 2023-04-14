import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllRisksThunk, createRiskThunk, editRiskThunk, deleteRiskThunk} from './allRisksThunk';

const editRiskState = {
  description: '',
  isEditing: false,
}

const initialState = {
    risks: [],
    pageIndex: 1,
    pageSize: 10,
    count: 0,
    ...editRiskState
};

export const getAllRisks = createAsyncThunk('allRisks/getRisks', getAllRisksThunk);

export const createRisk = createAsyncThunk('allRisks/createRisk', createRiskThunk);

export const editRisk = createAsyncThunk('allRisks/editRisk', editRiskThunk);

export const deleteRisk = createAsyncThunk('allRisks/deleteRisk', deleteRiskThunk);

const allRisksSlice = createSlice({
  name: 'allRisks',
  initialState,
  reducers: {
    handleChange: (state, { payload: { pageIndex, pageSize } }) => {
      state.pageIndex = pageIndex;
      state.pageSize = pageSize;
    },
    changeText: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    changePage: (state, { payload }) => {
      state.pageIndex = payload;
    },
    clearValues: (state) => {
      return {
        ...state, ...editRiskState
      };
    },
    setEditRisk: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearAllRisksState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRisks.pending, (state) => {

      })
      .addCase(getAllRisks.fulfilled, (state, { payload }) => {
        state.risks = payload.risks;
        state.count = payload.count;
      })
      .addCase(getAllRisks.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(createRisk.pending, (state) => {
      })
      .addCase(createRisk.fulfilled, (state) => {
        toast.success('Risk Created');
      })
      .addCase(createRisk.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(deleteRisk.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteRisk.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editRisk.pending, (state) => {
      })
      .addCase(editRisk.fulfilled, (state) => {
  
        toast.success('Risk Modified...');
      })
      .addCase(editRisk.rejected, (state, { payload }) => {
        toast.error(payload);
      });
  },
});

export const {
  handleChange,
  changePage,
  changeText,
  clearAllRisksState,
  setEditRisk,
  clearValues
} = allRisksSlice.actions;

export default allRisksSlice.reducer;