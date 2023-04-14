
import Wrapper from '../assets/wrappers/BasicPlanContainer';
import * as React from 'react';
import BasicPlanCard from './BasicPlanCard'
import basicPackage from '../assets/images/basicPackage.png'
const BasicPlanContainer = () => {

  return (
    <Wrapper>
      <div className='zips'>
        <div className='left'>
          <BasicPlanCard/>

        </div>
        <div className='right'>
        <img style={{width: "40%"}, {height: "40%"} } src={basicPackage} alt='BasicPlan'/>
        </div>
      </div>
    </Wrapper>
  );
};
export default BasicPlanContainer;