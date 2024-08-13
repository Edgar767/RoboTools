import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isHovered || !scrolling) {
      controls.start({
        height: 'auto',
        width: 'calc(100% - 2rem)',
        opacity: 1,
        transition: { duration: 0.3 },
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
      });
    } else {
      controls.start({
        height: 60,
        width: '310px',
        opacity: 1,
        transition: { duration: 0.3 },
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
      });
    }
  }, [scrolling, isHovered, controls]);

  const menuItems = [
    { label: 'Inicio', href: '/inicio' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Programas Escolares', href: '/programasescolares' },
    { label: 'Robotools Centro Steam', href: '/centrosteam' },
    { label: 'Cursos Robotools', href: '/cursosrobotools' },
    { label: 'RT Steam Academy', href: '/rtsteamacademy' },
    { label: 'Salas Interactivas', href: '/salasinteractivas' },
    { label: 'Productos', href: '/productos' },
    { label: 'Eventos', href: '/eventos' },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 backdrop-blur-md shadow-lg z-50 rounded-lg overflow-hidden"
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col items-center py-4 px-6">
          {/* Logo - now clickable on mobile */}
          <div className="mb-4 cursor-pointer md:cursor-default" onClick={() => toggleMobileMenu()}>
            <img src="/img/logo.png" alt="Logo" className="h-12" />
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex flex-col items-center transition-opacity ${scrolling && !isHovered ? 'opacity-0' : 'opacity-100'}`}>
            <div className="flex space-x-4">
              {menuItems.map((item, index) => (
                <a key={index} href={item.href} className="text-gray-800 hover:text-gray-600 transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Items */}
          <motion.div 
            className="md:hidden w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isOpen ? 'auto' : 0, 
              opacity: isOpen ? 1 : 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.3, delay: isOpen ? 0.1 : 0 }
              }
            }}
          >
            <div className="flex flex-col items-center py-4">
              {menuItems.map((item, index) => (
                <a key={index} href={item.href} className="py-2 text-gray-800 hover:text-gray-600 transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
      {/* Spacer div to push content below the navbar */}
      <div className="h-32 md:h-40"></div>
    </>
  );
};

export default Navbar;