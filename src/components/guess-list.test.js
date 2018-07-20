import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders the GuessList section ', () => {
    const wrapper = shallow(<GuessList guesses={[1,2,3]} />);
    expect(wrapper.text()).toEqual('123');
  });
});
