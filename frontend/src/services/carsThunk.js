import customFetch from '../utils/axios';

export const getAllCars = async (_, thunkAPI) => {
    
  const { pageIndex, pageSize, searchCars } =
  thunkAPI.getState().proposal;
  let url = `http://localhost:8080/api/cars?pageIndex=${pageIndex}&pageSize=${pageSize}`;
  
  if(searchCars) {//search
    url = `http://localhost:8080/api/cars/search?pageIndex=${pageIndex}&pageSize=${pageSize}`;
    url = url + `&search=${searchCars}`;
  }
  
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    
  }
};