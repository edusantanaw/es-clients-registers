import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 2;
 
  .error{
    color: red;
    font-weight: 300;
    padding-top: 0.2em;
  }
`;
export const Form = styled.form`
  background-color: #0E1128;
  z-index: 3;
  width: 36%;
  padding: 1.5em;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6em;
  color: #fff;
  h2 {
    font-size: 2.5em;
    font-weight: 500;
  }
  .column {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .row{
    display: flex;
    width: 100%;
    gap: 2em;

    input{
      width:100%;
    }
  }

  input[type="submit"]{
    width: 50%;
    margin-top: 0.5em;
    height: 3em;
    background-color: blue;
    border: none;
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 1100px){
    width: 28em;
  }

  @media (max-width: 700px){
    width: 26em;
  }

`;

export const Input = styled.input`
  height: 3em;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #FFF;
  color: #D2D2D2;
  font-weight: 300;

  &:focus{
    outline: none;
  }
`;

export const Label = styled.label`
    font-size: 1.02em;
`;

export const Button = styled.button`
    width: 10em;
    height: 3em;
    border: none;
    background-color: blue;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
`
