import React from 'react';
import { motion, useScroll } from 'framer-motion';
import img19 from './img/img19.png';
import img11 from './img/img11.png';
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
    <div>
      <motion.div
        variants={textVariant}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="relative mt-20 mb-8 ml-4 sm:ml-8 md:ml-16 lg:mt-20 lg:mb-8 lg:ml-52 xl:text-xl xl:ml-80">
          <span className="Quemsomos absolute top-0 text-4xl sm:text-5xl md:text-6xl uppercase decoration-indigo-500/30 text-left">
            Serviços Disponíveis
          </span>
        </div>
      </motion.div>

      <motion.div
        variants={Text1}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="container max-xl mx-auto flex flex-col md:flex-row items-center p-4"
      >
        <p className="text-base sm:text-lg md:text-base lg:text-2xl xl:text-3xl leading-relaxed text-justify mt-10 sm:mt-16 md:mb-20 lg:mt-24 2xl:-mt-32">
          Na empresa Sabrina Schreiber Engenharia, disponibilizamos uma ampla
          gama de serviços especializados, abrangendo desde reformas e projetos
          de interiores até regularizações, como retificação, fracionamento e
          fusão de áreas. Também desenvolvemos projetos detalhados para
          loteamento e realizamos averbações de construção em matrícula. Além
          disso, elaboramos memoriais e projetos para usucapião com precisão
          técnica. Nossos serviços incluem a elaboração de laudos técnicos,
          acompanhamento de obras e consultoria completa em engenharia, com
          projetos arquitetônicos, elétricos e hidrossanitários, sempre com foco
          na excelência e qualidade.
        </p>

        <img
          src={img19}
          alt="Sabrina"
          className="w-2/3 -mt-10 sm:mt-12 md:mt-0 md:w-1/5 lg:w-1/3 lg:visible md:visible sm:w-1/4 sm:ml-40 sm:mb-20 lg:-mr-10"
        />
      </motion.div>

      <div className="container max-xl mx-auto flex flex-col md:flex-row items-start p-4">
        <motion.div className="w-full md:w-1/3 py-4">
          <ul className="list-none pl-5 space-y-2 -ml-12 sm:text-xs md:text-xs lg:text-xs xl:text-xl 2xl:text-xl 2xl:mt-2 md:-mt-24 lg:-mt-10 xl:-mt-14 sm:-mt-80 sm:-ml-5 apresentacao1">
            <li className="shadow-md rounded-lg p-2">Reformas</li>
            <li className="shadow-md rounded-lg p-2">Projetos de Interiores</li>
            <li className="shadow-md rounded-lg p-2">Retificação de Áreas</li>
            <li className="shadow-md rounded-lg p-2">Fracionamento de Áreas</li>
            <li className="shadow-md rounded-lg p-2">Fusão de Áreas</li>
            <li className="shadow-md rounded-lg p-2">
              Projetos para Loteamento
            </li>
            <li className="shadow-md rounded-lg p-2">
              Averbações de Construção em Matrícula
            </li>
            <li className="shadow-md rounded-lg p-2">
              Memorial e Projeto para Usucapião
            </li>
          </ul>
        </motion.div>

        <motion.img
          src={img11}
          alt="Sabrina"
          className="w-full md:w-2/3 py-12 sm:w-1/3 md:visible invisible"
          variants={imageVariant}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        />

        <motion.div className="w-full md:w-1/3 py-4 mb-96">
          <ul className="list-none pl-5 space-y-2 sm:text-xs md:text-xs lg:text-xs xl:text-xl 2xl:text-xl 2xl:mt-17 2xl:mr-36 2xl:mt-20 md:-mt-10 lg:mt-2 xl:mt-2 sm:-mt-96 apresentacao2">
            <li className="shadow-md rounded-lg p-2 sm:text-xs md:text-xs lg:text-xs xl:text-xl">
              Laudos Técnicos
            </li>
            <li className="shadow-md rounded-lg p-2 sm:text-xs md:text-xs lg:text-xs xl:text-xl">
              Acompanhamento de Obra
            </li>
            <li className="shadow-md rounded-lg p-2 sm:text-xs md:text-xs lg:text-xs xl:text-xl">
              Consultoria e Assessoria de Serviços de Engenharia
            </li>
            <li className="shadow-md rounded-lg p-2 sm:text-xs md:text-xs lg:text-xs xl:text-xl">
              Projetos de Engenharia
            </li>
            <li className="shadow-md rounded-lg p-2 sm:text-xs md:text-xs lg:text-xs xl:text-xl">
              Projeto Arquitetônico
            </li>
            <li className="shadow-md rounded-lg p-2 sm:text-xs md:text-xs lg:text-xs xl:text-xl">
              Projeto Elétrico
            </li>
            <li className="shadow-md rounded-lg p-2 sm:text-xs md:text-xs lg:text-xs xl:text-xl">
              Projeto Hidrossanitário
            </li>
            <li className="shadow-md rounded-lg p-2 sm:text-xs md:text-xs lg:text-xs xl:text-xl">
              Projeto de Drenagem Pluvial
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
