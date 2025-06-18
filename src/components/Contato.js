import React, { useRef } from 'react';
import img1 from './img/img16.png';
import './Font.css';
import { ReactComponent as WhatsApp } from './wppblack2.svg';
import emailjs from '@emailjs/browser';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xml942k', 'template_nt78fcq', form.current, {
        publicKey: 'bPevC8pZvlr3Pe9NX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success(
            'Mensagem enviada com sucesso, responderemos assim que possivel!',
            {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
              transition: Bounce,
            },
          );
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error(
            'Não foi possivel enviar a mensagem. Por favor, entre em contato através do nosso WhatsApp!',
            {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
              transition: Bounce,
            },
          );
          e.target.reset();
        },
      );
  };

  return (
    <div
      className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen p-4 xl:-mt-96 -mt-52 mb-52"
      id="contato"
    >
      <section className="formcarry-container md:w-1/2 w-full p-4">
        <form ref={form} onSubmit={sendEmail} encType="multipart/form-data">
          <div className="formcarry-block mb-4">
            <p className="Quemsomos block text-4xl md:text-4xl mb-4">
              Entre em contato conosco
            </p>
            <label
              htmlFor="fc-generated-1-name"
              className="block text-sm md:text-base mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              name="user_name"
              id="fc-generated-1-name"
              placeholder="Nome completo"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="formcarry-block mb-4">
            <label
              htmlFor="fc-generated-1-email"
              className="block text-sm md:text-base mb-2"
            >
              Endereço de Email
            </label>
            <input
              type="email"
              name="from_name"
              id="fc-generated-1-email"
              placeholder="Seu@Email.com"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="formcarry-block mb-4">
            <label
              htmlFor="fc-generated-1-message"
              className="block text-sm md:text-base mb-2"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="fc-generated-1-message"
              placeholder="Digite aqui sua mensagem..."
              className="w-full p-2 border rounded h-32"
              required
            ></textarea>
          </div>

          <div className="formcarry-block flex">
            <button
              type="submit"
              value="send"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Enviar
            </button>
            <a
              href="https://wa.me/message/TLIN42U6POA2H1"
              target="_blank"
              className="bg-blue-500 text-white py-2 px-4 rounded ml-4 flex flex-row"
            >
              {' '}
              <WhatsApp className="w-6 h-6 mr-2"></WhatsApp>
              WhatsApp
            </a>
          </div>
        </form>
      </section>
      <div className="md:w-1/2 w-5/12 flex justify-center mt-4 md:mt-0 md:ml-4">
        <img src={img1} alt="Contato" className="w-96 h-auto rounded" />
      </div>
    </div>
  );
}

export default Contato;
