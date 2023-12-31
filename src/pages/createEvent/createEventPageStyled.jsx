import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
export const StyedCretePage = styled.section`
  padding: 24px;
  padding-top: 40px;
  @media screen and (min-width: 768px) {
    padding: 40px;
  }
  & h2 {
    margin-top: 24px;
    margin-bottom: 24px;
    @media screen and (min-width: 768px) {
      width: 688px;
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (min-width: 1280px) {
      width: 1280px;
      margin-left: auto;
      margin-right: auto;
    }
    ${({ theme }) => theme.fontH2}
    font-size: 24px;
    color: ${({ theme }) => theme.hardGray};
  }
`;

export const StyledBackButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  ${({ theme }) => theme.fontBody}
  color: ${({ theme }) => theme.primaryColor};
  text-decoration: none;
`;
