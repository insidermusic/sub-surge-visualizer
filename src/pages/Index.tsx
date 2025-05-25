
import { useEffect, useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { LiveCountDisplay } from '@/components/LiveCountDisplay';
import { ParticleBackground } from '@/components/ParticleBackground';
import { Footer } from '@/components/Footer';
import { getChannelDetails } from '@/utils/youtube';
import { useToast } from '@/hooks/use-toast';

interface ChannelData {
  subscriberCount: string;
  channelName: string;
  profilePicture: string;
  viewCount?: string;
  videoCount?: string;
}

const Index = () => {
  const [channelData, setChannelData] = useState<ChannelData | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastCount, setLastCount] = useState<string>('0');
  const { toast } = useToast();

  const fetchChannelData = async () => {
    try {
      console.log('Fetching channel data...');
      const data = await getChannelDetails();
      console.log('Channel data received:', data);
      
      if (channelData && data.subscriberCount !== lastCount) {
        toast({
          title: "Subscriber Update! 🎉",
          description: `New count: ${parseInt(data.subscriberCount).toLocaleString()}`,
        });
      }
      
      setLastCount(data.subscriberCount);
      setChannelData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching channel data:', error);
      setLoading(false);
      toast({
        title: "Update Failed",
        description: "Unable to fetch latest subscriber count",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchChannelData();
    const interval = setInterval(fetchChannelData, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        <HeroSection />
        
        <div className="container mx-auto px-4 py-8">
          <LiveCountDisplay 
            channelData={channelData} 
            loading={loading}
            onRefresh={fetchChannelData}
          />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
