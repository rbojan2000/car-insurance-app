import { FaFlag, FaCity } from 'react-icons/fa';
import { GiZipper } from 'react-icons/gi';
import Wrapper from '../../../assets/wrappers/Object';
import { useDispatch } from 'react-redux';
import Info from '../../generic/Info';
import { deleteZip, setEditZip, clearValues, getAllZips } from '../../../services/allZipsSlice';
import DeleteDialog from '../../generic/DeleteDialog';
import * as React from 'react';
import EditZip from './EditZip';

const Zip = ({
  id,
  country,
  countryId,
  city,
  cityId,
  name

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
      setEditZip({
        editZipId: id,
        country,
        countryId,
        city,
        cityId,
        name
      })
    )
  };

  const handleEditClose = () => {
    setEdit(false);
    dispatch(clearValues());
    dispatch(getAllZips());
  };

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className='content'>
        <div className='content-center'>
          <Info icon={<FaFlag />} text={country} />
          <Info icon={<FaCity />} text={city} />
          <Info icon={<GiZipper />} text={name} />
        </div>
       <footer>
          <div className='actions'>
            <button
              className='btn edit-btn'
              onClick= {handleClickEdit}
            >
              Edit
            </button>
            {edit && <EditZip title={"Edit Zip"} handleClose={handleEditClose} open = {edit}/>}
            <button
              type='button'
              className='btn delete-btn'
              onClick={handleClickOpen}
            >
              Delete
            </button>
            {open && <DeleteDialog id = {id} object={"Zip"} handleClose={handleClose} deleteObject={deleteZip(id)} open = {open}/>}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Zip;