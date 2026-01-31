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
    type: "image",
    media: "images/level300/image1.jpg",
    text: "This level na war oooo.",
    //span: "large",
  },
  {
    id: 2,
    type: "video",
    media: "videos/level300/video1.mp4",
    text: "Everything was about to scatter for real 😫",
    
  },
  //{
  //  id: 3,
  //  type: "stat",
  //  text: "Stat Check: Countless amounts of Fearless Energy Drink consumed. ⚡️",
  //},
  {
    id: 4,
    type: "image",
    media: [
      //"images/level300/image4.jpg",
      "images/level300/image3.jpg",
    ],
    text: "Anyways, May The Juice Worth The Squeeze. ",
  },
  {
    id: 5,
    type: "gallery-2",
    media: [
      "images/level300/web3.jpg",
      "images/level300/webb3.jpg",
    ],
    text: "I was really grinding Web3 here. Good old days mehn!",
    span: "large",
  },
  {
    id: 6,
    type: "image",
    media: [
      "images/level300/awo.jpg",
    ],
    text: "Shot a video at Awo court... then the project ghosted us. 👻",
  },
  {
    id: 7,
    type: "image",
    media: "images/level300/waves2.jpg",
    text: "Just a good day to feel my waves again. 🌊",
  },
  {
    id: 8,
    type: "gallery-4",
    media: [
      "images/level300/pic1.jpg",
      "images/level300/pic2.jpg",
      "images/level300/pic3.jpg",
      "images/level300/pic4.jpg",
    ],
    text: "Decided to start taking pictures for times like this 😎",
  },
  {
    id: 9,
    type: "image",
    media: "images/level300/newtour.jpg",
    text: "Industrial Tour at TCN and RAIN. Loved every bit of it! ⚙️",
  },
  {
    id: 10,
    type: "image",
    media: [
      "images/level300/loya.jpg",

    ],
    text: "Second semester exams really tested me but I survived it all",
  },
  //{
    //id: 11,
    //type: "image",
    //media: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&h=800&fit=crop",
    //text: "Best results so far. 4.0 First Semester. Go hard or go home! 🚀",
    //span: "large",
  //},
  {
    id: 12,
    type: "gallery-2",
    media: [
      "images/level300/new1.jpg",
      "images/level300/new2.jpg",
    ],
    text: "99% Faith, 1% Chance. AlhamduliLlah. 🙏",
    //span: "large",
  },
    {
    id: 15,
    type: "video",
    media: "videos/level300/dance.mp4",
    text: "Dinner time? Trust me, it was fun. 🕺",
    //span: "large",
  },
    {
    id: 14,
    type: "gallery-2",
    media: [
      "images/level300/defense1.jpg",
      "images/level300/defense2.jpg",
    ],
    text: "300 Level SIWES Defense ✅",
    span: "large",
  },
  //{
  //  id: 14,
  //  type: "video",
  //  media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  //  text: "Dinner time? Trust me, it was fun. 🍽️",
  //  span: "large",
  //},

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
    <section id="level-300" className="py-12 px-6 lg:px-12 bg-level-300">
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
