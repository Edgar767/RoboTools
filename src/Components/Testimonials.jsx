import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Testimonials = ({ testimonials, speed = 1, gap = 32 }) => {
  const [trackPosition, setTrackPosition] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateItemWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setItemWidth(containerWidth < 640 ? containerWidth : containerWidth / 2);
      }
    };

    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);

    return () => window.removeEventListener('resize', updateItemWidth);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container || itemWidth === 0) return;

    const testimonialWidth = itemWidth + gap;
    const totalWidth = testimonialWidth * testimonials.length;

    let animationFrameId;
    let lastTimestamp = 0;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      setTrackPosition((prevPosition) => {
        let newPosition = prevPosition - speed * (elapsed / 16);
        if (Math.abs(newPosition) >= totalWidth) {
          return 0; // Instantly reset to the beginning
        }
        return newPosition;
      });

      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [testimonials, speed, gap, itemWidth]);

  const containerStyles = {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  };

  const trackStyles = {
    display: 'flex',
    transform: `translateX(${trackPosition}px)`,
  };

  const testimonialItemStyles = {
    flex: '0 0 auto',
    width: `${itemWidth}px`,
    marginRight: `${gap}px`,
  };

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div ref={containerRef} style={containerStyles}>
          <div ref={trackRef} style={trackStyles}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                style={testimonialItemStyles}
                className="flex flex-col items-center gap-4 rounded-lg bg-indigo-500 px-4 sm:px-8 py-6 md:gap-6"
              >
                <div className="max-w-md text-center text-white text-sm sm:text-base lg:text-lg">
                  {testimonial.quote}
                </div>
                <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                    <img
                      src={testimonial.image}
                      loading="lazy"
                      alt={testimonial.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <div className="text-center text-xs sm:text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                      {testimonial.name}
                    </div>
                    <p className="text-center text-xs sm:text-sm text-indigo-200 sm:text-left">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  speed: PropTypes.number,
  gap: PropTypes.number,
};

export default Testimonials;
