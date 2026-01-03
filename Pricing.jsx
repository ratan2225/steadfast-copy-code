import { FaCheck } from "react-icons/fa";
import Footer from "./Footer";


const Pricing = () => {


    return (
        <div>
            <div className="pricing">

                <div className="Price-Calculator">
                    <h2>Price Calculator</h2>
                </div>

                <div className="delivery-charge">
                    <h2>Calculate Your Delivery Charge</h2>
                    <p>You can easily calculate your delivery charge here</p>
                </div>

                <div className="seclationbar">

                    <div className="seclect">
                        <label>From</label>
                        <select>
                            <option value="">Dhaka City</option>
                            <option value="narayangonj">Narayangonj</option>
                            <option value="bagerhat">Bagerhat</option>
                            <option value="khulna">Khulna</option>
                            <option value="rangpur">Rangpur</option>
                        </select>
                    </div>

                    <div className="seclect">
                        <label>Destination</label>
                        <select>
                            <option value="">Dhaka City</option>
                            <option value="narayangonj">Narayangonj</option>
                            <option value="bagerhat">Bagerhat</option>
                            <option value="khulna">Khulna</option>
                            <option value="rangpur">Rangpur</option>
                        </select>
                    </div>


                    <div className="seclect">
                        <label>Category</label>
                        <select>
                            <option value="">Regular</option>
                            <option value="Document">Document</option>
                            <option value="book">Book</option>
                        </select>
                    </div>

                    <div className="seclect">
                        <label>Service Type</label>
                        <select>
                            <option value="">Regular</option>
                            <option value="Document">Same Day</option>
                        </select>
                    </div>

                    <div className="seclect">
                        <label>Weight (KG)</label>
                        <input type="number" placeholder="0.15" />
                    </div>

                    <div className="totalprice">
                        <p>50 tk</p>
                    </div>
                </div>

                <div className="condation">
                       <p><FaCheck className="checkicon" /> পিক এন্ড ড্রপ সার্ভিসের ন্যূনতম চার্জ ৮০ টাকা প্রযোজ্য</p>
                       <p><FaCheck className="checkicon" /> ১% ক্যাশ অন ডেলিভারি ও রিস্ক ম্যানেজমেন্ট চার্জ প্রযোজ্য</p>
                       <p><FaCheck className="checkicon" /> পার্সেল সাইজের কারণে ডেলিভারি মাশুল পরিবর্তিত হতে পারে</p>
                       <p><FaCheck className="checkicon" /> উক্ত চার্জসমূহ ভ্যাট ও ট্যাক্স ব্যাতিত</p>
                       <p><FaCheck className="checkicon" /> অনাকাঙ্ক্ষিত কারণবশত ডেলিভারি সময়ের পরিবর্তন হতে পারে</p>
                </div>
                <Footer />






            </div>


        </div>
    )
}

export default Pricing;