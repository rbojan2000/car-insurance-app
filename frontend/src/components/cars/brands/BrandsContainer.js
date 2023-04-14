import { useEffect } from 'react';
import Brand from './Brand';
import Wrapper from '../../../assets/wrappers/ObjectsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBrands, clearValues, changePage } from '../../../services/allBrandsSlice';
import  PaginationContainer  from '../../generic/PaginationContainer';
import * as React from 'react';
import EditBrand from './EditBrand';
const BrandsContainer = () => {
  const {
    brands,
    pageIndex,
    pageSize,
    count
  } = useSelector((store) => store.allBrands);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(clearValues());
    dispatch(getAllBrands());
  };
  useEffect(() => {
    dispatch(getAllBrands());
  }, [pageIndex, dispatch]);
  if (brands.length === 0) {
    return (
      <Wrapper>
        <h2>No brands to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <button
        type='button'
        className='add-btn'
        onClick={handleClickOpen}
        >Create New Brand</button>
      {open && <EditBrand title={"Create New Brand"} handleClose={handleClose} open = {open}/>}
      <div className='objects'>
       {brands.map((brand) => {
          return <Brand key={brand.id} {...brand} />;
        })}
      </div>
      <PaginationContainer pageIndex = {pageIndex} pageSize = {pageSize} count={count} changePage= {changePage}/>
    </Wrapper>
  );
};
export default BrandsContainer;