import { motion } from "framer-motion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
    text: "Confused by tech courses. Then the strike came. Used those 8 months to start Cybersecurity. What a journey!",
    media: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=500&fit=crop",
  },
  {
    type: "image",
    heading: "Strike Over? 😫",
    text: "How do I even revive the student in me?",
    media: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=500&fit=crop",
  },
  {
    type: "image",
    heading: "Game On! 🎮",
    text: "Anyways, no time to waste.",
    media: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=500&fit=crop",
  },
  {
    type: "gallery-4",
    heading: "Fresh Air 💨",
    text: "Fresh after strike. Looking good.",
    media: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=200&h=200&fit=crop",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=200&h=200&fit=crop",
    ],
  },
  {
    type: "video",
    heading: "MAT223 📉",
    text: "Analysis for Non-majors. Some courses were beyond ordinary.",
    media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    type: "video",
    heading: "The TEL241 Project 📡",
    text: "Carried this on my head! Completed it with help from a senior.",
    media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    type: "gallery-2",
    heading: "SEEES Dinner 🏆",
    text: "Most Influential & Most Likely to Practice Engineering awards.",
    media: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
    ],
  },
  {
    type: "image",
    heading: "SWEP at Taolad 🛠️",
    text: "Manual labour was real here mehn.",
    media: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=500&fit=crop",
  },
  {
    type: "video",
    heading: "Sapa Chronicles 🥣",
    text: "Omo... I too drink garri this time ooo.",
    media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    type: "image",
    heading: "200L Defense ✅",
    text: "Fine boy. AlhamduliLlahi for a successful session.",
    media: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=500&fit=crop",
  },
];

const Level200 = () => {
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
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="level-200" className="py-12 px-6 lg:px-12 bg-muted/30 relative">
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
