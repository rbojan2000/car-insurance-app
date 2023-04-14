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
import { getData, editModel, createModel, changeText } from '../../../services/allModelsSlice';

const EditModel = ({ title, handleClose, open }) => {
    const {
        isEditing,
        editModelId,
        brands,
        brand,
        brandId,
        name
      } = useSelector((store) => store.allModels);
      const dispatch = useDispatch();
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!name) {
          toast.error('Please fill out all fields');
          return;
        }
        if (isEditing) {
          const id = editModelId;
          dispatch(
            editModel({
              model: { id, name, brandId },
            })
          );
          handleClose();
          return;
        }
        dispatch(createModel({ name, brandId }));
        handleClose();
      };
    
      const handleModelInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(changeText({ name, value }));
      };
    
      useEffect(() => {
        dispatch(getData());
      }, [dispatch]);
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
                        handleChange={handleModelInput}
                        list={brands}
                    />
                    <FormRow
                        type='text'
                        name='name'
                        labelText='Model'
                        value={name}
                        handleChange={handleModelInput}
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
export default EditModel;