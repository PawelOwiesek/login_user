import { useState } from "react";
import RegisterForm from "./features/RegisterForm";
import LoginForm from "./features/loginPage/LoginForm";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentForm === "login" ? (
        <LoginForm formName={toggleForm} />
      ) : (
        <RegisterForm formName={toggleForm} />
      )}
    </div>
  );
}

export default App;
