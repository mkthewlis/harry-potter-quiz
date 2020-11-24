import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('./Calculations/RandomiseQuizQuestions', () => ({
  randomiseQuizQuestions: () => ({
    question: 'What do the initials J.K. Rowling stand for?',
    possibleAnswers: [
      { answer: 'Joanne Kathleen', correctAnswer: true },
      { answer: 'Jane Kathleen', correctAnswer: false },
      { answer: 'Jody Katie', correctAnswer: false },
      { answer: 'Joanne Katie', correctAnswer: false }
    ],
  }),
}));

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
