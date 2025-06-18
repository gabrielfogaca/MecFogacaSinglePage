import React from 'react';
import emp1 from './img/empresa1.jpg';
import emp2 from './img/empresa2.jpg';
import emp3 from './img/empresa3.jpg';
import emp4 from './img/empresa4.jpg';
import emp5 from './img/empresa5.jpg';
import emp6 from './img/empresa6.jpg';
import emp7 from './img/empresa7.jpg';

function EmpreasaParceiras() {
  return (
    <div
      className="flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 overflow-hidden group"
      id="localizacao"
    >
      <div className="flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 gap-2 sm:gap-4 mb-8 animate-loop-scroll">
        <img
          src={emp1}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
        <img
          src={emp2}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
        <img
          src={emp3}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
        <img
          src={emp4}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
        <img
          src={emp5}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
        <img
          src={emp6}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
        <img
          src={emp7}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
      </div>
      <div
        className="flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16 gap-2 sm:gap-4 mb-8 animate-loop-scroll"
        aria-hidden="true"
      >
        <img
          src={emp1}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
        <img
          src={emp2}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
        <img
          src={emp3}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
        <img
          src={emp4}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
        <img
          src={emp5}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
        <img
          src={emp6}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
        <img
          src={emp7}
          alt=""
          className="max-w-24 sm:max-w-32 md:max-w-40 lg:max-w-48 rounded-lg"
        />
      </div>
    </div>
  );
}

export default EmpreasaParceiras;
