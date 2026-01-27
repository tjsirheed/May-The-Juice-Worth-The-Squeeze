import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    caption: "First Day of College",
    description: "A new chapter begins with endless possibilities.",
  },
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    caption: "Study Sessions",
    description: "Late nights and strong coffee became my companions.",
  },
  {
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
    caption: "Making Friends",
    description: "Found my tribe in the most unexpected places.",
  },
  {
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    caption: "Weekend Adventures",
    description: "Every weekend was a chance for exploration.",
  },
  {
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop",
    caption: "First Project",
    description: "Creating something from nothing was exhilarating.",
  },
  {
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=600&h=400&fit=crop",
    caption: "Finding Passion",
    description: "Discovered what truly sets my soul on fire.",
  },
];

const Level200 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="level-200" className="min-h-screen py-24 px-6 lg:px-12 bg-muted/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Second Year
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            Building Momentum
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg leading-relaxed text-foreground/90 max-w-3xl mb-12"
        >
          With the foundation set, it was time to build. This phase was about
          taking chances, making mistakes, and learning from every experience.
          Each step forward, no matter how small, added to the momentum that
          would carry me further than I ever imagined.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {cards.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card rounded-xl overflow-hidden shadow-md border border-border h-full"
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={card.image}
                        alt={card.caption}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {card.caption}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 bg-card border-border hover:bg-muted" />
            <CarouselNext className="hidden sm:flex -right-4 bg-card border-border hover:bg-muted" />
          </Carousel>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          ← Swipe or drag to explore →
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Level200;
