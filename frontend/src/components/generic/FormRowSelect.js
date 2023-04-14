const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className='form-select'
      >
        {list.map((itemValue, index) => {
          if (name === 'country' || name === 'city' || name === 'zip' || name === 'address' || name === 'brand' || name === 'model'){
          return (
            <option key={index} value={itemValue.name}>
              {itemValue.name}
            </option>
          );
          }else if(name === 'driver'){
            return (
              <option key={index} value={itemValue.name + " " + itemValue.surname + ", "+ itemValue.jmbg}>
                {itemValue.name + " " + itemValue.surname + ", "+ itemValue.jmbg}
              </option>
            );            
          }
          else{
            return (
              <option key={index} value={itemValue}>
                {itemValue}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
