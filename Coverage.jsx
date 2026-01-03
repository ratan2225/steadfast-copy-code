import { FiSearch } from "react-icons/fi";
import Location from "./location.jpg";
import Footer from "./Footer";



const Coverage = () => {

    return (
        <div>

            <div className="search-area">
                <h1>We are available in 64 districts</h1>
                <h2>Search Your Area</h2>
                <p>Now you can easily search your area here</p>
                <div className="covesearch">
                    <div className="searchicon"><FiSearch /></div>

                    <input type="text" placeholder="Search here...." />
                    <div className="btn">
                        <div className="searchicons"> <FiSearch /></div>

                        <div className="buttons"><button>Search</button></div>

                    </div>

                </div>
                <div className="imgarea">
                    <div className="textarea">
                        <h2>We deliver almost all over Bangladesh</h2>
                    </div>

                    <div className="imges"><img src={Location} /></div>

                </div>


            </div>

            <Footer />
        </div>
    )
}


export default Coverage;