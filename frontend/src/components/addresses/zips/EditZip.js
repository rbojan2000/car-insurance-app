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
import FormRow from '../../generic/FormRow';
import FormRowSelect from '../../generic/FormRowSelect';
import { getData, editZip, createZip, changeText } from '../../../services/allZipsSlice';

const EditZip = ({ title, handleClose, open }) => {
    const {
        isEditing,
        editZipId,
        countries,
        country,
        countryId,
        cityId,
        cities,
        city,
        name
      } = useSelector((store) => store.allZips);
      const dispatch = useDispatch();
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!name) {
          toast.error('Please fill out all fields');
          return;
        }
        if (isEditing) {
          const id = editZipId; 
          dispatch(
            editZip({
              zip: { id, name, countryId, cityId },
            })
          );
          handleClose();
          return;
        }
        dispatch(createZip({ name, countryId, cityId }));
        handleClose();
      };
    
      const handleZipInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(changeText({ name, value }));
      };
    
      useEffect(() => {
        dispatch(getData({countryId}));
      }, [countryId, dispatch]);
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
                        handleChange={handleZipInput}
                        list={countries}
                    />
                    <FormRowSelect
                        name='city'
                        labelText='City'
                        value={city}
                        handleChange={handleZipInput}
                        list={cities}
                    />
                    <FormRow
                        type='text'
                        name='name'
                        labelText='Zip Number'
                        value={name}
                        handleChange={handleZipInput}
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
export default EditZip;