import React from 'react';
import './App.scss';
import Form from './components/Form';

function App() {
  return (
    <div className='wrapper text-center'>
      <h1 className='display-3'>Age Predictor</h1>
      <p className='lead'>
        A simple application that predicts the age of a person based on their
        first name using an external API
      </p>

      <Form />
    </div>
  );
}

export default App;
