import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import axios from "axios"

import Account from "./routes/Account";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/account" element={<Account />}/>
      </Routes>
    </ThemeProvider>
  );
}
