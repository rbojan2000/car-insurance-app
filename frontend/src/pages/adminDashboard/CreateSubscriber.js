import Wrapper from '../../assets/wrappers/formWrapper';
import FormRow  from '../../components/generic/FormRow';
import FormRowSelect  from '../../components/generic/FormRowSelect';
import { useDispatch, useSelector } from 'react-redux';
import {  toast } from 'react-toastify';
import {  handleSelectedSubscriber} from '../../services/proposalSlice';
import { useEffect } from 'react';
import * as React from 'react';
import SelectAddress from '../../components/addresses/SelectAddress';

import {
  handleChange,
  clearValues,
  createSubscriber,
  setAddress
} from '../../services/subscriberSlice';

const CreateSubscriber = () => {
  const dispatch = useDispatch();

  const {
    isCreatedFlag,
    isLoading,
    name,
    surname,
    jmbg,
    birth,
    genderOptions,
    gender,
    materialStatus,
    materialStatusOptions,
    address,
    addressId
  } = useSelector((store) => store.subscriber);

  useEffect(() => {
      if (isCreatedFlag) {
        dispatch(handleSelectedSubscriber({selectedSubscriber : jmbg, selectedSubscriberName: name, selectedSubscriberSurname: surname}));
      }
  }, [isCreatedFlag, dispatch, jmbg, name, surname]);

  const handleSubscriberInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    dispatch(handleChange({ name, value }));
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const createSubscriberAsync = async () => {
    await dispatch(createSubscriber({ name, surname, jmbg, birth, gender, materialStatus, 
      addressId }));
    return jmbg;
  };

  const validate =() => {
    if (!name || !surname || !jmbg || !birth || !gender || !materialStatus) {
      toast.error('Please fill out all fields');
      return;
    }

    if (jmbg.length !== 13) {
      toast.error('Invalid jmbg: Must be of 13 characters');
      return;
    } 
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    validate();
  
    createSubscriberAsync();
  };
  
  return (
    <Wrapper>
      <form className='form'>
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            value={name}
            handleChange={handleSubscriberInput}
          />
          <FormRow
            type='text'
            name='surname'
            value={surname}
            handleChange={handleSubscriberInput}
          />
          <FormRow
            type='text'
            name='jmbg'
            labelText='jmbg'
            value={jmbg}
            handleChange={handleSubscriberInput}
          />
          <FormRow
            type='date'
            name='birth'
            value={birth}
            handleChange={handleSubscriberInput}
            
          />
          <FormRowSelect
            name='gender'
            labelText='gender'
            value={gender}
            handleChange={handleSubscriberInput}
            list={genderOptions}
          />
          <FormRowSelect
            name='materialStatus'
            labelText='Martial Status'
            value={materialStatus}
            handleChange={handleSubscriberInput}
            list={materialStatusOptions}
          />
          <div className='form-row'>
        <label htmlFor="Address" className='form-label'>
          Address
        </label>
        <input
          type="text"
          name="Address"
          value={address}
          className='form-input'
          disabled
        />
              </div>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={handleClickOpen}
            >
              Add Address
            </button>
            {open && <SelectAddress setAddress={setAddress} title={"Select Address"} handleClose={handleClose} open = {open}/>}
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default CreateSubscriber;
