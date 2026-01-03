import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./Aboutus";
import Contact from "./Contact";
import Coverage from "./Coverage";
import Login from "./Login";
import Pricing from "./Pricing";
import Signup from "./Signup";
import Trackparcel from "./Trackparcel";







const app = () => {
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Coverage" element={<Coverage/>}/>
        <Route path="/Aboutus" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Trackparcel" element={<Trackparcel/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    
    </div>
    </>

  );
}

export default app;