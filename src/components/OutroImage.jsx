import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Background from '../../public/images/1.jpg';
import Image from 'next/image';
import RoundedButton from '@/app/common/RoundedButton';


export default function OutroImage() {
    const textRef2=useRef(null)
     const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  const secondPara= "How i can Help?".split(" ")
    const secondPara2= "Not your Regular Email Developer".split(" ")
    const scale = useTransform(scrollYProgress, [0, 1], ["0.4", "1.4"])
   const {scrollYProgress:ss}= useScroll({
      target:textRef2,
      offset:["0.4 end",'end start']
    })
    return (
       <section className='z-50 hero-section h-[calc(100vh-0px)] -mb-[8%] md:p-[30px] container mx-auto '>
     <div class="background-wrapper flex  justify-center items-end">
  {/* <video autoPlay muted loop playsInline className="background-video">
   <source src="/videos/hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video> */}
   <motion.img  style={{scale}} className='object-cover background-video' src={"https://cdn.prod.website-files.com/667e7532b5527c435094a6f9/673ef3cfa3591d5d6b0ba542_winter4%20(1).jpg"} />
  
<div className='background-rgba'> 
  
</div>

 <div className='breaker container gap-[80px] bg-slat-400 flex items-end p-[20px]'>
    <div className='breaker-child-01 flex-col flex gap-[6vh]'>
<p className='font-normal text-para text-white'>
    Contacts
    </p>
   
<h2 className='blur-[9.43px text-white font-custom text-footer leading-[0.95] md:leading-[1]'>
   Contact our team for Consultation
    </h2 >
    </div>
    <div className='breaker-child-02 w-[40%]'>
{/* <p className='text-white text-para font-normal leading-[1.45] md:leading-[1.5]'>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. At ducimus esse, iure repudiandae quasi voluptate in odio impedit unde temporibus deserunt aut quo, obcaecati reiciendis quae quod tenetur, a corrupti.
   </p> */}
   <RoundedButton>
     <p className='font-normal text-button ls-05 text-white'>
     Contact Now
     </p>
   </RoundedButton>
    </div>
  </div>
</div>
</section>
    )
}
