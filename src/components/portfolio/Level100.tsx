import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=350&fit=crop",
  "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=450&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=380&fit=crop",
  "https://images.unsplash.com/photo-1518173946687-a4c036bc3c95?w=400&h=420&fit=crop",
];

const Level100 = () => {
<<<<<<< HEAD
=======
  const [isExpanded, setIsExpanded] = useState(false);

>>>>>>> 7e162edf1907777626e878d3ce499addb7ee7e48
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="level-100" className="min-h-screen py-24 px-6 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Level 100
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            The Beginning
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Story */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              Every journey has a starting point. Mine began in a small town where
              dreams felt both close and impossibly far away. The world was full
              of wonder, and every day brought new discoveries.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              I remember the mornings filled with golden light, the afternoons
              spent exploring hidden corners of our neighborhood, and the evenings
              when stories were shared around the dinner table.
            </p>

            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-6 pt-2">
                <p className="text-lg leading-relaxed text-foreground/90">
                  Those early years taught me the value of curiosity. I learned
                  that asking questions was the first step to understanding the
                  world. Every "why" led to an adventure, every "how" to a new
                  skill.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  The people I met during these formative years left lasting
                  impressions. Teachers who believed in potential, friends who
                  shared in the wonder, and family who provided the foundation
                  for everything to come.
                </p>
                <p className="text-lg leading-relaxed text-foreground/90">
                  Looking back, I realize these weren't just memories—they were
                  the building blocks of who I would become. The seeds planted
                  here would bloom in unexpected ways throughout my journey.
                </p>
              </div>
            </motion.div>

            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 hover:bg-primary/5 px-0"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Read Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Read More
                </>
              )}
            </Button>
          </motion.div>

          {/* Right: Masonry Grid */}
          <motion.div
            variants={containerVariants}
            className="columns-2 gap-4 space-y-4"
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="break-inside-avoid"
              >
                <motion.img
                  src={src}
                  alt={`Memory ${index + 1}`}
                  className="w-full rounded-lg shadow-md"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Level100;
