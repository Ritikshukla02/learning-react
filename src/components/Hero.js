import React from 'react'
import { MdOutlineSearch } from "react-icons/md";
import hero_image from "../assesst/hero_image.webp";
import {TypeAnimation} from "react-type-animation"



export const Hero = () => {
  return (
    <div>

    {/* hero section start here  */}
    <div className="h-[550px] mt-[30px] relative flex justify-evenly pt-9 w-full bg">



    {/* left part start  */}
    <div className="pt-[105px] ">

<button className="bg-slate-50 px-4 py-1 rounded-md "> Leading Career Counsellors</button>

<div className='space-y-1'>
    <h2 className="text-5xl opacity-70 pt-4">Explore India's Top <br/> Distance Colleges for</h2>
    <div className=" text-blue-600 text-4xl"><TypeAnimation
                sequence={["Career Advancement", 1000, 
                "Professional growth", 1000, 
                "Personal Development"]}
                repeat={Infinity}
                speed={50}
            /></div>

</div>

<p className=" opacity-80 pt-7"> Unleash Your Hidden Potential</p>

<div className='flex pt-2 mt-3 bg-white rounded-md  items-center'>
 <MdOutlineSearch className="opacity-40 ml-2" fontSize={"1.3rem"}/>
  <input type ="text" placeholder='Search Courses & Colleges' className=' py-2  rounded-md outline-none ml-2 '/>
</div>



    </div>

         {/* right part here start  */}
        <div>
            <img src={hero_image} alt="" width={700} height={777} loading='lazy'/>
        </div>
    </div>












    </div>
  )
}
