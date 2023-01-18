import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1em 7em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  position: fixed;
  background-color: #0e1128;
  z-index: 2;
  ul {
    display: flex;
    gap: 1.5em;
    align-items: center;

    a,
    span {
      font-size: 1.2em;
      color: #fff;
      font-weight: 300;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        color: #ef233c;
      }
    }
  }
  #close {
    cursor: pointer;
    display: none;
  }

  .hamburger {
    font-size: 2em;
    cursor: pointer;
    display: none;
  }

  @media (max-width: 720px) {
    padding: 1em 3em;
  }
  @media (max-width: 550px) {
    ul {
      display: none;
    }
    .hamburger {
      display: block;
    }
    .show_menu {
      position: fixed;
      display: flex;
      flex-direction: column;
      right: 0;
      top: 0;
      height: 100vh;
      width: 50%;
      background-color: #000;
      align-items: flex-start;
      font-size: 1.3em;
      padding: 1.2em;
      #close {
        display: block;
        color: red;
        cursor: pointer;
      }
    }
  }
`;
