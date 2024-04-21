import React from "react";
import "./app.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";
import Form from "./component/Form/Form";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
const App = () => {
  axios.defaults.baseURL = "http://localhost:3001";
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="/form" element={<Form></Form>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
