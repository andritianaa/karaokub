import React from 'react';
import './../assets/styles/Karaocub.css';
import drawerBackground from './../assets/drawerBackground.png';
export const Karaocub: React.FC = () => {
  return (
    <div id="karaocub">
      <div
        id="drawer"
        style={{
          backgroundImage: `url(${drawerBackground})`,
          width: '300px',
          height: '100vh',
          marginLeft: '-3px'
        }}
      >
        
      </div>
    </div>
  );
};
