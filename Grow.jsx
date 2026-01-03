import { PiMedalDuotone } from "react-icons/pi";
import { RiTv2Line } from "react-icons/ri";
import Dagbibag from "./dackbebag.png";
import Csa from "./csa.png";



const Grow = () => {


    return (
        <>

            <div className="maingrow">
                <div className="growbus">
                    <h1>Grow Your Business with SteadFast</h1>
                    <p>Start Your first step with SteadFast</p>
                    <button>Become a Marchant</button>
                </div>

                <div className="licmem">
                    <div className="license">
                        <h6><span> <PiMedalDuotone /></span> Licensed</h6>
                        <h2>A licensed courier service of GPO</h2>
                        <img src={Dagbibag} />
                    </div>
                    <div className="license">
                        <h6><span> <RiTv2Line /></span> Licensed</h6>
                        <h2>We are Member of</h2>
                        <img src={Csa} />
                    </div>

                </div>


            </div>
        </>
    )
}




export default Grow;