import { FaFlag, FaCity } from 'react-icons/fa';
import { GiRoad, GiZipper } from 'react-icons/gi';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import Wrapper from '../../assets/wrappers/Object';
import { useDispatch } from 'react-redux';
import Info from '../generic/Info';
import { deleteAddress, setEditAddress } from '../../services/allAddressesSlice';
import DeleteDialog from '../generic/DeleteDialog';
import * as React from 'react';
import EditAddress from './EditAddress';

const Address = ({
  id,
  country,
  countryId,
  city,
  cityId,
  zip,
  zipId,
  street,
  streetNumber
  
}) => {
  const [open, setOpen] = React.useState(false);
  
  const [edit, setEdit] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickEdit = () => {
    setEdit(true);
    dispatch(
      setEditAddress({
        editAddressId: id,
        country,
        countryId,
        city,
        cityId,
        zip,
        zipId,
        street,
        streetNumber
      })
    )
  };

  const handleEditClose = () => {
    setEdit(false);
  };

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className='content'>
        <div className='content-center'>
          <Info icon={<FaFlag />} text={country} />
          <Info icon={<FaCity />} text={city} />
          <Info icon={<GiZipper />} text={zip} />
          <Info icon={<GiRoad />} text={street} />
          <Info icon={<AiOutlineFieldNumber />} text={streetNumber} />
        </div>
       <footer>
          <div className='actions'>
            <button
              className='btn edit-btn'
              onClick= {handleClickEdit}
            >
              Edit
            </button>
            {edit && <EditAddress title={"Edit Address"} handleClose={handleEditClose} open = {edit}/>}
            <button
              type='button'
              className='btn delete-btn'
              onClick={handleClickOpen}
            >
              Delete
            </button>
            {open && <DeleteDialog id = {id} object={"Address"} handleClose={handleClose} deleteObject={deleteAddress(id)} open = {open}/>}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Address;
