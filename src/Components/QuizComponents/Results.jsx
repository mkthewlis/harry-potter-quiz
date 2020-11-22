import React from 'react';
import './Results.css';

export const Result = ({result, tenRandomQuestions}) => (
    <> {result > 5 ? (
        <h2 className="results__header">Hogwarts awaits you!</h2>
    ) : (
        <h2 className="results__header">Better luck next time!</h2>
    )}
        <ul className="results__statistics">
            <li>Number of correct answers: {result} of {tenRandomQuestions.length}</li>
            <li>Number of incorrect answers: {tenRandomQuestions.length - result} of {tenRandomQuestions.length}</li>
        </ul>
    </>
);