import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface FloatingNavButtonProps {
  activeLevel: number;
  onLevelClick: (level: number) => void;
}

const levels = [
  { id: 100, label: "The Beginning" },
  { id: 200, label: "Building Momentum" },
  { id: 300, label: "Growth & Lessons" },
  { id: 400, label: "Turning Points" },
  { id: 500, label: "Wall of Memories" },
];

const FloatingNavButton = ({ activeLevel, onLevelClick }: FloatingNavButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLevelClick = (level: number) => {
    onLevelClick(level);
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-card border border-border rounded-xl shadow-xl p-4 min-w-[200px]"
          >
            <div className="flex flex-col gap-2">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => handleLevelClick(level.id)}
                  className={`text-left px-4 py-3 rounded-lg transition-all ${
                    activeLevel === level.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                >
                  <span className="font-semibold text-sm">Level {level.id}</span>
                  <p className={`text-xs ${
                    activeLevel === level.id ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {level.label}
                  </p>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
        aria-label="Toggle navigation menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Menu className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default FloatingNavButton;
