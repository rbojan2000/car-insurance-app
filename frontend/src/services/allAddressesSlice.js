import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllAddressesThunk, createAddressThunk, editAddressThunk, deleteAddressThunk, getDataThunk } from './allAddressesThunk';

const editAddressState = {
  countries: [],
  country: '',
  countryId: 0,
  cities: [],
  city : '',
  cityId : 0,
  zips: [],
  zip: 0,
  street: '',
  streetNumber: '',
  isEditing: false,
  zipId: 0,
  address: '',
  addressId: 0,
  selectedAddresses: []
}

const initialState = {
    addresses: [],
    pageIndex: 1,
    pageSize: 10,
    count: 0,
    ...editAddressState
};

export const getAllAddresses = createAsyncThunk('allAddresses/getAddresses', getAllAddressesThunk);

export const createAddress = createAsyncThunk('allAddresses/createAddress', createAddressThunk);

export const editAddress = createAsyncThunk('allAddresses/editAddress', editAddressThunk);

export const deleteAddress = createAsyncThunk('allAddresses/deleteAddress', deleteAddressThunk);

export const getData = createAsyncThunk('allAddresses/getData', getDataThunk);

const allAddressesSlice = createSlice({
  name: 'allAddresses',
  initialState,
  reducers: {
    handleChange: (state, { payload: { pageIndex, pageSize } }) => {
      state.pageIndex = pageIndex;
      state.pageSize = pageSize;
    },
    changeText: (state, { payload: { name, value } }) => {
      if(name === 'country'){
        state[name] = state.countries.find(e => e.name === value).name;
        state[name + 'Id'] = state.countries.find(e => e.name === value).id;
        state.city = '';
        state.cityId = 0;
        state.zip = '';
        state.zipId = 0;
        state.address = '';
        state.addressId = 0;
      }else if(name === 'city'){
        state[name] = state.cities.find(e => e.name === value).name;
        state[name + 'Id'] = state.cities.find(e => e.name === value).id;
        state.zip = '';
        state.zipId = 0;
        state.address = '';
        state.addressId = 0;
      }else if(name === 'zip'){
        state[name] = state.zips.find(e => e.name === value).name;
        state[name + 'Id'] = state.zips.find(e => e.name === value).id;
      }else if(name === 'address'){
        state[name] = state.selectedAddresses.find(e => e.name === value).name;
        state[name + 'Id'] = state.selectedAddresses.find(e => e.name === value).id;
      }else{
        state[name] = value;
      }
    },
    changePage: (state, { payload }) => {
      state.pageIndex = payload;
    },
    clearValues: (state) => {
      return {
        ...state, ...editAddressState
      };
    },
    setEditAddress: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearAllAddressesState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAddresses.pending, (state) => {

      })
      .addCase(getAllAddresses.fulfilled, (state, { payload }) => {
        state.addresses = payload.addresses;
        state.countryId = payload.addresses[0].countryId;
        state.country = payload.addresses[0].country;
        state.cityId = payload.addresses[0].cityId;
        state.city = payload.addresses[0].city;
        state.zipId = payload.addresses[0].zipId;
        state.zip = payload.addresses[0].zip;
        state.addressId = payload.addresses[0].id;
        state.address = payload.addresses[0].name;
        state.count = payload.count;
      })
      .addCase(getAllAddresses.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(createAddress.pending, (state) => {
      })
      .addCase(createAddress.fulfilled, (state) => {
        toast.success('Address Created');
      })
      .addCase(createAddress.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(deleteAddress.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteAddress.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editAddress.pending, (state) => {
      })
      .addCase(editAddress.fulfilled, (state) => {
  
        toast.success('Address Modified...');
      })
      .addCase(editAddress.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(getData.pending, (state) => {
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.countries = payload.countries;
        state.cities = payload.cities;
        state.zips = payload.zips;
        state.selectedAddresses = payload.addresses;
        if(state.cityId === 0 && payload.cities.length !== 0){
          state.cityId = payload.cities[0].id;
          state.city = payload.cities[0].name;
        }
        if(state.zipId === 0 && payload.zips.length !== 0){
          state.zipId = payload.zips[0].id;
          state.zip = payload.zips[0].name;
          state.addressId = payload.addresses[0].id;
          state.address = payload.addresses[0].name;
        }
      })
      .addCase(getData.rejected, (state, { payload }) => {

        toast.error(payload);
      });
  },
});

export const {
  handleChange,
  changePage,
  changeText,
  clearAllAddressesState,
  setEditAddress,
  clearValues
} = allAddressesSlice.actions;

export default allAddressesSlice.reducer;