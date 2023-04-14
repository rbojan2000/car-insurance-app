import { useEffect } from 'react';
import City from './City';
import Wrapper from '../../../assets/wrappers/ObjectsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCities, clearValues, changePage } from '../../../services/allCitiesSlice';
import  PaginationContainer  from '../../generic/PaginationContainer';
import * as React from 'react';
import EditCity from './EditCity';
const CitiesContainer = () => {
  const {
    cities,
    pageIndex,
    pageSize,
    count
  } = useSelector((store) => store.allCities);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(clearValues());
    dispatch(getAllCities());
  };
  useEffect(() => {
    dispatch(getAllCities());
  }, [pageIndex, dispatch]);
  if (cities.length === 0) {
    return (
      <Wrapper>
        <h2>No cities to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <button
        type='button'
        className='add-btn'
        onClick={handleClickOpen}
        >Create New City</button>
      {open && <EditCity title={"Create New City"} handleClose={handleClose} open = {open}/>}
      <div className='objects'>
       {cities.map((city) => {
          return <City key={city.id} {...city} />;
        })}
      </div>
      <PaginationContainer pageIndex = {pageIndex} pageSize = {pageSize} count={count} changePage= {changePage}/>
    </Wrapper>
  );
};
export default CitiesContainer;