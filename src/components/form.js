import React, { useContext, useRef } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { InformationContext } from '../contexts/InformationContext';
import axios from 'axios';
import '../styles/form.scss';

const Form = () => {
  let [, setInfo, , setShowInfo] = useContext(InformationContext);

  let inputRef = useRef();
  let getInput = () => inputRef.current.value;

  let onSubmit = () => {
    if (getInput() !== '') {
      setShowInfo(true);

      let ageData;
      let genderData;
      let nationData;
      axios
        .get(`https://api.agify.io?name=${getInput()}`)
        .then(res => {
          ageData = {
            name: res.data.name,
            age: res.data.age,
            ageCount: res.data.count
          };
          return axios.get(`https://api.genderize.io?name=${getInput()}`);
        })
        .then(res => {
          genderData = {
            gender: res.data.gender,
            genderProbability: res.data.probability,
            genderCount: res.data.count
          };
          return axios.get(`https://api.nationalize.io?name=${getInput()}`);
        })
        .then(res => {
          nationData = {
            // array of objects {country_id: " " probability: " "}
            country: res.data.country
          };
          setInfo({ ...ageData, ...genderData, ...nationData });
        });
    }
  };

  return (
    <Container fluid={true} className='text-center' id='form_wrapper'>
      <Row>
        <Col xs={12}>
          <h4 className='text-danger'>Enter First Name:</h4>
          <input ref={inputRef} className='p-1 mb-2'></input>
        </Col>
        <Col xs={12}>
          <Button onClick={onSubmit}>See Information</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
