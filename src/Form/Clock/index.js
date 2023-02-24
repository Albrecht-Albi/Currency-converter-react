import { StyledClock } from './styled.js';
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
    const date = useCurrentDate();

const formatDate = (date) =>
    date.toLocaleString("pl", {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return (
        <StyledClock>
            Dzisiaj jest {formatDate(date)}
        </StyledClock>
    );
};