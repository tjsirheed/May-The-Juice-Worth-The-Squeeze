import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const stories = [
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    title: "Friends Forever",
    caption: "These people became my chosen family. Distance means nothing when you've shared everything.",
  },
  {
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
    title: "Celebration Time",
    caption: "The night we finally made it. Tears, laughter, and promises we've kept.",
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    title: "Mountain Views",
    caption: "I return here every year. Same mountain, different person each time.",
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    title: "Nature's Classroom",
    caption: "The best lessons have no walls. Out here, I remember what matters.",
  },
];

const Level500 = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? stories.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === stories.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="level-500" className="min-h-screen py-24 px-6 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Level 500
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            Wall of Memories
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Moments frozen in time. Each one a chapter in this ongoing story.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
            >
              {/* Image */}
              <motion.button
                className="w-full md:w-1/2 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />
              </motion.button>

              {/* Text */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-4" : "md:pr-4"}`}>
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-3">
                  {story.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {story.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
          <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur-md border-border overflow-hidden">
            <AnimatePresence mode="wait">
              {selectedIndex !== null && (
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <img
                    src={stories[selectedIndex].image.replace("600", "1200")}
                    alt={stories[selectedIndex].title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                    <p className="text-xl font-medium text-foreground">
                      {stories[selectedIndex].title}
                    </p>
                    <p className="text-muted-foreground mt-1">
                      {stories[selectedIndex].caption}
                    </p>
                  </div>

                  {/* Navigation buttons */}
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-background transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-background transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-32 text-center"
        >
          <p className="text-2xl md:text-3xl font-light text-foreground mb-4">
            "Arriesgar Nada, Ganar Nada"
          </p>
          <p className="text-muted-foreground">
            Risk nothing, gain nothing. Thank you for being part of my journey.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Level500;
