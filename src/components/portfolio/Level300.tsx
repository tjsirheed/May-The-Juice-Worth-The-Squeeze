import { motion } from "framer-motion";
import { useVideoPlayer } from "@/hooks/useVideoPlayer";

interface GridItem {
  id: number;
  type: "video" | "image" | "gallery-2" | "gallery-3" | "gallery-4" | "stat";
  media?: string | string[];
  text: string;
  span?: "large" | "normal";
}

const gridItems: GridItem[] = [
  {
    id: 1,
    type: "video",
    media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    text: "This level na war oooo. ⚔️",
    span: "large",
  },
  {
    id: 2,
    type: "video",
    media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    text: "Everything wan scatter. I almost gave up. 😫",
    span: "large",
  },
  {
    id: 3,
    type: "stat",
    text: "Stat Check: Countless amounts of Fearless Energy Drink consumed. ⚡️",
  },
  {
    id: 4,
    type: "gallery-2",
    media: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=500&fit=crop",
    ],
    text: "May The Juice Worth The Squeeze. 🍊",
  },
  {
    id: 5,
    type: "gallery-2",
    media: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=500&fit=crop",
    ],
    text: "Deep into Web3, but still pulled the greatest academic comeback.",
  },
  {
    id: 6,
    type: "gallery-2",
    media: [
      "https://images.unsplash.com/photo-1461896836934- voices?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=500&fit=crop",
    ],
    text: "Shot a video at Awo court... then the project ghosted us. 👻",
  },
  {
    id: 7,
    type: "image",
    media: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    text: "Just a good day to feel my waves again. 🌊",
  },
  {
    id: 8,
    type: "gallery-4",
    media: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop",
    ],
    text: "Decided to start taking pictures. Realized I be fine boy. 😎",
  },
  {
    id: 9,
    type: "image",
    media: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=800&fit=crop",
    text: "Industrial Tour at TCN and RAIN. 🏭",
  },
  {
    id: 10,
    type: "gallery-3",
    media: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=400&fit=crop",
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=400&fit=crop",
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=300&h=400&fit=crop",
    ],
    text: "Exams really tested me. Stayed loyal to the cause. Proper crash out moment. 🤯",
  },
  {
    id: 11,
    type: "image",
    media: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=800&fit=crop",
    text: "Best results so far. 4.0 First Semester. Go hard or go home! 🚀",
    span: "large",
  },
  {
    id: 12,
    type: "gallery-2",
    media: [
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=500&fit=crop",
    ],
    text: "How did I do it? 99% Faith, 1% Chance. AlhamduliLlah. 🙏",
  },
  {
    id: 13,
    type: "gallery-4",
    media: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=300&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=300&fit=crop",
    ],
    text: "SIWES at Multisonic. Defense day. Mo fine ooo! 💼",
  },
  {
    id: 14,
    type: "video",
    media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    text: "Dinner time? Trust me, it was fun. 🍽️",
    span: "large",
  },
  {
    id: 15,
    type: "video",
    media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    text: "Dance for me jooor! 🕺",
    span: "large",
  },
];

const Level300 = () => {
  const videoHandlers = useVideoPlayer();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const getSpanClass = (item: GridItem) => {
    if (item.span === "large") return "md:col-span-2";
    return "col-span-1";
  };

  const renderMedia = (item: GridItem) => {
    switch (item.type) {
      case "video":
        return (
          <video
            src={item.media as string}
            className="w-full h-full object-cover"
            controls
            playsInline
            {...videoHandlers}
          />
        );

      case "image":
        return (
          <img
            src={item.media as string}
            alt={item.text}
            className="w-full h-full object-cover"
          />
        );

      case "gallery-2":
        return (
          <div className="w-full h-full grid grid-cols-2">
            {(item.media as string[]).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${item.text} ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        );

      case "gallery-3":
        return (
          <div className="w-full h-full grid grid-cols-3">
            {(item.media as string[]).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${item.text} ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        );

      case "gallery-4":
        return (
          <div className="w-full h-full grid grid-cols-2 grid-rows-2">
            {(item.media as string[]).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${item.text} ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            ))}
          </div>
        );

      case "stat":
        return (
          <div className="w-full h-full bg-neutral-800 flex items-center justify-center p-6">
            <p className="text-yellow-400 text-lg md:text-xl font-bold text-center leading-relaxed">
              {item.text}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="level-300" className="py-12 px-6 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Third Year
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            Growth & Lessons
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gridItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`${getSpanClass(item)} relative rounded-2xl overflow-hidden shadow-lg group ${
                item.type === "stat" ? "min-h-[200px]" : "min-h-[280px] md:min-h-[320px]"
              }`}
            >
              {/* Media */}
              {renderMedia(item)}

              {/* Overlay Text (not for stat type) */}
              {item.type !== "stat" && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-12">
                  <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              )}

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Level300;
