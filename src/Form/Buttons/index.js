import { StyledButtons, Button } from "./styled.js";

export const Buttons = ({ onResetClick }) => (
    <StyledButtons>
        <Button
            type="submit"
        >
            Przelicz
        </Button>
        <Button
            onClick={onResetClick}
            type="reset"
        >
            Wyczyść
        </Button>
    </StyledButtons>
);