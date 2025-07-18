import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import './SectionIntro.css';
import danielImg from '../../assets/videos/images/daniel.png';
import InfoCard from './InfoCard';
import { FaJava, FaGithub, FaLinkedin, FaGamepad, FaCode } from "react-icons/fa";

function SectionIntro() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.4, 1], [2.5, 2.5]);
  const angle = useTransform(scrollYProgress, [0, 1], [0, 920]);

  const subsectionOpacity = useTransform(scrollYProgress, [0.45, 0.68], [0, 1]);

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

      <motion.div
        className='subsection-container'>
        <motion.div 
          style={{ opacity:subsectionOpacity }}
          className='container'>
          <motion.div className='row-container'>
                <div style={{textAlign: "justify", maxWidth: '50%', padding: 20, paddingInline: 40}}>
                  <h1 className='skills-title'>THINGS I ♥ TO DO</h1>
                  <p style={{fontSize: 20, color: "#141619", fontWeight: 200}}>
                    I’m a passionate developer with an unshakable love for Java and OOP,
                    RESTful APIs using SpringBoot, and software architecture.<br /><br /> Over the course of my journey, I’ve built personal and academic
                    projects that strengthened my technical foundation and ability to deliver robust back-end solutions.

                    Currently, I’m expanding my skill set to work as a fullstack developer, focusing on modern front-end technologies and seamless system integration. 
                    This progression reflects my commitment to understanding the full development lifecycle and delivering
                    applications that combine performance, design, and user experience.
                  </p>
                </div>

                <div style={{
                  textAlign: "justify",
                  padding: 20,
                  paddingInline: 40,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: 20,
                  alignContent: 'center',
                  justifyItems: 'center'
                }}>
                  <InfoCard
                    icon={FaCode}
                    title="Developer"
                    description="Coding back-end solutions with Java and Spring Boot. I also have
                    experience with SQL and Kafka, and other minor technologies as Liquibase and Flywheel"
                  />
                  <InfoCard
                    icon={FaGithub}
                    title="GitHub Projects"
                    description="Explore my open-source contributions and take
                    a look at my personal projects."
                  />
                  <InfoCard
                    icon={FaLinkedin}
                    title="LinkedIn"
                    description="My LinkedIn, where i post updates, and you can contact me if necessary :D"
                  />
                  <InfoCard
                    icon={FaGamepad}
                    title="Mod wiki"
                    description="You can take a look at my Minecraft modding environment. You can also access
                    the wiki in the 'wiki' subsection."
                  />
                </div>
          </motion.div>
        </motion.div>
      </motion.div>

    </motion.section>
  );
}

export default SectionIntro;