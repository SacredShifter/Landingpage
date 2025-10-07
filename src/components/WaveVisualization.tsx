import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const WaveVisualization = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const drawWave = (
      offset: number,
      amplitude: number,
      frequency: number,
      color: string,
      alpha: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin((x * frequency + offset) * 0.01) * amplitude +
          Math.sin((x * frequency * 2 + offset * 1.5) * 0.01) * (amplitude / 2);
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = color.replace(')', `, ${alpha})`).replace('rgb', 'rgba');
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      timeRef.current += 0.5;

      drawWave(timeRef.current, 30, 1, 'rgb(217, 70, 239)', 0.15);
      drawWave(timeRef.current * 1.2, 40, 0.8, 'rgb(6, 182, 212)', 0.2);
      drawWave(timeRef.current * 0.8, 50, 1.2, 'rgb(168, 85, 247)', 0.1);
      drawWave(timeRef.current * 1.5, 25, 1.5, 'rgb(34, 211, 238)', 0.15);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none opacity-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2 }}
    />
  );
};
