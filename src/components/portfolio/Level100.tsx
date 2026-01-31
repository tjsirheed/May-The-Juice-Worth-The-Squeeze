import { motion } from "framer-motion";

const storyContent = [
  {
    layout: "image-left",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    heading: "masked_up_szn 😷",
    body: "Covid-19 was still a thing. I stepped onto campus wondering... I really have to be strategic about this degree thingy. That First Class dream felt so real, yet so far away. But I told myself: I will be there no matter what! 🚀",
  },
  {
    layout: "text-left",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
    heading: "Hunting for the Best Tutors 📚",
    body: "Started my journey hopping between tutorials. Tried two, wasn't feeling the vibe. 😒 Eventually settled for 4-Point Makers (The GOATs at the time). If you know, you know.",
  },
  {
    layout: "image-left",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
    heading: "The Zik Hall Chronicles 🌙",
    body: "The TDB (Till Day Break) drill was brazzy man! Reading from 11 PM to 5 AM, then crashing at Aji's room in Zik Hall (A74). Sleep was a myth. 😴📖",
  },
  {
    layout: "text-left",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    heading: "Mo fine gan! (I'm too fine!) 😎",
    body: "Amidst the stress, we still had fun. I tried to mimic a cool character here but ended up looking like an aspiring politician. Vote for me? 😂🗳️",
  },
  {
    layout: "image-left",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    heading: "Disaster Strikes: PHY 102 🚑",
    body: "First semester exams came, and my immune system decided to crash. I got so sick I started doubting my genotype. 🤒 Arrived at the PHY 102 venue with only 40 minutes left. I just wrote what I could and left the rest to God. I was praying for a B at best...",
  },
  {
    layout: "text-left",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    heading: "God Came Through! 🙏✨",
    body: "The results came out... I scored",
    highlightScore: "73",
    bodyEnd: ". 🤯 I don't know how, but the comeback was real. 100 level was tough, but we survived!",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.15, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Level100 = () => {
  return (
    <section id="level-100" className="py-12 px-6 lg:px-12 bg-level-100">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            First Year
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            The Beginning
          </h2>
        </motion.div>

        <div className="space-y-10">
          {storyContent.map((row, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                row.layout === "image-left" 
                  ? "lg:flex-row" 
                  : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <motion.div 
                className="w-full lg:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={row.image}
                  alt={row.heading}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                />
              </motion.div>

              {/* Text */}
              <div className={`w-full lg:w-1/2 ${
                row.layout === "image-left" ? "lg:text-left" : "lg:text-right"
              }`}>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {row.heading}
                </h3>
                <p className="text-lg leading-relaxed text-foreground/80">
                  {row.body}
                  {row.highlightScore && (
                    <>
                      {" "}
                      <motion.span
                        variants={pulseVariants}
                        animate="animate"
                        className="inline-block text-3xl font-bold text-primary"
                      >
                        {row.highlightScore}
                      </motion.span>
                      {row.bodyEnd}
                    </>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Level100;
