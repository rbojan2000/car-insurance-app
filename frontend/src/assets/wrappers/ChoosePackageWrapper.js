import styled from 'styled-components'

const Wrapper = styled.section`
height: 35rem;
.container {
  display: flex;
  justify-content: center;
  height: calc(100vh - 4rem);
  width: 100%;
}

.basic-plan {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    transition: var(--transition);
    background: var(--primary-200);
    box-shadow: var(--primary-700);
  }
  box-shadow: var(--shadow-4);
  margin-top: 10%;
  background-color: var(--primary-50);
  height: 50%;
  width: 50%;
}

.premium-plan {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--primary-200); 
  box-shadow: var(--shadow-4);
  &:hover {
    transition: var(--transition);
    background: var(--primary-200);
    box-shadow: var(--shadow-3);
  }
  margin-left: 10%;
  margin-top: 10%;
  background-color: var(--primary-100);
  height: 50%;
  width: 50%;
}

@media (max-width: 768px) {
  .basic-plan, .premium-plan {
    width: 80%;
  }
}

@media (max-width: 480px) {
  .basic-plan, .premium-plan {
    width: 90%;
  }
}
`;

export default Wrapper;
