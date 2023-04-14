import styled from 'styled-components'

const Wrapper = styled.section`


  width: 100%;
  height: 35rem;
  background: var(--white);
  .form-input {
    width: 30%;
  }
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }

  .btn {
     margin-left: 50%;
    transform: translateX(-50%);
    
  }
  .styled-table {
    width:100%;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
  background-color: var(--grey-900);
  color: #ffffff;
  text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid var(--grey-100);;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: var(--grey-50);
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid;
}

  .select-s {
    margin-left: 40rem;
    width: 3rem;
    height: 2rem;
  }
`

export default Wrapper
