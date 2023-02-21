import { Wrapper, StyledFooter } from './styled.js';

export const Footer = ({ description }) => (
    <Wrapper>
        <StyledFooter>
            {description}
        </StyledFooter>
    </Wrapper>
);