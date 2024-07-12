import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Floating = ({ children, duration = 3, y = 15, zIndex = 10, style = {} }) => {
  const floatingAnimation = {
    y: [0, y, 0],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  };

  return (
    <motion.div
      animate={floatingAnimation}
      style={{
        display: 'inline-block',
        position: 'absolute',
        zIndex: zIndex,
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
};

Floating.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  y: PropTypes.number,
  zIndex: PropTypes.number,
  style: PropTypes.object,
};

export default Floating;