import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renderizando el About',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<About  />, div);
})