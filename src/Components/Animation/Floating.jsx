import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

const Floating = () => {
  const [positions, setPositions] = useState([]);
  const mousePos = useRef({ x: 0, y: 0 });

  const images = [
    '/extras/lego1.png',
    '/extras/lego2.png',
    '/extras/lego3.png',
    '/extras/lego4.png',
    '/extras/lego5.png',
    '/extras/lego6.png',
    '/extras/lego1.png',
    '/extras/lego2.png',
    '/extras/lego3.png',
    '/extras/lego4.png',
    '/extras/lego5.png',
    '/extras/lego6.png',
  ];

  const imageSize = 96;
  const mouseInteractionRadius = 100;

  const initializePositions = useCallback(() => {
    return images.map(() => ({
      x: Math.random() * (window.innerWidth - imageSize),
      y: Math.random() * (window.innerHeight - imageSize),
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      rotate: Math.random() * 360,
      rotateSpeed: (Math.random() - 0.5) * 2,
      baseSpeed: 2,
      currentSpeed: 2,
      interactionTimer: 0,
      lastCollisionTime: 0,
    }));
  }, []);

  useEffect(() => {
    setPositions(initializePositions());
  }, [initializePositions]);

  const handleMouseMove = useCallback((e) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const checkCollision = (pos1, pos2) => {
    const dx = pos1.x - pos2.x;
    const dy = pos1.y - pos2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < imageSize;
  };

  const resolveCollision = (pos1, pos2) => {
    const dx = pos2.x - pos1.x;
    const dy = pos2.y - pos1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance === 0) return;

    const nx = dx / distance;
    const ny = dy / distance;

    const p = 2 * (pos1.vx * nx + pos1.vy * ny - pos2.vx * nx - pos2.vy * ny) / 2;

    const perturbation = 0.1;
    pos1.vx = (pos1.vx - p * nx) + (Math.random() - 0.5) * perturbation;
    pos1.vy = (pos1.vy - p * ny) + (Math.random() - 0.5) * perturbation;
    pos2.vx = (pos2.vx + p * nx) + (Math.random() - 0.5) * perturbation;
    pos2.vy = (pos2.vy + p * ny) + (Math.random() - 0.5) * perturbation;

    const overlap = imageSize - distance;
    if (overlap > 0) {
      pos1.x -= overlap * nx / 2;
      pos1.y -= overlap * ny / 2;
      pos2.x += overlap * nx / 2;
      pos2.y += overlap * ny / 2;
    }

    const now = Date.now();
    pos1.lastCollisionTime = now;
    pos2.lastCollisionTime = now;
  };

  const handleMouseInteraction = (pos) => {
    const dx = pos.x + imageSize / 2 - mousePos.current.x;
    const dy = pos.y + imageSize / 2 - mousePos.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouseInteractionRadius) {
      const factor = 1 - distance / mouseInteractionRadius;
      pos.vx += (dx / distance) * factor * 0.5;
      pos.vy += (dy / distance) * factor * 0.5;
      pos.currentSpeed = pos.baseSpeed * (1 + factor * 2);
      pos.interactionTimer = 60;
    } else if (pos.interactionTimer > 0) {
      pos.interactionTimer--;
      if (pos.interactionTimer === 0) {
        pos.currentSpeed = pos.baseSpeed;
      }
    }
  };

  useAnimationFrame(() => {
    setPositions((prevPositions) => {
      const newPositions = prevPositions.map((pos) => {
        let { x, y, vx, vy, rotate, rotateSpeed, baseSpeed, currentSpeed, interactionTimer, lastCollisionTime } = pos;

        handleMouseInteraction(pos);

        x += vx * (currentSpeed / baseSpeed);
        y += vy * (currentSpeed / baseSpeed);
        rotate += rotateSpeed;

        if (x <= 0 || x >= window.innerWidth - imageSize) {
          vx = -vx;
          x = Math.max(0, Math.min(x, window.innerWidth - imageSize));
        }
        if (y <= 0 || y >= window.innerHeight - imageSize) {
          vy = -vy;
          y = Math.max(0, Math.min(y, window.innerHeight - imageSize));
        }

        const now = Date.now();
        if (now - lastCollisionTime > 2000) {
          vx += (Math.random() - 0.5) * 0.1;
          vy += (Math.random() - 0.5) * 0.1;
        }

        return { x, y, vx, vy, rotate, rotateSpeed, baseSpeed, currentSpeed, interactionTimer, lastCollisionTime };
      });

      for (let i = 0; i < newPositions.length; i++) {
        for (let j = i + 1; j < newPositions.length; j++) {
          if (checkCollision(newPositions[i], newPositions[j])) {
            resolveCollision(newPositions[i], newPositions[j]);
          }
        }
      }

      return newPositions;
    });
  });

  return (
    <div className="fixed inset-0 overflow-hidden">
      {positions.map((pos, index) => (
        <motion.img
          key={index}
          src={images[index]}
          style={{
            x: pos.x,
            y: pos.y,
            rotate: pos.rotate,
          }}
          className="absolute w-24 h-24 object-cover rounded-none"
        />
      ))}
    </div>
  );
};

export default Floating;