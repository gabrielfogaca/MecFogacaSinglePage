import React from 'react';

function EmpreasaParceiras() {
  // Array com os três textos que serão repetidos
  const baseItems = ['Potência', 'Eficiência', 'Confiança'];

  // Repete os três textos várias vezes para o carrossel contínuo
  const items = Array(20).fill(baseItems).flat();

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-200 py-4">
      <ul
        className="flex animate-scroll-text gap-6 px-4 text-2xl font-bold uppercase "
        style={{ minWidth: '200%' }}
      >
        {items.map((item, i) => (
          <li key={i} className="flex items-center">
            {item}
            <span className="mx-3 select-none">•</span>
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes scroll-text {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-text {
          animation: scroll-text 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default EmpreasaParceiras;
