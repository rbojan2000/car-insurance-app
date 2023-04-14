import styled from 'styled-components'

const Wrapper = styled.section`
border-radius: var(--borderRadius);
width: 100%;
height: 35rem;
background: var(--grey-100);
box-shadow: var(--shadow-4);
padding: 3rem 2rem 4rem;

h3 {
  margin-left: auto;
  margin-right: auto;
  margin-top: 1;
  display: flex;
  justify-content: center;
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

.form-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  row-gap: 3rem;
}
.form-input {
  background: var(--grey-50);
  width: 18rem;
  height: 5rem;
  font-size: 3rem;
  text-align: center;
}

.form-center button {
  height: 35px;
  margin-top: 1rem;
}

.btn-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;

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

`

export default Wrapper
