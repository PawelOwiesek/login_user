import { useState } from "react";
import Validation from "./RegisterValidation";
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
    console.log(errors);
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
                required
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
            </p>
            <Button type="submit">Sign In</Button>
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
