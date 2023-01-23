import "./style.css";

export const Footer = ({ description }) => (
    <footer className="footer">
        <p className="footer__paragraph">
            { description }
        </p>
    </footer>
);
