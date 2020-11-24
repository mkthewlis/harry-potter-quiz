import React from 'react';
import { shallow } from 'enzyme';
import { AnswerButton } from './AnswerButton';

describe('AnswerButton', () => {
    let wrapper;
    const onClickMock = jest.fn();

    beforeEach(() => {
        wrapper = shallow(
          <AnswerButton {...onClickMock}/>,
        );
      });
    it('renders without crashing', () => {
      expect(wrapper).toMatchSnapshot();
    });
});