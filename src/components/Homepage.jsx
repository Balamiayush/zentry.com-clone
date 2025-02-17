import React, { useRef, useState, useCallback } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { Tilt } from "react-tilt";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const videos = useRef([
    { id: 1, url: "https://a.storyblok.com/f/271652/x/c4a3945939/hero-cut-1.mp4" },
    { id: 2, url: "https://a.storyblok.com/f/271652/x/54a86466e4/hero-cut-4.mp4" },
    { id: 3, url: "https://a.storyblok.com/f/271652/x/927ee8c1eb/hero-cut-2.mp4" },
    { id: 4, url: "https://a.storyblok.com/f/271652/x/1d3a68d908/hero-cut-3.mp4" },
  ]);

  const handleVideoChange = useCallback(() => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videos.current.length);
  }, []);

  useGSAP(() => {
    let ctx = gsap.context(() => {
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

    return () => ctx.revert();
  }, []);

  const tiltOptions = {
    max: 30,
    perspective: 800,
    scale: 1.2,
    speed: 8000,
    transition: false,
    axis: "x",
    reset: true,
    easing: "cubic-bezier(0.23, 1, 0.320, 1)",
  };

  return (
    <>
      <div className="w-full h-screen hero relative z-[10]">
        {/* Background Video */}
        <div ref={videoRef} className="video absolute top-0 left-0 z-[-1] w-full h-full overflow-hidden">
          <video src={videos.current[videoIndex].url} autoPlay loop muted className="object-cover w-full h-full"></video>
        </div>

        <Navbar />

        {/* Hero Section */}
        <div className="hero-content relative w-full flex flex-col justify-between items-center h-[80vh]">
          <Tilt options={tiltOptions} className="box absolute z-10 w-44 h-44 lg:w-[30vw] lg:h-[40vh] top-1/2 overflow-hidden transition-all duration-300 ease-in-out">
            <video onClick={handleVideoChange} className="w-full h-full object-cover" src={videos.current[
              (videoIndex + 1) % videos.current.length
            ].url} autoPlay loop muted></video>
          </Tilt>

          <div className="left-content relative w-full h-full flex flex-col items-center">
            <div className="hero-text p-5 leading-[80px] relative">
              <div className="text-[6rem] font-bold font-[Zentry] tracking-none lg:text-[10rem] text-white lg:absolute lg:top-0 lg:right-[20vh] lg:mt-[10vh]">
                REDEFINE
              </div>
              <div className="text-[6rem] absolute font-bold font-[Zentry] lg:text-[10rem] text-white sm:left-20 lg:absolute lg:-bottom-[75vh] lg:left-[40vh]">
                GAMING
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex w-full gap-5 px-5">
            <p className="text-white text-center text-[0.8rem] font-bold font-[Roobert1]">
              Enter the Metagame <br />
              Unleash the Play Economy
            </p>
            <a className="bg-white text-[10px] text-black px-5 py-2 rounded-full" href="#">
              WHITEPAPER
            </a>
          </div>
        </div>
      </div>

      {/* Gaming Text */}
      <h1 className="text-black text-center text-[8rem] lg:text-[10rem] absolute -bottom-10 right-0 z-[0] font-bold font-[Zentry]">
        Gaming
      </h1>
    </>
  );
};

export default Homepage;
