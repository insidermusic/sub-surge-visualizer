
import { Button } from '@/components/ui/button';
import { Youtube } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Youtube className="w-16 h-16 text-youtube-red mr-4 animate-scale-pulse" />
            <div className="live-indicator px-4 py-2 rounded-full text-white font-bold text-sm uppercase tracking-wider">
              ● LIVE
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent leading-tight">
            Live YouTube
            <br />
            Subscriber Counter
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Track your audience in real-time. Built with the power of 
            <span className="text-youtube-red font-semibold"> YouTube Data API</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-youtube-red hover:bg-youtube-red-dark text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 youtube-glow"
            >
              Monitor Another Channel
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 neon-glow"
            >
              View Analytics
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
