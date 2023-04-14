import customFetch from '../utils/axios';
import { getAllAddresses } from './allAddressesSlice';

export const getAllAddressesThunk = async (_, thunkAPI) => {
  const { pageIndex, pageSize } =
    thunkAPI.getState().allAddresses;

  let url = `http://localhost:8080/api/addresses?pageIndex=${pageIndex}&pageSize=${pageSize}`;

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    console.log(error)
  }
};
export const createAddressThunk = async (address, thunkAPI) => {
  try {
    const resp = await customFetch.post('http://localhost:8080/api/addresses', address);
    thunkAPI.dispatch(getAllAddresses());
    return resp.data.msg;
  } catch (error) {

  }
};
export const deleteAddressThunk = async (addressId, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`http://localhost:8080/api/addresses?id=${addressId}`);
    thunkAPI.dispatch(getAllAddresses());
    return resp.data.msg;
  } catch (error) {

  }
};
export const editAddressThunk = async ({ address }, thunkAPI) => {
  try {
    const resp = await customFetch.put(`http://localhost:8080/api/addresses`, address);
    thunkAPI.dispatch(getAllAddresses());
    return resp.data;
  } catch (error) {
    
  }
};
export const getDataThunk = async ({ countryId, cityId }, thunkAPI) => {
  try {
    const resp = await customFetch.get(`http://localhost:8080/api/addresses/data?country=${countryId}&city=${cityId}`);
    return resp.data;
  } catch (error) {
    console.log(error)
  }
};
