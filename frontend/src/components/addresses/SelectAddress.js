import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import FormRowSelect from '../generic/FormRowSelect';
import { getData, changeText, clearValues, getAllAddresses } from '../../services/allAddressesSlice';

const SelectAddress = ({ title, handleClose, open, setAddress }) => {
    const {
        countries,
        country,
        countryId,
        cityId,
        cities,
        city,
        selectedAddresses,
        address,
        addressId
      } = useSelector((store) => store.allAddresses);
      const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(getAllAddresses());
      },[dispatch]);
      const handleSubmit = (e) => {
        e.preventDefault();
    
        dispatch(setAddress({ addressId, address }));
        handleClose();
      };
      const closeDialog = () => {
        dispatch(clearValues());
        handleClose();
      } 
      const handleAddressInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(changeText({ name, value }));
      };
    
      useEffect(() => {
        dispatch(getData({countryId , cityId}));
      }, [countryId , cityId, dispatch]);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <Dialog open={open} onClose={closeDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" fullScreen={fullScreen}>
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <form className='form'>
                        <div className='form-center'>
                    <FormRowSelect
                        name='country'
                        labelText='Country'
                        value={country}
                        handleChange={handleAddressInput}
                        list={countries}
                    />
                    <FormRowSelect
                        name='city'
                        labelText='City'
                        value={city}
                        handleChange={handleAddressInput}
                        list={cities}
                    />
                    <FormRowSelect
                        name='address'
                        labelText='Address'
                        value={address}
                        handleChange={handleAddressInput}
                        list={selectedAddresses}
                    />
                </div>
            </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>Close</Button>
                <Button onClick={handleSubmit} autoFocus>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
  );
};
export default SelectAddress;