import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>Trivia App</h1>
      <Link to="/game" className="btn">
        Start Game
      </Link>
      <Link to="/highScores" className="btn">
        High Scores
      </Link>
    </>
  );
}
