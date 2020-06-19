import React from 'react';
import MainTemplate from '../Templates/Main/MainTemplate';
import DescriptionPrice from '../Templates/Main/DescriptionPrice';
import Slide from '../Templates/Main/Slide';
import DescriptionTile from '../Templates/Main/DescriptionTile';
import StarRating from '../Templates/Main/StarRating';
import DescriptionService from '../Templates/Main/DescriptionService';
import LinkTemplate from '../Templates/Main/LinkTemplate';
import Footer from '../Templates/Main/Footer';

const Main = () => {
  return (
    <div>
      <MainTemplate />
      <DescriptionPrice />
      <Slide />
      <DescriptionTile />
      <StarRating />
      <DescriptionService />
      <LinkTemplate />
      <Footer />
    </div>
  );
};

export default Main;
