import { Form } from "./Form";
import { Footer } from "./Footer";
import { Container } from "./Container/styled";

function App() {
    return (
        <Container>
            <Form />
            <Footer description="Kursy walut są aktualne na dzień odświarzenia kalkulatora"
            />
        </Container>
    );
}

export default App;