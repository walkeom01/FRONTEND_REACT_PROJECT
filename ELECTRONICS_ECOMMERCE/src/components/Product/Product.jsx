import React from 'react'
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';

 
import Img1 from "../../assets/product/p-1.jpg" ;
import Img2 from "../../assets/product/p-2.jpg" ;
import Img3 from "../../assets/product/p-3.jpg" ;
import Img4 from "../../assets/product/p-4.jpg" ;
import Img5 from "../../assets/product/p-5.jpg" ;
//import Img6 from "../../assets/product/p-6.jpg" ;
import Img7 from "../../assets/product/p-7.jpg" ;

const ProductData =[
  {
    id:1,
    img:Img1,
    title :"Boat headphone",
    price:"122",
    aosDelay:"0",
  },
  {
    id:2,
    img:Img2,
    title :"Boat headphone",
    price:"122",
    aosDelay:"0",
  },
  {
    id:3,
    img:Img3,
    title :"Boat headphone",
    price:"122",
    aosDelay:"0",
  },
  {
    id:4,
    img:Img4,
    title :"Boat headphone",
    price:"122",
    aosDelay:"0",
  },
]

const ProductData2 =[
  {
    id:1,
    img:Img1,
    title :"Boat headphone",
    price:"122",
    aosDelay:"0",
  },
  {
    id:2,
    img:Img2,
    title :"Boat headphone",
    price:"122",
    aosDelay:"0",
  },
  {
    id:3,
    img:Img3,
    title :"Boat headphone",
    price:"122",
    aosDelay:"0",
  },
  {
    id:4,
    img:Img4,
    title :"Boat headphone",
    price:"122",
    aosDelay:"0",
  },
]
const Product = () => {
  return (
    <div>
        <div className='container'>
            {/* header section */}
            <Heading title={"our product"}
            subtitle={"explore our products"}></Heading>
            {/* body section */}
             <ProductCard data={ProductData}/>
             <ProductCard data={ProductData2}/>
              

        </div>
    </div>
  );
};

export default Product;