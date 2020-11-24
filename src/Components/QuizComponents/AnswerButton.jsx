import React from 'react';
import './AnswerButton.css';

export const AnswerButton = ({answer, ...onClick}) => (
    <>
        <button className="answer-button" {...onClick}>{answer}</button>
    </>
);