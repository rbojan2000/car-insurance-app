import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from "react-redux";
import { MdPersonAddAlt1} from 'react-icons/md';
import { allSubscribers } from '../../services/proposalSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { changePage } from '../../services/proposalSlice';
import PaginationContainer  from '../../components/generic/PaginationContainer'
import { handleChange, handleSelectedSubscriber, addNewSubscriberStepActive } from '../../services/proposalSlice'

const ChooseSubscriber = () => {
  
  const {
    subscribers,
    pageIndex,
    pageSize,
    search,
    selectedSubscriber,
    countSubscribers
  } = useSelector((store) => store.proposal);
  const dispatch = useDispatch();
  
  useEffect(() => {     
    dispatch(allSubscribers());
  }, [pageIndex, search, dispatch]);

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const [selectedRows, setSelectedRows] = useState([]);
  
  const handleSelectRow = (row) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(selectedRows.filter((r) => r !== row));
      dispatch(handleSelectedSubscriber({subscriber : null, selectedSubscriber : '', selectedSubscriberName: '', selectedSubscriberSurname: ''}));
   
    } else if (selectedRows.length < 1) {
      dispatch(handleSelectedSubscriber({subscriber : row, selectedSubscriber : row.jmbg, selectedSubscriberName: row.name, selectedSubscriberSurname: row.surname}));
      setSelectedRows([...selectedRows, row]);
    }
  };

  useEffect(() => {
    const jmbgList = selectedSubscriber;
  
    const selectedSubscribers = subscribers.filter((subscriber) =>
      jmbgList.includes(subscriber.jmbg)
    );
  
    setSelectedRows(selectedSubscribers);
  }, [subscribers, selectedSubscriber]);

  const addNewSubscriberStep =() => {
    dispatch(addNewSubscriberStepActive());
  }
 
  return (
      <Wrapper>
        <div>  
          <br/>
          <input id="searchInput" placeholder="Search .." className='form-input'  type='text'
            name='search'
            onChange={handleSearch} />
          <button type='submit'  onClick={addNewSubscriberStep}  className='btn'>
            <MdPersonAddAlt1 />
             New subscriber  
          </button>
        </div>
        <br/>
        { subscribers.length ===0 ? 
          <div>
            <h2>No subs to display..</h2>
          </div>
        : <div >
           <table className="styled-table">
            <thead>
              <tr>
                <th></th>
                <th>Jmbg</th>
                <th>Name</th>
                <th>Surname</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber) => (
                <tr  className="active-row"
                  key={subscriber.jmbg}
                  onClick={() => handleSelectRow(subscriber)}
                  style={{
                    backgroundColor: selectedRows.includes(subscriber) ? 'var(--grey-300)' : '',
                  }}
                >
                  <td><input type="checkbox" checked={selectedRows.includes(subscriber)} readOnly /></td>
                  <td>{subscriber.jmbg}</td>

                  <td>{subscriber.name}</td>
                  <td>{subscriber.surname}</td>
                </tr>
              ))}
            </tbody>
          </table>
            
          <PaginationContainer pageIndex={pageIndex} pageSize = {pageSize} count = {countSubscribers} changePage = {changePage} />           

        </div> }
      </Wrapper>
    );
};
export default ChooseSubscriber;
