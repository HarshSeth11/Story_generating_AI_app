import "./App.css";
import LeaderBoard from "./components/LeaderBoard";
import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TextArea from "./components/TextArea";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Display from "./screens/Display";
import Home from "./screens/Home";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/display" element={<Display />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
