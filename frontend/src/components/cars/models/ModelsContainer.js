import { useEffect } from 'react';
import Model from './Model';
import Wrapper from '../../../assets/wrappers/ObjectsContainer';
import { useSelector, useDispatch } from 'react-redux';
import { getAllModels, clearValues, changePage } from '../../../services/allModelsSlice';
import  PaginationContainer  from '../../generic/PaginationContainer';
import * as React from 'react';
import EditModel from './EditModel';
const ModelsContainer = () => {
  const {
    models,
    pageIndex,
    pageSize,
    count
  } = useSelector((store) => store.allModels);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(clearValues());
    dispatch(getAllModels());
  };
  useEffect(() => {
    dispatch(getAllModels());
  }, [pageIndex, dispatch]);
  if (models.length === 0) {
    return (
      <Wrapper>
        <h2>No models to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <button
        type='button'
        className='add-btn'
        onClick={handleClickOpen}
        >Create New Model</button>
      {open && <EditModel title={"Create New Model"} handleClose={handleClose} open = {open}/>}
      <div className='objects'>
       {models.map((model) => {
          return <Model key={model.id} {...model} />;
        })}
      </div>
      <PaginationContainer pageIndex = {pageIndex} pageSize = {pageSize} count={count} changePage= {changePage}/>
    </Wrapper>
  );
};
export default ModelsContainer;