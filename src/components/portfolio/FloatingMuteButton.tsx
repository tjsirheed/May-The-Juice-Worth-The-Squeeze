import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "@/contexts/AudioContext";

const FloatingMuteButton = () => {
  const { isMuted, toggleMute, isVideoPlaying } = useAudio();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.3 }}
      onClick={toggleMute}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg hover:bg-card transition-colors"
      aria-label={isMuted ? "Unmute background music" : "Mute background music"}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      ) : (
        <motion.div
          animate={isVideoPlaying ? {} : { scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Volume2 className="w-5 h-5 text-primary" />
        </motion.div>
      )}
      
      {/* Pulse effect when playing */}
      {!isMuted && !isVideoPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary"
          animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
};

export default FloatingMuteButton;
