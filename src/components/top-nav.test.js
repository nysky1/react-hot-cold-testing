import React from 'react';
import { shallow, mount } from 'enzyme';


import TopNav from './top-nav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    const wrapper = shallow(<TopNav />);
  });
  it('Should fire the onRestartGame callback when the button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<TopNav onRestartGame={callback} />);

    const btn = wrapper.find('.new');
    btn.simulate('click');
    expect(callback).toHaveBeenCalled();
    //console.log(wrapper.state('correctAnswer')); //followup
  });
  it('Should fire the onGenerateAuralUpdate callback when the button is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<TopNav onGenerateAuralUpdate={callback} />);

    const btn = wrapper.find('.status-link');
    btn.simulate('click');
    expect(callback).toHaveBeenCalled();
    //console.log(wrapper.state('correctAnswer')); //followup
  });
});