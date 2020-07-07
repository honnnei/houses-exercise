import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { shallow, mount } from 'enzyme';
import { Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Homepage from '../containers/Homepage';
import AboutUs from '../components/AboutUs';
import Offer from '../components/Offer';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  // it('matches the snapshot', () => {
  //   const tree = renderer.create(<App />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  test('contains Routes', () => {
    expect(wrapper.containsMatchingElement(<Route />)).toEqual(true);
  });

  test('contains 4 Routes', () => {
    expect((wrapper.find('Route').length)).toEqual(5);
  });

   test('Route to HomePage is exact', () => {     
    let wrap = mount(<App />);                                 
    let route = wrap.find(<Route path='/' exact component={Homepage}/>);
    expect(route).toBeTruthy();
   });

   test('Route to NewUser is exact', () => {   
    let wrap = mount(<App />);                                       
    let route = wrap.find( <Route path='/o-nas' exact component={AboutUs}/>);
    expect(route).toBeTruthy();
   });

  test('Route to Habit Tracker Add is exact', () => {   
    let wrap = mount(<App />);                                       
    let route = wrap.find( <Route
      path='/oferta'
      exact 
      component={Offer}
  />);
    expect(route).toBeTruthy();
  });

    
});

