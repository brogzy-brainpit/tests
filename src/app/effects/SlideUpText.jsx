import { useInView,motion } from 'framer-motion'
import React, { useRef } from 'react'

function SlideUpText({children,text,once,fontSize,duration=3.1,delay=3,gap='10px',y="0%",...props}) {
    const textRef3= useRef(null)
    const inView= useInView(textRef3,{once:true})
    const slideUp={
      initial:{y:"100%"},
  enter:(index)=>({y,transition:{duration,delay:delay*index}}),
  exit:{y:"100%"}}

  return (
    <p ref={textRef3} style={{gap}} className='t-center flex-wrap m-0 flex justify-center items-center gap-2'>
        {text.split(" ").map((p,index)=>{
        return <span {...props} key={index} >
            <motion.span custom={index} variants={slideUp}  initial="initial" animate={inView?"enter":"exit"} exit="exit"  className='text-center'>{p}</motion.span >
        </span>
    })}
    </p>
  )
}

export default SlideUpText