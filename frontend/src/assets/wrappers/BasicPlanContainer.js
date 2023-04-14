import styled from 'styled-components'

const Wrapper = styled.section`
  margin-top: 2.5rem;
  
  .zips {
  
    grid-template-columns: 1fr;

    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
  }

  .left {
    flex: 0.7;
  }
  
  .right {
    flex: 0.3;
  }
  
  @media (min-width: 992px) {
    
    .zips {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`
export default Wrapper