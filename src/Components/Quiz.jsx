import React, { useState } from 'react';
import { quizQuestions } from '../QuizData/QuizQuestions';
import { randomiseQuizQuestions } from '../Calculations/RandomiseQuizQuestions';
import { Button } from './QuizComponents/Button';
import './Quiz.css';

export const Quiz = () => {
    const tenRandomQuestions = randomiseQuizQuestions(quizQuestions);
    const [questionNumber, setQuestionNumber] = useState(0);

    const handleAnswerClick = () => {
        const continueQuiz = questionNumber + 1;
        if (continueQuiz < 10) {
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
            <p className="quiz__question">{tenRandomQuestions[questionNumber].question}</p>
            <div className="quiz__answer-container">
                {tenRandomQuestions[questionNumber].possibleAnswers.map((possibleAnswers, index) => (
                    <Button onClick={handleAnswerClick} answer={possibleAnswers.answer}/>
                ))}
            </div>
        </main>
    </div>
    );
};
