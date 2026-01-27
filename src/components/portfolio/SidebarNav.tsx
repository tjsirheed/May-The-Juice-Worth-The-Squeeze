import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarNavProps {
  activeLevel: number;
  onLevelClick: (level: number) => void;
}

const levels = [
  { id: 100, label: "The Beginning", year: "First Year" },
  { id: 200, label: "Building Momentum", year: "Second Year" },
  { id: 300, label: "Growth & Lessons", year: "Third Year" },
  { id: 400, label: "Turning Points", year: "Fourth Year" },
  { id: 500, label: "Wall of Memories", year: "Fifth Year" },
];

const SidebarNav = ({ activeLevel, onLevelClick }: SidebarNavProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6"
    >
      {levels.map((level) => (
        <Tooltip key={level.id} delayDuration={0}>
          <TooltipTrigger asChild>
            <button
              onClick={() => onLevelClick(level.id)}
              className="group relative flex items-center"
              aria-label={`Go to Level ${level.id}: ${level.label}`}
            >
              <motion.div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeLevel === level.id
                    ? "bg-primary border-primary scale-125"
                    : "bg-transparent border-muted-foreground/40 hover:border-primary hover:scale-110"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              <span
                className={`absolute left-6 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeLevel === level.id
                    ? "opacity-100 text-foreground"
                    : "opacity-0 group-hover:opacity-70 text-muted-foreground"
                }`}
              >
                {level.year}
              </span>
            </button>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-card border-border">
            <p className="font-medium">{level.year}</p>
            <p className="text-xs text-muted-foreground">{level.label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </motion.nav>
  );
};

export default SidebarNav;
