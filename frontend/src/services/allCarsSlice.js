import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllCarsThunk, createCarThunk, editCarThunk, deleteCarThunk, getDataThunk } from './allCarsThunk';

const editCarState = {
  brands: [],
  brand: '',
  brandId: 0,
  models: [],
  model : '',
  modelId : 0,
  year: 0,
  image: '',
  isEditing: false,
}

const initialState = {
    cars: [],
    pageIndex: 1,
    pageSize: 10,
    count: 0,
    ...editCarState
};

export const getAllCars = createAsyncThunk('allCars/getCars', getAllCarsThunk);

export const createCar = createAsyncThunk('allCars/createCar', createCarThunk);

export const editCar = createAsyncThunk('allCars/editCar', editCarThunk);

export const deleteCar = createAsyncThunk('allCars/deleteCar', deleteCarThunk);

export const getData = createAsyncThunk('allCars/getData', getDataThunk);

const allCarsSlice = createSlice({
  name: 'allCars',
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
        state.model = '';
        state.modelId = 0;
      }else if(name === 'model'){
        state[name] = state.models.find(e => e.name === value).name;
        state[name + 'Id'] = state.models.find(e => e.name === value).id;
      }else {
        state[name] = value;
      }
    },
    changePage: (state, { payload }) => {
      state.pageIndex = payload;
    },
    clearValues: (state) => {
      return {
        ...state, ...editCarState
      };
    },
    setEditCar: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearAllCarsState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {

      })
      .addCase(getAllCars.fulfilled, (state, { payload }) => {
        state.cars = payload.cars;
        state.brandId = payload.cars[0].brandId;
        state.brand = payload.cars[0].brand;
        state.modelId = payload.cars[0].modelId;
        state.model = payload.cars[0].model;
        state.count = payload.count;
      })
      .addCase(getAllCars.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(createCar.pending, (state) => {
      })
      .addCase(createCar.fulfilled, (state) => {
        toast.success('Car Created');
      })
      .addCase(createCar.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(deleteCar.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteCar.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editCar.pending, (state) => {
      })
      .addCase(editCar.fulfilled, (state) => {
  
        toast.success('Car Modified...');
      })
      .addCase(editCar.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(getData.pending, (state) => {
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.brands = payload.brands;
        state.models = payload.models;
        if(state.modelId === 0 && payload.models.length !== 0){
          state.modelId = payload.models[0].id;
          state.model = payload.models[0].name;
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
  clearAllCarsState,
  setEditCar,
  clearValues
} = allCarsSlice.actions;

export default allCarsSlice.reducer;