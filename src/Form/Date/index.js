import { StyledDate } from './styled.js';
import { useCurrentDate } from "./useCurrentDate";

const formatDate = (currentDate) =>
    currentDate.toLocaleString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

export const Date = () => {
    const currentDate = useCurrentDate();

    return (
        <StyledDate>
            Dzisiaj jest {formatDate(currentDate)}
        </StyledDate>
    );
};