import React from "React";
import {GoLocation} from "react-icons/go"
import {AiOutlineMail} from "react-icons/ai"
import {MdPhoneAndroid} from "react-icons/md"
import {AiFillFacebook} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const Footer = () => {
    return ( 
        <>
            <div className="all">
                <div className="pricing">
                    <div className="conts">
                        <h1 className="text-3xl text-white text-center font-semibold">Pricing</h1>
                        <p className='text-xl text-white text-center font-medium my-6'>Most calenders are designed for teams. <br />Slate is designed for freelancers</p>  
                    </div>
                    <div className="price">
                        <div className="1 bg-white h-4/4 rounded-2xl my-12 p-8">
                            <h1 className="text-blue-900 text-center font-bold">FREE</h1>
                            <p className="text-blue-900 text-center text-xl">Organize across all <br /> apps by hand</p>
                            <div className="flex my-4 ASTO">
                                <div className="b">
                                    <p className="text-blue-900 font-bold text-7xl">0</p>    
                                </div>
                                <div className="d">
                                    <p className="text-blue-900 font-bold">$ <br /> <span className="text-blue-900 text-xl font-thin">Per Month</span></p>
                                </div>
                            </div>
                            <p className="text-center my-4">Pricing Feature</p>
                            <p className="text-center my-4">Pricing Feature</p>
                            <p className="text-center my-4">Pricing Feature</p>
                            <p className="text-center my-4">Pricing Feature</p>
                            <p className="text-center my-4">Pricing Feature</p>
                            <button className="block rounded-full text-white mx-auto font-medium bg-blue-900 px-16 mt-8 py-4 whitespace-nowrap">Order Now</button>
                        </div>
                        <div className="2 rounded-2xl h-4/4 bg-blue-500 pt-16 K">
                            <h1 className=" text-center font-bold text-white">STANDARD</h1>
                                <p className="text-center text-xl text-white">Organize across all <br /> apps by hand</p>
                                <div className="flex my-4 ASTO">
                                    <div className="b">
                                        <p className=" font-bold text-7xl text-white">10</p>    
                                    </div>
                                    <div className="d">
                                        <p className="font-bold text-white">$ <br /> <span className=" text-white text-xl font-thin whitespace-nowrap">Per Month</span></p>
                                    </div>
                                </div>
                                <p className="text-center my-4 text-white">Pricing Feature</p>
                                <p className="text-center my-4 text-white">Pricing Feature</p>
                                <p className="text-center my-4 text-white">Pricing Feature</p>
                                <p className="text-center my-4 text-white">Pricing Feature</p>
                                <p className="text-center my-4 text-white">Pricing Feature</p>
                                <button className="block rounded-full text-blue-900 mx-auto font-medium bg-white px-16 mt-8 py-4 whitespace-nowrap">Order Now</button>
                        </div>
                        <div className="3 bg-white rounded-2xl h-4/4 my-12 p-8">
                        <h1 className="text-blue-900 text-center font-bold">BUSINESS</h1>
                            <p className="text-blue-900 text-center text-xl">Organize across all <br /> apps by hand</p>
                            <div className="flex my-4 ASTO">
                                <div className="b">
                                    <p className="text-blue-900 font-bold text-7xl">99</p>    
                                </div>
                                <div className="d">
                                    <p className="text-blue-900 font-bold">$ <br /> <span className="text-blue-900 text-xl font-thin whitespace-nowrap">Per Month</span></p>
                                </div>
                            </div>
                            <p className="text-center my-4">Pricing Feature</p>
                            <p className="text-center my-4">Pricing Feature</p>
                            <p className="text-center my-4">Pricing Feature</p>
                            <p className="text-center my-4">Pricing Feature</p>
                            <p className="text-center my-4">Pricing Feature</p>
                            <button className="block rounded-full text-white mx-auto font-medium bg-blue-900 px-16 mt-8 py-4 whitespace-nowrap">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <div className="conts">
                        <h1 className="text-3xl text-center font-semibold">Contacts</h1>
                        <p className='text-xl text-center font-medium my-6'>Most calenders are designed for teams. <br />Slate is designed for freelancers</p>  
                    </div>
                    <div className="setu">
                        <div className="fomr shadow-2xl py-8 rounded-3xl border-gray-300 border">
                            <h1 className="text-center font-bold py-4 text-2xl">Contact Us</h1>
                            <input type="text" placeholder="Your Name" required className="py-2 px-16 mx-4 rounded-full my-4 bg-gray-100"/>
                            <input type="text" placeholder="Your Email"required className="py-2 px-16 mx-4 rounded-full my-4 bg-gray-100"/>
                            <textarea name="Your Message" cols="30" rows="10" placeholder="Your Messages" className="px-8 bg-gray-100 mx-16 h-4/5 my-6"></textarea>
                            <button type="Submit" className="bg-blue-600 px-8 text-white my-2 py-3 rounded-full block mx-12 w-32 sed">send</button>
                        </div>
                        <div className="pic">
                            <div className="loca">
                                <div className="loc R">
                                    <p className="text-center text-blue-600 font-bold text-3xl py-4 O"><GoLocation /></p>
                                    <p className="text-center font-thin text-lg whitespace-nowrap mt-3">6386 Spring St undefined Anchorage, <br /> <span>Georgia 12473 United States</span></p>
                                </div>
                                <div className="loc1 R">
                                    <p className="text-center text-blue-600 py-4 font-bold text-3xl O"><MdPhoneAndroid /></p>
                                    <p className="text-center font-thin text-lg whitespace-nowrap mt-3">(834) 555-0130</p>
                                </div>
                                <div className="loc2 R">
                                    <p className="text-center text-blue-600 py-4 font-bold text-3xl O"><AiOutlineMail /></p>
                                    <p className="text-center font-thin text-lg whitespace-nowrap mt-3">wille.jennings@example.com</p>
                                </div>
                            </div>
                                <img src="/7.jpg" alt="loading..." className="mx-12 my-16 AL"/>
                            <div className="lap flex sm">
                                <p className="font-bold text-blue-600 text-5xl"><BsTwitter /></p>
                                <p className="font-bold text-blue-600 text-5xl ml-4"><AiFillFacebook /></p>
                                <p className="font-bold text-blue-600 text-5xl ml-4"><BsLinkedin /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pric">
                    <div className="zip">
                        <div className="four">
                            <div className="d3">
                                <h1 className="text-white cen font-bold text-2xl">Pages</h1>
                                <p className="text-white cen mt-4"><a href="/">Home</a> </p>  
                                <p className="text-white cen mt-4"><a href="/">Product</a></p>
                                <p className="text-white cen mt-4"><a href="/">Pricing</a></p>
                                <p className="text-white cen mt-4"><a href="/">About</a></p>
                                <p className="text-white cen mt-4"><a href="/">Contact</a></p>
                            </div >
                            <div className="d3">
                                <h1 className="text-white cen font-bold text-2xl">Tomothy</h1>
                                <p className="text-white  cen mt-4"><a href="/">Eleanor Edwards</a> </p>  
                                <p className="text-white  cen mt-4"><a href="/">Ted Robertson</a></p>
                                <p className="text-white  cen mt-4"><a href="/">Lorem, ipsum.</a></p>
                                <p className="text-white  cen mt-4"><a href="/">Lorem, ipsum dolor.</a></p>
                                <p className="text-white  cen mt-4"><a href="/">Lorem, ipsum.</a></p>
                            </div>
                            <div className="d3">
                                <h1 className="text-white cen font-bold text-2xl">Jane Black</h1>
                                <p className="text-white  cen mt-4"><a href="/">Phillip Jones</a> </p>  
                                <p className="text-white  cen mt-4"><a href="/">Lorem.</a></p>
                                <p className="text-white  cen mt-4"><a href="/">Collean Russell</a></p>
                                <p className="text-white  cen mt-4"><a href="/">Marvin Hawkins</a></p>
                                <p className="text-white  cen mt-4"><a href="/">Lorem, ipsum dolor.</a></p>
                            </div>
                        </div>
                        <div className="los">
                            <div className="ol">
                                <div className="loc R flex">
                                    <p className="text-white font-bold text-3xl mx-4 f"><GoLocation /></p>
                                    <p className="text-center font-thin text-white text-lg h">6386 Spring St undefined Anchorage</p>
                                </div>
                                <div className="loc1 R flex">
                                    <p className="text-white font-bold text-3xl mx-4 f"><MdPhoneAndroid /></p>
                                    <p className="text-center font-thin text-white text-lg h">(834) 555-0130</p>
                                </div>
                            </div>
                            <div className="lap flex sm mt-8">
                                <p className="font-bold text-white text-5xl"> <a href="/"><BsTwitter /></a></p>
                                <p className="font-bold text-white text-5xl ml-4"> <a href="/"> <AiFillFacebook /></a></p>
                                <p className="font-bold text-white text-5xl ml-4"><a href="/"><BsLinkedin /></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Footer; 