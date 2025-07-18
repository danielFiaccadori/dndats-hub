import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import './SectionIntro.css';
import danielImg from '../../assets/videos/images/daniel.png';


function SectionIntro() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.22], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [3, 0]);
  const angle = useTransform(scrollYProgress, [0, 1], [0, 920]);

  const backgroundImage = useMotionTemplate`
    linear-gradient(${angle}deg,
      #ff204dff,
      #ff20bcff
    )
  `;

  const backgroundGlow = useMotionTemplate`
    linear-gradient(${angle}deg,
      rgba(255, 32, 77, 0),
      #ff00bfff
    )
  `;

  return (
    <motion.section
      ref={targetRef} className="section-container">
      <motion.div
        className="sticky-container">
        <Parallax speed={-30}>
          <motion.div
            style={{
              scale,
              opacity,
              display: 'flex',
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginLeft: 300,
              marginRight: 300, 
              width: "60%",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="contentBox"
              style={{ flex: 1 }} 
            >
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="subtitle"
              >
                WELCOME TO MY HUB :D
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="greetings"
              >
                MY NAME IS
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="title-wrapper"
              >
                <motion.h1
                  className="title gradient-text title-glow"
                  style={{ backgroundImage: backgroundGlow }}
                >
                  DANIEL FIACCADORI
                </motion.h1>

                <motion.h1
                  className="title gradient-text"
                  style={{ backgroundImage }}
                >
                  DANIEL FIACCADORI
                </motion.h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.5 }}
                className="presentation"
              >
                I'm a passionate developer with an unshakable love for Java,<br />
                always eager to turn bold and imaginative ideas into reality ☕︎ <br /><br />
                Here, you can find info about my projects, and my mods wiki.
              </motion.p>
            </motion.div>

            <motion.div
              className="imageBox"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              style={{
                flex: 1, 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={danielImg}
                alt="myself"
                style={{
                  maxWidth: '70%', 
                  maxHeight: '20vh', 
                  objectFit: 'contain'
                }}
              />
            </motion.div>
          </motion.div>
        </Parallax>
      </motion.div>

      {/* Section 2 */}

      <motion.div className='subsection-container'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        
          className='container'>
          <h1 className='skills-title'>I have skills in development of digital products.</h1>
        </motion.div>
      </motion.div>

      {/* Section 2 */}

      <motion.div className='subsection-container'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        
          className='container'>
          <h1 className='skills-title'>I have skills in development of digital products.</h1>
        </motion.div>
      </motion.div>

      {/* Section 2 */}

      <motion.div className='subsection-container'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        
          className='container'>
          <h1 className='skills-title'>I have skills in development of digital products.</h1>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default SectionIntro;