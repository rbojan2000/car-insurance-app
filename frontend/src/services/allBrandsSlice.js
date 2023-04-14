import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllBrandsThunk, createBrandThunk, editBrandThunk, deleteBrandThunk} from './allBrandsThunk';

const editBrandState = {
  name: '',
  isEditing: false,
}

const initialState = {
    brands: [],
    pageIndex: 1,
    pageSize: 10,
    count: 0,
    ...editBrandState
};

export const getAllBrands = createAsyncThunk('allBrands/getBrands', getAllBrandsThunk);

export const createBrand = createAsyncThunk('allBrands/createBrand', createBrandThunk);

export const editBrand = createAsyncThunk('allBrands/editBrand', editBrandThunk);

export const deleteBrand = createAsyncThunk('allBrands/deleteBrand', deleteBrandThunk);

const allBrandsSlice = createSlice({
  name: 'allBrands',
  initialState,
  reducers: {
    handleChange: (state, { payload: { pageIndex, pageSize } }) => {
      state.pageIndex = pageIndex;
      state.pageSize = pageSize;
    },
    changeText: (state, { payload: { name, value } }) => {
      state.name = value;
    },
    changePage: (state, { payload }) => {
      state.pageIndex = payload;
    },
    clearValues: (state) => {
      return {
        ...state, ...editBrandState
      };
    },
    setEditBrand: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearAllBrandsState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBrands.pending, (state) => {

      })
      .addCase(getAllBrands.fulfilled, (state, { payload }) => {
        state.brands = payload.brands;
        state.count = payload.count;
      })
      .addCase(getAllBrands.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(createBrand.pending, (state) => {
      })
      .addCase(createBrand.fulfilled, (state) => {
        toast.success('Brand Created');
      })
      .addCase(createBrand.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(deleteBrand.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteBrand.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editBrand.pending, (state) => {
      })
      .addCase(editBrand.fulfilled, (state) => {
  
        toast.success('Brand Modified...');
      })
      .addCase(editBrand.rejected, (state, { payload }) => {
        toast.error(payload);
      });
  },
});

export const {
  handleChange,
  changePage,
  changeText,
  clearAllBrandsState,
  setEditBrand,
  clearValues
} = allBrandsSlice.actions;

export default allBrandsSlice.reducer;