import { StyledResult } from "./styled";

export const Result = ({ result }) => (
  <StyledResult>
    {result !== "" && (
      <>
        {result.initialAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
        <strong>
          {result.finalAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </StyledResult>
);