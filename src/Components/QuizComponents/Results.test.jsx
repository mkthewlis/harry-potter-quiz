import React from 'react';
import { mount } from 'enzyme';
import { Results } from './Results';

describe('Results', () => {
    let wrapper;
    const resultMock = 8;
    const randomQuestionsMock = [
        {
          question: 'What do the initials J.K. Rowling stand for?',
          possibleAnswers: [
            { answer: 'Joanne Kathleen', correctAnswer: true },
            { answer: 'Jane Kathleen', correctAnswer: false },
            { answer: 'Jody Katie', correctAnswer: false },
            { answer: 'Joanne Katie', correctAnswer: false }
          ],
        }
    ];

    beforeEach(() => {
        wrapper = mount(
          <Results result={resultMock} randomQuestions={randomQuestionsMock}/>,
        );
      });
    it('renders without crashing', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should change the title message depending on if results > 5', () => {
        expect(wrapper.find('.results__header').text()).toContain('Hogwarts awaits you!');
    });

    // result is 'out of 1' question as one question object was supplied to test
    it('should show how many answers were correct', () => {
        expect(wrapper.find('.results__statistics').text()).toContain('Number of correct answers: 8 of 1');
    });
});   