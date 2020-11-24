import React from 'react';
import './AnswerButton.css';

export const AnswerButton = ({index, answer, ...onClick}) => (
    <>
        <button key={index} className="answer-button" {...onClick}>{answer}</button>
    </>
);