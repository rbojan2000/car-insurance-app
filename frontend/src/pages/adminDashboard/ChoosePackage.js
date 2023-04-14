import React from 'react';
import Wrapper from '../../assets/wrappers/ChoosePackageWrapper';
import basicPlan from '../../assets/images/basicPackage.png';
import premiumPlan from '../../assets/images/advancedPackage.png';
import { handleChoosedPlan } from '../../services/proposalSlice';
import { useDispatch } from 'react-redux';  

const ChoosePackage = () => {

  const dispatch = useDispatch();

  const handleSelectedPlan = (plan) => {
    dispatch(handleChoosedPlan({ packageType: plan}));
  };
  
  return (
    <Wrapper>

      <div className="container">
        <div onClick={() => handleSelectedPlan('basic')} className="basic-plan">
          <h1>Basic Plan</h1>
          <img style={{width: "70%"}, {height: "70%"} }src={basicPlan} alt="basic" />
          
        </div>
        <div onClick={() => handleSelectedPlan('premium')} className="premium-plan">
          <h1>Premium Plan</h1>
          <img style={{width: "70%"}, {height: "70%"} } src={premiumPlan} alt="premium" />
        </div>
      </div>
    </Wrapper>
  );
};

export default ChoosePackage;