import { NavLink } from "react-router-dom";
import homeimg from "./steadhome.png";
import { FiMenu } from "react-icons/fi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useState } from "react";
import Mobilemenu from "./Mobilemenu";



const Navbar = () => {

    const [open, setopen] = useState(false);

    const changeclass = (e) => {
        return e.isActive ? "red" : "black"
    }

    const togglemenu = ()=>{
        setopen(!open)
    }



    return (
        <div className="navbar">

            <div className="navhome">
                <div className="menuicon" onClick={togglemenu}><FiMenu /></div>
                {open && (<div><Mobilemenu toggle={togglemenu}/></div>)}
                <NavLink className="homeimg" to="/"><img src={homeimg} /></NavLink>
            </div>
            <div className="mainnav">
                <NavLink className={changeclass} to="/Pricing"><li>Pricing</li></NavLink>
                <NavLink className={changeclass} to="/Coverage"><li>Coverage</li></NavLink>
                <NavLink className={changeclass} to="/Aboutus"><li>About Us</li></NavLink>
                <NavLink className={changeclass} to="/Contact"><li>Contact</li></NavLink>
            </div>
            <div className="navtrackparcel">
                <NavLink className="navli" to="/Trackparcel"><li><FaLocationCrosshairs /> Track Parce</li></NavLink>
            </div>
            <div className="navbutton">
                <div className="navlogin">
                    <NavLink className="navli" to="/Login"><li>Login</li></NavLink>
                </div>
                <div className="signup">
                    <NavLink className="navli" to="/Signup"><li>Sign Up</li></NavLink>
                </div>
            </div>
        </div>
    )
}



export default Navbar;