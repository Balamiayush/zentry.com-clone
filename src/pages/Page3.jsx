import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Tiltedimg from "../components/Tiltedimg";

gsap.registerPlugin(ScrollTrigger);

const Page3 = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  useGSAP(() => {
    if (!sectionRef.current || !imgRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom top", // End earlier for a smoother effect
        scrub: 1,
      },
    });

    // Increase width and height on scroll
    tl.to(imgRef.current, {
      width: "100vw",
      height: "100vh",
      duration: 1.5,
      ease: "power2.out",
    });

  }, { scope: sectionRef });

  return (
    <div
      ref={sectionRef}
      className=" w-full  flex flex-col items-center page3 mt-5 relative"
    >
      <div
        id="box2"
        className="uppercase text-[10px] flex flex-col justify-center items-center h-[50vh]"
      >
        <p className="lg:text-[0.7rem]">WELCOME TO ZENTRY</p>
        <motion.div
          initial={{
            x: "-100%",
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
          className="text-[3.5rem] lg:text-[6rem] font-bold leading-none text-center"
        >
          <h1 style={{ fontFamily: "Zentry" }} className="overflow-hidden">
            discover the world's largest shared advantage
          </h1>
        </motion.div>
      </div>

      {/* Tilted Image Component with GSAP animation */}
      <Tiltedimg
        ref={imgRef}
        imageSrc="https://zentry.com/export/images/home/intro/custom-home-intro-desktop@lg.webp"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        imageHeight="10vh"  // Starts small
        imageWidth="10vw"   // Starts small
        rotateAmplitude={1}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent={false}
      />
    </div>
  );
};

export default Page3;
