import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import music1 from "../assets/music_main.mp3"
const Navbar = ({products, whitepaper}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const audioRef = useRef(new Audio(music1));
  const [isPlaying, setIsPlaying] = useState(false);
  const playSound = () => {
    audioRef.current.currentTime = 0; // Reset the sound to the start
    audioRef.current.play(); // Play the sound
    setIsPlaying(true)
  };
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      console.log(window.scrollY)
      if(window.scrollY > 10){
        document.querySelector(".navright").classList.add("bg-black")
      }else{
        document.querySelector(".navright").classList.remove("bg-black")
      }
    })
  },[])
  const [position, setPosition] = useState({ left: 0, width: 0, height: 0, opacity: 0 });
  const [activeIndex, setActiveIndex] = useState(null);
  const navRef = useRef(null);

  const handleMouseEnter = useCallback((e, index) => {
    if (!navRef.current) return;
    const { left, width } = e.target.getBoundingClientRect();
    const navLeft = navRef.current.getBoundingClientRect().left;

    setPosition({ left: left - navLeft, width, height: e.target.clientHeight });
    setActiveIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveIndex(null);
    setPosition({ left: 0, width: 0, height: 0, opacity: 0 });
  }, []);

  return (
    <nav className="w-full  h-20 px-10 fixed navright transition-all duration-300  z-50 text-white flex justify-between items-center ">
      {/* Left Section */}
      <div className="flex items-center gap-5">
        <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 661 660">
          <symbol id="a" fill="none" viewBox="0 0 661 660">
            <path fill="#DFDFF2" d="M338.881 214.911H0L617.259 0 371.182 384.583l-32.318-169.688z" />
            <path fill="#DFDFF2" d="M321.141 444.522h338.872L42.753 659.993l246.071-385.584 32.317 170.13z" />
          </symbol>
          <use href="#a" />
        </svg>
        <div className="flex items-center gap-5">
          <Button text="PRODUCTS" href="#" />
          <Button text="WHITEPAPER" href="#" />
        </div>
      </div>

      {/* Navbar Right */}
      <div ref={navRef} className="relative flex items-center   z-10">
        {["Nexus", "Vault", "Prologue", "About", "Contact"].map((item, index) => (
          <a
            key={index}
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onMouseLeave={handleMouseLeave}
            className={`text-[0.7rem] px-5 py-2
            font-[Roobert2]
              relative rounded-full transition-all duration-300 ${
              activeIndex === index ? "text-black" : "text-white"
            }`}
            href="#"
          >
            {item}
          </a>
        ))}
        <div
      
      className="box w-10 h-10 cursor-pointer flex items-center justify-center gap-1"
      onClick={() => {
        setIsAnimating(!isAnimating)
        setIsPlaying(!isPlaying)
        if(isPlaying){
          audioRef.current.pause()
        }else{
          audioRef.current.play()
        }


      }} 
    >
      {[1, 2, 3, 4, 5].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 1, height: 5 }}
          animate={isAnimating ? { opacity: 1, height: 25 } : { opacity: 1, height: 5 }}
          transition={{
            delay: index * 0.2,
            ease: "easeInOut",
            duration: 0.6,
            repeat: isAnimating ? Infinity : 0, // Only repeat when active
            repeatType: "reverse",
          }}
          className="w-2 bg-white rounded-full"
        ></motion.div>
      ))}
    </div>
        <motion.div
          animate={position}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute z-[-1] top-1/2 -translate-y-1/2  rounded-[25px] bg-white"
        />
      </div>
      
    </nav>
  );
};

export default Navbar;
