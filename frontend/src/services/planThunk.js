import customFetch, {checkForUnauthorizedResponse} from '../utils/axios';


export const getBasicPlan = async (_, thunkAPI) => {
  
  let url = `http://localhost:8080/api/insurancePlans/basicPlan`;

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI); 
  }
};
