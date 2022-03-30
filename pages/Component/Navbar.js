import React, { useState } from "react";
import {Transition} from "@headlessui/react";
import { Link } from "react-scroll";
import {SiTwitter} from "react-icons/si"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"


function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
    return ( 
        <div className="">
            <nav className="w-full shadow-xl z-10">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items items-center mx-20 justify-between HT w-full">
                            <div className="hidden md:block">
                               <div className="ml-10 flex items-baseline space-x-4">
                                    <Link activeClass="Home" smooth={true} offset={50} duration={500} className="font-bold text-white text-2xl FA cursor-pointer px-3 py-2 text-md hover:font-block">Home</Link>
                                    <Link activeClass="Product" smooth={true} offset={50} duration={500} className="font-bold text-white text-2xl FA cursor-pointer px-3 py-2 text-md hover:text-red">Product</Link>
                                    <Link activeClass="Pricing" smooth={true} offset={50} duration={500} className="font-bold text-white text-2xl FA cursor-pointer px-3 py-2 text-md hover:text-red">Pricing</Link>
                                    <Link activeClass="About" smooth={true} offset={50} duration={500} className="font-bold text-white text-2xl FA cursor-pointer px-3 py-2 text-md hover:text-red">About</Link>
                                    <Link activeClass="Contact" smooth={true} offset={50} duration={500} className="font-bold text-white text-2xl FA cursor-pointer px-3 py-2 text-md hover:text-red whitespace-nowrap">Contact Us</Link>
                                </div>
                            </div>
                            <div className="flex justify-center items-center flex-shrink-0">
                                <h1 className="font-bold text-2xl text-white cursor-pointer fik">Figma L<span className="text-blue-500">A</span>ND</h1>
                            </div>
                            <div className="flex mt-3 mG">
                                <a href="/" className='text-white ml-4 text-2xl font-bold'><SiTwitter/></a>
                                <a href="/" className='text-white ml-4 text-2xl font-bold'><AiFillFacebook/></a>
                                <a href="/" className='text-white ml-4 text-2xl font-bold'><AiFillLinkedin/></a>
                            </div>
                        </div>
                        <div className="mr-10 flex md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus: outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"><span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16M4"></path>
                                    </svg>
                                ):(
                                    <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                    {(ref) => (
                        <div className="md:hidden id=mobile-menu">
                            <div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 absolute w-full rounded-2xl">
                                <Link href="/home" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                                <Link href="/product" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Product</Link>
                                <Link href="/pricing" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
                                <Link href="/about" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                                <Link href="/contact us" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
     );
}
 
export default Navbar;