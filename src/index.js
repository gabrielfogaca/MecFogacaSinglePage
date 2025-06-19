import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Map from './components/Map';
import reportWebVitals from './reportWebVitals';
import EmpreasaParceiras from './components/Empresasparceiras';
import Contato from './components/Contato';
import SimpleFooter from './components/Footer';
import Avaliacoes from './components/Avaliacoes';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <Inicio />
      <Services />
      <Sobre />
      <EmpreasaParceiras />
      <Map />
      <Contato />
      <ToastContainer />
      <SimpleFooter />
    </div>
  </React.StrictMode>,
);

reportWebVitals();
