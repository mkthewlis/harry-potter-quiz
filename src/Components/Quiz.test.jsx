import React from 'react';
import { mount } from 'enzyme';
import { Quiz } from './Quiz';
import { StartButton } from './QuizComponents/StartButton';
import { QuestionSection } from './QuizComponents/QuestionSection';

describe('Quiz', () => {
    let wrapper;
    const onClickMock = jest.fn();
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
    
    const questionNumberMock = 0;
    const countdownTimerMock = 15;
    const resultMock = 0;
    const handleAnswerButtonClick = jest.fn(); 
    beforeEach(() => {
        wrapper = mount(
          <Quiz randomQuestions={randomQuestionsMock}/>,
        );
      });
    it('renders without crashing', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should not render the results title by default', () => {
        expect(wrapper.find('.quiz__header').text()).toContain('Harry Potter Quiz');
    });

    it('should not call the start quiz button by default', () => {
        expect(onClickMock).not.toHaveBeenCalled();
    });
    describe('after the start button has been clicked', () => {
        it('should render the QuizSection component', () => {
            wrapper.find(StartButton).simulate('click');
            expect(wrapper.find('.quiz__header').exists()).toBeTruthy();
        });
    });
});     
