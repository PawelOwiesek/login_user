import { Container, Title } from "./styled.js";
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
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                placeholder="your email address"
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                placeholder="**********"
                required
              />
            </label>
            <button>Log In</button>
          </form>
          <button onClick={() => formName("register")}>
            No account yet? Register
          </button>
        </section>
      </main>
    </Container>
  );
};

export default LoginForm;
