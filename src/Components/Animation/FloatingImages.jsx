import PropTypes from 'prop-types';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';

const FloatingImages = ({ images }) => {
  return (
    <>
      {images.map((image, index) => (
        <FloatingImage key={index} {...image} />
      ))}
    </>
  );
};

const FloatingImage = ({ src, speed = 1, zIndex = 1 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotation = useMotionValue(0);
  const shadowWidth = useTransform(y, [20, -20], ['80%', '40%']);

  // Definir la amplitud según el tamaño de la pantalla
  const amplitude = window.innerWidth < 640 ? 10 : 20;

  useAnimationFrame((time) => {
    const xOffset = Math.sin(time / (1000 / speed)) * amplitude;
    const yOffset = Math.cos(time / (1500 / speed)) * (amplitude * 0.75);
    x.set(xOffset);
    y.set(yOffset);
    rotation.set(Math.sin(time / (2000 / speed)) * 15);
  });

  return (
    <div
      className="absolute flex items-center justify-center pointer-events-none"
      style={{
        zIndex,
      }}
    >
      <motion.img
        src={src}
        className="relative w-auto h-32 sm:h-64"
        style={{
          x,
          y,
          rotate: rotation,
        }}
      />
      <motion.div
        className="absolute"
        style={{
          width: shadowWidth,
          height: '20%',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: -1,
          filter: 'blur(8px)',
          x,
          y: useTransform(y, (value) => value + (window.innerWidth < 640 ? 60 : 120)),
        }}
      />
    </div>
  );
};

FloatingImage.propTypes = {
  src: PropTypes.string.isRequired,
  speed: PropTypes.number,
  zIndex: PropTypes.number,
};

FloatingImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(FloatingImage.propTypes)).isRequired,
};

export default FloatingImages;
