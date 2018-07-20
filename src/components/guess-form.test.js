import React from 'react';
import { shallow, mount } from 'enzyme';


import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders the submit button', () => {
    const wrapper = shallow(<GuessForm />);
    //expect(wrapper.find('#guessButton')).to.have.length(1); //follow up
  });
  it('Should fire the onMakeGuess callback when the form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = '22';

    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
  });
  it('Should reset the input form when submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm />);
  
    const guessText = wrapper.find('input[type="number"]').instance().value;
    wrapper.simulate('submit');
    expect(guessText).toEqual('');
  });

  //follow-up
  // it('Should NOT fire the onMakeGuess callback when the form is submitted', () => {
  //   const callback = jest.fn();
  //   const wrapper = mount(<GuessForm onMakeGuess={callback} />);
  //   wrapper.simulate('submit');
  //   expect(callback).not.toHaveBeenCalled();
  // });
});