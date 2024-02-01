//import React from 'react';
import Banner from '../components/Banner/Banner';
import Catalog from '../components/Catalog/Catalog';
import PhraseButton from '../components/PhraseButton/PhraseButton';
import OffersBlock from '../components/OffersBlock/OffersBlock';
import ReviewsBlock from '../components/ReviewsBlock/ReviewsBlock';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Catalog />
      <PhraseButton />
      <OffersBlock />
      <ReviewsBlock />
    </div>
  );
};

export default Home;