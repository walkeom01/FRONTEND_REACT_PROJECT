import React, { useState } from "react";
import imag1 from "../../assets/hero/headphone.png";
import imag2 from "../../assets/category/macbook.png";
import imag3 from "../../assets/category/vr.png";
import Button from "../Shared/Button";


const HeroData = [
  {
    id: 1,
    img: imag1,
    subtitle: "beats solo",
    title: "wireless",
    title2: "headphone",
  },
  {
    id: 2,
    img: imag2,
    subtitle: "Beats solo",
    title: "Gamming",
    title2: "laptop",
  },
  {
    id: 3,
    img: imag3,
    subtitle: "beats solo",
    title: "wireless",
    title2: "headset",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = HeroData[activeIndex];

  return (
    <div className="container mt-3 ">
      <div className="overflow-hidden rounded-3xl min-h-[300px] sm:min-h-[450px] flex justify-center items-center hero-bg-color">

        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">

            {/* left side text section */}
            <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
              <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">
                {data.subtitle}
              </h1>
              <h1 className="text-4xl sm:text-5xl font-bold">
                {data.title}
              </h1>
              {/* <h1 className=" absolute  left-4 text-5xl sm:text-[80px] md:text-[100px] xl:text-[150px]   font-bold uppercase  text-black/10 dark:text-white/5  z-0 pointer-events-none ">
                {data.title2}
              </h1> */}
              {/* <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"> {data.title2} </h1> */}

              <h1 className="text-5xl uppercase 
  text-white dark:text-white/5 
  sm:text-[80px] md:text-[100px] xl:text-[150px] 
  font-bold 
  relative z-0">
  {data.title2}
</h1>


              <div>
                <Button text="Shop Now" bgColor="bg-primary" textColor="text-white" />
              </div>

              {/* manual switching buttons */}
              <div className="flex gap-2 mt-4 justify-center sm:justify-start z-9999">
                {HeroData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ml-5 ${index === activeIndex ? "bg-black" : "bg-gray-400"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* image */}
            <div className="order-1 sm:order-2">
              <div>
                <img
                  src={data.img}
                  alt=""
                  className="w-[500px] h-[500px] sm:h-[450px] sm:scale-105 mx-auto lg:scale-110 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300 relative z-10  "
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
