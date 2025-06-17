import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>

     {/* Navigation */}
      <nav className=" space-x-5 p-10 text-3xl  ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>


        {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
