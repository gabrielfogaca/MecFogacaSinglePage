import React from 'react';
import oficina from './img/oficina.png'; // substitua com o nome da sua imagem real
import { ReactComponent as WhatsApp } from './wppblack2.svg';

function Contato() {
  return (
    <div
      id="contato"
      className="w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${oficina})`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-6 rounded-lg max-w-xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
          Contate-nos
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mb-6">
          Precisa de ajuda com bicos injetores, bombas de alta ou diagnóstico?
          Entre em contato agora mesmo com a equipe da{' '}
          <strong>Mecânica Fogaça</strong> via WhatsApp e tenha atendimento
          rápido, direto e especializado!
        </p>
        <a
          href="https://wa.me/5555999287017"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1ebc5d] text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 text-lg font-semibold transition-colors"
        >
          <WhatsApp className="w-6 h-6" />
          Fale Conosco no WhatsApp
        </a>
      </div>
    </div>
  );
}

export default Contato;
