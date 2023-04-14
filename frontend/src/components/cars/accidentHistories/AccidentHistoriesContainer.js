import { useEffect } from 'react';
import AccidentHistory from './AccidentHistory';
import Wrapper from '../../../assets/wrappers/ObjectsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAccidentHistories, clearValues, changePage } from '../../../services/allAccidentHistoriesSlice';
import  PaginationContainer  from '../../generic/PaginationContainer';
import * as React from 'react';
import EditAccidentHistory from './EditAccidentHistory';
const AccidentHistoriesContainer = () => {
  const {
    accidentHistories,
    pageIndex,
    pageSize,
    count
  } = useSelector((store) => store.allAccidentHistories);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(clearValues());
    dispatch(getAllAccidentHistories());
  };
  useEffect(() => {
    dispatch(getAllAccidentHistories());
  }, [pageIndex, dispatch]);
  if (accidentHistories.length === 0) {
    return (
      <Wrapper>
        <h2>No accident histories to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <button
        type='button'
        className='add-btn'
        onClick={handleClickOpen}
        >Create New Accident History</button>
      {open && <EditAccidentHistory title={"Create New Accident History"} handleClose={handleClose} open = {open}/>}
      <div className='objects'>
       {accidentHistories.map((accidentHistory) => {
          return <AccidentHistory key={accidentHistory.id} {...accidentHistory} />;
        })}
      </div>
      <PaginationContainer pageIndex = {pageIndex} pageSize = {pageSize} count={count} changePage= {changePage}/>
    </Wrapper>
  );
};
export default AccidentHistoriesContainer;