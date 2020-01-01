import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { InformationContext } from '../contexts/InformationContext';
import uuid from 'uuid';

export default function Information() {
  let [info, , showInfo, setShowInfo] = useContext(InformationContext);

  let handleClose = () => {
    setShowInfo(false);
  };

  return (
    <>
      <Modal
        aria-labelledby='contained-modal-title-vcenter'
        show={showInfo}
        onHide={handleClose}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title
            id='contained-modal-title-vcenter'
            className='text-capitalize'
          >
            Results for <span className='text-success'>{info.name}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='lead'>
          <p className='font-weight-bold'>Age: {info.age}</p>
          <p>Count: {info.ageCount}</p>
          <hr></hr>
          <p className='font-weight-bold'>Gender: {info.gender}</p>
          <p>Probability: {info.genderProbability * 100}%</p>
          <p>Count: {info.genderCount}</p>
          <hr></hr>
          <p className='font-weight-bold'>Nationality</p>
          <div>
            {info.country.map(country => (
              <span key={uuid()}>
                <p>Country: {country.country_id}</p>
                <p>Probability: {country.probability * 100}%</p>
              </span>
            ))}
          </div>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
