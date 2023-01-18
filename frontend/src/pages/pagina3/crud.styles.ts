import styled from "styled-components";

export const CrudContainer =styled.section`
    width: 100%;
    height  : 100vh;
    padding: 7em;
    .content{
        padding-top: 2em;
        display: flex;
        gap: 2em;
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5em 0 5em;
        h2{
            color: #fff;
            font-size: 2.4em;
            font-weight:500;
        }
    }
    .close {
    width: 100%;
    height: 100vh;
    background-color: #000000a0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
  }

  @media (max-width: 1000px ){
    padding: 7em 2em;
  }
  @media (max-width: 800px){

    .header{
        h2{
            font-size: 1.6em;
        }
    }

  }
  @media (max-width: 600px){
    padding: 7em 0em;

    .header{
        padding: 0 2em;
    }
  }
`

export const Button = styled.button`
    width: 15em;
    height: 3.8em;
    border: none;
    border-radius: 5px;
    background-color: #EF233C;
    color: #fff;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 800px){
        width: 11em;
        height: 3.3em;
    }
`