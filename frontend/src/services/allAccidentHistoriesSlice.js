import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllAccidentHistoriesThunk, createAccidentHistoryThunk, editAccidentHistoryThunk, deleteAccidentHistoryThunk, getAllDriversThunk} from './allAccidentHistoriesThunk';

const editAccidentHistoryState = {
  description: '',
  timeHappened: '',
  wasResponsible: false,
  driverId: 0,
  driversName: '',
  driversSurname: '',
  driversJMBG: '',
  isEditing: false,
  drivers: []
}

const initialState = {
    accidentHistories: [],
    pageIndex: 1,
    pageSize: 10,
    count: 0,
    ...editAccidentHistoryState
};

export const getAllAccidentHistories = createAsyncThunk('allAccidentHistories/getAccidentHistories', getAllAccidentHistoriesThunk);

export const createAccidentHistory = createAsyncThunk('allAccidentHistories/createAccidentHistory', createAccidentHistoryThunk);

export const editAccidentHistory = createAsyncThunk('allAccidentHistories/editAccidentHistory', editAccidentHistoryThunk);

export const deleteAccidentHistory = createAsyncThunk('allAccidentHistories/deleteAccidentHistory', deleteAccidentHistoryThunk);

export const getAllDrivers = createAsyncThunk('allAccidentHistories/getAllDrivers', getAllDriversThunk);

const allAccidentHistoriesSlice = createSlice({
  name: 'allAccidentHistories',
  initialState,
  reducers: {
    handleChange: (state, { payload: { pageIndex, pageSize } }) => {
      state.pageIndex = pageIndex;
      state.pageSize = pageSize;
    },
    changeText: (state, { payload: { name, value } }) => {
      if(name === "driver"){
        state.driversName = state.drivers.find(e => (e.name + " " + e.surname + ", " + e.jmbg) === value).name;
        state.driversSurname = state.drivers.find(e => (e.name + " " + e.surname + ", " + e.jmbg) === value).surname;
        state.driversJMBG = state.drivers.find(e => (e.name + " " + e.surname + ", " + e.jmbg) === value).jmbg;
        state.driverId = state.drivers.find(e => (e.name + " " + e.surname + ", " + e.jmbg) === value).id;
      }else if(name === 'timeHappened'){
        state[name] = value + ':00';
      }else if(name === 'wasResponsible'){
        state[name] = !state.wasResponsible;
      }else{
        state[name] = value;
      }
    },
    changePage: (state, { payload }) => {
      state.pageIndex = payload;
    },
    clearValues: (state) => {
      return {
        ...state, ...editAccidentHistoryState
      };
    },
    setEditAccidentHistory: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    clearAllAccidentHistoriesState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllAccidentHistories.pending, (state) => {

      })
      .addCase(getAllAccidentHistories.fulfilled, (state, { payload }) => {
        state.accidentHistories = payload.accidentHistories;
        state.count = payload.count;
      })
      .addCase(getAllAccidentHistories.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(createAccidentHistory.pending, (state) => {
      })
      .addCase(createAccidentHistory.fulfilled, (state) => {
        toast.success('Accident History Created');
      })
      .addCase(createAccidentHistory.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(deleteAccidentHistory.fulfilled, (state, { payload }) => {
        toast.success(payload);
      })
      .addCase(deleteAccidentHistory.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(editAccidentHistory.pending, (state) => {
      })
      .addCase(editAccidentHistory.fulfilled, (state) => {
  
        toast.success('Accident History Modified...');
      })
      .addCase(editAccidentHistory.rejected, (state, { payload }) => {
        toast.error(payload);
      })
      .addCase(getAllDrivers.pending, (state) => {
      })
      .addCase(getAllDrivers.fulfilled, (state, { payload }) => {
        state.drivers = payload;
      })
      .addCase(getAllDrivers.rejected, (state, { payload }) => {
        toast.error(payload);
      });
  },
});

export const {
  handleChange,
  changePage,
  changeText,
  clearAllAccidentHistoriesState,
  setEditAccidentHistory,
  clearValues
} = allAccidentHistoriesSlice.actions;

export default allAccidentHistoriesSlice.reducer;