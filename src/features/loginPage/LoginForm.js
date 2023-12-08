import { useState } from "react";
import Validation from "./LoginValidation.js";
import {
  Container,
  InputLabel,
  Title,
  Input,
  Button,
  SubHeader,
  Paragraph,
  RegLink,
} from "./styled.js";
import axios from "axios";

const LoginForm = ({ formName }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const onFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((response) => {
          if (response.data === "Success") {
            formName("homepage");
          } else {
            formName("register");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleInputChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  return (
    <Container>
      <header className="header">
        <Title>CV builder</Title>
      </header>
      <main>
        <section>
          <form onSubmit={onFormSubmit}>
            <SubHeader>Login</SubHeader>
            <InputLabel>
              Email:
              <Input
                type="email"
                name="email"
                placeholder="your email adress"
                required
                onChange={handleInputChange}
              />
            </InputLabel>
            <p style={{ margin: "0", color: "crimson", fontSize: "22px" }}>
              {errors.email && <span>{errors.email}</span>}
            </p>
            <InputLabel>
              Password:
              <Input
                type="password"
                name="password"
                placeholder="**********"
                required
                onChange={handleInputChange}
              />
            </InputLabel>
            <p style={{ margin: "0", color: "crimson", fontSize: "22px" }}>
              {errors.password && <span>{errors.password}</span>}
            </p>{" "}
            <Paragraph>
              <input type="checkbox" required /> Logging in You are agree to
              aour terms and policies.
              <RegLink href="/">READ more</RegLink>
            </Paragraph>
            <Button type="submit">Log In</Button>
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
