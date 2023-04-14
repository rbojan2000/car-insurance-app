import customFetch from '../utils/axios';
import { getAllZips } from './allZipsSlice';

export const getAllZipsThunk = async (_, thunkAPI) => {
  const { pageIndex, pageSize } =
    thunkAPI.getState().allZips;

  let url = `http://localhost:8080/api/zips?pageIndex=${pageIndex}&pageSize=${pageSize}`;

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    console.log(error)
  }
};
export const createZipThunk = async (zip, thunkAPI) => {
  try {
    const resp = await customFetch.post('http://localhost:8080/api/zips', zip);
    thunkAPI.dispatch(getAllZips());
    return resp.data.msg;
  } catch (error) {

  }
};
export const deleteZipThunk = async (zipId, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`http://localhost:8080/api/zips?id=${zipId}`);
    thunkAPI.dispatch(getAllZips());
    return resp.data.msg;
  } catch (error) {

  }
};
export const editZipThunk = async ({ zip }, thunkAPI) => {
  try {
    const resp = await customFetch.put(`http://localhost:8080/api/zips`, zip);
    thunkAPI.dispatch(getAllZips());
    return resp.data;
  } catch (error) {
    
  }
};
export const getDataThunk = async ({ countryId }, thunkAPI) => {
  try {
    const resp = await customFetch.get(`http://localhost:8080/api/addresses/data?country=${countryId}&city=0`);
    return resp.data;
  } catch (error) {
    console.log(error)
  }
};