import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);

  return initialState.length === 0 ? <h1> Cargando... </h1> : (
    <div className='App'>
      <Header />
      <Search />
      {
        Object.keys(initialState)
          .map((category) => {
            if (initialState[category].length) {
              return (
                <Categories key={category} title={category}>
                  <Carousel>
                    {initialState[category].map((item) => <CarouselItem key={item.id} {...item} />)}
                  </Carousel>
                </Categories>
              );
            }
          })
      }
      <Footer />
    </div>
  );
};

export default App;