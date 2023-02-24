import {
    StyledForm,
    Header,
    Label,
    Field,
    Loading,
    Failure,
    Info
} from "./styled";
import { useRatesData } from "./useRatesData";
import { useState, useRef } from "react";
import { Result } from "./Result";
import { Buttons } from "./Buttons";
import { Clock } from "./Clock";

export const Form = () => {
    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");
    const inputRef = useRef(null);

    const ratesData = useRatesData();

    const calculateResult = (amount, currency) => {
        const rate = ratesData.rates[currency];
        inputRef.current.focus();

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
            <Clock />
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Chwileczkę...⌛
                        <p>
                            Ładuję kursy z Europejskiego Banku Centralnego
                        </p>
                    </Loading>
                ) : ratesData.state === "error" ? (
                    <Failure>
                        Ups... coś poszło nie tak 😐
                        <p>
                            Sprawdź czy masz połączenie z internetem i spróbuj odświeżyć stronę.
                        </p>
                    </Failure>

                ) : (
                    <>
                        <Header>
                            Kalkulator walut
                        </Header>
                        <p>
                            <Label>
                                Kwota w PLN: *
                            </Label>
                            <Field
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                                type="number"
                                min="0.01"
                                step="0.01"
                                required
                                placeholder="Wpisz kwotę w PLN"
                                ref={inputRef}
                            />
                        </p>
                        <p>
                            <Label>
                                Wybierz walutę:
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
                        <Info>
                            Kursy walut aktualne na dzień: {ratesData.date}
                        </Info>
                        <Buttons onResetClick={onResetClick} />
                        <Result result={result} />
                    </>
                )
            }
        </StyledForm >
    )
};