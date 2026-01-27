import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const memories = [
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=300&fit=crop", caption: "Friends forever" },
  { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=300&fit=crop", caption: "Celebration time" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop", caption: "Team work" },
  { src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=300&h=300&fit=crop", caption: "Happy moments" },
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop", caption: "Study break" },
  { src: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=300&h=300&fit=crop", caption: "Adventure calls" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop", caption: "Mountain views" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop", caption: "Nature escape" },
  { src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=300&h=300&fit=crop", caption: "Forest walk" },
  { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=300&h=300&fit=crop", caption: "Waterfall" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop", caption: "Green fields" },
  { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=300&fit=crop", caption: "Foggy morning" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=300&fit=crop", caption: "Sunlit path" },
  { src: "https://images.unsplash.com/photo-1518173946687-a4c036bc3c95?w=300&h=300&fit=crop", caption: "Spring bloom" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop", caption: "Portrait" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop", caption: "Tech life" },
  { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=300&h=300&fit=crop", caption: "Success" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=300&h=300&fit=crop", caption: "Peak moment" },
  { src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=300&h=300&fit=crop", caption: "Reflection" },
  { src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=300&h=300&fit=crop", caption: "Beach day" },
];

const Level500 = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? memories.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === memories.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="level-500" className="min-h-screen py-24 px-6 lg:px-12 bg-muted/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Fifth Year
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            Wall of Memories
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A collection of moments frozen in time. Click any photo to explore the memory.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-3"
        >
          {memories.map((memory, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedIndex(index)}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={memory.src}
                alt={memory.caption}
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </motion.div>

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
                    src={memories[selectedIndex].src.replace("300", "800")}
                    alt={memories[selectedIndex].caption}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                    <p className="text-lg font-medium text-foreground">
                      {memories[selectedIndex].caption}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Memory {selectedIndex + 1} of {memories.length}
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
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto mt-24 text-center"
      >
        <p className="text-2xl md:text-3xl font-light text-foreground mb-4">
          "Arriesgar Nada, Ganar Nada"
        </p>
        <p className="text-muted-foreground">
          Risk nothing, gain nothing. Thank you for being part of my journey.
        </p>
      </motion.div>
    </section>
  );
};

export default Level500;
