import InputField from '../components/InputField';
import backImage from '../assets/Vector.png';
import logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';

export const Authentification = () => {
  const navigate = useNavigate();
  const handleAuthentication = () => {
    navigate('/choice');
  };

  return (
    <div className="relative flex w-full h-screen items-center justify-center">
      <img
        className="fixed top-0 left-0 w-full h-[65rem] opacity-50"
        src={backImage}
        alt="bgImg"
      />
      <div className="relative p-8 flex flex-col justify-center rounded-2xl bg-white w-[28rem] h-[30rem] z-10">
        <img id="logoMain" src={logo} alt="logo" />
        <h1 className="mb-6 text-2xl text-[#333] font-semibold">
          Connexion à l'évênement
        </h1>
        <InputField label="Email" className="mb-4" type='text'/>
        <InputField label="Password" className="mb-4" type='password'/>
        <button
          onClick={handleAuthentication}
          className="signin-btn rounded-lg w-full mb-8 text-white font-medium transition-all duration-300"
        >
          Se connecter
        </button>
        <p className="text-center text-[#333]">
          Il faudra se connecter ici afin de charger les informations de
          l'évenement
        </p>
      </div>
    </div>
  );
};
