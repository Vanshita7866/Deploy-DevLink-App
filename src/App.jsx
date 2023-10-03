import { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Header from "./Header";
import HomePage from './Homepage'
import Login from './Login'
import Signup from "./Signup";
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />} />
        <Route index element={<HomePage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
