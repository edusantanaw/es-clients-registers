import styled from "styled-components";

export const CatContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7em 4em 0 4em;

  .content{
    width: 50%;
    height: 33em;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .status {
    position: relative;
    width: 100%;
    span {
      padding: 0.9em 1.2em;
      color: #fff;
      border-radius: 5px;
      display: flex;
      border: 1px solid #8d99ae;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: 0.4s;
      &:hover{
         opacity: 0.9;
      }
      svg{
        font-size: 1.4em;
        cursor: pointer;
      }
    }
    ul {
      background-color: #0E1128;
      border-radius: 5px;
      position: absolute;
      margin-top: 0.5em;
      width: 100%;
      height: 26.5em;
      padding: 0.3em 0.6em;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      color: #fff;
      overflow-y: auto;
      z-index: 3;
      border: 1px solid #8d99ae;
      li {
        cursor: pointer;
        width: 100%;
        background-color: #0E1128;
        font-size: 1.2em;
        &:hover {
          background-color: #0E1120;
        opacity: 0.9;
        }
      }
    }
  }
  img {
    margin-top: 1em;
    width: 100%;
    height: 26em;
    object-fit: contain;
  }

  @media (max-width: 900px){
      .content{
        width: 80%;
      }
  }

  @media (max-width: 600px){
    .content{
      width: 100%;
    }
  }
`;
