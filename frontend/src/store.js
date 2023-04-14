import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../src/services/userSlice'
import proposalSlice from './services/proposalSlice';
import allProposalsSlice from './services/allProposalsSlice';
import allAddressesSlice from './services/allAddressesSlice';
import allZipsSlice from './services/allZipsSlice';
import allCitiesSlice from './services/allCitiesSlice';
import allCountriesSlice from './services/allCountriesSlice';
import subscriberSlice from './services/subscriberSlice';
import allBrandsSlice from './services/allBrandsSlice';
import allModelsSlice from './services/allModelsSlice';
import allCarsSlice from './services/allCarsSlice';
import allRisksSlice from './services/allRisksSlice';
import allAccidentHistoriesSlice from './services/allAccidentHistoriesSlice';
export const store = configureStore({
  reducer: {
    user: userSlice,
    allAddresses: allAddressesSlice,
    allZips: allZipsSlice,
    allCities: allCitiesSlice,
    allCountries: allCountriesSlice,
    proposal : proposalSlice,
    allProposals: allProposalsSlice,
    subscriber: subscriberSlice,
    allBrands: allBrandsSlice,
    allModels: allModelsSlice,
    allCars: allCarsSlice,
    allRisks: allRisksSlice,
    allAccidentHistories: allAccidentHistoriesSlice
  },
});
