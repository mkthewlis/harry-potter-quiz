import React from 'react';
import './StartButton.css'

export const StartButton = ({...onClick}) => (
    <>
        <button className="start-button" {...onClick}>Start Quiz</button>
    </>
);