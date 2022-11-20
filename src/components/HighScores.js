/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from './Firebase/FirebaseContext';

export default function HighScores() {
  const firebase = useFirebase();
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.scores().once('value', (snapshot) => {
      const data = snapshot.val();
      const sortedScores = formatScoreData(data);
      setScores(sortedScores);
      setLoading(false);
    });
  }, [firebase]);

  const formatScoreData = (firebaseScores) => {
    const scoresArray = [];

    for (const key in firebaseScores) {
      const val = firebaseScores[key];
      val.key = key;
      scoresArray.push(val);
    }

    return scoresArray
      .sort((scoreA, scoreB) => scoreB.score - scoreA.score)
      .slice(0, 10);
  };

  return (
    <>
      {loading && <div id="loader" />}
      {!loading && (
        <>
          <h1>High Scores</h1>
          <div id="highScoresList">
            {scores.map((record) => (
              <li key={record.key} className="high-score">
                {record.name} - {record.score}
              </li>
            ))}
          </div>
          <Link to="/" className="btn">
            Go Home
          </Link>
        </>
      )}
    </>
  );
}
