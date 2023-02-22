import styled from "styled-components";

export const Wrapper = styled.footer`
  max-width: 700px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.jumbo};
  color: ${({ theme }) => theme.color.wildSand};
  border-radius: 5px;
  box-shadow: 5px 2px 20px ${({ theme }) => theme.color.black};
  padding: 5px;
`;

export const StyledFooter = styled.p`
  font-style: italic;
  text-align: center;
  font-weight: 700;
`;
