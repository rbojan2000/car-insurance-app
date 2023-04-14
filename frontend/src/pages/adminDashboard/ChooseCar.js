import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from "react-redux";
import { allCars } from '../../services/proposalSlice';
import { useEffect } from 'react';
import { changePage } from '../../services/proposalSlice';
import PaginationContainer  from '../../components/generic/PaginationContainer'
import { handleChange, handleSelectedCar } from '../../services/proposalSlice'
import { useState } from 'react';

const ChooseCar = () => {
  const {
      cars,
      pageIndex,
      pageSize,
      searchCars,
      countCars,
      selectedCar
    } = useSelector((store) => store.proposal);
    const dispatch = useDispatch();
    useEffect(() => {     
      dispatch(allCars());
    }, [pageIndex, searchCars, dispatch]);
  
    const handleSearch = (e) => {
      dispatch(handleChange({ name: e.target.name, value: e.target.value }));
    };
  
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectRow = (row) => {

      if (selectedRows.includes(row)) {
        setSelectedRows(selectedRows.filter((r) => r !== row));
        dispatch(handleSelectedCar({selectedCarId : '', selectedCarModel :  '', selectedCarBrand: ''}));
        
      } else if (selectedRows.length < 1) {
        dispatch(handleSelectedCar({selectedCarId : row.id, selectedCarModel :  row.model, selectedCarBrand: row.brand}));
        setSelectedRows([...selectedRows, row]);
      }
    };    


    useEffect(() => {
      const selectedCars = cars.filter((car) => 
        selectedCar === car.id
      );
    
      setSelectedRows(selectedCars);
    }, [cars, selectedCar]);

  return (
      
    <Wrapper>
    <div>  
     <br/>
     <input id="searchInput" placeholder="Search .." className='form-input'  type='text'
       name='searchCars'
       onChange={handleSearch} />
     </div>
   <br/>
 
   { countCars ===0 ? 
     <div>
       <h2>No cars to display..</h2>
     </div>
   : <div > 
       <table className="styled-table">
            <thead>
              <tr>
                <th></th>
                <th>Id</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr  className="active-row"
                  key={car.id}
                  onClick={() => handleSelectRow(car)}
                  style={{
                    backgroundColor: selectedRows.includes(car) ? 'var(--grey-300)' : '',
                  }}
                >
                  <td><input type="checkbox" checked={selectedRows.includes(car)} readOnly /></td>
                  <td>{car.id}</td>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.year}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
         
       <PaginationContainer pageIndex={pageIndex} pageSize = {pageSize} count = {countCars} changePage = {changePage} />           

     </div> }
 </Wrapper>
    );
};
export default ChooseCar;
