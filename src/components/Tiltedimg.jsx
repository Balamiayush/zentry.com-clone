import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const Tiltedimg = forwardRef(({ imageSrc, altText, imageHeight, imageWidth }, ref) => {
  return (
    <motion.div
      ref={ref} // Pass the ref to motion.div for GSAP animations
      className="relative"
      style={{
        width: imageWidth,
        height: imageHeight,
      }}
    >
      <img
        src={imageSrc}
        alt={altText}
        className="object-cover rounded-lg"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </motion.div>
  );
});

export default Tiltedimg;
