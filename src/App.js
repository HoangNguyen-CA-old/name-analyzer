import React from 'react';
import './App.scss';
import Form from './components/Form';
import InformationModal from './components/InformationModal';
import InformationProvider from './contexts/InformationContext';

function App() {
  return (
    <InformationProvider>
      <Form />
      <InformationModal></InformationModal>
    </InformationProvider>
  );
}

export default App;
