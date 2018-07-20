import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('renders GuessCount', () => {
        shallow(<GuessCount />);
    })
    it('Calculates the guess count correctly', () => {
        const valueToTest = 3;
        const wrapper = shallow(<GuessCount guessCount={valueToTest} />);
        expect(wrapper.text()).toEqual(`You've made ${valueToTest} guesses!`);
        
    })
});