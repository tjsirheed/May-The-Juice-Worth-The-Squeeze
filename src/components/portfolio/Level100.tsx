import { motion } from "framer-motion";

const stories = [
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    title: "Where It All Began",
    caption: "The mountains where I spent my childhood summers. Every trail taught me something new about myself.",
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    title: "First Adventure",
    caption: "My first solo trip at 16. Terrified but alive. This view changed everything.",
  },
  {
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
    title: "The Quiet Place",
    caption: "A hidden forest near my hometown. I came here to think, to dream, to plan my escape.",
  },
  {
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop",
    title: "Chasing Waterfalls",
    caption: "We hiked 8 hours to find this. Worth every blister and wrong turn.",
  },
];

const Level100 = () => {
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
    <section id="level-100" className="min-h-screen py-24 px-6 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Level 100
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            The Beginning
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Every journey has a starting point. These are the moments that shaped my earliest dreams.
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

export default Level100;
