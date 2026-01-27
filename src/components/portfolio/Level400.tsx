import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const turningPoints = [
  {
    title: "The Leap of Faith",
    content: "Sometimes the biggest risk is not taking one. I left behind the familiar and stepped into the unknown, trusting that the path would reveal itself.",
  },
  {
    title: "Finding My Voice",
    content: "For years, I stayed quiet, afraid to share my ideas. Then one day, I spoke up. That moment changed everything about how I saw myself.",
  },
  {
    title: "The Pivot",
    content: "When my original plan fell apart, I had a choice: give up or adapt. I chose to see failure not as an ending, but as a redirection.",
  },
  {
    title: "Embracing Uncertainty",
    content: "I learned that certainty is an illusion. The most beautiful things in my life came from moments when I had no idea what would happen next.",
  },
];

const Level400 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="level-400"
      ref={containerRef}
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12"
      >
        <motion.div variants={cardVariants} className="mb-16">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Fourth Year
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            Turning Points
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            These are the moments that defined everything. The crossroads where
            every decision mattered, and every choice shaped the future.
          </p>
        </motion.div>

        <div className="space-y-8">
          {turningPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ x: 10, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-card/95 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {point.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Level400;
