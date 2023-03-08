import styled from "styled-components";


export const StyledButtons = styled.p`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-gap: 20px;
    padding-top: 15px;
    margin-left: 48px;
    margin-right: 46px;
  
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.woodSmoke};
    max-width: 250px;
    width: 200px;
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;
    font-weight: 700;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.scorpion};
    box-shadow: 1px 1px 10px rgb(32, 31, 31);
    transition: background 1s, transform 0.5s; 
  
  &:hover {
    background-color: ${({ theme }) => theme.color.nevada};
    transform: scale(1.05);
  }
`;