import React, { useState, useEffect } from 'react';
import { StartButton } from './QuizComponents/StartButton';
import { Results } from './QuizComponents/Results';
import './Quiz.css';
import { QuestionSection } from './QuizComponents/QuestionSection';

export const Quiz = ({randomQuestions}) => {
    const [activeQuiz, setActiveQuiz] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [countdownTimer, setCountdownTimer] = useState(15);
    const [result, setResult] = useState(0);
    const [viewResult, setViewResult] = useState(false);

    useEffect(() => {
        let timer;
        if (activeQuiz){
            if (countdownTimer > 0) {
                timer = setInterval(() => {
                    setCountdownTimer(countdownTimer - 1);
                }, 1000);
            } else if (countdownTimer === 0 && questionNumber === 9){
                setViewResult(true);
                return () => clearInterval(timer);
            } else if (countdownTimer === 0){
                setQuestionNumber(questionNumber + 1);
                setCountdownTimer(15);
                return () => clearInterval(timer);
            };
            return () => clearInterval(timer);
        };
    }, [activeQuiz, countdownTimer, questionNumber]);

    const handleAnswerButtonClick = (correctAnswer) => {
        if (correctAnswer === true && questionNumber < 10){
            setResult(result + 1);
        };
        const continueQuiz = questionNumber + 1;
        if (continueQuiz < 10){
            setQuestionNumber(continueQuiz);
            setCountdownTimer(15);
        };
        if (questionNumber === 9){
            setViewResult(true);
        };
    };

    return(
    <div className="quiz__wrapper">
        <header>
            <h1 className="quiz__header">{!viewResult ? ('Harry Potter Quiz') : ('Your Results')}</h1>
        </header>
        <main>
            {!activeQuiz ? (
                <StartButton onClick={setActiveQuiz} />
            ) : (
                <>
                {!viewResult ? (
                    <QuestionSection 
                        questionNumber={questionNumber} 
                        randomQuestions={randomQuestions}
                        countdownTimer={countdownTimer} 
                        result={result}
                        handleAnswerButtonClick={handleAnswerButtonClick}
                    />
                    ) : (
                    <Results result={result} randomQuestions={randomQuestions}/>
                )}
                </>
            )}
        </main>
    </div>
    );
};
