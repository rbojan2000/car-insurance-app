import customFetch from '../utils/axios';
import { getAllModels } from './allModelsSlice';

export const getAllModelsThunk = async (_, thunkAPI) => {
  const { pageIndex, pageSize } =
    thunkAPI.getState().allModels;

  let url = `http://localhost:8080/api/models?pageIndex=${pageIndex}&pageSize=${pageSize}`;

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    console.log(error)
  }
};
export const createModelThunk = async (model, thunkAPI) => {
  try {
    const resp = await customFetch.post('http://localhost:8080/api/models', model);
    thunkAPI.dispatch(getAllModels());
    return resp.data.msg;
  } catch (error) {

  }
};
export const deleteModelThunk = async (modelId, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`http://localhost:8080/api/models?id=${modelId}`);
    thunkAPI.dispatch(getAllModels());
    return resp.data.msg;
  } catch (error) {

  }
};
export const editModelThunk = async ({ model }, thunkAPI) => {
  try {
    const resp = await customFetch.put(`http://localhost:8080/api/models`, model);
    thunkAPI.dispatch(getAllModels());
    return resp.data;
  } catch (error) {
    
  }
};
export const getDataThunk = async (thunkAPI) => {
  try {
    const resp = await customFetch.get(`http://localhost:8080/api/models/data?brand=0`);
    return resp.data;
  } catch (error) {
    console.log(error)
  }
};