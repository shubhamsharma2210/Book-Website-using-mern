import "./App.css";
import Signup from "./components/Signup";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Course from "./pages/Course";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="bg-white text-black dark:bg-slate-900 dark:text-white">
      <Routes>

     <Route path="/" element={<Home />} /> 
     <Route path="/course" element={ <Course />} /> 
     <Route path="/signup" element={ <Signup />} /> 
     <Route path="/contactus" element={ <ContactUs />} /> 
     <Route path="/about" element={ <About />} /> 

     
      </Routes>
    </div>
  );
}

export default App;
