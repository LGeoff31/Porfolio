"use client";

import { useEffect, useRef } from "react";

export function BackgroundElements() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouseX = 0;
    let mouseY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      baseOpacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 60; i++) {
      const baseOpacity = Math.random() * 0.3 + 0.5; // higher base opacity
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.5 + 2, // slightly larger nodes
        opacity: baseOpacity,
        baseOpacity: baseOpacity,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Calculate distance from mouse
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        // Adjust opacity based on mouse proximity
        if (distance < maxDistance) {
          const proximity = 1 - distance / maxDistance;
          particle.opacity = Math.min(
            particle.baseOpacity + proximity * 0.6,
            1
          );
        } else {
          particle.opacity = particle.baseOpacity;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.shadowColor = "rgba(16, 185, 129, 0.7)";
        ctx.shadowBlur = 8;
        ctx.fillStyle = `rgba(16, 185, 129, ${particle.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Connection threshold scales with screen size, but less aggressively
            const connectionThreshold =
              120 + Math.sqrt(canvas.width * canvas.height) * 0.09;
            if (distance < connectionThreshold) {
              // Calculate mouse influence on connection
              const midX = (particle.x + otherParticle.x) / 2;
              const midY = (particle.y + otherParticle.y) / 2;
              const mouseDx = midX - mouseX;
              const mouseDy = midY - mouseY;
              const mouseDistance = Math.sqrt(
                mouseDx * mouseDx + mouseDy * mouseDy
              );
              const mouseMaxDistance = 100;

              // Lower base opacity and scale for edges
              let connectionOpacity =
                0.18 * (1 - distance / connectionThreshold);

              // Brighten connection if mouse is nearby
              if (mouseDistance < mouseMaxDistance) {
                const mouseProximity = 1 - mouseDistance / mouseMaxDistance;
                connectionOpacity = Math.min(
                  connectionOpacity + mouseProximity * 0.3,
                  0.7
                );
              }

              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(16, 185, 129, ${connectionOpacity})`;
              ctx.lineWidth = 1.5; // thicker lines
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: "transparent", zIndex: 0 }}
    />
  );
}

export default BackgroundElements;