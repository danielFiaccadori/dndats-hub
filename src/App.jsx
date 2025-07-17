import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

import './App.css';

function App() {
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
        padding: '25px 50px',
        boxSizing: 'border-box'
      }}>
        <div style={{ color: 'white', fontSize: '1rem' }}>
          DANIEL
        </div>

        <div>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem' }}>HOME</Link>
        </div>
      </nav>

      <main style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  )
}

export default App;