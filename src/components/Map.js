import React from 'react';
import './Font.css';

function Map() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-right p-4 rtl mt-10 mb-44">
      {/* Coluna da direita - Endereço */}
      <div className="md:w-1/2 w-full md:mr-8 mt-8 md:mt-14">
        <p className="text-lg sm:text-xl md:text-4xl text-right mb-2 Quemsomos">
          Nossa oficina está localizada no endereço:
        </p>
        <p className="text-base sm:text-lg md:text-2xl text-right mb-2">
          Rua Miguel Capssa
        </p>
        <p className="text-base sm:text-lg md:text-2xl text-right mb-2">
          Nº 58
        </p>
        <p className="text-base sm:text-lg md:text-2xl text-right mb-2">
          Assis Brasil
        </p>
        <p className="text-base sm:text-lg md:text-2xl text-right mb-2">
          Ijuí - Rio Grande do Sul
        </p>
      </div>

      {/* Coluna da esquerda - Mapa */}
      <div className="md:w-1/2 w-full mt-4 md:mt-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.064588399462!2d-53.90050182323952!3d-28.3811915121024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fc33fecfe6fbf9%3A0x9d3470be63be67a8!2sMEC%C3%82NICA%20FOGA%C3%87A%20BOMBAS%20BICOS%20E%20UNIDADES%20IJU%C3%8D!5e0!3m2!1spt-BR!2sbr!4v1750278134796!5m2!1spt-BR!2sbr"
          className="w-full h-48 sm:h-64 md:h-80"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
