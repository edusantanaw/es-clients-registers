import styled from "styled-components";

export const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h2{
    align-self: center;
    font-size: 2.5em;
    padding-bottom: 0.5em;
  }

  .credentials {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.2em;
  }
  .remember{
    display: flex;
    gap: 1em;
    margin-left: 1em;

    label{
      cursor: pointer;
    }
    input{
      cursor: pointer;
    }
  }
  #error{
    text-align: center;
    color: red;
  }

  input[type="submit"]{
    border: none;
    height: 3.5em;
    background-color: #4700DE;
    color: #fff;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  width: 25em;
  height: 30em;
  padding: 1em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

