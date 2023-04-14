import { FaCalendarAlt} from 'react-icons/fa';
import { MdDescription} from 'react-icons/md';
import { RxComponentBoolean} from 'react-icons/rx';
import Wrapper from '../../../assets/wrappers/Object';
import { useDispatch } from 'react-redux';
import Info from '../../generic/Info';
import { deleteAccidentHistory, setEditAccidentHistory, clearValues, getAllAccidentHistories } from '../../../services/allAccidentHistoriesSlice';
import DeleteDialog from '../../generic/DeleteDialog';
import * as React from 'react';
import moment from 'moment';
import EditAccidentHistory from './EditAccidentHistory';

const AccidentHistory = ({
  id,
  description,
  timeHappened,
  wasResponsible,
  driverId,
  driversName,
  driversSurname,
  driversJMBG

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
      setEditAccidentHistory({
        editAccidentHistoryId: id,
        description,
        timeHappened,
        wasResponsible,
        driverId,
        driversName,
        driversSurname,
        driversJMBG
      })
    )
  };

  const handleEditClose = () => {
    setEdit(false);
    dispatch(clearValues());
    dispatch(getAllAccidentHistories());
  };
  const dispatch = useDispatch();
  const date = moment(timeHappened).format('MMM Do, YYYY');
  return (
    <Wrapper>
        {driverId !== 0 && <header>
        <div className='main-icon'>{driversName.charAt(0)+driversSurname.charAt(0)}</div>
        <div className='info'>
          <h5>{driversName} {driversSurname}</h5>
          <p>{driversJMBG}</p>
        </div>
      </header>}
      <div className='content'>
        <div className='content-center'>
          <Info icon={<MdDescription />} text={description} />
          <Info icon={<FaCalendarAlt />} text={date} />
          { 
            wasResponsible && <Info icon={<RxComponentBoolean />} text={"Responsible"}/>
          }
          {
            !wasResponsible && <Info icon={<RxComponentBoolean />} text={"Not Responsible"}/>
          }
        </div>
       <footer>
          <div className='actions'>
            <button
              className='btn edit-btn'
              onClick= {handleClickEdit}
            >
              Edit
            </button>
            {edit && <EditAccidentHistory title={"Edit Accident History"} handleClose={handleEditClose} open = {edit}/>}
            <button
              type='button'
              className='btn delete-btn'
              onClick={handleClickOpen}
            >
              Delete
            </button>
            {open && <DeleteDialog id = {id} object={"Accident History"} handleClose={handleClose} deleteObject={deleteAccidentHistory(id)} open = {open}/>}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default AccidentHistory;