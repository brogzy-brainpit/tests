import { motion, useTransform, useScroll} from "framer-motion";
import { useRef } from "react";
import service01 from "../../public/images/service01.png"
import service02 from "../../public/images/service02.png"
import service03 from "../../public/images/service03.png"
import service04 from "../../public/images/service04.png"
import service05 from "../../public/images/service05.png"
import conversion from "../../public/images/conversion.png"
import card from "../../public/images/card.png"
import sms from "../../public/images/sms.png"
import ui from "../../public/images/ui.png"

const Example = () => {
     const revealOptions={
      initial:{y:"100%"},
  enter:(index)=>({y:"0%",transition:{duration:0.3,delay:3}}),
  exit:{y:"100%"}}
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
        &nbsp;
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card}) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[400px] rounded-lg overflow-hidden cursor-pointer bg-neutral-200"
    >
      <motion.img initial={{ scale:1}} whileHover={{scale:1.2}} transition={{ duration: 3.1, ease: 'easeInOut' }} src={card.url.src}
       
        className="h-[60%] w-full object-cover absolute inset-0 overflow-hidden border-0"
      />
      <motion.div   initial={{ y:"60%"}}
        whileHover={{ y:"30%"}} className="w-full absolute top-[60% inset-0 z-10 bg-[#C9FD74]">
        {/* <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p> */}
        <div className=" w-full flex justify-between p-4  ">
          <div className="flex flex-col">
            <h2 className='font-custom leading-1 text-4xl capitalize text-black'>{card.title}</h2>
          <h2 className='font-custom leading-1 text-4xl capitalize text-black'>{card.title2}</h2>
          </div>
          <h2 className='font-normal text-para text-black'>{card.id}</h2>
        </div>
        <div className="bg-slat-400 p-4 pt-0">
        {card?.subSevice?.map(({title,logo},index)=>{
          return (
        <div key={index} className=" w-full flex items-center justify-between py-2  border-b ">
          <h2 className='font-normal text-para text-black'>{title}</h2>
          <img src={logo.src} className=' w-[40px] '/>
        </div>
        )})}

        </div>
      </motion.div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: service01,
    title: "email",
    title2: "design",
    id: 1,
    subSevice:[
      {
      title:"Welcome Series",
      logo:conversion
    },
     {
      title:"Abandoned Cart",
      logo:ui
    },
     {
      title:"Welcome Series",
      logo:sms
    },
  ]
  },
  {
    url: service02,
    title: "flow",
    title2: "automation",
    subSevice:[
      {
      title:"Welcome Series",
      logo:conversion
    },
     {
      title:"Abandoned Cart",
      logo:ui
    },
     {
      title:"Welcome Series",
      logo:sms
    },
  ],
    id: 2,
  },
  {
    url: service03,
    title: "A&B",
    title2: "Testing",
    subSevice:[
      {
      title:"Welcome Series",
      logo:conversion
    },
     {
      title:"Abandoned Cart",
      logo:ui
    },
     {
      title:"Welcome Series",
      logo:sms
    },
  ],
    id: 3,
  },
  {
    url: service04,
    title: "Campaign",
    title2: "Management",
    subSevice:[
      {
      title:"Welcome Series",
      logo:conversion
    },
     {
      title:"Abandoned Cart",
      logo:ui
    },
     {
      title:"Welcome Series",
      logo:sms
    },
  ],
    id: 4,
  },
  {
    url:service05,
    title: "Reports &",
    title2: "Analytics",
     subSevice:[
      {
      title:"Welcome Series",
      logo:conversion
    },
     {
      title:"Abandoned Cart",
      logo:ui
    },
     {
      title:"Welcome Series",
      logo:sms
    },
  ],
    id: 5,
  },
  {
    url: service01,
    title: "Klaviyo",
    title2: "Setup",
     subSevice:[
      {
      title:"Welcome Series",
      logo:conversion
    },
     {
      title:"Abandoned Cart",
      logo:ui
    },
     {
      title:"Welcome Series",
      logo:sms
    },
  ],
    
    id: 6,
  },
  {
    url: service02,
    title: "Free",
    title2: "Audit",
    subSevice:[
      {
      title:"Welcome Series",
      logo:conversion
    },
     {
      title:"Abandoned Cart",
      logo:ui
    },
     {
      title:"Welcome Series",
      logo:sms
    },
  ],
    id: 7,
  },
];