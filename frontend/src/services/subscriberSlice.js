import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { createSubscriberThunk} from './subscribersThunk';
import { handleSelectedSubscriber } from './proposalSlice';

const initialState = {
  isLoading: false,
  isCreatedFlag: false,
  name: '',
  surname: '',
  jmbg: '',
  birth: '',
  genderOptions: ['MALE', 'FEMALE'],
  gender: 'MALE',
  materialStatusOptions: ['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED', 'OTHER'],
  materialStatus: 'SINGLE',
  addressId: 0,
  address: ''

};


export const updateAndThenGet = () => async (dispatch) => {
  await dispatch(handleSelectedSubscriber({selectedSubscriber : "jmbg", selectedSubscriberName: "name", selectedSubscriberSurname: "surname"}));
}

export const createSubscriber = createAsyncThunk('subscribers/create', (subscriber, thunkAPI) => createSubscriberThunk(subscriber));
 

const subscriberSlice = createSlice({
  name: 'subscriber',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    setAddress: (state, { payload: { addressId, address } }) => {
      state.address = address;
      state.addressId = addressId;
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSubscriber.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSubscriber.fulfilled, (state) => {
        state.isCreatedFlag = true;
        state.isLoading = false;
        toast.success('Subscriber set for choosen one! ');

      })
      .addCase(createSubscriber.rejected, (state, { payload }) => {
        state.isCreatedFlag = false;
        
        state.isLoading = false;
        toast.error(payload);
      })
  },

  
});

export const { handleChange, clearValues, setAddress } = subscriberSlice.actions;

export default subscriberSlice.reducer;
