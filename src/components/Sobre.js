import React from 'react';
import jeep from './img/jeep.jpg';
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

function Sobre() {
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
            <img
              src={jeep}
              alt="Logo"
              className="object-cover rounded-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="leading-relaxed text-justify text-base sm:text-lg md:text-xl lg:text-2xl mb-32 space-y-4">
            <strong className="block text-center">
              🚛 MECÂNICA FOGAÇA | ESPECIALIZADA EM SISTEMA COMMON RAIL
            </strong>
            Na <strong>Mecânica Fogaça</strong>, somos especialistas em{' '}
            <strong>injeção eletrônica diesel</strong> e sistemas{' '}
            <strong>Common Rail</strong>. Trabalhamos com alto padrão de
            qualidade, tecnologia de ponta e profissionais qualificados para
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
