import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './SectionIntro.css';

function SectionIntro() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]); 
  const angle = useTransform(scrollYProgress, [0, 1], [0, 1080]);
  const backgroundImage = useMotionTemplate`linear-gradient(${angle}deg, #8c00c4ff, rgba(255, 118, 118, 1))`;
  const backgroundImageGlow = useMotionTemplate`linear-gradient(${angle}deg, #8c00c4ff, rgba(255, 118, 118, 1))`;
  const scale = useTransform(scrollYProgress, [0, 1], [5, 0]); 

  return (
    <section ref={targetRef} className="section-container">
      <div className="sticky-container">
        <Parallax speed={-30}>
          <div className="title-wrapper">
          <motion.h1
            className="title gradient-text title-glow"
            style={{ opacity, backgroundImageGlow, scale }}
          >
            JAVA DEVELOPER
          </motion.h1>

          <motion.h1
            className="title gradient-text"
            style={{ opacity, backgroundImage, scale }}
          >
            JAVA DEVELOPER
          </motion.h1>
        </div>
        </Parallax>
      </div>
    </section>
  );
}

export default SectionIntro;