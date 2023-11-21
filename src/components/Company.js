import React from 'react'
import amity from '../assesst/amityt-logo.webp';
import iimt from '../assesst/imt-cdl.webp';
import odl from '../assesst/odl-logo.webp';
import jain from '../assesst/jainonline.webp';
import online from "../assesst/onlineuu-logo.webp";
import upsc from "../assesst/upescce.webp";
import upgrad from "../assesst/upgrad-logo.webp";






export const Company = () => {

   
  return (
    <div className="  flex justify-center">

    <div className='logos  bg-white mt-[-50px] absolute w-[900px] overflow-hidden rounded-md flex'>
    <div className='logos-slide  flex  gap-8'>


<img src={amity} alt="" width={200}/>



<img src={iimt} alt="" width={200}/>
<img src={odl} alt="" width={200}/>
<img src={jain} alt="" width={200}/>
<img src={online} alt="" width={200}/>
<img src={upsc} alt="" width={200}/>
<img src={upgrad} alt="" width={200}/>


    </div>
    {/* <div className='logos-slide  flex gap-8'>
<img src={amity} alt="" width={200}/>
<img src={iimt} alt="" width={200}/>
<img src={odl} alt="" width={200}/>
<img src={jain} alt="" width={200}/>
<img src={online} alt="" width={200}/>
<img src={upsc} alt="" width={200}/>
<img src={upgrad} alt="" width={200}/>


    </div> */}

    </div>
   











    </div>
  )
}

