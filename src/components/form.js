import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/form.scss';

const Form = () => {
  let [details, setDetails] = useState({ name: '', age: '', count: '' });
  let [name, setName] = useState('hello');
  let changeName = event => {
    setName(event.target.value);
  };
  let getDetails = () => {
    let xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.onload = function() {
      if (this.status === 200) {
        let response = JSON.parse(this.responseText);
        setDetails({
          name: response.name,
          age: response.age,
          count: response.count
        });
        console.log(this.getResponseHeader('X-Rate-Limit-Remaining'));
      }
    };

    /*
    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.DONE) {
      }
    });
    */

    xhr.open('GET', `https://api.agify.io?name=${name}`);

    xhr.send();
  };
  return (
    <Container fluid={true} className='text-center'>
      <Row>
        <Col xs={12}>
          <h4 className='text-danger'>Enter First Name:</h4>
          <input onChange={changeName} className='p-1 mb-2'></input>
        </Col>
        <Col xs={12}>
          <Button onClick={getDetails}>See Age</Button>
        </Col>
        <hr className='seperator m-3'></hr>
        <Col xs={12}>
          <h3 className='text-success display-4'>Results</h3>
          <h5>Name: {details.name}</h5>
          <h5>Age: {details.age}</h5>
          <h5>Occurances: {details.count}</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
