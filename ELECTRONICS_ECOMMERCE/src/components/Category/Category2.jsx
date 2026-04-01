import React from "react";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-14">
      <div className="container mx-auto px-4">

         
        

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          
          <div className="relative h-[300px] rounded-3xl bg-gradient-to-br from-primary to-primary/70 text-white p-6 flex items-end overflow-hidden group">
            
             
            <div className="z-10">
              <p className="text-sm text-gray-200">Enjoy</p>
              <h2 className="text-2xl font-semibold">with</h2>
              <h1 className="text-4xl font-bold opacity-20">Speaker</h1>

              <div className="mt-3">
                <Button text="Browse" bgColor="bg-white" textColor="text-primary" />
              </div>
            </div>

           
            <img
              src={Image3}
              alt=""
              className="absolute w-[220px] bottom-0 right-0 group-hover:scale-110 transition duration-300"
            />
          </div>

          
          <div className="relative h-[300px] rounded-3xl bg-gradient-to-br from-black/90 to-black/70 text-white p-6 flex items-end overflow-hidden group">
            
            <div className="z-10">
              <p className="text-sm text-gray-300">Enjoy</p>
              <h2 className="text-2xl font-semibold">with</h2>
              <h1 className="text-4xl font-bold opacity-20">Gaming</h1>

              <div className="mt-3">
                <Button text="Browse" bgColor="bg-primary" textColor="text-white" />
              </div>
            </div>

            <img
              src={Image1}
              alt=""
              className="absolute w-[240px] bottom-0 right-0 group-hover:scale-110 transition duration-300"
            />
          </div>

          
          <div className="relative h-[300px] rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 text-white p-6 flex items-end overflow-hidden group">
            
            <div className="z-10">
              <p className="text-sm text-gray-100">Enjoy</p>
              <h2 className="text-2xl font-semibold">with</h2>
              <h1 className="text-4xl font-bold opacity-20">VR Gear</h1>

              <div className="mt-3">
                <Button text="Browse" bgColor="bg-white" textColor="text-yellow-500" />
              </div>
            </div>

            <img
              src={Image2}
              alt=""
              className="absolute w-[230px] bottom-0 right-0 group-hover:scale-110 transition duration-300"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Category;
