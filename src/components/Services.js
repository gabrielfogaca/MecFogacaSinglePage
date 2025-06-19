import React from 'react';
import { motion, useScroll } from 'framer-motion';
import bicoinjetor from './img/bicosinjetores.jpg';
import bombaebico from './img/bombaebico.png';
import diagnosticocomscanner from './img/diagnosticocomscanner.jpg';
import turbina from './img/turbina.jpg';
import bombadealta from './img/bombadealta.jpg';
import './Font.css';
import './Service.css';

const Text1: Variants = {
  offscreen: {
    x: 0,
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

const textVariant = {
  offscreen: { opacity: 0, x: 0 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'easeOut',
      duration: 1,
    },
  },
};

const imageVariant = {
  offscreen: { opacity: 0, y: 0 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'easeOut',
      duration: 1,
    },
  },
};

const FirstText = {
  offscreen: { opacity: 0, y: 0 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'easeOut',
      duration: 1,
    },
  },
};

function Services() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="pt-16 px-4 bg-gray-200">
      <h2 className="text-4xl font-bold text-center mb-8 uppercase">
        Serviços
      </h2>

      <div className="flex justify-center">
        <div className="w-full max-w-5xl p-6 bg-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-3">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <img
                className="w-full h-48 object-cover"
                src={bicoinjetor}
                alt="Produto 1"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">
                  Manutenção e recondicionamento de Bicos injetores
                </h2>
                <p className="text-gray-600 mt-2 flex-grow">
                  Especialistas em recondicionamento de bombas e bicos
                  injetores, com tecnologia, garantia e confiança para o melhor
                  desempenho do seu motor. 🚛 Atendemos veículos leves e
                  pesados. 🔧 Qualidade, economia e durabilidade!
                </p>
                <button
                  className="w-full bg-[#FF5E1A] text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors mt-6"
                  style={{ marginBottom: '5px' }}
                >
                  <a href="https://wa.me/5555999287017" target="_blank">
                    Contate-nos
                  </a>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <img
                className="w-full h-48 object-cover"
                src={diagnosticocomscanner}
                alt="Produto 2"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">
                  Luz acesa no painel? A gente descobre o problema pra você!
                </h2>
                <p className="text-gray-600 mt-2 flex-grow">
                  Fazemos diagnóstico completo com equipamentos modernos e
                  precisão técnica. 🔍 Identificamos falhas eletrônicas,
                  mecânicas e no sistema de injeção. Evite surpresas — confie em
                  quem entende!
                </p>
                <button
                  className="w-full bg-[#FF5E1A] text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors mt-6"
                  style={{ marginBottom: '5px' }}
                >
                  <a href="https://wa.me/5555999287017" target="_blank">
                    Contate-nos
                  </a>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <img
                className="w-full h-48 object-cover"
                src={bombadealta}
                alt="Produto 3"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">
                  Manutenção e recondicionamento de Bombas de Alta e Baixa
                  Pressão!
                </h2>
                <p className="text-gray-600 mt-2 flex-grow">
                  Especializados em sistemas de injeção diesel e gasolina. ⚙️
                  Diagnóstico preciso, peças de qualidade e serviço com
                  garantia. 🔧 Seu veículo com desempenho e economia como no
                  primeiro dia!
                </p>
                <button
                  className="w-full bg-[#FF5E1A] text-white font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors mt-6"
                  style={{ marginBottom: '5px' }}
                >
                  <a href="https://wa.me/5555999287017" target="_blank">
                    Contate-nos
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
