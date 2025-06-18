import React from 'react';
import img14 from './img/img14.png';
import img1 from './img/img15.jpeg';
import logo1 from './img/logo1.jpeg';
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
    <motion.div
      variants={SobreMotion}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div
        className="container max-xl mx-auto flex flex-col md:flex-row items-center p-4"
        id="sobre"
      >
        {/* Coluna Esquerda */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full">
            <img
              src={img14}
              alt="Logo"
              className="object-cover rounded-lg w-full h-auto"
            />
            <div className="absolute top-20 left-0 sm:top-24 md:top-40">
              <img
                src={logo1}
                alt="Logo"
                className="object-cover rounded-lg h-16 sm:h-24 md:h-40"
              />
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center mb-6 Quemsomos">
            QUEM SOMOS
          </h1>
          <p className="leading-relaxed text-justify text-lg sm:text-xl md:text-2xl lg:text-3xl mb-32">
            Sabrina Schreiber Engenharia é uma empresa que oferece uma vasta
            gama de serviços & projetos de engenharia civil, soluções em
            regularização imobiliária, consultoria e assessoria técnica com
            imparcialidade, ética e transparência. Com foco em reformas,
            projetos arquitetônicos, elétricos e hidráulicos, também atuamos em
            áreas como drenagem pluvial, retificação de áreas e loteamentos.
            Nossa equipe de especialistas trabalha com responsabilidade,
            garantindo segurança, inovação e eficiência em cada etapa dos
            processos. Sempre prezando pelo cumprimento das normas técnicas e
            pelas necessidades dos nossos clientes, buscamos resultados
            excepcionais e sustentáveis.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Sobre;

// <motion.div
//       variants={SobreMotion}
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={{ once: true, amount: 0.5 }}
//     >
//       <div className="container max-xl mx-auto flex flex-col md:flex-row items-center p-4">
//         <div className="w-full md:w-1/2 flex justify-center">
//           <div className="relative w-full">
//             <img
//               src={img14}
//               alt="Logo"
//               className="object-cover rounded-lg w-full h-auto"
//             />
//             <div className="absolute top-20 left-0 md:top-40">
//               <img
//                 src={logo1}
//                 alt="Logo"
//                 className="object-cover rounded-lg h-20 md:h-40"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="w-full md:w-1/2 flex flex-col justify-center">
//           <h1 className="text-9xl text-center mb-6 Quemsomos">QUEM SOMOS</h1>
//           <p className="leading-relaxed text-justify text-2xl">
//             Sabrina Schreiber Engenharia é uma empresa que oferece uma vasta
//             gama de serviços & projetos de engenharia civil, soluções em
//             regularização imobiliária, consultoria e assessoria técnica com
//             imparcialidade, ética e transparência. Com foco em reformas,
//             projetos arquitetônicos, elétricos e hidráulicos, também atuamos em
//             áreas como drenagem pluvial, retificação de áreas e loteamentos.
//             Nossa equipe de especialistas trabalha com responsabilidade,
//             garantindo segurança, inovação e eficiência em cada etapa dos
//             processos. Sempre prezando pelo cumprimento das normas técnicas e
//             pelas necessidades dos nossos clientes, buscamos resultados
//             excepcionais e sustentáveis.
//           </p>
//         </div>
//       </div>
//     </motion.div>
