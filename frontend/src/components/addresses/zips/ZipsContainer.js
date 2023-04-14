import { useEffect } from 'react';
import Zip from './Zip';
import Wrapper from '../../../assets/wrappers/ObjectsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllZips, clearValues, changePage } from '../../../services/allZipsSlice';
import  PaginationContainer  from '../../generic/PaginationContainer';
import * as React from 'react';
import EditZip from './EditZip';
const ZipsContainer = () => {
  const {
    zips,
    pageIndex,
    count,
    pageSize,
  } = useSelector((store) => store.allZips);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(clearValues());
    dispatch(getAllZips());
  };
  useEffect(() => {
    dispatch(getAllZips());
  }, [pageIndex, dispatch]);
  if (zips.length === 0) {
    return (
      <Wrapper>
        <h2>No zips to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <button
        type='button'
        className='add-btn'
        onClick={handleClickOpen}
        >Create New Zip</button>
      {open && <EditZip title={"Create New Zip"} handleClose={handleClose} open = {open}/>}
      <div className='objects'>
       {zips.map((zip) => {
          return <Zip key={zip.id} {...zip} />;
        })}
      </div>
      <PaginationContainer pageIndex = {pageIndex} pageSize = {pageSize} count={count} changePage= {changePage}/>
    </Wrapper>
  );
};
export default ZipsContainer;