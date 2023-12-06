import React from "react";

const HomePage = ({ formName }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ fontSize: "42px", color: "crimson" }}>Hello User</div>
      <p style={{ fontSize: "42px", color: "crimson" }}>
        This is Your HomePage
      </p>
      <div>
        <button
          style={{ fontSize: "42px", color: "blue", border: "2px solid" }}
          onClick={() => formName("login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default HomePage;
