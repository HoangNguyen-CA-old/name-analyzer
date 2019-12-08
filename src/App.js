import React, { useState, useEffect } from 'react';
import './App.scss';
import Form from './components/form';

function App() {
  let loading = useState(true);

  let getAge = name => {
    var data = null;

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open('GET', `https://api.agify.io?name=${name}`);

    xhr.send(data);
  };

  useEffect(() => {}, []);
  return (
    <>
      <Form />
    </>
  );
}

export default App;
