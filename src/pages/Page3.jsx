import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Page3 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <div ref={sectionRef} className="w-full h-[100vh] page3 mt-5 lg:mt-[100px]">
      <div className="w-full uppercase text-[10px] overflow-hidden flex flex-col justify-center items-center h-[50vh]">
        <p className=" lg:text-[0.7rem] ">WELCOME TO ZENTRY</p>
        <motion.div
          initial={{
            x: "-100%", // Start from the left
            opacity: 0,
            skewY: -20,
          }}
          animate={isInView ? { x: "0%", opacity: 1, skewY: 0 } : { x: "-100%", opacity: 0, skewY: -20 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="text-[3.5rem] lg:text-[7rem] font-bold leading-none text-center lg:w-[60%] overflow-hidden"
        >
          <h1 style={{ fontFamily: "Zentry" }} className="overflow-hidden">
            discover the world's largest shared advantage
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Page3;
