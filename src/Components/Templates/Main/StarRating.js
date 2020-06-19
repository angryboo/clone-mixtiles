import React from 'react';
import star from '../../../Images/Main/stars.png';

const StarRating = () => {
  return (
    <div className="star-rating-template">
      <img src={star} alt="이미지가 없습니다" />
      <div>4.8 STARS, 10,000+ APP STORE REVIEWS</div>
    </div>
  );
};

export default StarRating;
