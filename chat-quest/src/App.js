import React from 'react';
import './App.css';
import Contact from './components/Contact';
import PropTypes from 'prop-types';

function App() {
  return (
    <div>
      <Contact name="Vincent Nelson" 
      avatar='https://randomuser.me/api/portraits/men/40.jpg' 
      online />
      <Contact name="tesRafael Gutierrez" 
      avatar='https://randomuser.me/api/portraits/men/41.jpg'/>
      <Contact name="Caleb Murray"
      avatar='https://randomuser.me/api/portraits/men/46.jpg' 
      online />
    </div>
  );
}


export default App;
