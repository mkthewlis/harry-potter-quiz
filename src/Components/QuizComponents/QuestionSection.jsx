import React from 'react';
import { AnswerButton } from './AnswerButton';
import './QuestionSection.css';

export const QuestionSection = ({questionNumber, randomQuestions, countdownTimer, result, handleAnswerButtonClick}) => (
    <section>
        <h2 className="question-section__question-number">Question {questionNumber + 1}/{randomQuestions.length}</h2>
        <div className="question-section__statistics-container">
            <div className="question-section__statistics-box">Your score: {result}</div>
            <div className="question-section__statistics-box">{countdownTimer}s</div>
        </div>
        <p className="question-section__question">{randomQuestions[questionNumber].question}</p>
        <div className="question-section__answer-container">
            {randomQuestions[questionNumber].possibleAnswers.map((possibleAnswer) => (
                <AnswerButton onClick={() => handleAnswerButtonClick(possibleAnswer.correctAnswer)} answer={possibleAnswer.answer}/>
            ))}
        </div>
    </section>
);