import "./App.css";
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Courses from "./pages/Courses";




function App() {
  
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
           <Route path="/admission" element={<Admission />} />
              <Route path="/courses" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
