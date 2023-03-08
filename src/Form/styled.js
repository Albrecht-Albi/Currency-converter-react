import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: ${({ theme }) => theme.color.logCabin};
    padding: 10px;
    border-radius: 5px;
    margin: 20px 0;
    margin-bottom: 0px;
    text-align: center;
    box-shadow: 2px 2px 20px ${({ theme }) => theme.color.wildSand};
    height: 450px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 520px;
    }
`;

export const Header = styled.h1`
    background-color: ${({ theme }) => theme.color.logCabin};
    color: ${({ theme }) => theme.color.wildSand};
    font-size: 24px;
    max-width: 250px;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    font-weight: 700;
    text-align: center;
    display: inline-block;
    box-shadow: 2px 2px 20px ${({ theme }) => theme.color.wildSand};
`;

export const Label = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
    text-align: left;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 5px;
    }
`;

export const Field = styled.input`
    border: 1px solid ${({ theme }) => theme.color.logCabin};
    padding: 10px;
    width: 100%;
    max-width: 250px;
    border-radius: 5px;
`;

export const Loading = styled.p`
    margin-top: 25%;
    font-weight: 700;
    `;

export const Failure = styled.p`
        color: ${({ theme }) => theme.color.crimson};
        font-weight: 700;
        margin-top: 25%;
    `;

export const Info = styled.p`
    text-align: center;
    margin-left: 69px;
    `;