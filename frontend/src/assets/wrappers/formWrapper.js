import styled from 'styled-components'

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  height: 35rem;
  background: var(--grey-100);
  box-shadow: var(--shadow-4);
  padding: 3rem 2rem 4rem;
  position: relative;
  h3 {
    margin-top: 0;
  }
  .form {
    background: var(--grey-100);
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin: 1rem;
    margin-bottom: 0;
  }
  .form-center {
      
    margin: 1rem;
    display: grid;
    row-gap: 3rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    position: absolute;
    width: 40%;
    bottom: 8%;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    margin-top: 0.5rem;
    margin-left: 2rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`

export default Wrapper
