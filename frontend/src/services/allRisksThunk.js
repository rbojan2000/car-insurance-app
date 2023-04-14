import customFetch from '../utils/axios';
import { getAllRisks } from './allRisksSlice';

export const getAllRisksThunk = async (_, thunkAPI) => {
  const { pageIndex, pageSize } =
    thunkAPI.getState().allRisks;

  let url = `http://localhost:8080/api/risks?pageIndex=${pageIndex}&pageSize=${pageSize}`;

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    console.log(error)
  }
};
export const createRiskThunk = async (risk, thunkAPI) => {
  try {
    const resp = await customFetch.post('http://localhost:8080/api/risks', risk);
    thunkAPI.dispatch(getAllRisks());
    return resp.data.msg;
  } catch (error) {

  }
};
export const deleteRiskThunk = async (riskId, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`http://localhost:8080/api/risks?id=${riskId}`);
    thunkAPI.dispatch(getAllRisks());
    return resp.data.msg;
  } catch (error) {

  }
};
export const editRiskThunk = async ({ risk }, thunkAPI) => {
  try {
    const resp = await customFetch.put(`http://localhost:8080/api/risks`, risk);
    thunkAPI.dispatch(getAllRisks());
    return resp.data;
  } catch (error) {
    
  }
};