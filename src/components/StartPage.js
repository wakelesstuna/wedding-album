import React from "react";
import BgImg from "../img/main.JPG";

const StartPage = ({ setIsOpen }) => {
  return (
    <div className='mainPage'>
      <img src={BgImg} alt='main' />
      <div className='mainTitleContainer'>
        <div className='mainTitleWrapper'>
          <h1>OSCAR OCH CAROLINE</h1>
          <a href='#main'>
            <div className='btn' onClick={() => setIsOpen(true)}>
              OPEN
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
