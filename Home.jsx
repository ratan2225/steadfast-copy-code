import caycleimg from "./caycleimg.png";
import { FaUserNurse } from "react-icons/fa";
import { IoMdBicycle } from "react-icons/io";
import { RiHome7Fill } from "react-icons/ri";
import Brands from "./Brands";
import Quastionbar from "./Quastionbar";
import Grow from "./Grow";
import Footer from "./Footer";


const Home = () => {



    return (
        <div>
            <div className="makemarchin">


                <div className="marchinbutton">
                    <h1>We<span> Deliver</span><br/> Parcel on Time with no Hassle</h1>
                    <p>Easy Tracking, fast Payment, and safe Delivery across country.</p>
                    <button>Become a Merchant</button>
                </div>


                <div className="caicleimg"><img src={caycleimg} alt="..." /></div>


                <div className="ourinformation">
                    <div className="information"> <div className="icons"><FaUserNurse /></div>
                        <div className="infos"><h1>300k+</h1>
                            <p>Registered Merchant</p></div>
                    </div>

                    <div className="information"> <div className="icons"><IoMdBicycle /></div>
                        <div className="infos"><h1>10k+</h1>
                            <p>Delivery Man</p></div>

                    </div>

                    <div className="information"> <div className="icons"><RiHome7Fill /></div>
                        <div className="infos"><h1>500k+</h1>
                            <p>Delivery Point</p></div>

                    </div>
                </div>
            </div>
                <Brands/>
                <Quastionbar/>
                <Grow />
                <Footer />
        </div>
    )
}



export default Home;