import Wrapper from '../../assets/wrappers/AddLicensePlateWrapper';
import { useDispatch, useSelector } from 'react-redux';
import MaskedInput from 'react-text-mask';
import FormRowSelect  from '../../components/generic/FormRowSelect';
import {
  handleLicensePlateChange,
} from '../../services/proposalSlice';


const AddLicensePlate = () => {
  const {
    licensePlate
  } = useSelector((store) => store.proposal);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(handleLicensePlateChange({licensePlate: e.target.value}));
    
  };
  const mask = [/\d/, /\d/, /\d/, '-', /[a-zA-Z]/, '-', /\d/, /\d/, /\d/];

  return (
    <Wrapper >
      <div >
        <h3>Add licence plate number</h3>
        <form className='form'>

        <FormRowSelect
            labelText='State Format'
            list={["Bosnia And Herzegovina "]}
          />   
          <div className='form-center'>
            <MaskedInput
              onChange={handleChange}
              guide= {true}
              value = {licensePlate}
              className='form-input'
              mask={mask}
            />
           
          </div>

        </form>

      </div>
    </Wrapper>
  );
};
export default AddLicensePlate;
