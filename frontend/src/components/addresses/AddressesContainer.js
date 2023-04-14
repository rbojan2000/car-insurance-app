import { useEffect } from 'react';
import Address from './Address';
import Wrapper from '../../assets/wrappers/ObjectsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAddresses, clearValues, changePage } from '../../services/allAddressesSlice';
import  PaginationContainer  from '../generic/PaginationContainer';
import * as React from 'react';
import EditAddress from './EditAddress';
const AddressesContainer = () => {
  const {
    addresses,
    pageIndex,
    pageSize,
    count
  } = useSelector((store) => store.allAddresses);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(clearValues());
    dispatch(getAllAddresses());
  };
  useEffect(() => {
    dispatch(getAllAddresses());
  }, [pageIndex, dispatch]);
  if (addresses.length === 0) {
    return (
      <Wrapper>
        <h2>No addresses to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <button
        type='button'
        className='add-btn'
        onClick={handleClickOpen}
        >Create New Address</button>
      {open && <EditAddress title={"Create New Address"} handleClose={handleClose} open = {open}/>}
      <div className='objects'>
       {addresses.map((address) => {
          return <Address key={address.id} {...address} />;
        })}
      </div>
      <PaginationContainer pageIndex = {pageIndex} pageSize = {pageSize} count={count} changePage= {changePage}/>
    </Wrapper>
  );
};
export default AddressesContainer;