import { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

const GRID_SIZE = 200; // Tamaño de cada celda de la cuadrícula

const FloatingBlocks = () => {
  const [positions, setPositions] = useState([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const lastUpdateTime = useRef(0);
  const gridRef = useRef({});

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
  const glowDuration = 500; // Duración del brillo en milisegundos

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
      glowIntensity: 0,
      glowStartTime: 0,
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

  const updateGrid = (positions) => {
    const newGrid = {};
    positions.forEach((pos, index) => {
      const cellX = Math.floor(pos.x / GRID_SIZE);
      const cellY = Math.floor(pos.y / GRID_SIZE);
      const cellKey = `${cellX},${cellY}`;
      if (!newGrid[cellKey]) {
        newGrid[cellKey] = [];
      }
      newGrid[cellKey].push(index);
    });
    gridRef.current = newGrid;
  };

  const getNeighbors = (cellX, cellY) => {
    const neighbors = [];
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const neighborKey = `${cellX + i},${cellY + j}`;
        if (gridRef.current[neighborKey]) {
          neighbors.push(...gridRef.current[neighborKey]);
        }
      }
    }
    return neighbors;
  };

  const checkCollision = (pos1, pos2) => {
    const dx = pos1.x - pos2.x;
    const dy = pos1.y - pos2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < imageSize;
  };

  const resolveCollision = (pos1, pos2, currentTime) => {
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

    pos1.lastCollisionTime = currentTime;
    pos2.lastCollisionTime = currentTime;
    pos1.glowIntensity = 1;
    pos2.glowIntensity = 1;
    pos1.glowStartTime = currentTime;
    pos2.glowStartTime = currentTime;
  };

  const handleMouseInteraction = (pos, currentTime) => {
    const dx = pos.x + imageSize / 2 - mousePos.current.x;
    const dy = pos.y + imageSize / 2 - mousePos.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouseInteractionRadius) {
      const factor = 1 - distance / mouseInteractionRadius;
      pos.vx += (dx / distance) * factor * 0.5;
      pos.vy += (dy / distance) * factor * 0.5;
      pos.currentSpeed = pos.baseSpeed * (1 + factor * 2);
      pos.interactionTimer = 60;
      pos.glowIntensity = 1;
      pos.glowStartTime = currentTime;
    } else if (pos.interactionTimer > 0) {
      pos.interactionTimer--;
      if (pos.interactionTimer === 0) {
        pos.currentSpeed = pos.baseSpeed;
      }
    }
  };

  const handleScreenCollision = (pos, currentTime) => {
    let collided = false;
    if (pos.x <= 0 || pos.x >= window.innerWidth - imageSize) {
      pos.vx = -pos.vx;
      pos.x = Math.max(0, Math.min(pos.x, window.innerWidth - imageSize));
      collided = true;
    }
    if (pos.y <= 0 || pos.y >= window.innerHeight - imageSize) {
      pos.vy = -pos.vy;
      pos.y = Math.max(0, Math.min(pos.y, window.innerHeight - imageSize));
      collided = true;
    }
    if (collided) {
      pos.glowIntensity = 1;
      pos.glowStartTime = currentTime;
    }
    return pos;
  };

  useAnimationFrame((t) => {
    const currentTime = t;
    const deltaTime = currentTime - lastUpdateTime.current;
    lastUpdateTime.current = currentTime;

    setPositions((prevPositions) => {
      const newPositions = prevPositions.map((pos) => {
        let { x, y, vx, vy, rotate, rotateSpeed, baseSpeed, currentSpeed, interactionTimer, lastCollisionTime, glowIntensity, glowStartTime } = pos;

        handleMouseInteraction(pos, currentTime);

        x += vx * (currentSpeed / baseSpeed) * (deltaTime / 16);
        y += vy * (currentSpeed / baseSpeed) * (deltaTime / 16);
        rotate += rotateSpeed * (deltaTime / 16);

        ({ x, y, vx, vy, glowIntensity, glowStartTime } = handleScreenCollision({ x, y, vx, vy, glowIntensity, glowStartTime }, currentTime));

        if (currentTime - lastCollisionTime > 2000) {
          vx += (Math.random() - 0.5) * 0.1;
          vy += (Math.random() - 0.5) * 0.1;
        }

        const timeSinceGlowStart = currentTime - glowStartTime;
        glowIntensity = Math.max(0, 1 - (timeSinceGlowStart / glowDuration));

        return { x, y, vx, vy, rotate, rotateSpeed, baseSpeed, currentSpeed, interactionTimer, lastCollisionTime, glowIntensity, glowStartTime };
      });

      updateGrid(newPositions);

      for (let i = 0; i < newPositions.length; i++) {
        const cellX = Math.floor(newPositions[i].x / GRID_SIZE);
        const cellY = Math.floor(newPositions[i].y / GRID_SIZE);
        const neighbors = getNeighbors(cellX, cellY);
        
        for (let j of neighbors) {
          if (i !== j && checkCollision(newPositions[i], newPositions[j])) {
            resolveCollision(newPositions[i], newPositions[j], currentTime);
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
            filter: `brightness(${0.75 + pos.glowIntensity * 0.75})`,
            transition: 'filter 0.2s ease-out',
          }}
          className="absolute w-24 h-24 object-cover rounded-none"
        />
      ))}
    </div>
  );
};

export default FloatingBlocks;