import "./style.css";

export const Buttons = ({ onResetClick }) => (
    <p className="form__buttons">
        <button
            className="form__button"
            type="submit"
        >
            Przelicz
        </button>
        <button
            onClick={onResetClick}
            type="reset"
            className="form__button"
        >
            Wyczyść
        </button>
    </p>
);