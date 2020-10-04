import React from 'react';

const Country = ({ children }) => {
  return (
    <div className='carousel'>
      <div className='carousel__container'>{children}</div>
    </div>
  );
};

export default Country;
