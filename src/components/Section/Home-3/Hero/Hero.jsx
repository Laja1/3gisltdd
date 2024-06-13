"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import Link from "next/link";
import Head from 'next/head';


export default function HeroSection() {
  return (
    <div className="bg-white flex  flex-col items-center justify-center min-h-screen w-screen">
     <div className="bg-white flex flex-col items-center justify-center min-h-screen w-screen">
     <Head>
        <title>Home</title>
        <meta name='description' content="Our Services, Our Projects, About Us" />
        <link rel='canonical' href="/" />
      </Head>

      <div className="w-full">
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} dynamicHeight={true} showThumbs={false} transitionTime={1000} showArrows={false} swipeable={false}>
          <div className="relative h-screen w-full">
            <img src="/images/v1/3gis.png" className="w-full h-screen object-cover" alt="Home" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <p className="playfair-display text-3xl md:text-4xl lg:text-5xl font-bold">3GIS Edge</p>
              <div className="w-14 h-1 rounded-full bg-[#BCDBFF]" />
             <p className="open-sans  text-center text-sm md:text-base lg:text-lg leading-relaxed lg:leading-loose text-white py-3 w-80 md:w-[550px] lg:w-[650px]">
                With years of experience in business and Finance, we identify industry challenges and meet business needs through proactive delivery of solutions backed with Technology that enable growth and development for the organization.
              </p>
              <div className=" flex justify-center">
                <Link href='/pages/Contact'>  <div style={{borderRadius:5}} className="w-72 h-12 text-white flex rounded-md bg-blue-600 items-center justify-center cursor-pointer">
                  Get in touch
                </div></Link>
              </div>
            </div>
          </div>

          <div className="relative h-screen w-full">
            <img src="/images/v1/team.png" className="w-full h-screen object-cover" alt="Home" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <p className="playfair-display text-3xl md:text-4xl lg:text-5xl font-bold">3GIS Edge</p>
              <div className="w-14 h-1 rounded-full bg-[#BCDBFF]" />
              <p className="open-sans text-center text-sm md:text-base lg:text-lg leading-loose text-white py-3 w-80 md:w-[550px] lg:w-[650px]">
                3GIS adopts a systematic project management approach to ensure the delivery of project benefits and objectives. This strategy involves aligning with established project management principles to guarantee success.
              </p>
              <div className=" flex justify-center">
               <Link href='/pages/Contact'> <div style={{borderRadius:5}} className="w-72 h-12 text-white flex rounded-md bg-blue-600 items-center justify-center cursor-pointer">
                  Get in touch
                </div></Link>
              </div>
            </div>
          </div>

          <div className="relative h-screen w-full">
            <img src="/images/v1/woman.png" className="w-full h-screen object-cover" alt="Home" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
              <p className="playfair-display text-3xl md:text-4xl lg:text-5xl font-bold">3GIS Edge</p>
              <div className="w-14 h-1 rounded-full bg-[#BCDBFF]" />
              <p className="open-sans text-center text-sm md:text-base lg:text-lg leading-loose text-white py-3 w-80 md:w-[550px] lg:w-[650px]">
                3GIS offers solutions by integrating business process re-engineering and customized software development to enhance workforce efficiency and streamline operations through automation.
              </p>
              <div className=" flex justify-center">
               <Link href='/pages/Contact'>   <div style={{borderRadius:5}} className="w-72 h-12 text-white flex rounded-md bg-blue-600 items-center justify-center cursor-pointer">
                  Get in touch
                </div></Link>
              </div>
            </div>
          </div>
        </Carousel>
        </div></div></div>
      
      )}