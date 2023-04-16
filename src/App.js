import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
// import { NewsCrudContextProvider } from "./context/NewsCrudContext";

function App() {
  return (
    <div className="backgroundImage">
      <Router>
        {/* <NewsCrudContextProvider> */}
        <Routes>
          <Route path="/" exact element={<Login />} /> {/* {...props}  */}
          <Route path="/home" element={<Home />} />
        </Routes>
        {/* </NewsCrudContextProvider> */}
      </Router>
    </div>
  );
}

export default App;
