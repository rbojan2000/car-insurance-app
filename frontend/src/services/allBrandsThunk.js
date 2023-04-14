import customFetch from '../utils/axios';
import { getAllBrands } from './allBrandsSlice';

export const getAllBrandsThunk = async (_, thunkAPI) => {
  const { pageIndex, pageSize } =
    thunkAPI.getState().allBrands;

  let url = `http://localhost:8080/api/brands?pageIndex=${pageIndex}&pageSize=${pageSize}`;

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    console.log(error)
  }
};
export const createBrandThunk = async (brand, thunkAPI) => {
  try {
    const resp = await customFetch.post('http://localhost:8080/api/brands', brand);
    thunkAPI.dispatch(getAllBrands());
    return resp.data.msg;
  } catch (error) {

  }
};
export const deleteBrandThunk = async (brandId, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`http://localhost:8080/api/brands?id=${brandId}`);
    thunkAPI.dispatch(getAllBrands());
    return resp.data.msg;
  } catch (error) {

  }
};
export const editBrandThunk = async ({ brand }, thunkAPI) => {
  try {
    const resp = await customFetch.put(`http://localhost:8080/api/brands`, brand);
    thunkAPI.dispatch(getAllBrands());
    return resp.data;
  } catch (error) {
    
  }
};