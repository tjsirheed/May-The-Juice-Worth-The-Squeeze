import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type CardType = "image" | "split" | "grid-3" | "grid-5";

interface StoryCard {
  type: CardType;
  heading: string;
  text: string;
  media: string | string[];
  wide?: boolean;
}

const cards: StoryCard[] = [
  {
    type: "image",
    heading: "400 Level Mehn! 🤯",
    text: "I took 8 courses with 5 practicals. What do you mean I have to write 5 reports in a week?",
    media: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=500&fit=crop",
  },
  {
    type: "image",
    heading: "Zoological Garden 🦁",
    text: "First time at the Zoo. Exploring nature.",
    media: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=400&h=500&fit=crop",
  },
  {
    type: "split",
    heading: "Last Skin? ✂️",
    text: "That stage when you barb last skin? Yeah, that happened.",
    media: [
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&h=250&fit=crop",
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=200&h=250&fit=crop",
    ],
  },
  {
    type: "split",
    heading: "Still Fresh Sha 😎",
    text: "Despite the stress, the drip remained.",
    media: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=250&fit=crop",
    ],
  },
  {
    type: "grid-3",
    heading: "Random Moments 📸",
    text: "Just some random pictures from the year.",
    media: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=150&h=150&fit=crop",
    ],
  },
  {
    type: "split",
    heading: "Power System 2 ⚡",
    text: "Just finished the exam here. It was... breathtaking (and not in a good way).",
    media: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=250&fit=crop",
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=200&h=250&fit=crop",
    ],
  },
  {
    type: "image",
    heading: "Awba Dam 🌊",
    text: "Fun time at the dam. Her view tho.",
    media: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=500&fit=crop",
  },
  {
    type: "image",
    heading: "TESA Conference 👔",
    text: "Showed up again. Never missed one since 200 Level.",
    media: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=500&fit=crop",
  },
  {
    type: "grid-5",
    heading: "IT at VAAV Solutions 💻",
    text: "Work mode activated. Building real things.",
    media: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&h=150&fit=crop",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop",
    ],
    wide: true,
  },
  {
    type: "image",
    heading: "Final Year Loading ⏳",
    text: "Looking at final year... Vamos jooor!",
    media: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=500&fit=crop",
  },
];

const Level400 = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const renderMedia = (card: StoryCard) => {
    switch (card.type) {
      case "image":
        return (
          <motion.img
            src={card.media as string}
            alt={card.heading}
            className="w-full h-64 object-cover rounded-xl"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        );
      case "split":
        return (
          <div className="flex gap-2 h-64">
            {(card.media as string[]).map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`${card.heading} ${idx + 1}`}
                className="w-1/2 h-full object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        );
      case "grid-3":
        return (
          <div className="grid grid-cols-3 gap-2 h-64">
            {(card.media as string[]).map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`${card.heading} ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        );
      case "grid-5":
        return (
          <div className="grid grid-cols-3 grid-rows-2 gap-2 h-64">
            {(card.media as string[]).map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`${card.heading} ${idx + 1}`}
                className={`w-full h-full object-cover rounded-lg ${
                  idx === 3 ? "col-span-1" : ""
                } ${idx === 4 ? "col-span-1" : ""}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="level-400" className="py-12 px-6 lg:px-12 bg-level-400 relative">
      {/* Fixed Header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <span className="text-sm font-medium text-primary tracking-wider uppercase">
          Fourth Year
        </span>
        <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
          The Final Stretch
        </h2>
      </motion.div>

      {/* Horizontal Scroll Area */}
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-6 pb-6 snap-x snap-mandatory overflow-x-auto scrollbar-hide">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className={`${
                card.wide ? "min-w-[500px] max-w-[500px]" : "min-w-[350px] max-w-[350px]"
              } bg-card rounded-2xl shadow-lg border border-border overflow-hidden snap-center flex-shrink-0`}
            >
              {/* Media Section */}
              <div className="p-4">{renderMedia(card)}</div>

              {/* Text Section */}
              <div className="p-5 pt-2 whitespace-normal">
                <h3 className="font-semibold text-xl text-foreground mb-3">
                  {card.heading}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="mt-2" />
      </ScrollArea>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 mt-8"
      >
        <motion.span
          animate={{ x: [-3, 3, -3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary text-lg"
        >
          ←
        </motion.span>
        <span className="text-base font-medium text-foreground/80 bg-primary/10 px-4 py-2 rounded-full">
          Swipe to explore my fourth year journey
        </span>
        <motion.span
          animate={{ x: [3, -3, 3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-primary text-lg"
        >
          →
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Level400;
