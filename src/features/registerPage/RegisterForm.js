import { useState } from "react";
import Validation from "./registerValidation";
import axios from "axios";
import {
  Button,
  Container,
  Input,
  InputLabel,
  RegLink,
  Paragraph,
  Title,
} from "./styled";

const RegisterForm = ({ formName }) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleInputChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.password === "" && errors.email === "") {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          if (res.statusText === "OK") {
            formName("login");
          } else {
            formName("register");
          }
        })
        .catch((err) => console.log(err));
    }
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
                placeholder="Your full name"
                onChange={handleInputChange}
              />
            </InputLabel>
            <p style={{ margin: "0", color: "crimson", fontSize: "22px" }}>
              {errors.name && <span>{errors.name}</span>}
            </p>
            <InputLabel>
              Email:
              <Input
                type="email"
                name="email"
                placeholder="Your email adress"
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
                onChange={handleInputChange}
              />
            </InputLabel>
            <p style={{ margin: "0", color: "crimson", fontSize: "22px" }}>
              {errors.password && <span>{errors.password}</span>}
            </p>
            <Button type="submit">Create account</Button>
          </form>
          <Button onClick={() => formName("login")}>
            Already have an account? Log in
          </Button>
          <Paragraph>
            Logging in You are agree to aour terms and policies.
            <RegLink href="/">READ more</RegLink>
          </Paragraph>
        </section>
      </main>
    </Container>
  );
};

export default RegisterForm;
