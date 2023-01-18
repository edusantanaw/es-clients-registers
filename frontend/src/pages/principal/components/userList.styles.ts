import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 1em;
  display: flex;
  gap: 2em;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
}
`;

export const Item = styled.li`
  width: 47%;
  padding: 1.5em;
  border-radius: 15px;
  display: flex;
  gap: 1.3em;
  border: 1px solid #8d99ae;
  overflow: hidden;
  img {
    width: 7em;
    height: 7em;
    border-radius: 50%;
    object-fit: cover;
  }
  .photo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7em;
    font-weight: 300;
  }

  .infos {
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 0.9em;
    h2 {
      font-size: 1.7em;
      font-weight: 500;
    }
    span {
      font-weight: 300;
    }
  }
  @media (max-width: 850px) {
    width: 80%;
  }

  @media (max-width: 600px) {
      width: 100%;
  }
`;
