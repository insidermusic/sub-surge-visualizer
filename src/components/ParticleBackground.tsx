
import { useEffect } from 'react';

export const ParticleBackground = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size between 2-8px
      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random color (YouTube red, neon blue, or purple)
      const colors = ['#FF0000', '#00D4FF', '#8B5CF6'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      // Random animation duration
      particle.style.animationDuration = `${Math.random() * 4 + 3}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      
      document.body.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 7000);
    };

    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 100);
    }

    // Create new particles periodically
    const interval = setInterval(createParticle, 500);

    return () => {
      clearInterval(interval);
      // Clean up particles
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800" />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-youtube-red/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </>
  );
};
