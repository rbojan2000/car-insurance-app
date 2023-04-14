import Wrapper from '../../assets/wrappers/ChequePayment';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, addPayment } from '../../services/proposalSlice';
import { useNavigate } from 'react-router-dom'

const ChequePayment = () => {
    const {
        amount,
        chequeNumber,
        chequeDate,
        id
      } = useSelector((store) => store.proposal);
      const dispatch = useDispatch();
      const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({ name, value }));
      };
      const paymentMode = "ChequePayment";
      const navigate = useNavigate();
      const pay = () => {
        dispatch(addPayment({ payment: { id, chequeNumber, chequeDate, paymentMode } }));
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
                        <input class="form-control mb-3" name="cardHolder" onChange={handleInputChange} type="text" placeholder="Name"/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Cheque Number</p>
                        <input class="form-control mb-3" name="chequeNumber" value={chequeNumber} onChange={handleInputChange} type="text" placeholder="1234 4567 8910"/>
                    </div>
                </div>
                <div class="col-12">
                    <div class="d-flex flex-column">
                        <p class="text mb-1">Cheque Date</p>
                        <input class="form-control mb-3" name="chequeDate" value={chequeDate} onChange={handleInputChange} type="datetime-local" />
                    </div>
                </div>
                <div class="col-12">
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
export default ChequePayment;