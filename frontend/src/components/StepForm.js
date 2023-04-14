import React from 'react';
import { Steps } from 'antd';
import { FaUserCheck } from 'react-icons/fa';
import ChooseSubscriber from '../pages/adminDashboard/ChooseSubscriber';
import ChooseCar from '../pages/adminDashboard/ChooseCar';
import { useSelector, useDispatch } from "react-redux";
import { handleFormStepsNext, handleFormStepsBack, editProposal } from '../services/proposalSlice';
import CreateSubscriber from '../pages/adminDashboard/CreateSubscriber';
import AddLicensePlate from '../pages/adminDashboard/AddLicensePlate';
import ChooseDrivers from '../pages/adminDashboard/ChooseDrivers';
import ChoosePackage from '../pages/adminDashboard/ChoosePackage';
import Payment from '../pages/adminDashboard/Payment';
import PlanInfo from '../pages/adminDashboard/PlanInfo';
import Confirm from '../pages/adminDashboard/Confirm';
import { TiUserAddOutline } from 'react-icons/ti';
import { AiFillCar, AiOutlineLike } from 'react-icons/ai';
import Wrapper from '../assets/wrappers/StepForm';
import { RxIdCard } from 'react-icons/rx';
import { GiSteeringWheel } from 'react-icons/gi';
import { FaWpforms } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';


const { Step } = Steps;

const StepForm = () => {
  const dispatch = useDispatch();

  const {
    currentStep,
    id,
    subscriber,
    pickedDrivers,
    car,
    licensePlate,
    proposalStatus,
    creationDate,
    insurancePlan
  } = useSelector((store) => store.proposal);

  const steps = [
    {
      content: <ChooseSubscriber />
    },
    {
      content: <CreateSubscriber />
    },
    {
      content: <ChooseCar />,
    },
    {
      content: <AddLicensePlate />,
    },
    {
      content: <ChooseDrivers />
    },
    {
      content: <ChoosePackage />
    },
    {
      content: <PlanInfo />
    },
    {
      content: <Confirm />
    },
    {
      content: <Payment />
    },
  ];

  const next = () => {
    dispatch(handleFormStepsNext());
    dispatch(editProposal({ proposal: { id, subscriber, pickedDrivers, car, licensePlate, proposalStatus, creationDate, insurancePlan } }));
  };

  const back = () => {
    dispatch(handleFormStepsBack());
  };
  return (
    <Wrapper>
      <Steps current={currentStep} >
        <Step stepNumber={0} title="Subscriber" icon={<FaUserCheck />} />
        <Step stepNumber={1} title="Add subscriber" description={"optional"} icon={<TiUserAddOutline />} />
        <Step stepNumber={2} title="Car" icon={<AiFillCar />} />
        <Step stepNumber={3} title="Licence plate" icon={<RxIdCard />} />
        <Step stepNumber={4} title="Drivers" icon={<GiSteeringWheel />} />
        <Step stepNumber={5} title="Package" icon={<FaWpforms />} />
        <Step stepNumber={6} title="Plan info" />
        <Step stepNumber={7} title="Confirm" icon={<AiOutlineLike />}/>
        <Step stepNumber={8} title="Payment" icon={<MdPayment />}/>
      </Steps>


      <div >
        {steps[currentStep].content}
      </div>

      {proposalStatus !== 'CONFIRMED' && proposalStatus !== 'PAID' &&<div className='btn-containerNextBack'>
        <button
          onClick={back}
          type='submit'
          className='btn btn-block back-btn' >
          back
        </button>
        <button
          onClick={next}
          type='submit'
          className='btn btn-block submit-btn' >
          next
        </button>
      </div>}

    </Wrapper>

  );
}

export default StepForm;
