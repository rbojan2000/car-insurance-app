import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import Wrapper from '../assets/wrappers/ProposalInfoToast';
import {AiFillCar} from 'react-icons/ai';
import {RxIdCard} from 'react-icons/rx';
import { FaUserCheck } from 'react-icons/fa';
import {GiSteeringWheel} from 'react-icons/gi';

const ProposalInfoToast = () => {
    const {
        selectedCarBrandAndModel,
        selectedSubscriberNameAndSurname,
        selectedDriversNames,
        licensePlate,
    
    } = useSelector((store) => store.proposal);

    return (
        <Wrapper>
        <div className="custom-toast">
         { selectedSubscriberNameAndSurname !=='' && <div className="row">
          <FaUserCheck className="icon" />
          <span>{selectedSubscriberNameAndSurname}</span>
        </div> }
        
        { selectedCarBrandAndModel !=='' && <div className="row">
          <AiFillCar className="icon" />
          <span>{selectedCarBrandAndModel}</span>
        </div> }

        { licensePlate !=='' && <div className="row">
          <RxIdCard className="icon" />
          <span>{licensePlate}</span>
        </div> }
        
        
        { selectedDriversNames.length !== 0 &&  <div className="row">
          <GiSteeringWheel className="icon" />
          <span>
          {selectedDriversNames.map((name, index) => {
            const [firstName, lastName] = name.split(' ');
            return (
              <span key={name}>
                {firstName} {lastName}
                {index !== selectedDriversNames.length - 1 ? ', ' : ''}
              </span>
            );
          })}
          </span>
        </div>}
        
        
      </div>
      </Wrapper>
    );
};

export default ProposalInfoToast;