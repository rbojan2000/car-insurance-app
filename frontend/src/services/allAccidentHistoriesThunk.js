import customFetch from '../utils/axios';
import { getAllAccidentHistories } from './allAccidentHistoriesSlice';

export const getAllAccidentHistoriesThunk = async (_, thunkAPI) => {
  const { pageIndex, pageSize } =
    thunkAPI.getState().allAccidentHistories;

  let url = `http://localhost:8080/api/accidentHistories?pageIndex=${pageIndex}&pageSize=${pageSize}`;

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    console.log(error)
  }
};
export const createAccidentHistoryThunk = async (accidentHistory, thunkAPI) => {
  try {
    const resp = await customFetch.post('http://localhost:8080/api/accidentHistories', accidentHistory);
    thunkAPI.dispatch(getAllAccidentHistories());
    return resp.data.msg;
  } catch (error) {

  }
};
export const deleteAccidentHistoryThunk = async (accidentHistoryId, thunkAPI) => {
  try {
    const resp = await customFetch.delete(`http://localhost:8080/api/accidentHistories?id=${accidentHistoryId}`);
    thunkAPI.dispatch(getAllAccidentHistories());
    return resp.data.msg;
  } catch (error) {

  }
};
export const editAccidentHistoryThunk = async ({ accidentHistory }, thunkAPI) => {
  try {
    const resp = await customFetch.put(`http://localhost:8080/api/accidentHistories`, accidentHistory);
    thunkAPI.dispatch(getAllAccidentHistories());
    return resp.data;
  } catch (error) {
    
  }
};
export const getAllDriversThunk = async (thunkAPI) => {
  let url = `http://localhost:8080/api/drivers/all`;
  
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    
  }
};