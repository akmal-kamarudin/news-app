import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" {...props} element={<Login />} />
          <Route path="/home" {...props} element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
