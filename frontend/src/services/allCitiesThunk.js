import customFetch from '../utils/axios';
import { getAllCities } from './allCitiesSlice';

export const getAllCitiesThunk = async (_, thunkAPI) => {
  const { pageIndex, pageSize } =
    thunkAPI.getState().allCities;

  let url = `http://localhost:8080/api/cities?pageIndex=${pageIndex}&pageSize=${pageSize}`;

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    console.log(error)
  }
};
export const createCityThunk = async (city, thunkAPI) => {
  try {
    const resp = await customFetch.post('http://localhost:8080/api/cities', city);
    thunkAPI.dispatch(getAllCities());
    return resp.data.msg;
  } catch (error) {

  }
};
export const deleteCityThunk = async (cityId, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`http://localhost:8080/api/cities?id=${cityId}`);
    thunkAPI.dispatch(getAllCities());
    return resp.data.msg;
  } catch (error) {

  }
};
export const editCityThunk = async ({ city }, thunkAPI) => {
  try {
    const resp = await customFetch.put(`http://localhost:8080/api/cities`, city);
    thunkAPI.dispatch(getAllCities());
    return resp.data;
  } catch (error) {
    
  }
};
export const getDataThunk = async (thunkAPI) => {
  try {
    const resp = await customFetch.get(`http://localhost:8080/api/addresses/data?country=0&city=0`);
    return resp.data;
  } catch (error) {
    console.log(error)
  }
};