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
import { editAccidentHistory, createAccidentHistory, changeText, getAllDrivers } from '../../../services/allAccidentHistoriesSlice';
import { useEffect } from 'react';


const EditAccidentHistory = ({ title, handleClose, open }) => {
    const {
        isEditing,
        editAccidentHistoryId,
        description,
        timeHappened,
        wasResponsible,
        driverId,
        driversName,
        driversSurname,
        driversJMBG,
        drivers
      } = useSelector((store) => store.allAccidentHistories);
      const dispatch = useDispatch();
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!description || !timeHappened) {
          toast.error('Please fill out all fields');
          return;
        }
        if (isEditing) {
          const id = editAccidentHistoryId;
          dispatch(
            editAccidentHistory({
              accidentHistory: { id, description, timeHappened, wasResponsible, driverId },
            })
          );
          handleClose();
          return;
        }
        dispatch(createAccidentHistory({ description, timeHappened, wasResponsible, driverId }));
        handleClose();
      };
    
      const handleAccidentHistoryInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(changeText({ name, value }));
      };
      useEffect(() => {
        dispatch(getAllDrivers());
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
                    <FormRow
                        type='text'
                        name='description'
                        labelText='Description'
                        value={description}
                        handleChange={handleAccidentHistoryInput}
                    />
                    <FormRow
                        type='datetime-local'
                        name='timeHappened'
                        labelText='Time Happened'
                        value={timeHappened}
                        handleChange={handleAccidentHistoryInput}
                    />
                    <FormRow
                        type='checkbox'
                        name='wasResponsible'
                        labelText='Was Responsible?'
                        value={wasResponsible}
                        handleChange={handleAccidentHistoryInput}
                    />
                    <FormRowSelect
                        name='driver'
                        labelText='Driver'
                        value={driversName+" "+driversSurname+", "+driversJMBG}
                        handleChange={handleAccidentHistoryInput}
                        list={drivers}
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
export default EditAccidentHistory;