import Wrapper from '../assets/wrappers/BasicPlanCardWrapper';
import * as React from 'react';
import { basicPlan } from '../services/proposalSlice';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Info from './generic/Info';
import { FaSortAmountUpAlt, FaPercentage, FaQuestion } from 'react-icons/fa';

const  BasicPlanCard = () => {
 
  const {
    basicPlanInfo
  } = useSelector((store) => store.proposal);

  const dispatch = useDispatch();
  useEffect(() => {     
    dispatch(basicPlan());
  }, [dispatch]);

  return (
    <Wrapper>
    <div className='content'>
        <div className='content-center'>
        </div>
       <footer>
              <ul className="insurance-items">
                  {basicPlanInfo !== '' && basicPlanInfo.insuranceItemsDTO.map((item) => (
                    <li  className="insurance-item" key={item.name}>
                      <h5> {item.name} </h5>
                      <Info icon={<FaSortAmountUpAlt />} text={item.amount} />
                      <Info icon={<FaPercentage />} text={item.franchisePercentage} />
                      <Info icon={<FaQuestion/>} text={item.isOptional.toString()} />
                    </li>
                  ))}
                </ul>
                
        </footer>
        <div>
        </div>
      </div>
    </Wrapper>
  );
};
export default BasicPlanCard;