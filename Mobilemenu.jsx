import homeimg from "./steadhome.png";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";


const Mobilemenu = ({ toggle }) => {
    const changeclass = (e) => {
        return e.isActive ? "red" : "black"
    }


    return (
        <div className="mobilehomeicon">


            <div className="homeandcress">
                <NavLink to="/"><img onClick={toggle} src={homeimg} /></NavLink>
                <div className="crossmenu" onClick={toggle}><ImCross /></div>
            </div>


                <div className="mobli">
                    <NavLink className={changeclass} onClick={toggle} to="/Pricing"><li>Pricing</li></NavLink>
                    <NavLink className={changeclass} onClick={toggle} to="/Coverage"><li>Coverage</li></NavLink>
                    <NavLink className={changeclass} onClick={toggle} to="/Aboutus"><li>About Us</li></NavLink>
                    <NavLink className={changeclass} onClick={toggle} to="/Contact"><li>Contact</li></NavLink>
                </div>

        </div>
    )
}




export default Mobilemenu;