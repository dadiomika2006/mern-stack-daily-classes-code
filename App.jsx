import React from "react";
import ClassBasedComponent from "./ClassBasedComponent";
import RegisterForm from "./Registration_form";
import "./Form_styling.css";

const App = () => {
  return (
    <div>
      <RegisterForm />
      <ClassBasedComponent />
      <h1>React App Using Vite</h1>
    </div>
  );
};
export default App;

