import React from 'react';
import './../assets/styles/ActionChoice.css';
import board from './../assets/board.png';
import micro from './../assets/micro.png';
import logo from './../assets/Logo.png';
import videoGolden from './../assets/videoGolden.png';
import { useNavigate } from 'react-router-dom';
export const ActionChoice: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div id="choicePage">
      <img id="logoMain" src={logo} alt="logo" />
      <div id="choices">
        <div className="choice" onClick={()=> navigate('/karaocub')}>
          <img src={board} alt="" className="board" />
          <img src={micro} alt="" className="activity" />
        </div>
        <div className="choice" onClick={()=> navigate('/RecordGoldenVideo')}>
          <img src={board} alt="" className="board" />
          <img src={videoGolden} alt="" className="activity" />
        </div>
      </div>
    </div>
  );
};
