import axios from 'axios';

const API_KEY = import.meta.env.VITE_YOUTUBE_API;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

export const getChannelDetails = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${CHANNEL_ID}&key=${API_KEY}`
    );

    const data = response.data.items[0];

    return {
      subscriberCount: data.statistics.subscriberCount,
      channelName: data.snippet.title,
      profilePicture: data.snippet.thumbnails.default.url,
      viewCount: data.statistics.viewCount,
      videoCount: data.statistics.videoCount
    };
  } catch (error) {
    console.error('YouTube API Error:', error);
    throw new Error('Failed to fetch channel data');
  }
};
