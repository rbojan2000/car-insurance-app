import Wrapper from '../../assets/wrappers/BankPayment';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, addPayment } from '../../services/proposalSlice';
import { useNavigate } from 'react-router-dom'

const BankPayment = () => {
    const {
        amount,
        bankName,
        transactionNumber,
        id
    } = useSelector((store) => store.proposal);
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({ name, value }));
    };
    const paymentMode = "BankPayment";
    const navigate = useNavigate();
    const pay = () => {
        dispatch(addPayment({ payment: { id, bankName, transactionNumber, paymentMode } }));
        navigate("/");
    }
    return (
        <Wrapper>
            <div class="container p-0">
                <div class="card px-4">
                    <p class="h8 py-3">Payment Details</p>
                    <div class="row gx-3">
                        <div class="col-12">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Person Name</p>
                                <input class="form-control mb-3" name="cardHolder" onChange={handleInputChange} type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Bank Name</p>
                                <input class="form-control mb-3" name="bankName" value={bankName} onChange={handleInputChange} type="text" placeholder="UniCredit Bank" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Transaction Number</p>
                                <input class="form-control mb-3" name="transactionNumber" value={transactionNumber} onChange={handleInputChange} type="text" placeholder="1234 5678 435678" />
                            </div>
                        </div>
                        <div class="col-13">
                            <div class="btn btn-primary mb-3" onClick={pay}>
                                <span class="ps-3">Pay {amount}RSD</span>
                                <span class="fas fa-arrow-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
export default BankPayment;