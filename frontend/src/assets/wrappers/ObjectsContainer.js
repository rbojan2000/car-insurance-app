import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 2.5rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .objects {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin-top: 1.5rem;
  }
  .add-btn {
    margin-left: auto;
    margin-right 2rem;
    display: block;
    cursor: pointer;
    color: var(--white);
    background: var(--primary-500);
    border: transparent;
    border-radius: var(--borderRadius);
    letter-spacing: var(--letterSpacing);
    padding: 0.375rem 0.75rem;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    text-transform: capitalize;
  }
  }
  @media (min-width: 992px) {
    .objects {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`
export default Wrapper