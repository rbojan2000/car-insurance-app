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
import { getData, editCar, createCar, changeText } from '../../services/allCarsSlice';

const EditCar = ({ title, handleClose, open }) => {
    const {
        year,
        image,
        isEditing,
        editCarId,
        brands,
        brand,
        brandId,
        modelId,
        models,
        model,
      } = useSelector((store) => store.allCars);
      const dispatch = useDispatch();
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!year) {
          toast.error('Please fill out all fields');
          return;
        }
        if (isEditing) {
          const id = editCarId
          dispatch(
            editCar({
              car: { id, year, image, brandId, modelId },
            })
          );
          handleClose();
          return;
        }
        dispatch(createCar({ year, image, brandId, modelId }));
        handleClose();
      };
    
      const handleCarInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(changeText({ name, value }));
      };
    
      useEffect(() => {
        dispatch(getData({brandId}));
      }, [brandId, dispatch]);
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
                        name='brand'
                        labelText='Brand'
                        value={brand}
                        handleChange={handleCarInput}
                        list={brands}
                    />
                    <FormRowSelect
                        name='model'
                        labelText='Model'
                        value={model}
                        handleChange={handleCarInput}
                        list={models}
                    />
                    <FormRow
                        type='number'
                        name='year'
                        labelText='Year'
                        value={year}
                        handleChange={handleCarInput}
                    />
                    <FormRow
                        type='text'
                        name='image'
                        labelText='Image'
                        value={image}
                        handleChange={handleCarInput}
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
export default EditCar;