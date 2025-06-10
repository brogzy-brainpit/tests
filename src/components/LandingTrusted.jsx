'use client'
import "./landingText.css"
import Marquee from "react-fast-marquee";

function LandingTrusted({text,companies}) {

 
  return (
    <div className='landingTrusted bg-white' style={{display:"block",padding:" 30px 0px"}}>
       <section className='grid-img slider-containe' style={{display:"flex"}}>
     
         <Marquee gradient={true} gradientWidth={130} >
        {companies.map(({img},index)=>{
          return (
      <img key={index} style={{height:"70px",padding:"0px 25px"}} className='normal-ig' src={img}/>
          )
        })}
        </Marquee>
       </section>
        </div>

  )
}


export default LandingTrusted