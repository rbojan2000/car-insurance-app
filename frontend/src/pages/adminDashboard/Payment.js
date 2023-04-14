import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CardPayment from '../../components/payment/CardPayment';
import BankPayment from '../../components/payment/BankPayment';
import ChequePayment from '../../components/payment/ChequePayment';
import { useDispatch } from 'react-redux';
import { clearBankPaymentValues, clearChequePaymentValues, clearCardPaymentValues } from '../../services/proposalSlice';

const Payment = () => {
    const [value, setValue] = React.useState(0);
    const dispatch = useDispatch();
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if(newValue === 0){
            dispatch(clearBankPaymentValues);
            dispatch(clearChequePaymentValues);
        }else if(newValue === 1){
            dispatch(clearChequePaymentValues);
            dispatch(clearCardPaymentValues);
        }else{
            dispatch(clearBankPaymentValues);
            dispatch(clearCardPaymentValues);
        }
    };

    return (
        <div>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Card Payment" />
                    <Tab label="Bank Payment" />
                    <Tab label="Cheque Payment" />
                </Tabs>
            </Box>
            {value === 0 && <CardPayment />}
            {value === 1 && <BankPayment />}
            {value === 2 && <ChequePayment />}
        </div>
    );
}
export default Payment;