import { useEffect, useState } from 'react';

const useInitialState = (API) => {
  const [countries, setCountries] = useState({ 'population': [], 'countries': [] });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);
  return countries;
};
export default useInitialState;
