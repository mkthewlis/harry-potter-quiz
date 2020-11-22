import React from 'react';
import { questions } from '../QuizData/QuizQuestions';

export const Quiz = () => {
    const formattedQuestions = JSON.stringify({questions});
    return(
    <div className="quiz-wrapper">
        <header>
            <h1>Harry Potter Pub Quiz</h1>
        </header>
        <main>
            <h2>Question 1/10</h2>
            <p>{formattedQuestions}</p>
            <button>Answer</button>
        </main>
    </div>
    );
};
