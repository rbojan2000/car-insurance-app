import { FaMoneyBill, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Object';
import Info from './generic/Info';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { handleSelectedSubscriber,
  handleChange,
  handleSelectedCar, 
  setCurrentStep,
  clearValues} from '../services/proposalSlice';

const Proposal = ({
  id,
  creationDate,
  proposalStatus,
  subscriber,
  amount,
  licenceNum,
  car
}) => {
  var selectedSubscriberName = "";
  var selectedSubscriberSurname = "";
  var selectedSubscriber = "";
  if(subscriber !== null){
    selectedSubscriberName = subscriber.name;
    selectedSubscriberSurname = subscriber.surname;
    selectedSubscriber = subscriber.jmbg;
  }
  const dispatch = useDispatch();
  const handleEdit = () =>{
    dispatch(clearValues());
    var name = "id";
    var value = id;
    dispatch(handleChange({name, value}));
    name = "creationDate";
    value = creationDate;
    dispatch(handleChange({name, value}));
    dispatch(handleSelectedCar({selectedCarId : car.id, selectedCarModel : car.model, selectedCarBrand: car.brand}));
    name = "licensePlate";
    value = licenceNum;
    dispatch(handleChange({name, value}));
    dispatch(handleSelectedSubscriber({subscriber, selectedSubscriber, selectedSubscriberName, selectedSubscriberSurname}));
    dispatch(setCurrentStep({proposalStatus}));
  }
  const date = moment(creationDate).format('MMM Do, YYYY');
  return (
    <Wrapper>
      {subscriber !== null && <header>
        <div className='main-icon'>{selectedSubscriberName.charAt(0)+selectedSubscriberSurname.charAt(0)}</div>
        <div className='info'>
          <h5>{selectedSubscriberName} {selectedSubscriberSurname}</h5>
          <p>{licenceNum}</p>
        </div>
      </header>}
      <div className='content'>
        <div className='content-center'>
          {amount !== null && <Info icon={<FaMoneyBill />} text={amount + " EUR"} />}
          <Info icon={<FaCalendarAlt />} text={date} />
          <div className={`status ${proposalStatus}`}>{proposalStatus}</div>
        </div>
        <footer>
           <div className='actions'>
             {
           proposalStatus === "PAID" && <Link className='btn edit-btn'>
              PDF
            </Link>}
            {proposalStatus !== "PAID" &&
            <Link className='btn edit-btn' to="/createProposal" onClick={handleEdit}>
                Edit
              </Link>}
          </div>
        </footer>
      </div>
    </Wrapper>
        );
  }
export default Proposal;