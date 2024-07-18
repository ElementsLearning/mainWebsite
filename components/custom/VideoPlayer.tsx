import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
  className?: string;
  src: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ className, src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      const handleVideoEnd = () => {
        // Pause the video at the end and stay on the last frame
        videoElement.pause();
        videoElement.currentTime = videoElement.duration;
      };

      videoElement.addEventListener('ended', handleVideoEnd);

      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  return (
    <video ref={videoRef} className={className} autoPlay muted>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
