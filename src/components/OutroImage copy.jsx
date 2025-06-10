import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Background from '../../public/images/1.jpg';
import Image from 'next/image';


export default function OutroImage() {
    const textRef2=useRef(null)
     const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  const secondPara= "How i can Help?".split(" ")
    const secondPara2= "Not your Regular Email Developer".split(" ")
    const scale = useTransform(scrollYProgress, [0, 1], ["1", "1.3"])
   const {scrollYProgress:ss}= useScroll({
      target:textRef2,
      offset:["0.8 end",'end start']
    })
    return (
        <div ref={textRef2} className='z-10 max-h-[90vh] w-screen flex justify-center -mb-[8%] relative container mx-auto'>
            <div  className="w-full h-full  relative overflow-hidden shadow-2xl">
               <motion.img  style={{scale}} className='object-cover' src={"https://cdn.prod.website-files.com/667e7532b5527c435094a6f9/673ef3cfa3591d5d6b0ba542_winter4%20(1).jpg"} />
              
              <div className='absolute top-0 left-0 w-full h-full'>
               <motion.img  style={{scale}} className='object-cover' src={"https://cdn.prod.website-files.com/667e7532b5527c435094a6f9/673ef3cfa3591d5d6b0ba542_winter4%20(1).jpg"} />
              </div>
                </div>
            {/* <motion.p style={{opacity,}} className='text-[7.5vw] font-custom uppercase text-center max-w-[50vw] leading-none'>The quick brown fox jumps over the lazy dog</motion.p> */}
        </div>
    )
}
