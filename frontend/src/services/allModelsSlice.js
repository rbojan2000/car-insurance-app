import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllModelsThunk, createModelThunk, editModelThunk, deleteModelThunk, getDataThunk } from './allModelsThunk';

const editModelState = {
  brands: [],
  brand: '',
  brandId: 0,
  name: '',
  isEditing: false,
}

const initialState = {
    models: [],
    pageIndex: 1,
    pageSize: 10,
    count: 0,
    ...editModelState
};

export const getAllModels = createAsyncThunk('allModels/getModels', getAllModelsThunk);

export const createModel = createAsyncThunk('allModels/createModel', createModelThunk);

export const editModel = createAsyncThunk('allModels/editModel', editModelThunk);

export const deleteModel = createAsyncThunk('allModels/deleteModel', deleteModelThunk);

export const getData = createAsyncThunk('allModels/getData', getDataThunk);

const allModelsSlice = createSlice({
  name: 'allModels',
  initialState,
  reducers: {
    handleChange: (state, { payload: { pageIndex, pageSize } }) => {
      state.pageIndex = pageIndex;
      state.pageSize = pageSize;
    },
    changeText: (state, { payload: { name, value } }) => {
      if(name === 'brand'){
        state[name] = state.brands.find(e => e.name === value).name;
        state[name + 'Id'] = state.brands.find(e => e.name === value).id;
      }else{
        state.name = value;
      }
    },
    changePage: (state, { payload }) => {
      state.pageIndex = payload;
    },
    clearValues: (state) => {
      return {
        ...state, ...editModelState
      };
    },
    setEditModel: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearAllModelsState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllModels.pending, (state) => {

      })
      .addCase(getAllModels.fulfilled, (state, { payload }) => {
        state.models = payload.models;
        state.brandId = payload.models[0].brandId;
        state.brand = payload.models[0].brand;
        state.count = payload.count;
      })
      .addCase(getAllModels.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(createModel.pending, (state) => {
      })
      .addCase(createModel.fulfilled, (state) => {
        toast.success('Model Created');
      })
      .addCase(createModel.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(deleteModel.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteModel.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editModel.pending, (state) => {
      })
      .addCase(editModel.fulfilled, (state) => {
  
        toast.success('Model Modified...');
      })
      .addCase(editModel.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(getData.pending, (state) => {
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.brands = payload.brands;
      })
      .addCase(getData.rejected, (state, { payload }) => {

        toast.error(payload);
      });
  },
});

export const {
  handleChange,
  changePage,
  changeText,
  clearAllModelsState,
  setEditModel,
  clearValues
} = allModelsSlice.actions;

export default allModelsSlice.reducer;