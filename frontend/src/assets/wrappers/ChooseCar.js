import styled from 'styled-components'

const Wrapper = styled.section`
$transition: all 0.3s cubic-bezier(.25,.8,.25,1);

/* Card */
$card-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
$card-shadow-hover: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

.card {
  transition: $transition;
  box-shadow: $card-shadow;
  background: #fff;
  margin: 20px 10px;
  cursor: pointer;
  &:hover {
    box-shadow: $card-shadow-hover;
  }
}

/* Selectable */
$check-size: 20px;
$selected-color: #44aadd;

.card .selectable {
  position: relative;
  transition: $transition;
  border: 4px solid transparent;
  .check {
    transition: $transition;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    width: $check-size;    
    height: $check-size;
    &:before {
      transition: $transition;
      content: '';
      border: $check-size solid;
      border-color: transparent;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
    .checkmark {
      display: block;
      font: $check-size sans-serif;
      line-height: $check-size;
      text-align: center;
      color: transparent;  
    }
  }
  
  &.selected {
    border-color: $selected-color;
    .check {
      &:before {
        border-color: $selected-color $selected-color rgba(0,0,255,0) rgba(255,0,0,0);
      }
      .checkmark {
        color: #fff;
      }
    }
  }
}

.content {
  .title, .description { 
    margin: 0; 
    padding: 4px
  }
  padding: 24px;
}

.column {
  & > .title {
    text-align: center;
  }
  float: left;
  width: 50%;
}

button.card {
  display: block;
  cursor: pointer;
  width: 180px;
  margin: 20px auto;
  text-align: center;
  padding: 16px;
  border-color: transparent;
  border-radius: 10px;
  background: $selected-color !important;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  outline: none;
  &:focus{
    box-shadow: $card-shadow;
  }
}
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }

  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .proposals {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .proposals {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
`

export default Wrapper
