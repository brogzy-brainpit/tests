import React, { useEffect, useRef } from 'react'
import RoundedButton from "../app/common/RoundedButton"
import SlideUpText from '@/app/effects/SlideUpText'
import { useInView,motion, useScroll, useTransform } from 'framer-motion'
import snow from "../../public/images/snow.jpg"
import Image from 'next/image';
import AOS from "aos"
import "aos/dist/aos.css"

function Section2() {
   useEffect(() => {
      AOS.init({
          duration: 500, // Animation duration
          easing: 'ease-in-out-back', // Animation easing
  
      });
    }, []);
   const textRef2=useRef(null)
     const container = useRef();
     const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  const secondPara= "How i can Help?".split(" ")
    const secondPara2= "Embrace the Saanen land Lifestyle".split(" ")
   const {scrollYProgress:ss}= useScroll({
      target:textRef2,
      offset:["0.6 end",'end 0.8']
    })
  return (
   <section className='hero-section min-h-[calc(100vh-0px)] bg-white '>
     <div className="background-wrapper  py-[100px] px-4">
  <Image alt='backround-vid' src={snow}  className="background-video2"/>
<div className='background-rgba'> &nbsp;</div>
  
  <div className='breaker container items-center gap-[80px]'>
    <div className='breaker-child-01 flex-col flex gap-[6vh]'>
<p className='font-normal text-para text-white'>Timeless Elegance</p>
  <motion.span
        ref={ref}
        className="inline-block transition-all duration-700"
        initial={{ filter: 'blur(8px)', opacity: 0 }}
        animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
      
    <h1 ref={textRef2} once={true}  className=" text-white text-heading font-custom uppercase text-center max-w-[90vw] md:max-w-[50vw] leading-none gap-3 flex items-cente justif-center flex-wrap" gap='10px'>
{secondPara2.map((word,i)=>{
    var start= i/secondPara2.length;
    var end= start+ (1/secondPara2.length);
    return <Word key={i} range={[start,end]} word={word} progress={ss}/>
  })}
</h1>
      
      </motion.span>


{/* <h2 className='blur-[9.43px] text-white font-custom text-heading leading-[0.95] md:leading-[1]'>Embrace the Saanenland Lifestyle</h2 > */}
    </div>
    <div data-aos={"fade-up"} data-aos-delay="0" data-aos-duration={1000} className='breaker-child-02 w-[40%]'>
<p className='text-white text-para font-normal leading-[1.45] md:leading-[1.5]'>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe praesentium, laudantium totam pariatur optio, ipsum assumenda adipisci voluptatem ipsa sit veniam iure excepturi similique provident nihil sequi inventore, dolor ullam!
  </p>
    </div>
  </div>

   
   
    <div className=' mt-[80px] breaker container items-center gap-[80px]'>
    <div data-aos={"fade-up"} data-aos-delay="0" data-aos-duration={1000} className='breaker-child-01 flex-col flex gap-[6vh]'>
<p className='w-[90%] text-white text-para font-normal leading-[1.45] md:leading-[1.5]'>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquam doloremque repudiandae consequatur nihil eveniet impedit, cumque sunt earum aliquid fugit illum corrupti ad consequuntur ducimus debitis facere mollitia odit, dicta ipsum natus in tempora! Rerum incidunt non officia sint.
  </p>
   
    </div>
    {/* <div className='breaker-child-02 w-[40%]'> */}
    {/* </div> */}
  </div>


</div>
   </section>

  )
}

export default Section2

const Word=({word,progress,range})=>{
    const textOpacity= useTransform(progress,range,[0,1])
    return(
  <span className='relative text-customColor text-center flex justify-center'>
    <span style={{opacity:0.09}}   className='mr-[10px] absolute text-center flex justify-center' >{word}</span>
    <motion.span style={{opacity:textOpacity}}   className='mr-[10px]' >{word}</motion.span>
  
  </span>
    )
  }
