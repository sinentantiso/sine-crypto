import React from "react";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </ThemeProvider>
  );
}
