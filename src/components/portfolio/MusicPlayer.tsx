import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Ambient lo-fi music (royalty-free)
  const musicUrl = "https://cdn.pixabay.com/audio/2024/11/04/audio_a2a830b02d.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;
    audio.loop = true;

    // Handle first user interaction to enable audio
    const enableAudio = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };

    document.addEventListener("click", enableAudio, { once: true });
    document.addEventListener("scroll", enableAudio, { once: true });

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("scroll", enableAudio);
    };
  }, [hasInteracted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !hasInteracted) return;

    if (isMuted) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Browser blocked autoplay, user needs to interact
        setIsMuted(true);
      });
    }
  }, [isMuted, hasInteracted]);

  const toggleMute = () => {
    setHasInteracted(true);
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} src={musicUrl} preload="auto" />
      
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        onClick={toggleMute}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-accent transition-colors"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        <motion.div
          key={isMuted ? "muted" : "unmuted"}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </motion.div>
        
        {/* Audio wave animation when playing */}
        {!isMuted && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/50"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>
    </>
  );
};

export default MusicPlayer;
