import Wrapper from '../../assets/wrappers/CardPayment';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, addPayment } from '../../services/proposalSlice';
import { useNavigate } from 'react-router-dom'

const CardPayment = () => {
    const {
        amount,
        cardNumber,
        cardHolder,
        id
    } = useSelector((store) => store.proposal);
    const dispatch = useDispatch();
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({ name, value }));
    };
    const navigate = useNavigate();
    const paymentMode = "CardPayment";
    const pay = () => {
        dispatch(addPayment({ payment: { id, cardNumber, cardHolder, paymentMode } }));
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
                                <input class="form-control mb-3" name="cardHolder" value={cardHolder} onChange={handleInputChange} type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Card Number</p>
                                <input class="form-control mb-3" name="cardNumber" value={cardNumber} onChange={handleInputChange} type="text" placeholder="1234 5678 435678" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">Expiry</p>
                                <input class="form-control mb-3" type="text" placeholder="MM/YYYY" />
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex flex-column">
                                <p class="text mb-1">CVV/CVC</p>
                                <input class="form-control mb-3 pt-2 " type="password" placeholder="***" />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="btn btn-primary mb-3" onClick={pay}>
                                <span class="ps-3">Pay {amount} RSD</span>
                                <span class="fas fa-arrow-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
export default CardPayment;