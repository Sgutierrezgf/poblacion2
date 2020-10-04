import React, { useState } from 'react';
import '../styles/countriesitem.scss';
import Modalcountry from '../modals/Modalcountry';

const CountryItem = ({ flag, name, capital, region, population, demonym, area, nativeName, timezones }) => {
  const [modal, setmodal] = useState(false);
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={flag} alt={name} />
      <div className='carousel-item__details'>
        <button
          className='sobreMiButton'
          type='submit'
          onClick={() => setmodal(true)}
        >
          <p className='carousel-item__details--title'>
            {name}
          </p>
        </button>
        { modal && <Modalcountry closeModal={() => setmodal(false)}> </Modalcountry> }
      </div>
    </div>
  );
};

export default CountryItem;
