import { useEffect } from 'react';
import Car from './Car';
import Wrapper from '../../assets/wrappers/ObjectsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars, clearValues, changePage } from '../../services/allCarsSlice';
import  PaginationContainer  from '../generic/PaginationContainer';
import * as React from 'react';
import EditCar from './EditCar';
const CarsContainer = () => {
  const {
    cars,
    pageIndex,
    pageSize,
    count
  } = useSelector((store) => store.allCars);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(clearValues());
    dispatch(getAllCars());
  };
  useEffect(() => {
    dispatch(getAllCars());
  }, [pageIndex, dispatch]);
  if (cars.length === 0) {
    return (
      <Wrapper>
        <h2>No cars to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <button
        type='button'
        className='add-btn'
        onClick={handleClickOpen}
        >Create New Car</button>
      {open && <EditCar title={"Create New Car"} handleClose={handleClose} open = {open}/>}
      <div className='objects'>
       {cars.map((car) => {
          return <Car key={car.id} {...car} />;
        })}
      </div>
      <PaginationContainer pageIndex = {pageIndex} pageSize = {pageSize} count={count} changePage= {changePage}/>
    </Wrapper>
  );
};
export default CarsContainer;