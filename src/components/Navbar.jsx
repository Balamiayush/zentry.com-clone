import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  // const [ishover, setIshover] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  // useEffect(() => {
  //     window.addEventListener("mousemove", (e) => {
  //         setPosition({
  //             left:e.clientX,
  //             top:e.clientY,
  //             width:200,
  //             height:200,
  //         })
  //     })
  // }, [])
  const ref = useRef(null);
  return (
    <nav className="w-full h-20 px-10 bg-[#000000] text-white flex justify-between items-center  ">
      <div className="navleft flex items-center gap-5">
        <svg
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 661 660"
        >
          <symbol id="a" fill="none" viewBox="0 0 661 660">
            <path
              fill="#DFDFF2"
              d="M338.881 214.911H0L617.259 0 371.182 384.583l-32.318-169.688z"
            />
            <path
              fill="#DFDFF2"
              d="M321.141 444.522h338.872L42.753 659.993l246.071-385.584 32.317 170.13z"
            />
          </symbol>
          <use href="#a" />
        </svg>
        <div className="btns flex items-center gap-5">
          <a
            className="bg-white text-[10px] text-black px-5 py-2 rounded-full"
            href="#"
          >
            PRODUCTS
          </a>
          <a
            className="bg-white text-[10px] text-black px-5 py-2 rounded-full"
            href="#"
          >
            WHITEPAPER
          </a>
        </div>
      </div>
      <div className="navright flex items-center gap-2 relative">
        {["Nexus", "Vault", "Prologue", "About", "Contact"].map(
          (item, index) => (
            <>
              <a
                ref={ref}
                onMouseEnter={()=>{
                    if(!ref.current) return;
                    const data = ref.current.getBoundingClientRect();
                    console.log(data); 
                    setPosition({
                        left:ref.current.offsetLeft,
                        width:data.width,
                        // height:data.height,
                        opacity:1,
                    })
                }}
                className="text-[10px]  px-5 py-2 relative rounded-full"
                href="#"
              >
                {item}
              </a>
              <motion.div
                animate={position}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 h-22 -translate-y-1/2  rounded-lg  bg-blue-500 "
              />
            </>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
