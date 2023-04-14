import customFetch from '../utils/axios';
import { getAllCars } from './allCarsSlice';

export const getAllCarsThunk = async (_, thunkAPI) => {
    const { pageIndex, pageSize } =
      thunkAPI.getState().allCars;
  
    let url = `http://localhost:8080/api/cars?pageIndex=${pageIndex}&pageSize=${pageSize}`;
  
    try {
      const resp = await customFetch.get(url);
      return resp.data;
    } catch (error) {
      console.log(error)
    }
  };
  export const createCarThunk = async (car, thunkAPI) => {
    try {
      const resp = await customFetch.post('http://localhost:8080/api/cars', car);
      thunkAPI.dispatch(getAllCars());
      return resp.data.msg;
    } catch (error) {
  
    }
  };
  export const deleteCarThunk = async (carId, thunkAPI) => {
    try {
      const resp = await customFetch.delete(`http://localhost:8080/api/cars?id=${carId}`);
      thunkAPI.dispatch(getAllCars());
      return resp.data.msg;
    } catch (error) {
  
    }
  };
  export const editCarThunk = async ({ car }, thunkAPI) => {
    try {
      const resp = await customFetch.put(`http://localhost:8080/api/cars`, car);
      thunkAPI.dispatch(getAllCars());
      return resp.data;
    } catch (error) {
      
    }
  };
  export const getDataThunk = async ({ brandId }, thunkAPI) => {
    try {
      const resp = await customFetch.get(`http://localhost:8080/api/cars/data?brand=${brandId}`);
      return resp.data;
    } catch (error) {
      console.log(error)
    }
  };