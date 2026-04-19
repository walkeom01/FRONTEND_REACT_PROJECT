import React from 'react'

const FooterLinks = [
    {
        tittle: "home",
        link: "/#",
    },
    {
        tittle: "about",
        link: "/#about",
    },
    {
        tittle: "contact",
        link: "/#contact",
    },
    {
        tittle: "blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className='container'>
                <div className='grid md:grid-cols-3 pb-20 pt-5'>
                    {/* company details */}
                    <div className='py-8 px-4'>
                        <a href="#"
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                            Eshop
                        </a>
                        <p className='text-gray-600 lg:pr-24 pt-3'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam in deleniti tempora quas at assumenda odio deserunt facilis eaque! Harum odio nostrum voluptatibus numquam id. Veritatis nam magni alias molestias.
                        </p>
                        <p className='text-gray-500 mt-4' >
                            made with love by the om walke
                        </p>
                        <a href="https://github.com/walkeom01"
                            target="_blank"
                            className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>
                            visit my Github account
                        </a>
                    </div>

                    {/* footer links  */}
                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='tetx-xl font-bold sm:text-left mb-2'>
                                Important links
                            </h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map(
                                        (data, index) => (
                                            <li key={index}>
                                                <a href={data.link} className='text-gray-600 hover:dark:text-white hover:text-black duration-300'>
                                                    {data.tittle}
                                                </a>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                        {/* second coloumn of footer  */}
                        <div className='py-8 px-4'>
                            <h1 className='tetx-xl font-bold sm:text-left mb-2'>
                                Quick links
                            </h1>
                            <ul className='space-y-3'>
                                {
                                    FooterLinks.map(
                                        (data, index) => (
                                            <li key={index}>
                                                <a href={data.link} className='text-gray-600 hover:dark:text-white hover:text-black duration-300'>
                                                    {data.tittle}
                                                </a>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>
                    {/*company address*/}
                    <div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer