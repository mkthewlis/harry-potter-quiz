import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../QuizData/QuizQuestions';
import { randomiseQuizQuestions } from '../Calculations/RandomiseQuizQuestions';
import { StartButton } from './QuizComponents/StartButton';
import { AnswerButton } from './QuizComponents/AnswerButton';
import { Result } from './QuizComponents/Results';
import './Quiz.css';

export const Quiz = () => {
    const [activeQuiz, setActiveQuiz] = useState(false);
    const tenRandomQuestions = randomiseQuizQuestions(quizQuestions);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [countdownTimer, setCountdownTimer] = useState(15);
    const [result, setResult] = useState(0);
    const [viewResult, setViewResult] = useState(false);

    useEffect(() => {

      }, []);

    const handleAnswerButtonClick = (correctAnswer) => {
        if (correctAnswer === true && questionNumber < 9){
            setResult(result + 1);
        };
        const continueQuiz = questionNumber + 1;
        if (continueQuiz < 10){
            setQuestionNumber(continueQuiz);
        };
        if (questionNumber === 9){
            setViewResult(true);
        }
    };

    return(
    <div className="quiz__wrapper">
        <header>
            <h1 className="quiz__header">{!viewResult ? ('Harry Potter Pub Quiz') : ('Your Results')}</h1>
        </header>
        <main>
            {!activeQuiz ? (
                <StartButton onClick={setActiveQuiz} />
            ) : (
                <>
                {!viewResult ? (
                    <>
                        <h2 className="quiz__question-number">Question {questionNumber + 1}/{tenRandomQuestions.length}</h2>
                        <div className="quiz__statistics-container">
                            <div className="quiz__statistics-box">Your score: {result}</div>
                            <div className="quiz__statistics-box">{countdownTimer}s</div>
                        </div>
                        <p className="quiz__question">{tenRandomQuestions[questionNumber].question}</p>
                        <div className="quiz__answer-container">
                            {tenRandomQuestions[questionNumber].possibleAnswers.map((possibleAnswer, index) => (
                                <AnswerButton onClick={() => handleAnswerButtonClick(possibleAnswer.correctAnswer)} answer={possibleAnswer.answer}/>
                            ))}
                        </div>
                    </>
                    ) : (
                    <Result result={result} tenRandomQuestions={tenRandomQuestions}/>
                )}
                </>
            )}
        </main>
    </div>
    );
};
