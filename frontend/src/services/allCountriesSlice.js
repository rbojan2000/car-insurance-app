import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllCountriesThunk, createCountryThunk, editCountryThunk, deleteCountryThunk} from './allCountriesThunk';

const editCountryState = {
  name: '',
  isEditing: false,
}

const initialState = {
    countries: [],
    pageIndex: 1,
    pageSize: 10,
    count: 0,
    ...editCountryState
};

export const getAllCountries = createAsyncThunk('allCountries/getCountries', getAllCountriesThunk);

export const createCountry = createAsyncThunk('allCountries/createCountry', createCountryThunk);

export const editCountry = createAsyncThunk('allCountries/editCountry', editCountryThunk);

export const deleteCountry = createAsyncThunk('allCountries/deleteCountry', deleteCountryThunk);

const allCountriesSlice = createSlice({
  name: 'allCountries',
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
        ...state, ...editCountryState
      };
    },
    setEditCountry: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearAllCountriesState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.pending, (state) => {

      })
      .addCase(getAllCountries.fulfilled, (state, { payload }) => {
        state.countries = payload.countries;
        state.count = payload.count;
      })
      .addCase(getAllCountries.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(createCountry.pending, (state) => {
      })
      .addCase(createCountry.fulfilled, (state) => {
        toast.success('Country Created');
      })
      .addCase(createCountry.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(deleteCountry.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteCountry.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editCountry.pending, (state) => {
      })
      .addCase(editCountry.fulfilled, (state) => {
  
        toast.success('Country Modified...');
      })
      .addCase(editCountry.rejected, (state, { payload }) => {
        toast.error(payload);
      });
  },
});

export const {
  handleChange,
  changePage,
  changeText,
  clearAllCountriesState,
  setEditCountry,
  clearValues
} = allCountriesSlice.actions;

export default allCountriesSlice.reducer;