import React from 'react';
import { mount } from 'enzyme';
import { QuestionSection } from './QuestionSection';
import { AnswerButton } from './AnswerButton';

describe('QuestionSection', () => {
    let wrapper;
    
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
    const handleAnswerButtonClickMock = jest.fn();
    const questionNumberMock = 0;
    const countdownTimerMock = 15;
    const resultMock = 0;

    beforeEach(() => {
        wrapper = mount(
          <QuestionSection 
            questionNumber={questionNumberMock}
            randomQuestions={randomQuestionsMock}
            countdownTimer={countdownTimerMock}
            result={resultMock} 
            handleAnswerButtonClick={handleAnswerButtonClickMock}/>,
        );
      });
    it('renders without crashing', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the current question number in the title', () => {
        expect(wrapper.find('.question-section__question-number').text()).toContain('Question 1/1');
    });

    it('should display the current result', () => {
        expect(wrapper.find('.question-section__statistics-box').at(0).text()).toContain('Your score: 0');
    });

    it('should display the time left in the coundown timer', () => {
        expect(wrapper.find('.question-section__statistics-box').at(1).text()).toContain('15s');
    });

    it('should display the current question', () => {
        expect(wrapper.find('.question-section__question').text()).toContain('What do the initials J.K. Rowling stand for?');
    });

    it('should display four answer buttons, one for each answer', () => {
        expect(wrapper.find(AnswerButton)).toHaveLength(4);
    });

    it('should not call the handleAnswerButtonClick function by default', () => {
        expect(handleAnswerButtonClickMock).not.toHaveBeenCalled();
    });
});  