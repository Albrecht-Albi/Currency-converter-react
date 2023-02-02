import "./style.css";
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
    <form className="form" onSubmit={onFormSubmit}>
      <Clock />
      <h1 className="form__header">Kalkulator walut</h1>
      <p>
        <label>
          <span className="form__label">
            Kwota w PLN*:
          </span>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            className="form__field"
            type="number"
            min="0.01"
            step="0.01"
            required
            placeholder="Wpisz kwotę w PLN"
          />
        </label>
      </p>
      <p>
        <label>
          <span className="form__label">
            Wybierz walutę*:
          </span>
          <select
            value={currency}
            className="form__field"
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
          </select>
        </label>
      </p>
      <Buttons onResetClick={onResetClick} />
      <Result result={result} />
      <p>
        Pola wymagane oznaczone są *.
      </p>
    </form>
  )
};