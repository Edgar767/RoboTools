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

const FloatingImage = ({
  src,
  speed = 1,
  zIndex = 1,
  positionX = '50%',
  positionY = '50%',
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotation = useMotionValue(0);
  const shadowWidth = useTransform(y, [20, -20], ['80%', '40%']);

  const amplitude = 20;

  useAnimationFrame((time) => {
    const xOffset = Math.sin(time / (1000 / speed)) * amplitude;
    const yOffset = Math.cos(time / (1500 / speed)) * (amplitude * 0.75);
    x.set(xOffset);
    y.set(yOffset);
    rotation.set(Math.sin(time / (2000 / speed)) * 15);
  });

  return (
    <div
      className="absolute flex items-center justify-center pointer-events-none hidden sm:block"
      style={{
        zIndex,
        left: positionX,
        top: positionY,
      }}
    >
      <motion.img
        src={src}
        className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
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
          y: useTransform(y, (value) => value + 120),
        }}
      />
    </div>
  );
};

FloatingImage.propTypes = {
  src: PropTypes.string.isRequired,
  speed: PropTypes.number,
  zIndex: PropTypes.number,
  positionX: PropTypes.string,
  positionY: PropTypes.string,
};

FloatingImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(FloatingImage.propTypes)).isRequired,
};

export default FloatingImages;
