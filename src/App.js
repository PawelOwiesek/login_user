import { useState } from "react";
import RegisterForm from "./features/registerPage/RegisterForm";
import LoginForm from "./features/loginPage/LoginForm";
import HomePage from "./features/userPage/homepage";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div
      style={{
        backgroundColor: "#9e9e9e33",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {currentForm === "login" ? (
        <LoginForm formName={toggleForm} />
      ) : currentForm === "register" ? (
        <RegisterForm formName={toggleForm} />
      ) : currentForm === "homepage" ? (
        <HomePage formName={toggleForm} />
      ) : null}
    </div>
  );
}

export default App;
