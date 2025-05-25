
import { Youtube, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Developer Credits */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-youtube-red animate-pulse" />
            <span>by</span>
            <span className="text-white font-semibold">Viral PlaceX</span>
          </div>

          {/* YouTube Channel Link */}
          <a
            href="https://youtube.com/@viralplacex"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-youtube-red hover:text-youtube-red-dark transition-colors duration-300 group"
          >
            <Youtube className="w-5 h-5 group-hover:animate-bounce" />
            <span className="font-semibold">Viral PlaceX Channel</span>
            <div className="live-indicator px-2 py-1 rounded-full text-xs font-bold ml-2">
              LIVE
            </div>
          </a>

          {/* Additional Info */}
          <div className="text-xs text-gray-500 text-center md:text-right">
            <p>Real-time YouTube Analytics</p>
            <p>Powered by YouTube Data API v3</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center text-xs text-gray-600">
          <p>&copy; 2024 Viral PlaceX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
