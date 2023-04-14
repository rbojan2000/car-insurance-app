import styled from 'styled-components'

const Wrapper = styled.section`
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.confirm-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.confirm-label {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}

.confirm-button {
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
  display: inline-block;
}

.confirm-button:hover {
  background: var(--primary-700);
  box-shadow: var(--shadow-3);
}
`

export default Wrapper