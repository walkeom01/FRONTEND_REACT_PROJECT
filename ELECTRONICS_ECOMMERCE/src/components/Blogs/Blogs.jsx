import React from 'react';
import Heading from '../Shared/Heading';

import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

 
const BlogData = [
  {
    title: "asdfasdfdf",
    subtitle: "sdgjfjdfasjdfasndasdfasdvfsfvdfv sgfbsd bdfg bdh ty tu j m nu k ui",
    published: "jan 20 2006",
    image:Img1,
  },
  {
    title: "asdfasdfdf",
    subtitle: "sdgjfjdfasjdfasndasdfasdvfsfvdfv sgfbsd bdfg bdh ty tu j m nu k ui",
    published: "jan 20 2006",
     image:Img2,
  },
  {
    title: "asdfasdfdf",
    subtitle: "sdgjfjdfasjdfasndasdfasdvfsfvdfv sgfbsd bdfg bdh ty tu j m nu k ui",
    published: "jan 20 2006",
     image:Img3
  },
];

const Blogs = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <Heading title="Recent News" subtitle="Explore our blogs" />

        {/* blogs section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
          {BlogData.map((item, index) => (
            <div key={index}>
              {/* image section */}
              <div className='overflow-hidden rounded-2xl mb-2'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-300'
                />
              </div>

              {/* content section */}
              <div className='space-y-2'>
                <p className='text-xs text-gray-500'>
                  {item.published}
                </p>
                <p className='font-bold line-clamp-1'>
                  {item.title}
                </p>
                <p className='line-clamp-2 text-sm dark:text-gray-400 text-gray-600'>
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
