'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W: number, H: number, cols: number;
    const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF∇∫∑∏≈∞←↑→↓⊕⊗'.split('');
    let drops: number[] = [];

    function init() {
      if (!canvas || !ctx) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      cols = Math.floor(W / 16);
      drops = Array(cols).fill(1).map(() => Math.random() * -50);
    }

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(12,12,12,0.05)';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#00ff88';
      ctx.font = '13px JetBrains Mono, monospace';

      for (let i = 0; i < drops.length; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(ch, i * 16, drops[i] * 16);
        if (drops[i] * 16 > H && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }

    init();
    window.addEventListener('resize', init);
    const interval = setInterval(draw, 50);

    return () => {
      window.removeEventListener('resize', init);
      clearInterval(interval);
    };
  }, []);

  return <canvas id="matrix" ref={canvasRef} />;
}
