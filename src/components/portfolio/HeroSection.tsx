import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onScrollClick: () => void;
}

const sliceImages = [
  "/images/hero/hero-1.jpg",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=900&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=900&fit=crop",
];

const sliceAnimations = [
  // First Slice: Slide up from bottom
  { initial: { y: "100%", opacity: 0 }, animate: { y: 0, opacity: 1 } },
  // Second Slice: Zoom out effect
  { initial: { scale: 1.5, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
  // Third Slice: Slide in from the right
  { initial: { x: "100%", opacity: 0 }, animate: { x: 0, opacity: 1 } },
];

const HeroSection = ({ onScrollClick }: HeroSectionProps) => {
  return (
    <section id="hero-section" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image Slices */}
      <div className="absolute inset-0 z-0 grid grid-cols-3">
        {sliceImages.map((image, index) => (
          <motion.div
            key={index}
            initial={sliceAnimations[index].initial}
            animate={sliceAnimations[index].animate}
            transition={{
              duration: 1.2,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            className="relative h-full overflow-hidden"
          >
            <img
              src={image}
              alt={`Background slice ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        className="relative z-20 text-center max-w-4xl px-6"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-white/80 mb-6"
        >
          A Personal Journey
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6"
        >
          <span className="block">May The Juice</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            className="block text-primary font-medium"
          >
            Worth The Squeeze
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          This is a collection of some moments,
          lessons, and memories from my undergraduate journey.
        </motion.p>
      </motion.div>

      {/* Scroll Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        onClick={onScrollClick}
        className="absolute bottom-12 z-20 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll to begin"
      >
        <span className="text-sm tracking-wide">Begin the Journey</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
