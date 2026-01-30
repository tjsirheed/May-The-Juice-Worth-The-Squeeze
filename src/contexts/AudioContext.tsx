import { createContext, useContext, useState, useRef, useCallback, useEffect, ReactNode } from "react";

interface AudioContextType {
  isVideoPlaying: boolean;
  setIsVideoPlaying: (playing: boolean) => void;
  isMuted: boolean;
  toggleMute: () => void;
  currentZone: number;
  setCurrentZone: (zone: number) => void;
}

const AudioContext = createContext<AudioContextType | null>(null);

const AUDIO_TRACKS = [
  "/Song_1.mp3", // Hero & First Year
  "/Song_2.mp3", // Second Year
  "/Song_3.mp3", // Third Year
  "/Song_4.mp3", // Fourth Year
  "/Song_5.mp3", // Fifth Year
];

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentZone, setCurrentZone] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio(AUDIO_TRACKS[0]);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
  }, []);

  // Handle first user interaction for autoplay
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted && audioRef.current && !isMuted) {
        setHasInteracted(true);
        audioRef.current.play().catch(() => {
          // Autoplay blocked, will try again on next interaction
          setHasInteracted(false);
        });
      }
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);
    window.addEventListener("keydown", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("keydown", handleInteraction);
    };
  }, [hasInteracted, isMuted]);

  // Handle zone changes - crossfade to new track
  useEffect(() => {
    if (!audioRef.current || !hasInteracted) return;

    const newTrack = AUDIO_TRACKS[currentZone];
    if (audioRef.current.src.endsWith(newTrack)) return;

    // Fade out current track
    const fadeOut = () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      
      fadeIntervalRef.current = setInterval(() => {
        if (audioRef.current && audioRef.current.volume > 0.05) {
          audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.05);
        } else {
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
          
          // Switch track and fade in
          if (audioRef.current) {
            audioRef.current.src = newTrack;
            audioRef.current.volume = 0;
            if (!isMuted && !isVideoPlaying) {
              audioRef.current.play().catch(() => {});
            }
            fadeIn();
          }
        }
      }, 50);
    };

    const fadeIn = () => {
      fadeIntervalRef.current = setInterval(() => {
        if (audioRef.current && audioRef.current.volume < 0.3) {
          audioRef.current.volume = Math.min(0.3, audioRef.current.volume + 0.05);
        } else {
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        }
      }, 50);
    };

    fadeOut();
  }, [currentZone, hasInteracted, isMuted, isVideoPlaying]);

  // Handle video playing state - pause/resume background music
  useEffect(() => {
    if (!audioRef.current || !hasInteracted) return;

    if (isVideoPlaying) {
      // Fade out when video plays
      const fadeOut = setInterval(() => {
        if (audioRef.current && audioRef.current.volume > 0.02) {
          audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.02);
        } else {
          clearInterval(fadeOut);
          audioRef.current?.pause();
        }
      }, 30);
    } else if (!isMuted) {
      // Resume when video stops
      audioRef.current.play().catch(() => {});
      const fadeIn = setInterval(() => {
        if (audioRef.current && audioRef.current.volume < 0.3) {
          audioRef.current.volume = Math.min(0.3, audioRef.current.volume + 0.02);
        } else {
          clearInterval(fadeIn);
        }
      }, 30);
    }
  }, [isVideoPlaying, hasInteracted, isMuted]);

  // Handle mute toggle
  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const newMuted = !prev;
      if (audioRef.current) {
        if (newMuted) {
          audioRef.current.pause();
        } else if (hasInteracted && !isVideoPlaying) {
          audioRef.current.play().catch(() => {});
        }
      }
      return newMuted;
    });
  }, [hasInteracted, isVideoPlaying]);

  return (
    <AudioContext.Provider
      value={{
        isVideoPlaying,
        setIsVideoPlaying,
        isMuted,
        toggleMute,
        currentZone,
        setCurrentZone,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
