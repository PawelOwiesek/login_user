import { useState } from "react";
import { Container, Title } from "./loginPage/styled";

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
            <label>
              Full name:
              <input
                type="text"
                name="name"
                value={name}
                placeholder="your full name"
                required
              />
            </label>
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
          <button onClick={() => formName("login")}>
            Already have an account? Log in
          </button>
        </section>
      </main>
    </Container>
  );
};

export default RegisterForm;
