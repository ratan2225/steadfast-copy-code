import { useEffect, useState } from "react";
import Img from "./steadhome.png";



const Slider = () => {
  const slides = [
    {
      title: "Welcome to Our Website",
      desc: "দেড় বছরে যাত্রায় এক কোটিরও বেশি টাকার পণ্য গ্রাহকদের নিকট নিরাপদে পৌঁছে দিয়েছে স্টেডফাস্ট কুরিয়ার। স্টেডফাস্টের সবাইকে ধন্যবাদ।",
    },
    {
      title: "React Development",
      desc: "রাঙ্গামাটিতে আমরা মার্চেন্ট ছিলাম ৫ জন। তখন সারা মাস মিলে ২০-৩০ টা পার্সেল ও হতো না। তবুও দেখা গিয়েছে একটা পার্সেল হলেও রাইডার রা পিকআপ করতে আসতো। ধন্যবাদ স্টেডফাস্ট।",
    },
    {
      title: "Grow Your Business",
      desc: "স্টেডফাস্ট কুরিয়ারের টপ লেভেল কর্মকর্তা থেকে রাইডার পর্যন্ত সকলেই ভীষণ আন্তরিক ও সাহায্যকারী। আমি বিশ্বাস করি, শীঘ্রই তারা দেশের সেরা কুরিয়ার সার্ভিসে পরিণত হবে।",
    },
   {   title: "ratan",
      desc: "ব্যবসার শুরুতে সময়মত ডেলিভারি করতে না পারার ঝামেলায় বেশ ভুগতে হয়েছে। আলহামদুলিলাহ! স্টেডফাস্টের সাথে কাজ করার পর থেকে এখন আর এই ঝামেলা হচ্ছে না।",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  })

  return (
    <>
    <div className="main">
    <section className="hero-slider">
      <div
        className="hero-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className="hero-slide"
            key={index}>
            <div className="overlay">
                <img src={Img} />
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              
            </div>

          </div>
        ))}
      </div>

      {/* dots */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={current === i ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>


      
    </section>
    </div>
    </>
  );
};

export default Slider;
