import { motion } from "framer-motion";

const stories = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    title: "First Day of College",
    caption: "Walking into a new world, heart pounding. I didn't know anyone, but I knew this was my chance.",
  },
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    title: "Late Night Study Sessions",
    caption: "Coffee-stained notes and 3am breakthroughs. These nights forged friendships that lasted forever.",
  },
  {
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
    title: "Finding My Tribe",
    caption: "They say you become like the five people you spend the most time with. I chose wisely.",
  },
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    title: "Weekend Escapes",
    caption: "Between deadlines, we chased sunsets. These stolen moments kept us sane.",
  },
];

const Level200 = () => {
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
    <section id="level-200" className="min-h-screen py-24 px-6 lg:px-12 bg-muted/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Level 200
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            Building Momentum
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Taking chances, making mistakes, and learning from every experience.
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

export default Level200;
