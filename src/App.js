import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import HighScores from './components/HighScores';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/highScores" element={<HighScores />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
