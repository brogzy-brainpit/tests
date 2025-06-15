import React from 'react';
import {motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Background from '../../public/images/1.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';


export default function Footer() {
    const footerRef=useRef(null)
      const inView= useInView(footerRef)
  
    return (
        <div ref={footerRef} className=' -z-10 min-h-[80vh] px-4 flex justify-end flex-col relative text-center bg-[#140D07]  py-[8vh] mx-auto'>
            <div className="breaker gap-[30px] container mx-auto border-b border-gray-600 bglate-500 hf w-full flex py-[50px] box-border">
               <div className='breaker-child'>
                 <div className='flex items-start flex-col'>
                 <motion.h2  whileHover={{color:"#C9FD74",x:2,cursor:"pointer"}} 
                 className='font-custom text-regular text-white text-left md:text-right'>
                Services
                  </motion.h2>
                  <motion.h2  whileHover={{color:"#C9FD74",x:2,cursor:"pointer"}} 
                 className='font-custom text-regular text-white text-left md:text-right'>
                About
                  </motion.h2>
                  <motion.h2  whileHover={{color:"#C9FD74",x:2,cursor:"pointer"}} 
                 className='font-custom text-regular text-white text-left md:text-right'>
                Contact
                  </motion.h2>
                  <motion.h2  whileHover={{color:"#C9FD74",x:2,cursor:"pointer"}} 
                 className='font-custom text-regular text-white text-left md:text-right'>
                Free Consultation
                  </motion.h2>
                </div>
                </div>

               <div className='breaker-child gap-[10px] md:gap-[30px] flex flex-col'>
              <div className='flex flex-col'>
                  <h2 className='font-normal text-[14px] leading-[14px] text-white self-start md:self-end  text-left md:text-right w-[50%]'>BASEd IN COMPANY,</h2>
                <h2  className='font-normal text-[14px] leading-[14px] text-white self-start md:self-end  text-left md:text-right w-[50%]'>State Country</h2>
                <h2 className='font-normal text-[14px] leading-[14px] text-white self-start md:self-end  text-left md:text-right w-[50%]'>P.O Box</h2>
              
              </div>
               
                <div className='flex items-start md:items-end flex-col'>
                 <motion.h2  whileHover={{color:"#C9FD74",x:2,cursor:"pointer"}} className=' flex items-center justify-center font-custom text-[30px] md:text-foote leading-[75px] text-white  text-left md:text-right'>
                 <Phone className='mr-4 w-[30px] h-[30px] md:w-[50px] md:h-[50px] '/> +1(574)527-6228
                  </motion.h2>
                <motion.h2 whileHover={{color:"#C9FD74",x:2,cursor:"pointer"}} className='flex items-center justify-center font-custom text-[30px] md:text-footer leading-[75px]  text-white text-left md:text-right'>
                  <Mail  className='mr-4 w-[30px] h-[30px] md:w-[50px] md:h-[50px] '/> 
                  colepaytonbaker
                  {/* <a href='mailto:colepaytonbaker@gmail.com' className=''>
                  </a> */}
                  </motion.h2>
                </div>
               </div>

                </div>
               

 <div className='container flex-col flex justify-between mx-auto h-full  items-end'>

               <div className= 'pt-[20px] w-full  flex justify-between md:flex-row flex-col'>
        
            <div>
              <p className='text-gray-300 capitalize text-[16px] font-normal text-left '>socials</p>
              <div className='flex gap-3 w-full '>
                <Link href={"#"}>
                     <p className='text-[12px] text-gray-500 cursor-pointer capitalize font-normal'>facebook</p>
                </Link>  
                <Link target='blank' href={"https://www.instagram.com/"}>
                    <p className='text-[12px] text-gray-500 cursor-pointer capitalize font-normal'>instagram</p>
                </Link>
                <Link target='blank' href={"https://x.com/"}>
                    <p className='text-[12px] text-gray-500 cursor-pointer capitalize font-normal'>twitter</p>
                </Link>
              </div>
            </div>
            <div className='flex gap-3'>
            <div >
            <p className='text-gray-300 cursor-pointer capitalize font-normal text-left'>version</p>
            <div className='flex gap-4'>
              <p className='text-[12px] text-gray-500 font-normal' >
                {new Date().getFullYear()} &copy; Edition
              </p>
              <p className='text-[12px] text-gray-500  font-normal'>
              All rights reserved
              </p>
            </div>
            </div>

            </div>
        </div>
        </div>
        </div>
    )
  }