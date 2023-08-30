import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Speak from "./routes/Speak";
import Read from "./routes/Read";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speak" element={<Speak />} />
        <Route path="/read" element={<Read />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
