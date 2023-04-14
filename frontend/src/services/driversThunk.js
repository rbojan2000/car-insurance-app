import customFetch, {checkForUnauthorizedResponse} from '../utils/axios';


export const getAllDrivers = async (_, thunkAPI) => {
    
  const { pageIndex, pageSize, searchDrivers } =
  thunkAPI.getState().proposal;
  
  let url = `http://localhost:8080/api/drivers/possibleDrivers?pageIndex=${pageIndex}&pageSize=${pageSize}`;
  
  if(searchDrivers) {//search
    url = `http://localhost:8080/api/drivers/possibleDrivers/search?pageSize=${pageSize}`;
    url = url + `&search=${searchDrivers}`;
  }
  
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI); 
  }
};
