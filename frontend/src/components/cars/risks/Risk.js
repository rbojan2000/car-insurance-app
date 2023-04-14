import { MdDescription} from 'react-icons/md';
import Wrapper from '../../../assets/wrappers/Object';
import { useDispatch } from 'react-redux';
import Info from '../../generic/Info';
import { deleteRisk, setEditRisk, clearValues, getAllRisks } from '../../../services/allRisksSlice';
import DeleteDialog from '../../generic/DeleteDialog';
import * as React from 'react';
import EditRisk from './EditRisk';

const Risk = ({
  id,
  description

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
      setEditRisk({
        editRiskId: id,
        description
      })
    )
  };

  const handleEditClose = () => {
    setEdit(false);
    dispatch(clearValues());
    dispatch(getAllRisks());
  };

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className='content'>
        <div className='content-center'>
          <Info icon={<MdDescription />} text={description} />
        </div>
       <footer>
          <div className='actions'>
            <button
              className='btn edit-btn'
              onClick= {handleClickEdit}
            >
              Edit
            </button>
            {edit && <EditRisk title={"Edit Risk"} handleClose={handleEditClose} open = {edit}/>}
            <button
              type='button'
              className='btn delete-btn'
              onClick={handleClickOpen}
            >
              Delete
            </button>
            {open && <DeleteDialog id = {id} object={"Risk"} handleClose={handleClose} deleteObject={deleteRisk(id)} open = {open}/>}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Risk;