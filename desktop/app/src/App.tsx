import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authentification } from './views/Authentification';
import { ActionChoice } from './views/ActionChoice';
import backImage from './assets/background.png';
import { Karaocub } from './views/Karaocub';
import { RecordVideo } from './views/RecordVideo';
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentification />} />
          <Route path="/choice" element={<ActionChoice />} />
          <Route path="/karaocub" element={<Karaocub />} />
          <Route path="/RecordGoldenVideo" element={<RecordVideo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
