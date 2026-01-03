import akash from "./Akash.png";
import apex from "./apex.png";
import Walton from "./Walton.png";
import Ifad from "./IFADlogo.png";
import Jamuna from "./jamuna.png";
import Sanvees from "./Sanvees.png";
import Ghoraarbazar from "./Ghorarbazar.png";
import Halalfood from "./halalfood.png";
import Rokomari from "./Rokomari.png";
import Naturo from "./naturo.png";
import Onlinetech from "./onlineteachacadimy.png";
import Othoba from "./othoba.png";
import Lotoo from "./Lotoo.png";
import Sailor from "./sailor.png";
import Fdress from "./Fashonabledres.png";
import Htbazar from "./Hitbazr.png";
import Ecommercedelivery from "./ecommercedelivery.jpg";
import Pickanddrop from "./pickanddrop.jpg";
import Packing from "./packing.jpg";
import Warehousing from "./warehousing.jpg";
import Pickupnolimits from "./pickupnolimits.jpg";
import Cashondel from "./cashondel.jpg";
import Fasterpayments from "./fasterpayments.jpg";
import Onlinemanagement from "./onlinemanagement.jpg";
import Realtimetracking from "./realtimetracking.jpg";
import Customerscervise from "./customerscervise.jpg";





const Brands = () => {

    return (
        <>
            <div className="brandslogo">
                <h1>Brands Love to Work With Us</h1>
                <div className="brands">
                    <img src={akash} />
                    <img src={apex} />
                    <img src={Walton} />
                    <img src={Ifad} />
                    <img src={Jamuna} />
                    <img src={Sanvees} />
                </div>

                <div className="brands">
                    <img src={Ghoraarbazar} />
                    <img src={Halalfood} />
                    <img src={Rokomari} />
                    <img src={Naturo} />
                    <img src={Onlinetech} />
                </div>

                <div className="brands">
                    <img src={Othoba} />
                    <img src={Lotoo} />
                    <img src={Sailor} />
                    <img src={Fdress} />
                    <img src={Htbazar} />
                </div>
            </div>

            <div className="ourscervise">
                <h1>Our Service</h1>
                <div className="scervises">

                    <div className="scervise">
                        <img src={Ecommercedelivery} />
                        <p>Ecommerce Delivery</p>
                    </div>
                    <div className="scervise">
                        <img src={Pickanddrop} />
                        <p>Pick and Drop</p>
                    </div>
                    <div className="scervise">
                        <img src={Packing} />
                        <p>Packging</p>
                    </div>
                    <div className="scervise">
                        <img src={Warehousing} />
                        <p>Warehousing</p>
                    </div>

                </div>
            </div>

            <div className="choose">
                <h1>Why you should choose<br/> Steadfast?</h1>
                <div className="for-resone">

                    <div className="for-choose">
                        <img src={Pickupnolimits}/>
                        <h2>Daily pickup, no limits</h2>
                        <p>Steadfast Courier gives you the opportunity of unlimited pickup.</p>
                    </div>
                    <div className="for-choose">
                        <img src={Cashondel}/>
                        <h2>Cash on Delivery</h2>
                        <p>At Steadfast Courier we will collect the cash on behalf of you.</p>
                    </div>
                    <div className="for-choose">
                        <img src={Fasterpayments}/>
                        <h2>Faster Payment Service</h2>
                        <p>We provides multiple payment methods such as cash, Bank or Mobile Banking</p>
                    </div>
                    <div className="for-choose">
                        <img src={Onlinemanagement}/>
                        <h2>Online Management</h2>
                        <p>You can get all the information you need in your own user dashboard.</p>
                    </div>
                    <div className="for-choose">
                        <img src={Realtimetracking}/>
                        <h2>Real-Time Tracking</h2>
                        <p>Steadfast Courier provides an unique tracking code for your every consignments.</p>
                    </div>
                    <div className="for-choose">
                        <img src={Customerscervise}/>
                        <h2>24/7 Customer Service</h2>
                        <p>Our Call Center Executives are always ready 24/7 to help you with your problems.</p>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Brands;