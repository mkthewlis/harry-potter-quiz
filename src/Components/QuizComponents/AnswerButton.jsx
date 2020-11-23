import React from 'react';
import './AnswerButton.css';

export const AnswerButton = ({key, answer, ...onClick}) => (
    <>
        <button key={key} className="answer-button" {...onClick}>{answer}</button>
    </>
);