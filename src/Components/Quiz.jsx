import React, { useState } from 'react';
import { quizQuestions } from '../QuizData/QuizQuestions';
import { randomiseQuizQuestions } from '../Calculations/RandomiseQuizQuestions';
import { Button } from './QuizComponents/Button';
import './Quiz.css';

export const Quiz = () => {
    const tenRandomQuestions = randomiseQuizQuestions(quizQuestions);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [result, setResult] = useState(0);

    const handleAnswerClick = (correctAnswer) => {
        if (correctAnswer === true && questionNumber < 9){
            setResult(result + 1);
        };
        const continueQuiz = questionNumber + 1;
        if (continueQuiz < 10){
            setQuestionNumber(continueQuiz);
        };
    };

    return(
    <div className="quiz__wrapper">
        <header>
            <h1 className="quiz__header">Harry Potter Pub Quiz</h1>
        </header>
        <main>
            <h2 className="quiz__question-number">Question {questionNumber + 1}/{tenRandomQuestions.length}</h2>
            <div className="quiz__statistics-container">
                <div className="quiz__statistics-box">Your score: {result}</div>
                <div className="quiz__statistics-box">Time remaining: 15.00</div>
            </div>
            <p className="quiz__question">{tenRandomQuestions[questionNumber].question}</p>
            <div className="quiz__answer-container">
                {tenRandomQuestions[questionNumber].possibleAnswers.map((possibleAnswer, index) => (
                    <Button onClick={() => handleAnswerClick(possibleAnswer.correctAnswer)} answer={possibleAnswer.answer}/>
                ))}
            </div>
        </main>
    </div>
    );
};
