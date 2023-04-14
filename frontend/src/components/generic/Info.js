import Wrapper from '../../assets/wrappers/Info';

const Info = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className='icon'>{icon} </span>
      <span className='text'>{text} </span>
    </Wrapper>
  );
};
export default Info;