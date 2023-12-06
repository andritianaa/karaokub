import React, { useEffect, useRef } from 'react';
import logo from './../assets/Logo.png';
import record from './../assets/icons/record.svg';

export const RecordVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Erreur lors de l'accès à la webcam :", error);
      }
    };
    startWebcam();
    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream?.getTracks();
        tracks?.forEach((track) => track.stop());
      }
    };
  }, []);
  return (
    <div id="videoRecord">
      <img id="logoMain" src={logo} alt="logo" />
      <h1>Enregistrer un vidéo d'or</h1>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{ maxWidth: '100%', transform: 'scaleX(-1)' }}
      />
      <div id="controls">
        <div className="record">
          <img src={record} alt="" />
        </div>
      </div>
    </div>
  );
};
