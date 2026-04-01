import React from "react";
import {
  FaCartArrowDown,
  FaHeadphones,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCartArrowDown />,
    title: "Free Shipping",
    description: "Enjoy free shipping on your first order",
  },
  {
    id: 2,
    icon: <FaCheckCircle />,
    title: "Secure Payment",
    description: "100% secure and trusted payment system",
  },
  {
    id: 3,
    icon: <FaWallet />,
    title: "Money Guarantee",
    description: "7 days money-back guarantee",
  },
  {
    id: 4,
    icon: <FaHeadphones />,
    title: "24/7 Support",
    description: "We are here to help anytime",
  },
];

const Services = () => {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Our Services</h1>
          <p className="text-gray-500 mt-2">
            We provide best quality services for our customers
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ServiceData.map((data) => (
            <div
              key={data.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-primary text-4xl mb-4">
                {data.icon}
              </div>

              {/* Content */}
              <h2 className="text-lg font-semibold mb-2">
                {data.title}
              </h2>
              <p className="text-gray-500 text-sm">
                {data.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
