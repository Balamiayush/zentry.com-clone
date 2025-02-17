import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Page3 = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".page3",
        top: "center center",
        end: "+=800px center",
        markers: true,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  const tiltOptions = {
    max: 30,
    perspective: 2000,
    scale: 1.1,
    speed: 100,
    transition: false,
    axis: null,
    reset: true,
    easing: "cubic-bezier(0.23, 1, 0.320, 1)",
  };
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <div
      ref={sectionRef}
      className=" h-screen w-full  flex flex-col items-center  page3 mt-5 relative  "
    >
      <div
        id="box2"
        className=" uppercase text-[10px]  flex flex-col justify-center items-center h-[50vh]   "
      >
        <p className=" lg:text-[0.7rem] ">WELCOME TO ZENTRY</p>
        <motion.div
          initial={{
            x: "-100%", // Start from the left
            opacity: 0,
            skewY: -20,
          }}
          animate={
            isInView
              ? { x: "0%", opacity: 1, skewY: 0 }
              : { x: "-100%", opacity: 0, skewY: -20 }
          }
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="text-[3.5rem] lg:text-[6rem] font-bold leading-none text-center  "
        >
          <h1 style={{ fontFamily: "Zentry" }} className="overflow-hidden">
            discover the world's largest shared advantage
          </h1>
        </motion.div>
      </div>
      <div className="h-dvh w-screen   ">
        <Tilt
          options={tiltOptions}
          className="mask-clip-path about-image w-52  h-60 m-auto"
        >
          <img
            className="w-full h-full object-cover"
            src="https://zentry.com/export/images/home/intro/custom-home-intro-desktop@lg.webp"
            alt=""
          />
        </Tilt>
      </div>
    </div>
  );
};

export default Page3;
