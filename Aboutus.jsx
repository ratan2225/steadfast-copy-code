import { GiCheckMark } from "react-icons/gi";
import { SiPerplexity } from "react-icons/si";
import { SiPaperswithcode } from "react-icons/si";
import { FaUserNurse, FaHouseUser } from "react-icons/fa";
import { FaMotorcycle, FaTruckMedical } from "react-icons/fa6";
import Slider from "./Slider";
import Group from "./group.jpg";
import Footer from "./Footer";


const About = () => {


    return (
        <div>
            <div className="growwith">
                <h1>Grow with SteadFast</h1>

                <div className="provide-sec">
                    <div className="provid">
                        <h5>About us</h5>
                        <h1>We Provide The Best Quality Courier Services</h1>
                        <h6>Steadfast courier is a leading courier service company in Bangladesh dedicated to delivering reliable and efficient e- commerce logistics solutions in time.</h6>
                    <p><GiCheckMark className="facheck" />Daily pickups, no limitations</p>
                    <p><GiCheckMark className="facheck"/>Faster Payment Service</p>
                    <p><GiCheckMark className="facheck" />Cash on Delivery</p>
                    </div>


                    <div className="img-sec"><img src={Group}/></div>
                </div>

                <div className="missin-vision">
                    <div className="mission">
                        <SiPerplexity className="missioncon" />
                        <h2>Our Mission</h2>
                        <p>To put a smile on your face by providing fast, secure, and hassle-free deliveries. We're here to connect people and e-commerce businesses worldwide with fast, secure, and top-notch service.</p>
                    </div>

                    <div className="mission">
                        <SiPaperswithcode className="visioncon" />
                        <h2>Our Vision</h2>
                        <p>Redefine the future of e-commerce logistics in Bangladesh through innovative solutions powered by modern technologies.</p>
                        </div>
                </div>



            </div>

            <div className="somethingaboutus">

                <div className="knowaboutus">
                    <FaUserNurse className="abouticon" />
                    <h1>70k+</h1>
                    <p>Registered Merchant</p>
                </div>
                <div className="knowaboutus">
                    <FaMotorcycle className="abouticon" />
                    <h1>5k+</h1>
                    <p>Delivery Man</p>
                </div>
                <div className="knowaboutus">
                    <FaHouseUser className="abouticon" />
                    <h1>1k+</h1>
                    <p>Delivery Point</p>
                </div>
                <div className="knowaboutus">
                    <FaTruckMedical className="abouticon" />
                    <h1>5700k+</h1>
                    <p>Parcels Delivered</p>
                </div>

            </div>


            <Slider />
            <Footer />
        </div>
    )
}


export default About;