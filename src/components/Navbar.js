import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import nav_logo from "../assesst/nav_logo.png";
import { FaChevronDown } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";



export const Navbar = () => {
  return (
    <div>

    {/* first part start here  */}

    <div className="bg-blue-100 flex justify-between py-2 pl-[60px] pr-[60px]">

<h1 className='text-xl font-semibold'>Leading Education Consultant In India</h1>

<div className="flex gap-4">

<div className='flex'>
<FaPhoneAlt  className='mt-1' fontSize={"1.25rem"}/>
<p className="cursor-pointer font-semibold"> +91-9643575081</p>
</div>
   

   <div className='flex'>
   <CiMail  className='mt-1' fontSize={"1.45rem"} />
    <p className="cursor-pointer font-semibold">info@learningroutes.in</p>
   </div>



</div>


    </div>
    

{/* second part start here  */}

<div className=' flex justify-between mt-5 items-center pl-[50px] pr-[80px]'>


 {/* left part start */}
 <div className='flex gap-[100px] items-center '>
 <div>
 <img src={nav_logo} alt="" width={170} loading='lazy'/>
 </div>
 


    <div className=''>
    <button className=" flex bg-blue-600  py-3 px-3 rounded-md text-white gap-1">Explore Colleges <FaChevronDown className='mt-2 text-white'/></button>
    
    </div>

 </div>



{/* right part start here  */}

<div className=''>

<ul className='flex items-center gap-4 text-xl'>

<div>
<li className="  text-lg cursor-pointer  hover:text-blue-500 transition-all duration-2s">Home | </li>
</div>


<div className='flex gap-1 cursor-pointer  hover:text-blue-500 transition-all duration-2s'>
    <p className=" text-lg ">Our Courses </p>
    <FaSortDown  />|
</div>

<div className='flex gap-1 cursor-pointer  hover:text-blue-500 transition-all duration-2s'>
    <p className=" text-lg ">Contact</p>
    <FaSortDown  />|
</div>

<div className='flex gap-1 cursor-pointer  hover:text-blue-500 transition-all duration-2s'>
    <p className=" text-lg ">Explore More</p>
    <FaSortDown  />
</div>


<button className="bg-blue-200 py-3 px-3 rounded-md text-blue-800 "> College Finder</button>

</ul>




</div>






</div>






    
    </div>
  )
}
