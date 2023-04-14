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
import { editBrand, createBrand, changeText } from '../../../services/allBrandsSlice';

const EditBrand = ({ title, handleClose, open }) => {
    const {
        isEditing,
        editBrandId,
        name
      } = useSelector((store) => store.allBrands);
      const dispatch = useDispatch();
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!name) {
          toast.error('Please fill out all fields');
          return;
        }
        if (isEditing) {
          const id = editBrandId;
          dispatch(
            editBrand({
              brand: { id, name },
            })
          );
          handleClose();
          return;
        }
        dispatch(createBrand({ name }));
        handleClose();
      };
    
      const handleBrandInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(changeText({ name, value }));
      };
    
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
                    <FormRow
                        type='text'
                        name='name'
                        labelText='Brand'
                        value={name}
                        handleChange={handleBrandInput}
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
export default EditBrand;