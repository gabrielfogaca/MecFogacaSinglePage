import { ThemeProvider } from '@material-tailwind/react';
import logo from './img/logo2.jpeg';
import { ReactComponent as Facebook } from './facebookblack.svg';
import { ReactComponent as Instagram } from './instagramblack.svg';
import { ReactComponent as Linkedin } from './linkedinblack.svg';

function SimpleFooter() {
  return (
    <footer className="bg-white shadow p-8 -mt-44 white:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-32 sm:h-44"
              alt="Sabrina Schreiber Logo"
            />
          </a>

          {/* Redes Sociais */}
          <div className="flex flex-wrap items-center mb-6 text-gray-500 sm:mb-0 dark:text-gray-400 uppercase">
            <a
              href="https://www.instagram.com/eng.sabrinaschreiber/"
              target="blank"
              className="me-4 md:me-6 flex"
            >
              <Instagram className="w-6 h-6 sm:w-8 sm:h-8 mr-1"></Instagram>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61565196855155"
              target="blank"
              className="me-4 md:me-6 flex"
            >
              <Facebook className="w-6 h-6 sm:w-8 sm:h-8 mr-1"></Facebook>
            </a>
            <a
              href="https://www.linkedin.com/in/sabrina-schreiber-jesus-822807201/"
              target="blank"
              className="me-4 md:me-6 flex"
            >
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 mr-1"></Linkedin>
            </a>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="#sobre"
                className="hover:underline me-4 md:me-6 uppercase"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:underline me-4 md:me-6 uppercase"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#localizacao"
                className="hover:underline me-4 md:me-6 uppercase"
              >
                Localização
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:underline uppercase">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Direitos autorais */}
        <span className="block text-xs sm:text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{' '}
          <a
            href="https://github.com/gabrielfogaca"
            className="hover:underline"
          >
            GabrielFurlanFogaça™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default SimpleFooter;
