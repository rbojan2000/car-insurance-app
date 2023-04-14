import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllZipsThunk, createZipThunk, editZipThunk, deleteZipThunk, getDataThunk } from './allZipsThunk';

const editZipState = {
  countries: [],
  country: '',
  countryId: 0,
  cities: [],
  city : '',
  cityId : 0,
  name: '',
  isEditing: false,
}

const initialState = {
    zips: [],
    pageIndex: 1,
    pageSize: 10,
    count: 0,
    ...editZipState
};

export const getAllZips = createAsyncThunk('allZips/getZips', getAllZipsThunk);

export const createZip = createAsyncThunk('allZips/createZip', createZipThunk);

export const editZip = createAsyncThunk('allZips/editZip', editZipThunk);

export const deleteZip = createAsyncThunk('allZips/deleteZip', deleteZipThunk);

export const getData = createAsyncThunk('allZips/getData', getDataThunk);

const allZipsSlice = createSlice({
  name: 'allZips',
  initialState,
  reducers: {
    handleChange: (state, { payload: { pageIndex, pageSize } }) => {
      state.pageIndex = pageIndex;
      state.pageSize = pageSize;
    },
    changeText: (state, { payload: { name, value } }) => {
      if(name === 'country'){
        state[name] = state.countries.find(e => e.name === value).name;
        state[name + 'Id'] = state.countries.find(e => e.name === value).id;
        state.city = '';
        state.cityId = 0;
      }else if(name === 'city'){
        state[name] = state.cities.find(e => e.name === value).name;
        state[name + 'Id'] = state.cities.find(e => e.name === value).id;
      }else{
        state.name = value;
      }
    },
    changePage: (state, { payload }) => {
      state.pageIndex = payload;
    },
    clearValues: (state) => {
      return {
        ...state, ...editZipState
      };
    },
    setEditZip: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearAllZipsState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllZips.pending, (state) => {

      })
      .addCase(getAllZips.fulfilled, (state, { payload }) => {
        state.zips = payload.zips;
        state.countryId = payload.zips[0].countryId;
        state.country = payload.zips[0].country;
        state.cityId = payload.zips[0].cityId;
        state.city = payload.zips[0].city;
        state.count = payload.count;
      })
      .addCase(getAllZips.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(createZip.pending, (state) => {
      })
      .addCase(createZip.fulfilled, (state) => {
        toast.success('Zip Created');
      })
      .addCase(createZip.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(deleteZip.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteZip.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editZip.pending, (state) => {
      })
      .addCase(editZip.fulfilled, (state) => {
  
        toast.success('Zip Modified...');
      })
      .addCase(editZip.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(getData.pending, (state) => {
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.countries = payload.countries;
        state.cities = payload.cities;
        if(state.cityId === 0 && payload.cities.length !== 0){
          state.cityId = payload.cities[0].id;
          state.city = payload.cities[0].name;
        }
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
  clearAllZipsState,
  setEditZip,
  clearValues
} = allZipsSlice.actions;

export default allZipsSlice.reducer;