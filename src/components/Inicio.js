import React, { useState, useEffect } from 'react';
import f250pordosolbg from './img/f250pordosolbg.png';
import f150frente from './img/150Frentefiltro.jpeg';
import f250motor from './img/motor.jpg';
import f250 from './img/f250.jpg';

const frases = [
  'MECÂNICA FOGAÇA | ESPECIALIZADA EM SISTEMA COMMON RAIL',
  'Bem-vindo ao mundo das Brutas',
];

const imagensMobile = [f150frente, f250pordosolbg, f250motor];
const imagensDesktop = [f250pordosolbg, f150frente, f250];

function Inicio() {
  const [texto, setTexto] = useState('');
  const [indexFrase, setIndexFrase] = useState(0);
  const [digitando, setDigitando] = useState(true);
  const [bgIndex, setBgIndex] = useState(0);
  const isMobile = window.innerWidth < 740;
  const imagens = isMobile ? imagensMobile : imagensDesktop;

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % imagens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [imagens.length]);

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

  return (
    <>
      <div
        className="flex justify-center items-center bg-fixed bg-no-repeat bg-center bg-cover h-screen transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${imagens[bgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? 'center' : 'left',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="text-center bg-[#282828] text-white uppercase font-bold text-3xl py-4 px-[5px] w-full bg-opacity-60">
          <strong className="block text-center">{conteudoTexto}</strong>
        </h1>
      </div>

      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 24px;
          color: black;
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
