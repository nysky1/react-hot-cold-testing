import React from 'react';
import { shallow, mount } from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders the AuralStatus section without crashing ', () => {
     shallow(<AuralStatus />);
  });
  it('Renders the status in the AuralStatus section ', () => {
    const statusValue = 'Super Hot for the visually impaired';

    let wrapper = shallow(<AuralStatus auralStatus={statusValue} />);
   
    expect(wrapper.text()).toEqual(`${statusValue}`);
  });
});
