import React from 'react';
import './Button.css';

export const Button = ({answer, ...onClick}) => (
    <>
        <button className="answer-button" {...onClick}>{answer}</button>
    </>
);