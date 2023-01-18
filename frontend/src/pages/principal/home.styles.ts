import styled from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  padding: 7em 4em;
  display: flex;
  justify-content: center;
  color: #fff;
  .content {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
  }

  .current_page {
    margin-top: 3em;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 0.6em;
    align-items: center;
    span {
      background-color: #101010;
      width: 2.4em;
      padding: 0.5em 0;
      text-align: center;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
    }
    #left,
    #right {
      font-size: 2em;
      cursor: pointer;
    }

    #actual {
      background-color: #ef233c;
    }
  }
  @media (max-width: 1050px) {
    padding: 7em 2em;
    .content {
      width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3.5em;
  font-weight: 500;
  letter-spacing: 2px;
  padding-bottom: 0.5em;
`;
