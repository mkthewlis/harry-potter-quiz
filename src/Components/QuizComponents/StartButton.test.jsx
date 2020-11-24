import React from 'react';
import { shallow } from 'enzyme';
import { StartButton } from './StartButton';

describe('StartButton', () => {
    let wrapper;
    const onClickMock = jest.fn();

    beforeEach(() => {
        wrapper = shallow(
          <StartButton {...onClickMock}/>,
        );
      });
    it('renders without crashing', () => {
      expect(wrapper).toMatchSnapshot();
    });
});