import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useTheme } from '@mui/material/styles';
import FormRow from '../generic/FormRow';
import FormRowSelect from '../generic/FormRowSelect';
import { getData, editAddress, createAddress, changeText } from '../../services/allAddressesSlice';

const EditAddress = ({ title, handleClose, open }) => {
    const {
        streetNumber,
        street,
        isEditing,
        editAddressId,
        countries,
        country,
        countryId,
        cityId,
        cities,
        city,
        zips,
        zip,
        zipId
      } = useSelector((store) => store.allAddresses);
      const dispatch = useDispatch();
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!street || !streetNumber) {
          toast.error('Please fill out all fields');
          return;
        }
        if (isEditing) {
          const id = editAddressId
          dispatch(
            editAddress({
              address: { id, street, zipId, streetNumber, countryId, cityId },
            })
          );
          handleClose();
          return;
        }
        dispatch(createAddress({ street, zipId, streetNumber, countryId, cityId }));
        handleClose();
      };
    
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
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" fullScreen={fullScreen}>
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
                        name='zip'
                        labelText='Zip'
                        value={zip}
                        handleChange={handleAddressInput}
                        list={zips}
                    />
                    <FormRow
                        type='text'
                        name='street'
                        labelText='Street'
                        value={street}
                        handleChange={handleAddressInput}
                    />
                    <FormRow
                        type='text'
                        name='streetNumber'
                        labelText='Street Number'
                        value={streetNumber}
                        handleChange={handleAddressInput}
                    />
                </div>
            </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleSubmit} autoFocus>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
  );
};
export default EditAddress;