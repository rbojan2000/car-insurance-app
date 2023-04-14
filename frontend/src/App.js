import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Error from './pages/Error';
import   ProtectedRoute   from './pages/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  CreateProposal,
  Profiles,
  Proposals,
  SharedLayout,
  Addresses,
  Zips,
  Cities,
  Countries,
  Brands,
  Models,
  Cars,
  Risks,
  AccidentHistories

} from './pages/adminDashboard'


function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route
            path='/'
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Proposals />} />
            <Route path='profiles' element={<Profiles />} />
            <Route path='addresses' element={<Addresses />} />
            <Route path='zips' element={<Zips />} />
            <Route path='cities' element={<Cities />} />
            <Route path='countries' element={<Countries />} />
            <Route path='brands' element={<Brands />} />
            <Route path='models' element={<Models />} />
            <Route path='cars' element={<Cars />} />
            <Route path='risks' element={<Risks />} />
            <Route path='accidentHistories' element={<AccidentHistories />} />
            <Route path='createProposal' element={<CreateProposal />} />
            
        </Route>
        <Route path='landing' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position='top-center'/>
    </BrowserRouter>

  );
}

export default App;
