import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme'
import App from './App';

describe('App', () => {
  it('renders via ReactDOM without crashing', async () => {
    const div = document.createElement('div');
    fetch.mockResponseOnce(JSON.stringify([]))
    await ReactDOM.render(<App />, div).componentDidMount()
    ReactDOM.unmountComponentAtNode(div)
  });

  it('renders via Enzyme without crashing', () => {
    mount(<App />)
  })

  it('renders the header', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.contains('Welcome to Movies!')).toEqual(true)
  })
})