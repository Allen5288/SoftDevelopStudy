import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactIntro from "./components/ReactIntroPage/reactIntro";
import Home from "./components/HomePage/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactIntro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App
