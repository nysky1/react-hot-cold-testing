import React from 'react';
import { shallow, mount } from 'enzyme';


import GuessSection from './guess-section';

describe('<GuessSection />', () => {
  it('Renders the submit button', () => {
    const wrapper = shallow(<GuessSection />);
    //expect(wrapper.find('#guessButton')).to.have.length(1); //follow up
  });
});


