import { FaFontAwesomeLogoFull, FaImage } from 'react-icons/fa';
import { GoCalendar } from 'react-icons/go';
import { RxBoxModel } from 'react-icons/rx';
import Wrapper from '../../assets/wrappers/Object';
import { useDispatch } from 'react-redux';
import Info from '../generic/Info';
import { deleteCar, setEditCar } from '../../services/allCarsSlice';
import DeleteDialog from '../generic/DeleteDialog';
import * as React from 'react';
import EditCar from './EditCar';

const Car = ({
  id,
  brand,
  brandId,
  model,
  modelId,
  year,
  image
  
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
      setEditCar({
        editCarId: id,
        brand,
        brandId,
        model,
        modelId,
        year,
        image
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
          <Info icon={<FaFontAwesomeLogoFull />} text={brand} />
          <Info icon={<RxBoxModel />} text={model} />
          <Info icon={<GoCalendar />} text={year} />
          <Info icon={<FaImage />} text={image} />
        </div>
       <footer>
          <div className='actions'>
            <button
              className='btn edit-btn'
              onClick= {handleClickEdit}
            >
              Edit
            </button>
            {edit && <EditCar title={"Edit Car"} handleClose={handleEditClose} open = {edit}/>}
            <button
              type='button'
              className='btn delete-btn'
              onClick={handleClickOpen}
            >
              Delete
            </button>
            {open && <DeleteDialog id = {id} object={"Car"} handleClose={handleClose} deleteObject={deleteCar(id)} open = {open}/>}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Car;