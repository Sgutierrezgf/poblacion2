import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Country from '../components/Country';
import CountryItem from '../components/CountryItem';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  return (
    <div>
      <Header />
      {
        initialState.population?.length > 0 && (
          <Country>
            <CountryItem />
          </Country>
        )
      }
      <Search />
      <Country>
        {
          initialState.countries?.map((item) => <CountryItem key={item.id} {...item} />)
        }

      </Country>
    </div>
  );
};

export default App;
