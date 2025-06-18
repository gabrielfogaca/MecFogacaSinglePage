import React, { useState, useEffect } from 'react';
import img18 from './img/img18.jpeg';
import background from './img/background.jpeg';
import ssmobile from './img/bgresized.jpeg';
import logo2 from './img/logo2.jpeg';
import projeto from './img/projeto4.jpg';
import { motion, useScroll } from 'framer-motion';
import { img } from 'framer-motion/client';

const right = {
  offscreen: { opacity: 0, x: -100 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

const left = {
  offscreen: { opacity: 0, x: 100 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { duration: 1 },
  },
};

function getWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return { width, height };
}

function Inicio() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };

    // Adiciona o listener para o evento de resize da janela
    window.addEventListener('resize', handleResize);

    // Remove o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {windowSize.width < 740 ? (
        <div
          className="justify-center items-center bg-fixed h-screen static"
          style={{
            backgroundImage: `url(${ssmobile})`,
            backgroundAttachment: 'fixed',
          }}
        ></div>
      ) : (
        <div
          className="flex justify-center items-center bg-fixed bg-no-repeat bg-center bg-cover h-screen"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      )}
    </>
  );
}

export default Inicio;
