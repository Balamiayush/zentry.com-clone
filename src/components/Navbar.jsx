import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
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

  // Function to handle hover effects
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
    <nav className="w-full  h-20 px-10 navright transition-all duration-300  z-50 text-white flex justify-between items-center ">
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
          <a className="bg-white text-[10px] text-black px-5 py-2 rounded-full" href="#">PRODUCTS</a>
          <a className="bg-white text-[10px] text-black px-5 py-2 rounded-full" href="#">WHITEPAPER</a>
        </div>
      </div>

      {/* Navbar Right */}
      <div ref={navRef} className="relative flex items-center gap-3 z-10">
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
