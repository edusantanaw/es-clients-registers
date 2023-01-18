import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1em;
  border-radius: 10px;
  position: fixed;
  top: 2em;
  z-index: 4;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .infos {
    height: 80vh;
    padding: 2em;
    z-index: 4;
    border-radius: 10px;
    color: #fff;
    background-color: #0e1128;
    position: relative;
}

  .credential {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
  }
  .details {
    display: flex;
    gap: 4em;
    span {
      font-weight: 300;
      font-size: 1.3em;
    }

    p {
      font-weight: 100;
    }
  }
  .left,
  .right {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  .buttons {
    position: absolute;
    padding: 1em 2em;
    bottom: 1.5em;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        width: 45%;
        height: 3.4em;
        border: none;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
    }

   
  }
  #icon_close{
    position: absolute;
    right: 0.5em;
    top: 0.5em;
    font-size: 1.1em;
    color: red;
    cursor: pointer;
  }
  .delete_modal{
    width: 100%;
    height: 100%;
    padding: 0.5em;
    position: absolute;
    background-color: #000000;
    z-index: 1;
    left: 0;
    top: 0;
    border-radius: 10px;
    font-size: 2em;

    .choose_buttons{
        display: flex;
        justify-content: space-between;
        position: absolute;
        width: 100%;
        bottom: 2em;
        left:0;
        padding: 0em 1em; 
    }
    
    button{
        width: 45%;
        height: 3.5em;
        border: none;
        color: #fff;
        background-color: blue;
        cursor: pointer;
        &:hover{
            opacity: 0.9;
        }
    }
  }
  #delete{
        background-color: red;
    }
    #update{
        background-color: blue;
    }
`;
