import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Qmc from "./pages/Qmc";
import Courses from "./pages/Courses";
import AdmissionSuccess from "./pages/AdmissionSuccess";

function App() {
  return (
    <>
      {/* Routes */}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/qmc" element={<Qmc />} />
          <Route path="/Courses/:id" element={<Courses />} />
          <Route path="/AdmissionSuccess" element={<AdmissionSuccess />} />
        </Routes>
    
    </>
  );
}

export default App;
