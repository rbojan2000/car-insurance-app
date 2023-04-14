import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllCitiesThunk, createCityThunk, editCityThunk, deleteCityThunk, getDataThunk } from './allCitiesThunk';

const editCityState = {
  countries: [],
  country: '',
  countryId: 0,
  name: '',
  isEditing: false,
}

const initialState = {
    cities: [],
    pageIndex: 1,
    pageSize: 10,
    count: 0,
    ...editCityState
};

export const getAllCities = createAsyncThunk('allCities/getCities', getAllCitiesThunk);

export const createCity = createAsyncThunk('allCities/createCity', createCityThunk);

export const editCity = createAsyncThunk('allCities/editCity', editCityThunk);

export const deleteCity = createAsyncThunk('allCities/deleteCity', deleteCityThunk);

export const getData = createAsyncThunk('allCities/getData', getDataThunk);

const allCitiesSlice = createSlice({
  name: 'allCities',
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
      }else{
        state.name = value;
      }
    },
    changePage: (state, { payload }) => {
      state.pageIndex = payload;
    },
    clearValues: (state) => {
      return {
        ...state, ...editCityState
      };
    },
    setEditCity: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearAllCitiesState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCities.pending, (state) => {

      })
      .addCase(getAllCities.fulfilled, (state, { payload }) => {
        state.cities = payload.cities;
        state.countryId = payload.cities[0].countryId;
        state.country = payload.cities[0].country;
        state.count = payload.count;
      })
      .addCase(getAllCities.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(createCity.pending, (state) => {
      })
      .addCase(createCity.fulfilled, (state) => {
        toast.success('City Created');
      })
      .addCase(createCity.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(deleteCity.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteCity.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editCity.pending, (state) => {
      })
      .addCase(editCity.fulfilled, (state) => {
  
        toast.success('City Modified...');
      })
      .addCase(editCity.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(getData.pending, (state) => {
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.countries = payload.countries;
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
  clearAllCitiesState,
  setEditCity,
  clearValues
} = allCitiesSlice.actions;

export default allCitiesSlice.reducer;