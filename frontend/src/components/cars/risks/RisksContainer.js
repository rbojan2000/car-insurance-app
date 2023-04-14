import { useEffect } from 'react';
import Risk from './Risk';
import Wrapper from '../../../assets/wrappers/ObjectsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRisks, clearValues, changePage } from '../../../services/allRisksSlice';
import  PaginationContainer  from '../../generic/PaginationContainer';
import * as React from 'react';
import EditRisk from './EditRisk';
const RisksContainer = () => {
  const {
    risks,
    pageIndex,
    pageSize,
    count
  } = useSelector((store) => store.allRisks);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(clearValues());
    dispatch(getAllRisks());
  };
  useEffect(() => {
    dispatch(getAllRisks());
  }, [pageIndex, dispatch]);
  if (risks.length === 0) {
    return (
      <Wrapper>
        <h2>No risks to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <button
        type='button'
        className='add-btn'
        onClick={handleClickOpen}
        >Create New Risk</button>
      {open && <EditRisk title={"Create New Risk"} handleClose={handleClose} open = {open}/>}
      <div className='objects'>
       {risks.map((risk) => {
          return <Risk key={risk.id} {...risk} />;
        })}
      </div>
      <PaginationContainer pageIndex = {pageIndex} pageSize = {pageSize} count={count} changePage= {changePage}/>
    </Wrapper>
  );
};
export default RisksContainer;