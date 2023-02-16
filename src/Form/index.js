import { StyledForm, Header, Label, Field } from "./styled";
import { currencies } from "../currencies";
import { useState } from "react";
import { Result } from "./Result";
import { Buttons } from "./Buttons";
import { Clock } from "./Clock";

export const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {
    const { rate } = currencies.find(({ shortName }) => shortName === currency);

    setResult({
      initialAmount: +amount,
      finalAmount: amount / rate,
      currency,
    });
  }

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
        <Label>
          Wybierz walutę*:
        </Label>
        <Field as="select"
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          {currencies.map((currency => (
            <option
              key={currency.shortName}
              value={currency.shortName}
            >
              {currency.longName}
            </option>
          )))}
        </Field>
      </p>
      <p>
      Pola wymagane oznaczone są *.
      </p>
      <Buttons onResetClick={onResetClick} />
      <Result result={result} />

    </StyledForm>
  )
};