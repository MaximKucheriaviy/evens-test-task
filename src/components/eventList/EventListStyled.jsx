import { styled } from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  width: 272px;
  margin-left: auto;
  margin-right: auto;
  grid-row-gap: 24px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 24px;
    grid-template-columns: repeat(2, 332px);
    grid-gap: 24px;
    width: auto;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 302px);
  }
`;
