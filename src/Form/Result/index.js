import "./style.css";

export const Result = ({ result }) => (
    <p className="form__result">
        {result !== "" && (
            <>
                {result.initialAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                <strong>
                    {result.finalAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
);