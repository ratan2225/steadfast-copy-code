import { FiSearch } from "react-icons/fi";
import Footer from "./Footer";



const Trackparcel = () => {


    return (
        <div>
            <div className="trackprcl">
                <h1>Track Your Consignment</h1>
                <p>Now you can easily track your consignment</p>

                <div className="covesearch">
                <div className="searchicon"><FiSearch /></div>

                <input type="text" placeholder="Search here...." />
                <div className="btn">
                    <div className="searchicons"> <FiSearch /></div>

                    <div className="buttons"><button>Search</button></div>

                </div>

            </div>



            </div>
            <Footer />


            





        </div>
    )
}

export default Trackparcel;