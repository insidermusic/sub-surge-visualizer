
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { RefreshCw, Users, Eye, Video } from 'lucide-react';

interface ChannelData {
  subscriberCount: string;
  channelName: string;
  profilePicture: string;
  viewCount?: string;
  videoCount?: string;
}

interface LiveCountDisplayProps {
  channelData: ChannelData | null;
  loading: boolean;
  onRefresh: () => void;
}

export const LiveCountDisplay = ({ channelData, loading, onRefresh }: LiveCountDisplayProps) => {
  const [animateCount, setAnimateCount] = useState(false);
  const [previousCount, setPreviousCount] = useState<string>('0');

  useEffect(() => {
    if (channelData && channelData.subscriberCount !== previousCount) {
      setAnimateCount(true);
      setPreviousCount(channelData.subscriberCount);
      setTimeout(() => setAnimateCount(false), 500);
    }
  }, [channelData?.subscriberCount]);

  const formatNumber = (num: string) => {
    return parseInt(num).toLocaleString();
  };

  if (loading) {
    return (
      <div className="flex justify-center">
        <Card className="glass-card p-8 max-w-md w-full neon-glow">
          <div className="text-center space-y-6">
            <Skeleton className="w-24 h-24 rounded-full mx-auto" />
            <Skeleton className="h-8 w-48 mx-auto" />
            <Skeleton className="h-12 w-32 mx-auto" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-16 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (!channelData) {
    return (
      <div className="flex justify-center">
        <Card className="glass-card p-8 max-w-md w-full">
          <div className="text-center">
            <p className="text-gray-400">Failed to load channel data</p>
            <Button onClick={onRefresh} className="mt-4">
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex justify-center animate-fade-in-up">
      <Card className="glass-card p-8 max-w-md w-full neon-glow hover:scale-105 transition-all duration-300">
        <div className="text-center space-y-6">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src={channelData.profilePicture}
              alt={channelData.channelName}
              className="w-24 h-24 rounded-full mx-auto border-4 border-youtube-red shadow-lg hover:scale-110 transition-transform duration-300 youtube-glow"
            />
            <div className="absolute -top-2 -right-2 live-indicator px-2 py-1 rounded-full text-xs font-bold">
              LIVE
            </div>
          </div>

          {/* Channel Name */}
          <h2 className="text-2xl font-poppins font-bold text-white">
            {channelData.channelName}
          </h2>

          {/* Subscriber Count */}
          <div className="space-y-2">
            <p className="text-gray-400 text-sm uppercase tracking-wider">Subscribers</p>
            <div className={`text-4xl md:text-5xl font-bold text-youtube-red ${animateCount ? 'animate-count-up' : ''}`}>
              {formatNumber(channelData.subscriberCount)}
            </div>
          </div>

          {/* Additional Stats */}
          {(channelData.viewCount || channelData.videoCount) && (
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
              {channelData.viewCount && (
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Eye className="w-5 h-5 text-neon-blue mr-2" />
                    <span className="text-neon-blue text-sm font-semibold">Views</span>
                  </div>
                  <p className="text-lg font-bold text-white">
                    {formatNumber(channelData.viewCount)}
                  </p>
                </div>
              )}
              
              {channelData.videoCount && (
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Video className="w-5 h-5 text-neon-purple mr-2" />
                    <span className="text-neon-purple text-sm font-semibold">Videos</span>
                  </div>
                  <p className="text-lg font-bold text-white">
                    {formatNumber(channelData.videoCount)}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Refresh Button */}
          <Button
            onClick={onRefresh}
            variant="outline"
            className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh Data
          </Button>

          {/* Last Updated */}
          <p className="text-xs text-gray-500">
            Updates every 5 seconds • Last updated: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </Card>
    </div>
  );
};
