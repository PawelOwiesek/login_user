import { useState } from "react";
import {
  Button,
  Container,
  Input,
  InputLabel,
  Title,
} from "./loginPage/styled";

const RegisterForm = ({ formName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <header className="header">
        <Title>Register new account</Title>
      </header>
      <main>
        <section>
          <form onSubmit={onFormSubmit}>
            <InputLabel>
              Full name:
              <Input
                type="text"
                name="name"
                value={name}
                placeholder="Your full name"
                required
              />
            </InputLabel>
            <InputLabel>
              Email:
              <Input
                type="email"
                name="email"
                value={email}
                placeholder="Your email adress"
                required
              />
            </InputLabel>
            <InputLabel>
              Password:
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="**********"
                required
              />
            </InputLabel>
          </form>
          <Button onClick={() => formName("login")}>
            Already have an account? Log in
          </Button>
        </section>
      </main>
    </Container>
  );
};

export default RegisterForm;
