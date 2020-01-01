import React, { useState, createContext } from 'react';

export const InformationContext = createContext();

export default function InformationProvider(props) {
  let [showInfo, setShowInfo] = useState(false);
  let [info, setInfo] = useState({
    name: '',
    age: '',
    ageCount: '',
    gender: '',
    genderProbability: '',
    genderCount: '',
    country: []
  });
  return (
    <InformationContext.Provider value={[info, setInfo, showInfo, setShowInfo]}>
      {props.children}
    </InformationContext.Provider>
  );
}
