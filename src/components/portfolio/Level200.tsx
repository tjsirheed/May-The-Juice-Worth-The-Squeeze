import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";

type CardType = "image" | "gallery-4" | "gallery-2" | "video";

interface StoryCard {
  type: CardType;
  heading: string;
  text: string;
  media: string | string[];
}

const cards: StoryCard[] = [
  {
    type: "image",
    heading: "Which way like this? 🤔",
    text: "8-month strike just after resumption. What do we do now?",
    media: "images/level200/image-1.jpg",
  },
  {
    type: "image",
    heading: "Strike is Over? 😫",
    text: "Omo! I really struggled to revive the student in me.",
    media: "images/level200/image-2.jpg",
  },
  {
    type: "image",
    heading: "Game On! 🎮",
    text: "Anyways, Head in the game again.",
    media: "images/level200/image-3.jpg",
  },
  {
    type: "gallery-4",
    heading: " ",
    text: " ",
    media: [
      "images/level200/image-4.jpg",
      "images/level200/image-5.jpg",
      "images/level200/image-6.jpg",
      "images/level200/image-7.jpg",
    ],
  },
  {
    type: "video",
    heading: "MAT223 📉",
    text: "Analysis for Non-majors? Never again!",
    media: "videos/level200/video-1.mp4",
  },
  {
    type: "video",
    heading: "The TEL241 Project",
    text: "Digital Display System.",
    media: "videos/level200/video-2.mp4",
  },
  {
    type: "image",
    heading: "SEEES Dinner",
    text: "I got awards for the most influential & most Likely to Practice Engineering in 200 level.",
    media: [
      "images/level200/dinner-image.jpg",
    ],
  },
  {
    type: "image",
    heading: "SWEP at Taolad 🛠️",
    text: "Manual labour was real here mehn! ",
    media: "images/level200/swep.jpg",
  },
  {
    type: "video",
    heading: "Sapa hold my neck for here ",
    text: "Omo... I too drink garri this time ooo.",
    media: "videos/level200/sapa.mp4",
  },
  {
    type: "image",
    heading: "200L Defense ✅",
    text: "Fine boy. AlhamduliLlahi for a successful session.",
    media: "images/level200/defense.jpg",
  },
];

const Level200 = () => {
  const videoHandlers = useVideoPlayer();
  
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
      case "gallery-4":
        return (
          <div className="grid grid-cols-2 gap-2 h-64">
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
      case "gallery-2":
        return (
          <div className="relative h-64">
            <motion.img
              src={(card.media as string[])[0]}
              alt={`${card.heading} 1`}
              className="absolute top-0 left-0 w-4/5 h-48 object-cover rounded-xl shadow-lg z-10"
              whileHover={{ scale: 1.03, rotate: -2 }}
              transition={{ duration: 0.3 }}
            />
            <motion.img
              src={(card.media as string[])[1]}
              alt={`${card.heading} 2`}
              className="absolute bottom-0 right-0 w-4/5 h-48 object-cover rounded-xl shadow-lg"
              whileHover={{ scale: 1.03, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        );
      case "video":
        return (
          <div className="w-full h-64 rounded-xl overflow-hidden">
            <video
              src={card.media as string}
              className="w-full h-full object-cover"
              controls
              playsInline
              {...videoHandlers}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="level-200" className="py-12 px-6 lg:px-12 bg-level-200 relative">
      {/* Fixed Header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <span className="text-sm font-medium text-primary tracking-wider uppercase">
          Second Year
        </span>
        <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
          Finding My Footing
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
              className="min-w-[350px] max-w-[350px] bg-card rounded-2xl shadow-lg border border-border overflow-hidden snap-center flex-shrink-0"
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
          Swipe to explore my second year journey
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

export default Level200;
