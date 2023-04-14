import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getAllSubscribers } from './subscribersThunk';
import { getAllCars } from './carsThunk';
import { getBasicPlan } from './planThunk';
import { getAllDrivers } from './driversThunk';
import { createProposalThunk, editProposalThunk, addPaymentThunk, confirmThunk, getRisks, addDriverRisks } from './allProposalsThunk';
import ProposalInfoToast from '../components/ProposalInfoToast';

const cardPayment = {
  cardHolder: '',
  cardNumber: '',
}
const bankPayment = {
  bankName: '',
  transactionNumber: ''
}
const chequePayment = {
  chequeNumber: '',
  chequeDate: ''
}

const initialState = {
  pageIndex: 1,
  pageSize: 6,
  countSubscribers: 0,
  selectedSubscriberNameAndSurname: '',
  selectedCarBrandAndModel: '',
  countCars: 0,
  search: '',
  searchCars: '',
  searchDrivers: '',
  isLoading: false,
  subscribers: [],
  cars: [],
  selectedSubscriber: '',
  selectedCar: '',
  licensePlate: '',
  drivers: [],
  countDrivers: 0,
  selectedDrivers: [],
  pickedDrivers: [],
  selectedDriversNames: [],
  packageType: '',
  isAddNewSubscriberVisible: false,
  showInfoFlag: true,
  currentStep: 0,
  id: 0,
  car: null,
  proposalStatus: '',
  subscriber: null,
  creationDate: '',
  basicPlanInfo: '',
  amount: 0,
  insurancePlan: null,
  risks: [],
  driverRiskId: 0,
  selectedDriversRisk: [],
  ...bankPayment,
  ...cardPayment,
  ...chequePayment
};

const formSteps = [
  0,    //Choose subscriber
  1,    //create subscriber
  2,    //choose car
  3,    //licence plate
  4,    //drivers
  5,    //package
  6,    //plan info
  7,    //confirmation
  8     //payment
];


export const allSubscribers = createAsyncThunk('subscribers/getAll', getAllSubscribers);
export const allCars = createAsyncThunk('cars/getAll', getAllCars);
export const allDrivers = createAsyncThunk('drivers/getAll', getAllDrivers);
export const createProposal = createAsyncThunk('proposals/createProposal', createProposalThunk);
export const editProposal = createAsyncThunk('proposals/editProposal', editProposalThunk);
export const addPayment = createAsyncThunk('proposals/addPayment', addPaymentThunk);
export const confirm = createAsyncThunk('proposals/confirm', confirmThunk);
export const basicPlan = createAsyncThunk('plan/getBasic', getBasicPlan);
export const getAllRisks = createAsyncThunk('proposal/getRisks', getRisks);
export const addDriversRisks = createAsyncThunk('proposal/addRisks', addDriverRisks);


const showinfo = () => {
  toast.info(<ProposalInfoToast />, {
    autoClose: false,
    closeOnClick: false,
    theme: 'colored',
    draggable: true,
    position: 'bottom-left'
  });

}


