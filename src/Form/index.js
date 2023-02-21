import {
    StyledForm,
    Header,
    Label,
    Field,
    Loading,
    Failure
}
    from "./styled";
import { useRatesData } from "./useRatesData";
import { useState } from "react";
import { Result } from "./Result";
import { Buttons } from "./Buttons";
import { Date } from "./Date";

export const Form = () => {
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");

    const ratesData = useRatesData();

    const calculateResult = (amount, currency) => {
        const rate = ratesData.rates[currency];

        setResult({ sourceAmount: +amount, targetAmount: amount * rate, currency });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    const onResetClick = () => {
        setAmount("");
        setResult("");
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}>
            <Date />
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Chwileczkę...⌛<br />Ładuję kursy z Europejskiego Banku Centralnego
                    </Loading>
                )
                :
                ratesData.state === "error" ? (
                    <Failure>
                        Ups... coś poszło nie tak 😐 <br />
                        Sprawdź czy masz połączenie z internetem i spróbuj odświeżyć stronę przeglądarki. <br />
                        Jeśli masz dostęp do internetu a strona nadl nie działa, <br />
                        prawdopodobnie problem leży po naszej stronie, <br />
                        za co przepraszamy i postaramy się jak najszybciej naprawić błąd.
                    </Failure>
                ) : (
                    <>
                        <Header>
                            Kalkulator walut
                        </Header>
                        <p>
                            <Label>
                                Kwota w PLN*:
                            </Label>
                            <Field
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                                type="number"
                                min="0.01"
                                step="0.01"
                                required
                                placeholder="Wpisz kwotę w PLN"
                            />
                        </p>
                        <p>
                            <Label htmlFor="rate">
                                Wybierz walutę*:
                            </Label>
                            <Field as="select"
                                value={currency}
                                onChange={({ target }) => setCurrency(target.value)}
                            >
                                {Object.keys(ratesData.rates).map((currency) => (
                                    <option
                                        key={currency}
                                        value={currency}
                                    >
                                        {currency}
                                    </option>
                                ))};
                            </Field>
                        </p>
                        <p>
                            Pola wymagane oznaczone są *.
                        </p>
                        <Buttons onResetClick={onResetClick} />
                        <Result result={result} />
                    </>
                )
            }
        </StyledForm >
    )
};