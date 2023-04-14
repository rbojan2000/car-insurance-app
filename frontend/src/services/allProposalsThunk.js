import customFetch, { checkForUnauthorizedResponse } from '../utils/axios';

export const getAllProposalsThunk = async (_, thunkAPI) => {
  const { pageIndex, pageSize  } =
    thunkAPI.getState().allProposals;
  let url = `http://localhost:8080/api/proposals?pageIndex=${pageIndex}&pageSize=${pageSize}`;
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
    
  }
};

export const createProposalThunk = async (_, thunkAPI) => {
  let url = `http://localhost:8080/api/proposals`;
  try {
    const resp = await customFetch.post(url);
    return resp.data;
  } catch (error) {
    
  }
};

export const editProposalThunk = async ({proposal}, thunkAPI) => {
  let url = `http://localhost:8080/api/proposals`;
  try {
    const resp = await customFetch.put(url, proposal);
    return resp.data;
  } catch (error) {
    
  }
};

export const addPaymentThunk = async ({payment}, thunkAPI) => {
  let url = `http://localhost:8080/api/proposals/payment`;
  try {
    const resp = await customFetch.put(url, payment);
    return resp.data;
  } catch (error) {
    
  }
};

export const confirmThunk = async ( id, thunkAPI) => {
  let url = `http://localhost:8080/api/proposals/confirm?id=${id}`;
  try {
    const resp = await customFetch.put(url);
    return resp.data;
  } catch (error) {
    
  }
};

export const getRisks = async (driverId, thunkAPI) => {
  let url = `http://localhost:8080/api/risks/driver?driverId=${driverId}`;
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    
  }
};

export const addDriverRisks = async (risks, thunkAPI) => {
  let url = `http://localhost:8080/api/drivers/risks`;
  try {
    const resp = await customFetch.post(url, risks);
    return resp.data;
  } catch (error) {
    
  }
};