const proposalSlice = createSlice({
  name: 'proposal',
  formSteps,
  initialState,
  reducers: {
    changePage: (state, { payload }) => {
      state.pageIndex = payload;
    },
    handleSelectedSubscriber: (state, { payload: { subscriber, selectedSubscriber, selectedSubscriberName, selectedSubscriberSurname } }) => {
      state.selectedSubscriber = selectedSubscriber;
      state.subscriber = subscriber;
      state.selectedSubscriberNameAndSurname = selectedSubscriberName + ' ' + selectedSubscriberSurname
      if (state.showInfoFlag) {
        state.showInfoFlag = false;
        showinfo();

      }
    },
    handleSelectedDriver: (state, { payload: { selectedDriver, selectedDriverName, selectedDriverSurname } }) => {
      if (selectedDriverName === '') {
        state.selectedDriversNames = state.selectedDriversNames.filter((jmbg) => !jmbg.includes(selectedDriver.jmbg));
        state.selectedDrivers = state.selectedDrivers.filter(e => e !== selectedDriver.jmbg);
        state.pickedDrivers = state.pickedDrivers.filter(e => e.jmbg !== selectedDriver.jmbg)
        return;
      }
      state.selectedDriversNames.push(selectedDriverName + ' ' + selectedDriverSurname + ' ' + selectedDriver.jmbg)
      state.selectedDrivers.push(selectedDriver.jmbg)
      state.pickedDrivers.push(selectedDriver)
    },
    setSelectedSubscriber: (state, { payload }) => {
      state.selectedSubscriber = payload;
    },
    handleSelectedCar: (state, { payload: { selectedCarId, selectedCarModel, selectedCarBrand } }) => {
      state.selectedCarBrandAndModel = selectedCarBrand + ' ' + selectedCarModel;
      state.selectedCar = selectedCarId;
      state.car = state.cars.find(e => e.id === selectedCarId);
    },
    handleFormStepsNext: (state) => {
      if (state.currentStep === 0 && state.selectedSubscriber === '') {
        toast.error("Subscriber is not selected!");
        return;
      }

      if (state.currentStep === 2 && state.selectedCar === '') {
        toast.error("Car is not selected!");
        return;
      }

      if (state.currentStep === 3 && state.licensePlate.includes("_")) {
        toast.error("Set license plate code!");

        return;
      }

      if (state.currentStep === 5 && state.packageType === '') {
        toast.error("Package is not selected!");

        return;
      }

      if (state.currentStep === 0 && !state.isAddNewSubscriberVisible) {
        state.currentStep = 2;
      }
      else {
        state.currentStep = state.currentStep + 1;
      }
    },
    handleFormStepsBack: (state) => {
      if (state.currentStep === 2 && !state.isAddNewSubscriberVisible) {
        state.currentStep = 0;
      }
      else if (state.currentStep === 0) {
        return;
      }
      else {
        state.currentStep = state.currentStep - 1;
      }

    },
    addNewSubscriberStepActive(state) {
      state.isAddNewSubscriberVisible = true;
      state.currentStep = 1;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
      if(name === 'chequeDate'){
        state[name] = value+':00';
      }
    },
    addRisks: (state, { payload: { id, name } }) => {
      if(state.selectedDriversRisk.find(e => e.id === id && e.driverId === state.driverRiskId)){
        state.selectedDriversRisk = state.selectedDriversRisk.filter((e) => !(e.id === id && e.driverId === state.driverRiskId));
      }else{
        state.selectedDriversRisk.push({id:id, name:name, driverId: state.driverRiskId});
      }
    },
    handleLicensePlateChange: (state, { payload: { licensePlate } }) => {
      state.licensePlate = licensePlate;
    },
    handleChoosedPlan: (state, { payload: { packageType, plan } }) => {
      state.packageType = packageType;
      state.currentStep = state.currentStep + 1;
    },
    setCurrentStep: (state, { payload: { proposalStatus } }) => {
      if (proposalStatus === 'INITIALIZED') state.currentStep = 0;
      if (proposalStatus === 'SUBSCRIBER_ADDED') state.currentStep = 2;
      if (proposalStatus === 'CAR_ADDED') state.currentStep = 4;
      if (proposalStatus === 'DRIVERS_ADDED') state.currentStep = 5;
      if (proposalStatus === 'INSURANCE_PLAN_ADDED') state.currentStep = 7;
      if (proposalStatus === 'CONFIRMED') state.currentStep = 8;
      state.proposalStatus = proposalStatus;
    },
    clearCardPaymentValues: (state) => {
      state.cardHolder = '';
      state.cardNumber = '';
    },
    clearBankPaymentValues: (state) => {
      state.bankName = '';
      state.transactionNumber = '';
    },
    clearChequePaymentValues: (state) => {
      state.chequeNumber = '';
      state.chequeDate = '';
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allSubscribers.pending, (state) => {

      })
      .addCase(allSubscribers.fulfilled, (state, { payload }) => {
        state.subscribers = payload.subscribers;
        state.countSubscribers = payload.count;
      })
      .addCase(allSubscribers.rejected, (state, { payload }) => {

        toast.error(payload);
      })
      .addCase(allCars.pending, (state) => {

      })
      .addCase(allCars.fulfilled, (state, { payload }) => {
        state.cars = payload.cars;
        state.countCars = payload.count;
      })
      .addCase(allCars.rejected, (state, { payload }) => {

        toast.error(payload);
      })
      .addCase(allDrivers.pending, (state) => {

      })
      .addCase(allDrivers.fulfilled, (state, { payload }) => {
        state.drivers = payload.drivers;
        state.countDrivers = payload.count;
      })
      .addCase(allDrivers.rejected, (state, { payload }) => {

        toast.error(payload);
      })
      .addCase(createProposal.pending, (state) => {

      })
      .addCase(createProposal.fulfilled, (state, { payload }) => {
        state.id = payload.id;
        state.proposalStatus = payload.proposalStatus;
        state.creationDate = payload.creationDate;
      })
      .addCase(createProposal.rejected, (state, { payload }) => {

        toast.error(payload);
      })
      .addCase(editProposal.pending, (state) => {

      })
      .addCase(editProposal.fulfilled, (state, { payload }) => {
        state.proposalStatus = payload.proposalStatus;
      })
      .addCase(editProposal.rejected, (state, { payload }) => {

        toast.error(payload);
      })
      .addCase(addPayment.fulfilled, (state, { payload }) => {
        state.proposalStatus = 'PAID';
      })
      .addCase(confirm.fulfilled, (state, { payload }) => {
        state.proposalStatus = 'CONFIRMED';
      })
      .addCase(basicPlan.fulfilled, (state, { payload }) => {
        state.basicPlanInfo = payload;
        state.insurancePlan = payload;
      })
      .addCase(getAllRisks.fulfilled, (state, { payload }) => {
        state.risks = payload;
      })
      .addCase(addDriversRisks.fulfilled, (state, { payload }) => {

      });
  },

});


export const {
  addSubscriber,
  searchSubscriber,
  changePage,
  handleChange,
  handleSelectedSubscriber,
  handleSelectedDriver,
  handleSelectedCar,
  handleLicensePlateChange,
  handleFormStepsNext,
  handleFormStepsBack,
  addNewSubscriberStepActive,
  setSelectedSubscriber,
  handleChoosedPlan,
  setCurrentStep,
  clearCardPaymentValues,
  clearBankPaymentValues,
  clearChequePaymentValues,
  clearValues,
  addRisks
} = proposalSlice.actions;
export default proposalSlice.reducer;
