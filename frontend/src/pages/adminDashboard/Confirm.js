import React from 'react';
import Wrapper from '../../assets/wrappers/Confirm';
import { confirm, handleFormStepsNext } from '../../services/proposalSlice';
import { useDispatch, useSelector } from 'react-redux';  

const ChoosePackage = () => {
  const {
    id
  } = useSelector((store) => store.proposal);

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(handleFormStepsNext());
    dispatch(confirm( id ));
  };
  
  return (
    <Wrapper>
        <div class="confirm-box">
        <label class="confirm-label">Once you confirm there is no going back.</label>
        <button
          onClick={onSubmit}
          type='submit'
          class='confirm-button' >
          Confirm
        </button>
        </div>
    </Wrapper>
  );
};

export default ChoosePackage;