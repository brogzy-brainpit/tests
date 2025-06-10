import React, { useEffect, useRef, useState } from 'react'
import RoundedButton from "../app/common/RoundedButton"
import SlideUpText from '@/app/effects/SlideUpText'
import { useInView,motion } from 'framer-motion'
import insta from "../../public/images/insta.png"
import facebook from "../../public/images/facebook.png"
import twitter from "../../public/images/twitter.png"
import linkedin from "../../public/images/linkedin.png"
import Magnetic from '@/app/effects/Magnetic'
import Link from 'next/link'

function Landing() {
  

     const textRef= useRef(null)
     const textRef4= useRef(null)
      const inView= useInView(textRef,{once:true})
      const inView4= useInView(textRef4,{once:true})

      const [wait,setIswait]= useState(true)
       

      const reveal={
      initial:{y:"-100%"},
  enter:(index)=>({y:"0%",transition:{duration:0.3,delay:3}}),
  exit:{y:"-100%"}}

  const up1={
      initial:{y:"-100%"},
  enter:(index)=>({y:"0%",transition:{duration:0.3,delay:3}}),
  exit:{y:"-100%"}}

  const up2={
      initial:{y:"100%"},
  enter:(index)=>({y:"0%",transition:{duration:0.3,delay:3}}),
  exit:{y:"100%"}}
   const reveal2={
      initial:{y:"100%"},
  enter:(index)=>({y:"0%",transition:{duration:0.3,delay:3}}),
  exit:{y:"100%"}}

      const slideUp={
        initial:{height:"0px"},
    enter:(index)=>({height:"300px",transition:{duration:6.5,delay:2.6}}),
    exit:{height:"300px"}}
     useEffect(()=>{
          setTimeout(() => {
            setIswait(false)
          }, 3000);
        },[])

  return (
   <section className='hero-section h-[calc(100vh-0px)] md:p-[30px] '>
     <div class="background-wrapper">
  <video autoPlay muted loop playsInline className="background-video">
   <source src="/videos/hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
<div className='background-rgba'> &nbsp;</div>
<div class="content flex justify-center items-center h-full flex-col gap-4 p-4">
{!wait && 
  <div class=" w-fit b-slate-50 content flex justify-end md:justify-center items-center h-full flex-col gap-4">
            <h1 className="font-custom text-heading leading-[0.95] md:leading-[100px]' uppercase text-center max-w-[80vw] md:max-w-[40vw] gap-3 flex items-center justify-center flex-wrap">
   <SlideUpText duration={0.30} delay={0.10} className=" capitalize font-custom text-heading inline-flex overflow-hidden" 
   text={` Your Key to Digital Marketing`}/>
       </h1>
<p className='font-normal text-para text-center max-w-[96vw] md:max-w-[40vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit distinctio, a necessitatibus id vero beatae sit? Sapiente?</p>
<RoundedButton>
  <p className='font-normal text-button ls-05'>
  Learn More
  </p>
</RoundedButton>
  </div>

}

  <div ref={textRef} className='overflow-hidden absolute right-[15%] top-[30%] bg-slate-30 hidden md:flex md:flex-row flex-col'>
    <motion.div variants={reveal}  initial="initial" animate={inView?"enter":"exit"} exit="exit"  className='flex gap-8  md:flex-col flex-row justify-start items-center py-6 px-2'>
      <Magnetic className="cursor-pointer">
        <Link href={"/"} target='blank'>
      <img src={insta.src} className='w-[25px]'/>
        </Link>
        </Magnetic>
         <Magnetic className="cursor-pointer">
        <Link href={"/"} target='blank'>
      <img src={facebook.src} className='w-[25px]'/>
        </Link>
        </Magnetic>
    </motion.div>

{/* the animated line */}
  <motion.hr variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit" className='border-0 rounded-full md:w-[2.5px] w-[200px] h-[200px] md:h-[2px]  bg-[#C9FD74]'></motion.hr>
  {/* <hr variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit" className='border-0 rounded-full md:w-[2.5px] w-[200px] md:h-[300px] h-[2px]  bg-[white]'></hr> */}
{/* the animated line */}

 <motion.div variants={reveal2}  initial="initial" animate={inView?"enter":"exit"} exit="exit"  className='flex gap-8  md:flex-col flex-row  justify-end items-center py-6 px-2'>
      <Magnetic className="cursor-pointer">
        <Link href={"/"} target='blank'>
      <img src={twitter.src} className='w-[25px]'/>
        </Link>
      </Magnetic>
       <Magnetic className="cursor-pointer">
        <Link href={"/"} target='blank'>
      <img src={linkedin.src} className='w-[25px]'/>
        </Link>
        </Magnetic>
    </motion.div>
  </div>

  <div ref={textRef4} className=' bg-slate500 overflow-hidden relative bg-slate-30 md:hidden flex flex-row'>
    <motion.div variants={up1}  initial="initial" animate={inView4?"enter":"exit"} exit="exit"  className='flex gap-8  md:flex-col flex-row justify-start items-center py-6 px-2'>
      <Magnetic className="cursor-pointer">
        <Link href={"/"} target='blank'>
      <img src={insta.src} className='w-[25px]'/>
        </Link>
        </Magnetic>
    </motion.div>
    <motion.div variants={up2}  initial="initial" animate={inView4?"enter":"exit"} exit="exit"  className='flex gap-8  md:flex-col flex-row justify-start items-center py-6 px-2'>
         <Magnetic className="cursor-pointer">
        <Link href={"/"} target='blank'>
      <img src={facebook.src} className='w-[25px]'/>
        </Link>
        </Magnetic>
       </motion.div>
    

 <motion.div variants={up1}  initial="initial" animate={inView4?"enter":"exit"} exit="exit"  className='flex gap-8  md:flex-col flex-row  justify-end items-center py-6 px-2'>
      <Magnetic className="cursor-pointer">
        <Link href={"/"} target='blank'>
      <img src={twitter.src} className='w-[25px]'/>
        </Link>
      </Magnetic>
    </motion.div>
    <motion.div variants={up2}  initial="initial" animate={inView4?"enter":"exit"} exit="exit"  className='flex gap-8  md:flex-col flex-row justify-start items-center py-6 px-2'>
       <Magnetic className="cursor-pointer">
        <Link href={"/"} target='blank'>
      <img src={linkedin.src} className='w-[25px]'/>
        </Link>
        </Magnetic>
        </motion.div>
  </div>
  
  {/* <p className='font-normal text-button ls-05'> scroll to explore</p> */}
  </div>

</div>
   </section>

  )
}

export default Landing