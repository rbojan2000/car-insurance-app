import customFetch, {checkForUnauthorizedResponse}  from '../utils/axios';
import { toast } from 'react-toastify';


export const getAllSubscribers = async (_, thunkAPI) => {
    
  const { pageIndex, pageSize, search } =
  thunkAPI.getState().proposal;
  let url = `http://localhost:8080/api/subscribers?pageIndex=${pageIndex}&pageSize=${pageSize}`;
  
  if(search) {//search
    url = `http://localhost:8080/api/subscribers/search?pageSize=${pageSize}`;
    url = url + `&search=${search}`;
  }
  
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};


export const createSubscriberThunk = async (subscriber, thunkAPI) => {
  try {
    let url = `http://localhost:8080/api/subscribers/create`;
    const resp = await customFetch.post(url, subscriber);
    toast.success('Subscriber created!');

    return resp.data.msg;
  } catch (error) {
    checkForUnauthorizedResponse(error, thunkAPI);
    toast.error(error.response.data)
    return thunkAPI.rejectWithValue(error.response.data, thunkAPI);
  }
};
