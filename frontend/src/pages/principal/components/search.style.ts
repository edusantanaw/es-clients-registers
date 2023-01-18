import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1em;
  #actual {
    opacity: 0.9;
  }
  .search {
    display: flex;
    gap: 1em;
  }
  .filter {
    position: relative;
  }

  .filters {
    display: flex;
    flex-direction: column;
    margin-top: 0.4em;
    position: absolute;
    right: 0;
    background-color: #2B2D42;
    span {
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .filters,
  .current_filter {
    padding: 0.6em 1em;
    border: 1px solid #8d99ae;
  }

  .current_filter {
    display: flex;
    height: 3.2em;
    align-items: center;
    gap: 0.3em;
    cursor: pointer;
    color: #8d99ae;
    background-color: transparent;
  }

  @media (max-width: 700px){
    .current_filter{
      height: 3.4em;
      font-size: 0.8em;
    }
  }
`;
export const Input = styled.input`
  width: 37em;
  height: 3.8em;
  margin-bottom: 2em;
  border: 1px solid #8d99ae;
  color: #fff;
  background-color: transparent;
  padding-left: 2em;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #8d99ae;
  }

  @media (max-width: 700px){
    width: 25em;
    height: 3.3em;
  }
`;
