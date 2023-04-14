import customFetch from '../utils/axios';
import { getAllCountries } from './allCountriesSlice';

export const getAllCountriesThunk = async (_, thunkAPI) => {
  const { pageIndex, pageSize } =
    thunkAPI.getState().allCountries;

  let url = `http://localhost:8080/api/countries?pageIndex=${pageIndex}&pageSize=${pageSize}`;

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    console.log(error)
  }
};
export const createCountryThunk = async (country, thunkAPI) => {
  try {
    const resp = await customFetch.post('http://localhost:8080/api/countries', country);
    thunkAPI.dispatch(getAllCountries());
    return resp.data.msg;
  } catch (error) {

  }
};
export const deleteCountryThunk = async (countryId, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`http://localhost:8080/api/countries?id=${countryId}`);
    thunkAPI.dispatch(getAllCountries());
    return resp.data.msg;
  } catch (error) {

  }
};
export const editCountryThunk = async ({ country }, thunkAPI) => {
  try {
    const resp = await customFetch.put(`http://localhost:8080/api/countries`, country);
    thunkAPI.dispatch(getAllCountries());
    return resp.data;
  } catch (error) {
    
  }
};