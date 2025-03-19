import React, { useRef, useState, useCallback, useEffect } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import TiltedCard from "./TiltedCard";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  
  const videos = [
    { id: 1, url: "https://a.storyblok.com/f/271652/x/c4a3945939/hero-cut-1.mp4" },
    { id: 2, url: "https://a.storyblok.com/f/271652/x/54a86466e4/hero-cut-4.mp4" },
    { id: 3, url: "https://a.storyblok.com/f/271652/x/927ee8c1eb/hero-cut-2.mp4" },
    { id: 4, url: "https://a.storyblok.com/f/271652/x/1d3a68d908/hero-cut-3.mp4" },
  ];

  const handleVideoChange = useCallback(() => {
    if (!overlayRef.current) return;

    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        gsap.to(overlayRef.current, { opacity: 0, duration: 0.5 });
      },
    });
  }, [videos.length]);

  useEffect(() => {
    if (videoRef.current) {
      gsap.set(videoRef.current, {
        clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      });

      gsap.from(videoRef.current, {
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
    }
  }, []);

  return (
    <div className="w-full h-screen hero relative z-[10] ">
      {/* Background Video */}
      <div ref={videoRef} className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video key={videos[videoIndex].id} src={videos[videoIndex].url} autoPlay loop muted className="object-cover w-full h-full"></video>
        <div ref={overlayRef} className="absolute top-0 left-0 w-full h-full bg-black opacity-0 z-10 pointer-events-none"></div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <div className="hero-content relative w-full flex flex-col justify-center items-center h-[80vh]">
        <div className="relative top-20 left-10">
          <div onClick={handleVideoChange}>
            <TiltedCard
              imageSrc={videos[(videoIndex + 1) % videos.length].url}
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={30}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
            />
          </div>
        </div>

        <div className="left-content font-[Zentry] relative w-full h-screen flex flex-col items-center">
          <div className="hero-text p-5 leading-[80px] relative text-white font-bold">
            <h1 className="text-black font-[Zentry] text-center text-[8rem] lg:text-[10rem] absolute lg:top-[-16vw] lg:right-[25vh] font-bold">REDEFINE</h1>
            <div className="text-[6rem] lg:text-[10rem] absolute lg:top-[-15vw] lg:right-[25vh]">REDEFINE</div>
            <div className="text-[6rem] text-black font-[Zentry] lg:text-[10rem] absolute lg:-bottom-[29vh] lg:left-[40vh]">GAMING</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex w-full gap-5 px-5">
          <p className="text-white text-center text-[0.8rem] font-bold">
            Enter the Metagame <br /> Unleash the Play Economy
          </p>
          <a className="bg-white text-[10px] text-black px-5 py-2 rounded-full" href="#">WHITEPAPER</a>
        </div>
      </div>

      {/* Gaming Text */}
      <h1 className="text-white font-[Zentry] text-center text-[8rem] lg:text-[10rem] absolute bottom-12 right-0 z-[0] font-bold">Gaming</h1>
    </div>
  );
};

export default Homepage;
