import { motion } from "framer-motion";

const stories = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    title: "The Mentor",
    caption: "He saw something in me I couldn't see myself. One conversation changed the trajectory of my entire career.",
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    title: "First Real Project",
    caption: "Imposter syndrome was real. But shipping something people actually used? Addictive.",
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    title: "Learning to Lead",
    caption: "Leading isn't about having answers. It's about asking better questions.",
  },
  {
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&h=400&fit=crop",
    title: "Small Wins",
    caption: "We celebrated everything. Every bug fixed, every feature shipped. Joy in the journey.",
  },
];

const Level300 = () => {
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

  return (
    <section id="level-300" className="min-h-screen py-24 px-6 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Level 300
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            Growth & Lessons
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The lessons that shaped me weren't found in textbooks. They came from doing.
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
              <motion.div
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />
              </motion.div>

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
      </motion.div>
    </section>
  );
};

export default Level300;
