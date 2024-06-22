import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  HomeIcon, AcademicCapIcon, UserGroupIcon, EllipsisHorizontalCircleIcon, ShoppingBagIcon,
  BuildingStorefrontIcon, CalendarDaysIcon, BuildingLibraryIcon, NewspaperIcon,
  RocketLaunchIcon, FireIcon, Bars3Icon, XMarkIcon
} from "@heroicons/react/24/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("/");
  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveRoute(location.pathname);

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setNavbarTransparent(scrollTop === 0);
    };

    if (location.pathname === "/inicio") {
      setNavbarTransparent(true);
      window.addEventListener("scroll", handleScroll);
    } else {
      setNavbarTransparent(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = (route) => {
    setDropdownOpen(false);
    setMenuOpen(false);
    navigate(route);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (route) => activeRoute === route;

  return (
    <>
      <style>
        {`
          .transition-colors {
            transition: background-color 0.5s ease;
          }
          .duration-500 {
            transition-duration: 500ms;
          }
        `}
      </style>
      <div
        className={`sticky top-0 left-0 right-0 z-50 ${
          navbarTransparent
            ? "bg-transparent shadow-none transition-colors duration-500"
            : "bg-white shadow-md transition-colors duration-500"
        } px-4 md:px-20`}
      >
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center">
            <Link to="/inicio" className="flex items-center text-xl">
              <img
                className="h-10 w-auto md:h-12 lg:h-16 mr-2"
                src="/src/img/logo.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex flex-none">
            <ul className="menu menu-horizontal px-1 space-x-4">
              <li>
                <Link
                  to="/inicio"
                  className={`flex items-center font-bold transition duration-300 ${
                    isActive("/inicio")
                      ? "text-blue-400 hover:text-blue-500 focus:text-blue-500 bg-blue-100 hover:bg-blue-200 focus:bg-blue-200 rounded-full"
                      : "text-black hover:text-blue-300 hover:bg-blue-100 focus:text-blue-500 focus:bg-blue-100 relative rounded-full"
                  }`}
                >
                  <HomeIcon className="w-5 h-5 mr-1" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className={`flex items-center font-bold transition duration-300 ${
                    isActive("/nosotros")
                      ? "text-blue-400 hover:text-blue-500 focus:text-blue-500 bg-blue-100 hover:bg-blue-200 focus:bg-blue-200 rounded-full"
                      : "text-black hover:text-blue-300 hover:bg-blue-100 focus:text-blue-500 focus:bg-blue-100 relative rounded-full"
                  }`}
                >
                  <UserGroupIcon className="w-5 h-5 mr-1" />
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/programasescolares"
                  className={`flex items-center font-bold transition duration-300 ${
                    isActive("/programasescolares")
                      ? "text-blue-400 hover:text-blue-500 focus:text-blue-500 bg-blue-100 hover:bg-blue-200 focus:bg-blue-200 rounded-full"
                      : "text-black hover:text-blue-300 hover:bg-blue-100 focus:text-blue-500 focus:bg-blue-100 relative rounded-full"
                  }`}
                >
                  <AcademicCapIcon className="w-5 h-5 mr-1" />
                  Programas Escolares
                </Link>
              </li>
              <li ref={dropdownRef} className="relative">
                <button
                  onClick={handleDropdownToggle}
                  className={`flex items-center text-black font-bold transition duration-300 ${
                    dropdownOpen
                      ? "text-blue-400 hover:text-blue-500 focus:text-blue-500 bg-blue-100 hover:bg-blue-200 focus:bg-blue-200 rounded-full"
                      : "hover:text-blue-300 hover:bg-blue-100 focus:text-blue-300 focus:bg-blue-100 relative rounded-full"
                  }`}
                >
                  <EllipsisHorizontalCircleIcon className="w-5 h-5 mr-1" />
                  Más
                </button>
                {dropdownOpen && (
                  <ul className="absolute top-full right-0 mt-2 p-2 bg-white rounded shadow-lg w-64">
                    {[
                      { to: "/cursosrobotools", icon: <FireIcon className="w-5 h-5 mr-1" />, text: "Cursos Robotools" },
                      { to: "/rtsteamacademy", icon: <BuildingLibraryIcon className="w-5 h-5 mr-1" />, text: "RT Steam Academy" },
                      { to: "/salasinteractivas", icon: <RocketLaunchIcon className="w-5 h-5 mr-1" />, text: "Salas Interactivas" },
                      { to: "/productos", icon: <ShoppingBagIcon className="w-5 h-5 mr-1" />, text: "Productos" },
                      { to: "/tienda", icon: <BuildingStorefrontIcon className="w-5 h-5 mr-1" />, text: "Tienda" },
                      { to: "/eventos", icon: <CalendarDaysIcon className="w-5 h-5 mr-1" />, text: "Eventos" },
                      { to: "/noticias", icon: <NewspaperIcon className="w-5 h-5 mr-1" />, text: "Noticias" }
                    ].map((link) => (
                      <li className="my-2" key={link.to}>
                        <Link
                          to={link.to}
                          className={`flex items-center font-bold transition duration-300 ${
                            isActive(link.to)
                              ? "text-blue-400 hover:text-blue-500 focus:text-blue-500 bg-blue-100 hover:bg-blue-200 focus:bg-blue-200 rounded-full"
                              : "text-black hover:text-blue-300 hover:bg-blue-100 focus:text-blue-500 focus:bg-blue-100 relative rounded-full"
                          }`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          {link.icon}
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={handleMenuToggle}
              className="p-2 rounded-md text-black focus:outline-none"
            >
              {menuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col items-center space-y-4">
              {[
                { to: "/inicio", icon: <HomeIcon className="w-5 h-5 mr-1" />, text: "Inicio" },
                { to: "/nosotros", icon: <UserGroupIcon className="w-5 h-5 mr-1" />, text: "Nosotros" },
                { to: "/programasescolares", icon: <AcademicCapIcon className="w-5 h-5 mr-1" />, text: "Programas Escolares" },
                { to: "/cursosrobotools", icon: <FireIcon className="w-5 h-5 mr-1" />, text: "Cursos Robotools" },
                { to: "/rtsteamacademy", icon: <BuildingLibraryIcon className="w-5 h-5 mr-1" />, text: "RT Steam Academy" },
                { to: "/salasinteractivas", icon: <RocketLaunchIcon className="w-5 h-5 mr-1" />, text: "Salas Interactivas" },
                { to: "/productos", icon: <ShoppingBagIcon className="w-5 h-5 mr-1" />, text: "Productos" },
                { to: "/tienda", icon: <BuildingStorefrontIcon className="w-5 h-5 mr-1" />, text: "Tienda" },
                { to: "/eventos", icon: <CalendarDaysIcon className="w-5 h-5 mr-1" />, text: "Eventos" },
                { to: "/noticias", icon: <NewspaperIcon className="w-5 h-5 mr-1" />, text: "Noticias" }
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`flex items-center font-bold transition duration-300 ${
                      isActive(link.to)
                        ? "text-blue-400 hover:text-blue-500 focus:text-blue-500 bg-blue-100 hover:bg-blue-200 focus:bg-blue-200 rounded-full"
                        : "text-black hover:text-blue-300 hover:bg-blue-100 focus:text-blue-500 focus:bg-blue-100 relative rounded-full"
                    }`}
                    onClick={() => handleLinkClick(link.to)}
                  >
                    {link.icon}
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
