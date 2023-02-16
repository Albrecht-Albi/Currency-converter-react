import styled from "styled-components";

export const StyledClock = styled.p`
    text-align: right;
    font-family: monospace;
    color: ${({ theme }) => theme.color.black};
    font-size: 13px;
    margin-top: 5px;
    margin-bottom: 10px;
`;