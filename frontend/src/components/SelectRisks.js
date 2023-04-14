import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import FormRow from './generic/FormRow';
import { addRisks, getAllRisks } from '../services/proposalSlice';

const SelectRisks = ({ title, handleClose, open }) => {
    const {
        risks,
        driverRiskId
    } = useSelector((store) => store.proposal);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addRisks(risks))
        handleClose();
    };

    const handleRisksInput = (e) => {
        const id = e.target.id;
        const name = e.target.name;
        dispatch(addRisks({ id, name }));
    };
    useEffect(() => {
        dispatch(getAllRisks({ driverId: driverRiskId }));
    }, [dispatch]);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" fullScreen={fullScreen}>
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <form className='form'>
                    <div className='form-center'>
                        {risks.map((risk) => (
                            <FormRow
                                type='checkbox'
                                id={risk.id}
                                name={risk.name}
                                labelText={risk.name}
                                handleChange={handleRisksInput}
                            />))}
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
export default SelectRisks;