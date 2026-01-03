import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useState } from "react";


const AccordionItem = ({ qus, ans }) => {
    const [ isOpen, setOpen] = useState(false);

    const toggleAction = () => {
        setOpen (!isOpen);
    };

    return (
        <div className="items">

            <div className="qusbar" onClick={toggleAction}>
                <h2 className="quastion">{qus}</h2>
                <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
            </div>
            {isOpen && <p className="answer">{ans}</p>}

        </div>
    );

};





const Quastionbar = () => {

    const databar = [
        {id: 1, qus: "why SteadFast Courier?", 
        ans: "SteadFast Courier stands out for its commitment to delivering parcels nationwide on time and without any hassle. We pride ourselves on offering fast payment, easy tracking, a dedicated customer service team, and ensuring the safe delivery of your parcels."},

        {id: 2, qus: "What is the coverage area of steadfast Courier?", 
         ans: "SteadFast Courier extends its services across 8 divisions, 495 Upazilas, and 330 Municipal Corporations. Click here for a comprehensive list of detailed service locations."},

        {id: 3, qus: "what services does Steadfast Courier provide?", 
        ans: "Revel in the excellence of E-commerce delivery, pick-and-drop , cutting-edge warehousing, entrust your goods to our state-of-the-art warehousing, and witness perfection in packaging solutions."},

        {id: 4, qus: "Want to know about your delivery charges?", 
        ans: "Discover our delivery charges, which are determined by the weight of a 1 kg parcel: inside dhaka: 70 Dhaka Suburban; 100 Outside Dhaka:130"}

    ];

    return (
        <>
            <div className="quastionbar">
                <h1>Frequently asked Questions</h1>
                {databar.map((i, id) => (
                    <AccordionItem key={id} qus={i.qus} ans={i.ans} />
                ))}



            </div>

        </>
    )
}
  

   





export default Quastionbar;