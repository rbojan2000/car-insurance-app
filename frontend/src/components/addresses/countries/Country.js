import { FaFlag} from 'react-icons/fa';
import Wrapper from '../../../assets/wrappers/Object';
import { useDispatch } from 'react-redux';
import Info from '../../generic/Info';
import { deleteCountry, setEditCountry, clearValues, getAllCountries } from '../../../services/allCountriesSlice';
import DeleteDialog from '../../generic/DeleteDialog';
import * as React from 'react';
import EditCountry from './EditCountry';

const Country = ({
  id,
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
      setEditCountry({
        editCountryId: id,
        name
      })
    )
  };

  const handleEditClose = () => {
    setEdit(false);
    dispatch(clearValues());
    dispatch(getAllCountries());
  };

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className='content'>
        <div className='content-center'>
          <Info icon={<FaFlag />} text={name} />
        </div>
       <footer>
          <div className='actions'>
            <button
              className='btn edit-btn'
              onClick= {handleClickEdit}
            >
              Edit
            </button>
            {edit && <EditCountry title={"Edit Country"} handleClose={handleEditClose} open = {edit}/>}
            <button
              type='button'
              className='btn delete-btn'
              onClick={handleClickOpen}
            >
              Delete
            </button>
            {open && <DeleteDialog id = {id} object={"Country"} handleClose={handleClose} deleteObject={deleteCountry(id)} open = {open}/>}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Country;