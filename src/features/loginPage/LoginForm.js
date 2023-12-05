import { Container, InputLabel, Title, Input, Button } from "./styled.js";
import { useState } from "react";

const LoginForm = ({ formName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <header className="header">
        <Title>CV builder</Title>
      </header>
      <main>
        <section>
          <form onSubmit={onFormSubmit}>
            <InputLabel>
              Email:
              <Input
                type="email"
                name="email"
                value={email}
                placeholder="your email address"
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
            <Button>Log In</Button>
          </form>
          <Button onClick={() => formName("register")}>
            No account yet? Register
          </Button>
        </section>
      </main>
    </Container>
  );
};

export default LoginForm;
