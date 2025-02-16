import React, { useRef } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { Tilt } from 'react-tilt'

import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set(videoRef.current, {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from(videoRef.current, {
      borderRadius: "0% 0% 0% 0%",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power1.inOut",
      duration: 1.5,
      scrollTrigger: {
        trigger: ".hero",
        start: "10% top",
        end: "bottom center",
        scrub: 2,
      },
    });

    gsap.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });
  const defaultOptions = {
    max:            10,     // max tilt rotation (degrees)
    perspective:    100,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.2,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          5000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "ease-in-out",    // Easing on enter/exit.
  }
return (
    <>
      <div className="w-full h-screen hero relative z-[10]">
        <div
          ref={videoRef}
          className="video  absolute top-0 left-0 z-[-1] w-full h-full overflow-hidden "
        >
          <video
            src="https://a.storyblok.com/f/271652/x/c4a3945939/hero-cut-1.mp4"
            autoPlay
            loop
            muted
            className=" object-cover w-full h-full"
          ></video>
        </div>
        <Navbar />
        <div className="hero-content relative w-full flex flex-col  justify-between items-center h-[80vh]">
        <Tilt
          options={defaultOptions} 
          className="box absolute  z-10 w-44 h-44 top-1/2 bg-red-500   transition-all duration-300 ease-in-out 
        ">
        </Tilt>
          <div className="left-content relative  w-full h-full flex flex-col items-center ">
          <div className="hero-text p-5 leading-[80px] relative ">
            <div className="text-[6rem] font-bold font-[Zentry] tracking-none lg:text-[10rem]  text-white lg:absolute lg:top-0 lg:right-[20vh] lg:mt-[10vh] ">
              REDEFINIE
              </div>
              <div className="text-[6rem] absolute font-bold font-[Zentry] lg:text-[10rem] text-white sm:left-20  lg:absolute lg:-bottom-[75vh] lg:left-[40vh] ">
                GAMING
              </div>
            </div>
          </div>
          <div className="  flex   w-full gap-5 px-5 ">
            <p className="text-white text-center text-[0.8rem] font-bold font-[Roobert1]">
              Enter the Metagame <br />
              Unleash the play Economy
            </p>
            <a
              className="bg-white text-[10px] text-black px-5 py-2 rounded-full"
              href="#"
            >
              WHITEPAPER
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-black text-center text-[8rem] lg:text-[10rem] absolute -bottom-10 right-0 z-[0] font-bold font-[Zentry]">
        Gaming
      </h1>
    </>
  );
};

export default Homepage;
