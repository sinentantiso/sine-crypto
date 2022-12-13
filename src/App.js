import React from "react";
import "./style.css";
import { ThemeProvider } from "./context/ThemeContext";


export default function App() {
  return (
    <ThemeProvider>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </ThemeProvider>
  );
}
