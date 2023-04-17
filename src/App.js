import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import { NewsCrudContextProvider } from "./context/NewsCrudContext";

function App() {
  return (
    <>
      <div className="backgroundImage"></div>
      <Router>
        {/* <NewsCrudContextProvider> */}
        <Routes>
          <Route path="/" exact element={<Login />} /> {/* {...props}  */}
          <Route path="/home" element={<Home />} />
        </Routes>
        {/* </NewsCrudContextProvider> */}
      </Router>
    </>
  );
}

export default App;
