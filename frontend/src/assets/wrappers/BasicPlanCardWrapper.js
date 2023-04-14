import styled from 'styled-components';

const Wrapper = styled.article`
background: var(--grey-50);
margin-top: 2.5rem;
h2 {
  text-transform: none;
}
& > h5 {
  font-weight: 700;
}
.zips {
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
  .zips {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
}

.insurance-items {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.insurance-item {
  border-bottom: 2px solid black;
  margin-bottom: 2%;
  padding-bottom: 2%;
}
`;

export default Wrapper;