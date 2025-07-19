import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import './SectionIntro.css';
import danielImg from '../../assets/videos/images/daniel.png';
import InfoCard from './InfoCard';
import { FaJava, FaGithub, FaLinkedin, FaGamepad, FaCode } from "react-icons/fa";

import layer6 from '../../assets/videos/images/landscape-layer-1.png';
import layer5 from '../../assets/videos/images/landscape-layer-2.png';
import layer4 from '../../assets/videos/images/landscape-layer-3.png';
import layer3 from '../../assets/videos/images/landscape-layer-4.png';
import layer2 from '../../assets/videos/images/landscape-layer-5.png';
import layer1 from '../../assets/videos/images/landscape-layer-6.png';

function SectionIntro() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0.35, 0.4], [1, 0]);
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
        <div className="parallax-container">
          <Parallax speed={-25}>
            <img 
            src={layer1} alt="Layer" className="parallax-layer" />
          </Parallax>
          <Parallax speed={-28}>
            <img 
            src={layer2} alt="Layer" className="parallax-layer" />
          </Parallax>
          <Parallax speed={-5}>
            <motion.div
              style={{opacity}}>
              <h1 
              style={{marginTop: 100}}
              className='greetings'>Welcome to my hub!</h1>
              <h1 className='greetings'>My name is</h1>
              <h2 className='title'>DANIEL FIACCADORI</h2>
            </motion.div>
            <img 
            src={layer3} alt="Layer" className="parallax-layer" />
          </Parallax>
          <Parallax speed={10}>
            <img
            src={layer4} alt="Layer" className="parallax-layer" />
          </Parallax>
          <Parallax speed={20}>
            <img
            src={layer5} alt="Layer" className="parallax-layer" />
          </Parallax>
          <Parallax speed={22}>
            <motion.img 
            src={layer6} alt="Layer" className="parallax-layer" />
          </Parallax>
        </div>
      </motion.div>

      {/* Section 2 */}

      <motion.div
        className='subsection-container'>
        <motion.div
          style={{ opacity: subsectionOpacity }}
          className='container'>
          <motion.div className='row-container'>
            <div style={{ textAlign: "justify", maxWidth: '50%', padding: 20, paddingInline: 40 }}>
              <h1 className='skills-title'>THINGS I ♥ TO DO</h1>
              <p style={{ fontSize: 20, color: "#141619", fontWeight: 200 }}>
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
                    experience with SQL and Kafka, and other minor technologies like Liquibase and Flywheel"
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