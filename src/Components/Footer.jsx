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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="flex items-center p-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/robotools.rt/"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.781-1.443-2.833-1.849-1.020-0.396-2.176-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.4c4.321 0 4.845 0.016 6.561 0.094 1.763 0.079 2.703 0.375 3.335 0.661 0.795 0.292 1.485 0.646 2.046 1.207 0.611 0.611 0.951 1.304 1.207 2.046 0.287 0.632 0.582 1.572 0.661 3.335 0.078 1.716 0.094 2.242 0.094 6.561s-0.016 4.845-0.094 6.561c-0.079 1.763-0.375 2.703-0.661 3.335-0.292 0.795-0.646 1.485-1.207 2.046-0.611 0.611-1.304 0.951-2.046 1.207-0.632 0.287-1.572 0.582-3.335 0.661-1.716 0.078-2.242 0.094-6.561 0.094s-4.845-0.016-6.561-0.094c-1.763-0.079-2.703-0.375-3.335-0.661-0.795-0.292-1.485-0.646-2.046-1.207-0.611-0.611-0.951-1.304-1.207-2.046-0.287-0.632-0.582-1.572-0.661-3.335-0.078-1.716-0.094-2.242-0.094-6.561s0.016-4.845 0.094-6.561c0.079-1.763 0.375-2.703 0.661-3.335 0.292-0.795 0.646-1.485 1.207-2.046 0.611-0.611 1.304-0.951 2.046-1.207 0.632-0.287 1.572-0.582 3.335-0.661 1.716-0.078 2.242-0.094 6.561-0.094zM16 6.4c-5.288 0-9.6 4.312-9.6 9.6s4.312 9.6 9.6 9.6 9.6-4.312 9.6-9.6-4.312-9.6-9.6-9.6zM16 22.4c-4.817 0-8.8-3.983-8.8-8.8s3.983-8.8 8.8-8.8 8.8 3.983 8.8 8.8-3.983 8.8-8.8 8.8zM19.2 8.8c-0.728 0-1.2 0.592-1.2 1.2s0.592 1.2 1.2 1.2 1.2-0.592 1.2-1.2-0.592-1.2-1.2-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
		<div className="py-6 text-sm text-center dark:text-gray-700">© 2023 Company Co. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Footer;
