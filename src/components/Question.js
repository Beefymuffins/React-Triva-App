/* eslint-disable no-plusplus */
import React, { useState } from 'react';

const streakMultiplier = 0;
export default function Question({ question, changeQuestion }) {
  const [classToApply, setClassToApply] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [answering, setAnswering] = useState(false);

  const checkAnswer = (selectedAnswers) => {
    if (answering) return;
    setAnswering(true);
    setSelectedAnswer(selectedAnswers);

    const classToApplyToAnswer =
      selectedAnswers === question.answer ? 'correct' : 'incorrect';
    setClassToApply(classToApplyToAnswer);
    const bonus = selectedAnswers === question.answer ? 10 : 0;

    setTimeout(() => {
      setSelectedAnswer(-1);
      setAnswering(false);
      changeQuestion(bonus);
    }, 1000);
  };

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
      {/* When doing JS in JSX you need to do it on a set up curly brackets */}
      {question.answerChoices.map((choice, index) => (
        <div
          key={index}
          className={`choice-container ${
            selectedAnswer === index && classToApply
          }`}
          onClick={() => checkAnswer(index)}
        >
          <p className="choice-prefix">{index + 1}</p>
          <p
            className="choice-text"
            dangerouslySetInnerHTML={{ __html: choice }}
          />
        </div>
      ))}
    </div>
  );
}
