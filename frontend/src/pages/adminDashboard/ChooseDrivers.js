import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from "react-redux";
import { allDrivers } from '../../services/proposalSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import { changePage } from '../../services/proposalSlice';
import PaginationContainer  from '../../components/generic/PaginationContainer';
import { handleChange, handleSelectedDriver} from '../../services/proposalSlice';
import SelectRisks from '../../components/SelectRisks';
import * as React from 'react';

const ChooseDrivers = () => {
  const {
    drivers,
    pageIndex,
    pageSize,
    searchDrivers,
    selectedDrivers,
    countDrivers
  } = useSelector((store) => store.proposal);
  
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = (id) => {
    setOpen(true);
    //dispatch(handleChange({name:"driverRiskId", value:id}));
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {     
    dispatch(allDrivers());
  }, [pageIndex, searchDrivers, dispatch]);

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const [selectedRows, setSelectedRows] = useState([]);
  
  const handleSelectRow = (row) => {
 
    if (selectedRows.includes(row)) {
      dispatch(handleSelectedDriver({selectedDriver : row, selectedDriverName: '', selectedDriverSurname: ''}));
      setSelectedRows(selectedRows.filter((r) => r !== row));
      
    } else if (selectedRows.length < 4) {
        dispatch(handleSelectedDriver({selectedDriver : row, selectedDriverName: row.name, selectedDriverSurname: row.surname}));
        setSelectedRows([...selectedRows, row]);
    }
  };

  useEffect(() => {
    const selectedCars = drivers.filter((driver) =>
    selectedDrivers.includes(driver.jmbg)
    
    );
  
    setSelectedRows(selectedCars);
  }, [drivers, selectedDrivers]);
  

 
  return (
      <Wrapper>
        <div>  
          <br/>
          <input id="searchInput" placeholder="Search .." className='form-input'  type='text'
            name='searchDrivers'
            onChange={handleSearch} />

        </div>
        <br/>
        { drivers.length ===0 ? 
          <div>
            <h2>No drivers to display..</h2>
          </div>
        : <div >
           <table className="styled-table">
            <thead>
              <tr>
                <th></th>
                <th>Jmbg</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Subscriber ?</th>    
              </tr>
            </thead>
            <tbody>
              {drivers.map((driver) => (
                <tr  className="active-row"
                  key={driver.jmbg}
                  onClick={() => handleSelectRow(driver)}
                  style={{
                    backgroundColor: selectedRows.includes(driver) ? 'var(--grey-300)' : '',
                  }}
                >
                  <td><input type="checkbox" checked={selectedRows.includes(driver)} readOnly /></td>
                  <td>{driver.jmbg}</td>
                  <td>{driver.name}</td>
                  <td>{driver.surname}</td>
                  <td>{driver.isSubscriber}</td>
                </tr>
              ))}
            </tbody>
          </table>
            
          <PaginationContainer pageIndex={pageIndex} pageSize = {pageSize} count = {countDrivers} changePage = {changePage} />           

        </div> }
        {open && <SelectRisks title={"Add Risks"} handleClose={handleClose} open = {open}/>}
      </Wrapper>
    );
};
export default ChooseDrivers;
