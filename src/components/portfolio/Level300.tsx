import { motion } from "framer-motion";
import { TrendingUp, Coffee, BookOpen, MapPin, Heart, Award } from "lucide-react";

const bentoItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    alt: "Growth moment",
    size: "large",
  },
  {
    type: "stat",
    icon: TrendingUp,
    value: "4.0",
    label: "GPA Achieved",
    size: "small",
  },
  {
    type: "text",
    content: "Growth isn't always linear. Some days you leap forward, others you take a step back. What matters is the direction you're heading.",
    size: "medium",
  },
  {
    type: "stat",
    icon: Coffee,
    value: "847",
    label: "Cups of Coffee",
    size: "small",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
    alt: "Team collaboration",
    size: "medium",
  },
  {
    type: "stat",
    icon: BookOpen,
    value: "52",
    label: "Books Read",
    size: "small",
  },
  {
    type: "stat",
    icon: MapPin,
    value: "7",
    label: "Countries Visited",
    size: "small",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop",
    alt: "Working hard",
    size: "medium",
  },
  {
    type: "text",
    content: "The lessons learned during this time weren't found in textbooks. They came from failures, from trying again, and from never giving up.",
    size: "medium",
  },
  {
    type: "stat",
    icon: Heart,
    value: "∞",
    label: "Memories Made",
    size: "small",
  },
  {
    type: "stat",
    icon: Award,
    value: "12",
    label: "Achievements",
    size: "small",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&h=400&fit=crop",
    alt: "Celebration",
    size: "large",
  },
];

const Level300 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const getSizeClasses = (size: string, type: string) => {
    if (type === "image" && size === "large") return "col-span-2 row-span-2";
    if (size === "large") return "col-span-2 row-span-2";
    if (size === "medium") return "col-span-2 sm:col-span-1 row-span-1";
    return "col-span-1 row-span-1";
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
        <motion.div variants={itemVariants} className="mb-12">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Third Year
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            Growth & Lessons
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(120px,auto)]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${getSizeClasses(item.size, item.type)} rounded-xl overflow-hidden`}
            >
              {item.type === "image" && (
                <motion.div
                  className="relative w-full h-full min-h-[150px] overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              )}

              {item.type === "stat" && (
                <motion.div
                  className="w-full h-full min-h-[120px] bg-card border border-border p-4 flex flex-col items-center justify-center text-center"
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.05)" }}
                  transition={{ duration: 0.2 }}
                >
                  {item.icon && <item.icon className="w-6 h-6 text-primary mb-2" />}
                  <span className="text-2xl md:text-3xl font-bold text-foreground">
                    {item.value}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {item.label}
                  </span>
                </motion.div>
              )}

              {item.type === "text" && (
                <motion.div
                  className="w-full h-full min-h-[120px] bg-primary/5 border border-primary/10 p-5 flex items-center"
                  whileHover={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed italic">
                    "{item.content}"
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Level300;
