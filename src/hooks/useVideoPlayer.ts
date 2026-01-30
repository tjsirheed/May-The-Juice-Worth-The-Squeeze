import { useCallback } from "react";
import { useAudio } from "@/contexts/AudioContext";

export const useVideoPlayer = () => {
  const { setIsVideoPlaying } = useAudio();

  const handleVideoPlay = useCallback(() => {
    setIsVideoPlaying(true);
  }, [setIsVideoPlaying]);

  const handleVideoPause = useCallback(() => {
    setIsVideoPlaying(false);
  }, [setIsVideoPlaying]);

  const handleVideoEnded = useCallback(() => {
    setIsVideoPlaying(false);
  }, [setIsVideoPlaying]);

  return {
    onPlay: handleVideoPlay,
    onPause: handleVideoPause,
    onEnded: handleVideoEnded,
  };
};
