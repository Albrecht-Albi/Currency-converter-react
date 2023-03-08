import styled from "styled-components";

export const Wrapper = styled.footer`
  max-width: 700px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.logCabin};
  border-radius: 5px;
  box-shadow: 2px 2px 20px ${({ theme }) => theme.color.wildSand};
  padding: 10px;
`;

export const StyledFooter = styled.p`
  font-style: italic;
  text-align: center;
  font-weight: 700;
  margin: 0;
`;
