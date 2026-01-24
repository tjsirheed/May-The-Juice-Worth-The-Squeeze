import { motion } from "framer-motion";

const stories = [
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop",
    title: "The Leap of Faith",
    caption: "I quit my stable job to chase uncertainty. Everyone thought I was crazy. Maybe I was.",
  },
  {
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&h=400&fit=crop",
    title: "Rock Bottom",
    caption: "Three months of rejection. No money. No plan. But something in me refused to give up.",
  },
  {
    image: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=600&h=400&fit=crop",
    title: "The Breakthrough",
    caption: "One email. One yes. After a hundred no's, it only takes one to change everything.",
  },
  {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
    title: "Finding Peace",
    caption: "Success isn't a destination. It's learning to be okay with who you are, right now.",
  },
];

const Level400 = () => {
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
    <section id="level-400" className="min-h-screen py-24 px-6 lg:px-12 bg-muted/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Level 400
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            Turning Points
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The moments that defined everything. Where every decision mattered.
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

export default Level400;
