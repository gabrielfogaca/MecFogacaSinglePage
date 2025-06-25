import React, { useState } from 'react';
import foto1 from './img/foto1.jpg';
import foto2 from './img/foto2.jpg';
import foto3 from './img/foto3.jpg';
import foto4 from './img/foto4.jpg';
import foto5 from './img/foto5.jpg';
import foto6 from './img/foto6.jpg';
import foto7 from './img/foto7.jpg';
import foto8 from './img/foto8.jpg';
import foto9 from './img/foto9.jpg';

import { motion, useScroll } from 'framer-motion';

import './Font.css';

const SobreMotion: Variants = {
  offscreen: {
    x: 10,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'easeOut',
      duration: 0.5,
    },
  },
};

const imagens = [foto7, foto1, foto2, foto3, foto4, foto5, foto6, foto8, foto9];

function Sobre() {
  const [index, setIndex] = useState(0);
  const total = imagens.length;

  const nextSlide = () => setIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setIndex((prev) => (prev - 1 + total) % total);
  const { scrollYProgress } = useScroll();

  return (
    <div id="sobre" className="container max-xl mx-auto p-4">
      {/* Título Centralizado */}
      <h1 className="text-4xl font-bold text-center mb-8 uppercase">
        QUEM SOMOS
      </h1>

      {/* Conteúdo principal */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Coluna Esquerda */}
        <div className="w-full md:w-1/2 flex justify-center pr-4">
          <div className="relative w-full max-w-md">
            <div className="relative w-full h-[35rem] -mt-5 overflow-hidden rounded-lg">
              <img
                src={imagens[index]}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full transition-all duration-500"
              />

              {/* Botão Anterior */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              >
                ‹
              </button>

              {/* Botão Próximo */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="leading-relaxed text-justify text-base sm:text-lg md:text-xl lg:text-2xl mb-32 space-y-4">
            <strong className="block text-center">
              🚛 MECÂNICA FOGAÇA | ESPECIALIZADA EM SISTEMA COMMON RAIL
            </strong>
            Na <strong>Mecânica Fogaça</strong>, somos especialistas em{' '}
            <strong>injeção eletrônica diesel</strong> -{' '}
            <strong> sistemas Common Rail</strong>. Trabalhamos com alto padrão
            de qualidade, tecnologia de ponta e profissionais qualificados para
            garantir o máximo desempenho e economia do seu motor. 🔧{' '}
            <strong>Nossos serviços incluem:</strong>
            <ul className="list-disc pl-8 mt-4 space-y-2">
              <li>
                ✔️ Recondicionamento de <strong>bicos injetores</strong>
              </li>
              <li>
                ✔️ Reparos em <strong>bombas de alta e baixa pressão</strong>
              </li>
              <li>
                ✔️ Manutenção de <strong>unidades injetoras</strong>
              </li>
              <li>
                ✔️ <strong>Diagnóstico preciso de falhas</strong> com
                equipamentos avançados
              </li>
              <br />
            </ul>
            🚛 Atendemos veículos leves e pesados com agilidade, confiança e
            garantia de serviço.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
