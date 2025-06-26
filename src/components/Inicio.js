import React, { useState, useEffect } from 'react';
import f150frente from './img/150Frentefiltro.JPG';
import f250motor from './img/motor.jpg';
import f250 from './img/f250.jpg';
import f250sol from './img/f250pordosolbg.png';
import pikcup from './img/pikcup.jpg';
import frente from './img/frente.jpg';

const frases = [
  'MECÂNICA FOGAÇA | ESPECIALIZADA EM SISTEMA COMMON RAIL',
  'Bem-vindo ao mundo das Brutas',
];

const imagensMobile = [frente, pikcup, f250motor];
const imagensDesktop = [f150frente, f250, f250sol];

function Inicio() {
  const [texto, setTexto] = useState('');
  const [indexFrase, setIndexFrase] = useState(0);
  const [digitando, setDigitando] = useState(true);
  const [bgIndex, setBgIndex] = useState(0);
  const [vh, setVh] = useState(window.innerHeight);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 820);

  // Alterna o background a cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % imagensMobile.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Detecta redimensionamento de tela para mobile
  useEffect(() => {
    const handleResize = () => {
      setVh(window.innerHeight);
      setIsMobile(window.innerWidth < 820);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Efeito de digitação
  useEffect(() => {
    let timeout;
    if (digitando) {
      if (texto.length < frases[indexFrase].length) {
        timeout = setTimeout(() => {
          setTexto(frases[indexFrase].slice(0, texto.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setDigitando(false);
        }, 1500);
      }
    } else {
      if (texto.length > 0) {
        timeout = setTimeout(() => {
          setTexto(texto.slice(0, texto.length - 1));
        }, 50);
      } else {
        setDigitando(true);
        setIndexFrase((prev) => (prev + 1) % frases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [texto, digitando, indexFrase]);

  const conteudoTexto = (
    <>
      {texto}
      <span className="blinking-cursor">|</span>
    </>
  );

  const bgStyle = {
    backgroundImage: `url(${
      (isMobile ? imagensMobile : imagensDesktop)[bgIndex]
    })`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: isMobile ? '100% 100%' : 'cover',
    backgroundAttachment: 'scroll',
    height: `${vh}px`,
    transition: 'background-image 1s ease-in-out',
  };

  return (
    <>
      <div
        key={bgIndex}
        className="flex justify-center items-center w-full min-h-screen transition-opacity duration-1000 ease-in-out"
        style={bgStyle}
      >
        <h1 className="text-center bg-[#282828]/70 backdrop-blur-sm text-white uppercase font-bold text-3xl py-4 px-2 w-full">
          <strong className="block">{conteudoTexto}</strong>
        </h1>
      </div>

      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 24px;
          color: white;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

export default Inicio;
