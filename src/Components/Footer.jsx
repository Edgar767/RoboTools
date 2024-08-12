import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="relative z-10">
      <footer className="px-4 py-6 text-gray-800 dark:text-gray-800 backdrop-blur-md bg-gradient-to-t from-gray-500 via-transparent to-transparent">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <Link to="/inicio" className="flex items-center text-xl">
              <img
                className="h-10 w-auto md:h-12 lg:h-16 mr-2"
                src="/img/logo.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900">Productos</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">Features</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Integrations</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Pricing</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900">Nosotros</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">Privacy</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-900">Otros</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">Public API</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Documentation</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">Guides</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase dark:text-gray-900">redes sociales</div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/Robotools"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <img
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/robotools.rt/"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <img
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm text-center dark:text-gray-700">© 2024 Robotools. Todos los Derechos Reservados.</div>
      </footer>
    </div>
  );
};

export default Footer;
