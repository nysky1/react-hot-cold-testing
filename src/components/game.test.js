import React from 'react';
import { shallow, mount } from 'enzyme';

import Game from './game';


describe('<Game />', () => {
  // let seedGuesses = [];
  // beforeAll(() => {
  //   for (let i = 1; i < 2; i++) {
  //     seedGuesses.push(i);
  //   }
  // });
  it('Renders without crashing', () => {
    shallow(<Game />);
  });
  it('Starts a new game'), () => {
    const wrapper = shallow(<Game />);
    const currAnswer = 50;
    wrapper.setState({
      guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: currAnswer
    });

    wrapper.instance().restartGame();

    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual(`Make your guess.`);
    expect(wrapper.state('correctAnswer')).not.toEqual(0);
    expect(wrapper.state('correctAnswer')).not.toEqual(currAnswer);
    
  }
  it('Can add guesses to the state', () => {
    const wrapper = shallow(<Game />);
    const instance = wrapper.instance();

    wrapper.setState({ correctAnswer: 50 });

    //seedGuesses.forEach(instance.makeGuess); //follow-up

    instance.makeGuess(2);
    expect(wrapper.state('guesses')).toEqual([2]);
    expect(wrapper.state('feedback')).toEqual(`You\'re Cold...`);

    //already guessed logic
    instance.makeGuess(2);
    expect(wrapper.state('guesses')).toEqual([2]);
    expect(wrapper.state('feedback')).toEqual(`Already guessed.`);

    instance.makeGuess(30);
    expect(wrapper.state('guesses')).toEqual([2, 30]);
    expect(wrapper.state('feedback')).toEqual(`You\'re Warm.`);

    instance.makeGuess(41);
    expect(wrapper.state('guesses')).toEqual([2, 30, 41]);
    expect(wrapper.state('feedback')).toEqual(`You\'re Hot!`);

    instance.makeGuess(50);
    expect(wrapper.state('guesses')).toEqual([2, 30, 41, 50]);
    expect(wrapper.state('feedback')).toEqual(`You got it!`);


  });
});

// describe('<Header />', () => {
//   it('Renders without crashing', () => {
//     shallow(<Header />);
//   });
// });
// describe('<GuessSection />', () => {
//   it('Renders without crashing', () => {
//     shallow(<GuessSection />);
//   });

// });
// describe('<InfoSection />', () => {
//   it('Renders without crashing', () => {
//     shallow(<InfoSection />);
//   });
// });
// //Follow Up
// describe('<StatusSection />', () => {
//   it('Renders without crashing', () => {
//     shallow(<StatusSection guesses={[]} auralStatus="" />);
//   });
// });