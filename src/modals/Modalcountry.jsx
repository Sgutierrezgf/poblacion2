import React from 'react';
import '../styles/modalCountry.scss';

const Modalcountry = (props, name, capital, region, population, demonym, area, nativeName, timezones) => {
  const { closeModal } = props;
  return (
    <div className='Modal'>
      <div className='Modal_container'>
        <button className='modal_close-button' type='submit' onClick={closeModal}>X</button>
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Modalcountry;
