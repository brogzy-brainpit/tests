'use client';
import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis'
import Intro from '@/components/Intro';
import Description from '@/components/Description';
import Section from '@/components/Section';
import Landing from '@/components/Landing';
import Section2 from '@/components/Section2';
import { AnimatePresence,} from 'framer-motion';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Services from '@/components/Services';
import OutroImage from '@/components/OutroImage';
import Footer from '@/components/Footer';
import OurNumbers from '@/components/OurNumbers';
import LandingTrusted from '@/components/LandingTrusted';
import Scroll from '@/components/Scroll';

export default function Home() {
  
 const [isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    document.body.style.cursor="default"
    window.scrollTo({top:0})
    }, 2000);

    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <AnimatePresence mode="wait">
    {isLoading &&< Preloader/>}
    </AnimatePresence>
    <Header/>

      <Landing />
      <LandingTrusted text companies={[
  {img:"https://emailsyall.com/wp-content/uploads/2023/09/home_chef_ey.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2023/09/cameo_ey.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2023/09/fundrise_ey.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2023/09/mosaic_ey.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2021/12/ey_girl_scouts.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2020/09/npr_logo.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2023/09/south_dakota_ey.png"},
  {img:"https://emailsyall.com/wp-content/uploads/2021/12/ey_discovery.png"},
  
]}/>
      <OurNumbers/>
      <Section2 />
    <Services/>
      <Scroll/>
      {/* <Intro /> */}
      <Description />
      
      <OutroImage/>
      <Footer/>
      {/* <Section /> */}
    </main>
  );
}