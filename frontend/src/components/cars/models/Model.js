import { FaFontAwesomeLogoFull } from 'react-icons/fa';
import Wrapper from '../../../assets/wrappers/Object';
import { RxBoxModel } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import Info from '../../generic/Info';
import { deleteModel, setEditModel, clearValues, getAllModels } from '../../../services/allModelsSlice';
import DeleteDialog from '../../generic/DeleteDialog';
import * as React from 'react';
import EditModel from './EditModel';

const Model = ({
  id,
  brand,
  brandId,
  name,

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
      setEditModel({
        editModelId: id,
        brand,
        brandId,
        name
      })
    )
  };

  const handleEditClose = () => {
    setEdit(false);
    dispatch(clearValues());
    dispatch(getAllModels());
  };

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className='content'>
        <div className='content-center'>
          <Info icon={<FaFontAwesomeLogoFull />} text={brand} />
          <Info icon={<RxBoxModel />} text={name} />
        </div>
       <footer>
          <div className='actions'>
            <button
              className='btn edit-btn'
              onClick= {handleClickEdit}
            >
              Edit
            </button>
            {edit && <EditModel title={"Edit Model"} handleClose={handleEditClose} open = {edit}/>}
            <button
              type='button'
              className='btn delete-btn'
              onClick={handleClickOpen}
            >
              Delete
            </button>
            {open && <DeleteDialog id = {id} object={"Model"} handleClose={handleClose} deleteObject={deleteModel(id)} open = {open}/>}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Model;