import { useEffect } from 'react';
import Country from './Country';
import Wrapper from '../../../assets/wrappers/ObjectsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries, clearValues, changePage } from '../../../services/allCountriesSlice';
import  PaginationContainer  from '../../generic/PaginationContainer';
import * as React from 'react';
import EditCountry from './EditCountry';
const CountriesContainer = () => {
  const {
    countries,
    pageIndex,
    pageSize,
    count
  } = useSelector((store) => store.allCountries);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(clearValues());
    dispatch(getAllCountries());
  };
  useEffect(() => {
    dispatch(getAllCountries());
  }, [pageIndex, dispatch]);
  if (countries.length === 0) {
    return (
      <Wrapper>
        <h2>No countries to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <button
        type='button'
        className='add-btn'
        onClick={handleClickOpen}
        >Create New Country</button>
      {open && <EditCountry title={"Create New Country"} handleClose={handleClose} open = {open}/>}
      <div className='objects'>
       {countries.map((country) => {
          return <Country key={country.id} {...country} />;
        })}
      </div>
      <PaginationContainer pageIndex = {pageIndex} pageSize = {pageSize} count={count} changePage= {changePage}/>
    </Wrapper>
  );
};
export default CountriesContainer;