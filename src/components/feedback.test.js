import React from 'react';
import { shallow, mount } from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
  const defaultGuessAgain = 'Guess again!'
  it('Renders the Feedback section ', () => {
     shallow(<Feedback  />);
  });
  it('Renders the Feedback section ', () => {
    const statusValue = 'Super Hot';
    let wrapper = shallow(<Feedback feedback={statusValue} />);
   
    expect(wrapper.text()).toEqual(`${statusValue} ${defaultGuessAgain}`);
  });
  it('Ensures Guess Again is not displayed when guessCount = 0', () => {
    const statusValue = 'Blank';
    let wrapper = shallow(<Feedback guessCount={0} feedback={statusValue} />);
   
    expect(wrapper.text()).toEqual(`${statusValue} `); //trailing space is ok
    expect(wrapper.text()).not.toEqual(`${statusValue} ${defaultGuessAgain}`); 

    
  });
});
