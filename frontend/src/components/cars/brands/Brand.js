import { FaFontAwesomeLogoFull} from 'react-icons/fa';
import Wrapper from '../../../assets/wrappers/Object';
import { useDispatch } from 'react-redux';
import Info from '../../generic/Info';
import { deleteBrand, setEditBrand, clearValues, getAllBrands } from '../../../services/allBrandsSlice';
import DeleteDialog from '../../generic/DeleteDialog';
import * as React from 'react';
import EditBrand from './EditBrand';

const Brand = ({
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
      setEditBrand({
        editBrandId: id,
        name
      })
    )
  };

  const handleEditClose = () => {
    setEdit(false);
    dispatch(clearValues());
    dispatch(getAllBrands());
  };

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className='content'>
        <div className='content-center'>
          <Info icon={<FaFontAwesomeLogoFull />} text={name} />
        </div>
       <footer>
          <div className='actions'>
            <button
              className='btn edit-btn'
              onClick= {handleClickEdit}
            >
              Edit
            </button>
            {edit && <EditBrand title={"Edit Brand"} handleClose={handleEditClose} open = {edit}/>}
            <button
              type='button'
              className='btn delete-btn'
              onClick={handleClickOpen}
            >
              Delete
            </button>
            {open && <DeleteDialog id = {id} object={"Brand"} handleClose={handleClose} deleteObject={deleteBrand(id)} open = {open}/>}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Brand;