import { FaFacebookF, FaLinkedinIn, FaInstagram, FaApple, FaGooglePlay } from "react-icons/fa";
import Steadhome from "./steadhome.png";




const Footer = () => {


    return (
        <>
        <div className="footer">

            <div className="address">
                <img src={Steadhome} />
                <p>House# 44, Rd No. 2/A, Dhanmondi,<br />
                    Dhaka 1209</p>
                <p>E-mail: ratankh2225@gmail.com</p>
                <p>Hotline: 09678-22277722</p>
            </div>

            <div className="company">
                <h2>Company</h2>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms and Conditions</a></li>
            </div>

            <div className="company">
                <h2>Sister Concern</h2>
                <li><a href="#">Pixelax</a></li>
                <li><a href="#">Biggapon</a></li>
            </div>

            <div className="follow">
                <h2>Follow Us</h2>
                <div className="socal-icon">
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><FaLinkedinIn /></a></li>
                    <li><a href="#"><FaInstagram /></a></li>
                </div>
                <div className="app-store">

                    <a href="#">
                        <div className="appdiv">
                            <div className="apple"><FaApple /></div>
                            <div className="dowinfo">
                                <p>Alpple Store</p>
                                <h6>Download on the</h6>
                            </div>
                        </div>
                    </a>

                    <a href="#">
                        <div className="appdiv">
                            <div className="apple"><FaGooglePlay /></div>
                            <div className="dowinfo">
                                <p>Google Play</p>
                                <h6>Get it on</h6>
                            </div>
                        </div>
                    </a>



                </div>
            </div>

            



        </div>
        <div className="list"><p>© 2016 - 2025 SteadFast Courier Ltd. All rights reserved.</p></div>
        </>

    )
}





export default Footer;