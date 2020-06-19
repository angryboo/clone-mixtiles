import React from 'react';
import Logo from '../../../Images/Main/logo.png';
import PressLogo from '../../../Images/Main/pressLogo@2x.webp';

const MainTemplate = () => {
  return (
    <div className="main-template">
      <h1 className="main-title ally-hidden">Mixtitle</h1>
      <img src={Logo} alt="이미지가 없습니다" />
      <div>Turn your photos into affordable, stunning wall art</div>
      <iframe
        allowtransparency="true"
        title="Wistia video player"
        allowFullscreen
        frameBorder="0"
        scrolling="no"
        className="wistia_embed"
        name="wistia_embed"
        src="https://fast.wistia.net/embed/iframe/twg93kgvh9"
        width="800"
        height="450"
      />
      <div>This is heaven</div>
      <img src={PressLogo} alt="이미지가 없습니다" />
    </div>
  );
};

export default MainTemplate;
