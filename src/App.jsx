import React, { useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

import './App.css';

function App() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0.55, 0.66], [0, 1]);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        zIndex: 100,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 40px',
        boxSizing: 'border-box',

        /* backdropFilter: 'blur(10px)', 
        WebkitBackdropFilter: 'blur(10px)', */
      }}>
        <motion.div style={{ color: '#f1f1fc', fontWeight: 'bold', fontSize: '1rem', borderRadius: 100,
           backgroundColor: 'rgb(182, 62, 62)', padding: 2, paddingInline: 10, opacity}}>
          DnDats Hub
        </motion.div>

        <div>
          <Link to="/" style={{ color: '#f1f1fc', fontWeight: 'bold', textDecoration: 'none', fontSize: '1rem' }}>HOME</Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App;