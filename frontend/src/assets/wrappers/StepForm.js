import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  padding: 3rem 2rem 4rem;
  background: white;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-containerNextBack {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 4rem;
  
    button {
      width: 100%;
      height: 35px;
    }
  
    @media screen and (min-width: 768px) {
      button {
        width: auto;
      }
    }
  }
  
  .back-btn {
    width: 100%;
    background: var(--grey-500);
  }
  
  @media screen and (min-width: 768px) {
    .back-btn {
      width: auto;
    }
  }
`

export default Wrapper
