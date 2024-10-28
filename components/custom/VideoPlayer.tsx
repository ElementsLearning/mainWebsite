import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface VideoPlayerProps {
  className?: string;
  src: string;
  controls?: boolean;
  muted?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ className, src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust this threshold as needed
    triggerOnce: false,
  });

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

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (inView) {
        videoElement.currentTime = 0
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  }, [inView]);

  return (
    <div ref={ref} className={className}>
      <video ref={videoRef} className={"size-full"} playsInline webkit-playsinline="true" controls={false} autoPlay muted>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
