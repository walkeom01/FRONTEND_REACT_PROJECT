import React from 'react';
import Button from "../Shared/Button";

const ProductCard = ({ data }) => {
  return (
    <div className='mb-16 px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        
        {data.map((item) => (
          <div
            key={item.id}
            className='group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden'
          >

            {/* Image Section */}
            <div className='relative overflow-hidden'>
              <img
                src={item.img}
                alt=""
                className='h-[220px] w-full object-cover transform group-hover:scale-110 transition duration-500'
              />

              {/* Hover Overlay */}
              <div className='absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex justify-center items-center transition duration-300'>
                <button className='bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-black hover:text-white transition duration-300'>
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Content */}
            <div className='p-4 space-y-2'>
              <h2 className='text-lg font-semibold text-gray-800 group-hover:text-primary transition'>
                {item.title}
              </h2>

              <p className='text-sm text-gray-500 line-clamp-2'>
                Premium quality product with modern design.
              </p>

              <div className='flex justify-between items-center pt-2'>
                <span className='text-lg font-bold text-gray-900'>
                  ${item.price}
                </span>

                <span className='text-xs text-green-500 font-medium'>
                  In Stock
                </span>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductCard;
