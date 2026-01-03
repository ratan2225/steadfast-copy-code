import { IoLocationOutline } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import Footer from "./Footer";


const Contact = () => {


    return(
        <>

        <div className="touchariea">
            <h1>Get in Touch with Us</h1>
            <div className="adressandmassbar">

                <div className="addbar">
                    <div className="acmrbox">
                        <span className="locicon"><IoLocationOutline /></span>
                        <h2>Address</h2>
                        <p>17/2, Dhanmondi 3/A, Dhaka-1209</p>
                    </div>

                    <div className="acmrbox">
                        <span className="mail"><FaHeadset /></span>
                        <h2>Call Us</h2>
                        <p>09678-045045</p>
                    </div>

                    <div className="acmrbox">
                        <span className="call"><MdOutlineMail /></span>
                        <h2>Mail</h2>
                        <p>info@steadfast.com.bd</p>
                    </div>

                    <div className="acmrbox">
                        <span className="reg"><BiPhoneCall /></span>
                        <h2>Registration</h2>
                        <p>01332-846585</p>
                    </div>
                </div>

                <div className="messbar">
                    <input className="inputs" type="text" placeholder="Full Name"/>
                    <input className="inputs" type="number" placeholder="Phone Number"/>
                    <input className="inputs" type="email" placeholder="Mail Address"/>
                    <input className="inputs" type="text" placeholder="Subject"/>
                    <textarea className="messtextarea" placeholder="Massage" />
                    <button className="btnes">Send Message</button>
                </div>

            </div>
            
        </div>
        <Footer />

        </>
    )
}


export default Contact;