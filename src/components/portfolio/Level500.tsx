import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

type GridItem = {
  id: number;
  type: "image" | "video" | "cluster" | "stat" | "album";
  text: string;
  media?: MediaItem[];
  albumImages?: string[];
  wide?: boolean;
};

const gridItems: GridItem[] = [
  {
    id: 1,
    type: "image",
    text: "500 level resumption is almost here ooo.",
    media: [{ type: "image", src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop" }],
  },
  {
    id: 2,
    type: "video",
    text: "You dey find me for class ke? 😂",
    media: [{ type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" }],
  },
  {
    id: 3,
    type: "cluster",
    text: "Attend parties ooo. We ball too.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=200&fit=crop" },
      { type: "image", src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=200&fit=crop" },
      { type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    ],
  },
  {
    id: 4,
    type: "cluster",
    text: "IEEE-IMS Workshop. Work hard, play hard.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop" },
      { type: "image", src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop" },
      { type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
    ],
  },
  {
    id: 5,
    type: "video",
    text: "I was very unserious in first semester oooo...",
    media: [{ type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" }],
  },
  {
    id: 6,
    type: "stat",
    text: "Still had a 4.0 CGPA. God did. 🙏",
  },
  {
    id: 7,
    type: "album",
    text: "FYB Week Highlights.",
    media: [{ type: "image", src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop" }],
    albumImages: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 8,
    type: "cluster",
    text: "Final CA as an Undergraduate.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop" },
      { type: "image", src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=200&fit=crop" },
    ],
  },
  {
    id: 9,
    type: "cluster",
    text: "Final exams next week? Still showed up for the best tech event in Ibadan.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop" },
      { type: "image", src: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=300&h=200&fit=crop" },
    ],
  },
  {
    id: 10,
    type: "video",
    text: "Showed up for SEEES week.",
    media: [{ type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" }],
  },
  {
    id: 11,
    type: "cluster",
    text: "Final dinner as a SEEESite.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop" },
      { type: "image", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop" },
    ],
  },
  {
    id: 12,
    type: "video",
    text: "Thank God for keeping things running smoothly.",
    media: [{ type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" }],
  },
  {
    id: 13,
    type: "cluster",
    text: "Sign out jooor (MTJWTS).",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop" },
      { type: "image", src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop" },
    ],
  },
  {
    id: 14,
    type: "cluster",
    text: "DONE! ✅",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=300&h=200&fit=crop" },
      { type: "image", src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=300&h=200&fit=crop" },
    ],
  },
  {
    id: 15,
    type: "video",
    text: "It's all by HIS grace.",
    media: [{ type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" }],
  },
  {
    id: 16,
    type: "image",
    text: "AVMS Dinner.",
    media: [{ type: "image", src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&h=400&fit=crop" }],
  },
  {
    id: 17,
    type: "cluster",
    text: "Back on the pitch after a long time.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=200&fit=crop" },
      { type: "image", src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=300&h=200&fit=crop" },
    ],
  },
  {
    id: 18,
    type: "video",
    text: "Project Palava?",
    media: [{ type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" }],
  },
  {
    id: 19,
    type: "video",
    text: "Literature review?",
    media: [{ type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" }],
  },
  {
    id: 20,
    type: "video",
    text: "My supervisor likes aesthetic, so I turned to a spray painter.",
    media: [{ type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" }],
  },
  {
    id: 21,
    type: "cluster",
    text: "I was so tired here.",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=300&h=200&fit=crop" },
      { type: "image", src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop" },
    ],
  },
  {
    id: 22,
    type: "cluster",
    text: "Two days to defense and project is not working? 94 minutes defeat? Never!",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop" },
      { type: "image", src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop" },
    ],
  },
  {
    id: 23,
    type: "album",
    text: "Internal Defense. 📁",
    media: [{ type: "image", src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&h=300&fit=crop" }],
    albumImages: [
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 24,
    type: "album",
    text: "External Defense. 🎓",
    media: [{ type: "image", src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop" }],
    albumImages: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1627556704302-624286467c65?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&h=600&fit=crop",
    ],
  },
  {
    id: 25,
    type: "video",
    text: "Undergraduates should listen to this!",
    media: [{ type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" }],
  },
  {
    id: 26,
    type: "video",
    text: "Grateful to everyone that played a part.",
    media: [{ type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" }],
  },
  {
    id: 27,
    type: "video",
    text: "My turn to be a Graduate Engineer!",
    media: [{ type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" }],
  },
  {
    id: 28,
    type: "image",
    text: "From full hair to low cuts.",
    media: [{ type: "image", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop" }],
  },
  {
    id: 29,
    type: "video",
    text: "I will leave with this. 👋",
    media: [{ type: "video", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }],
    wide: true,
  },
];

const Level500 = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<string[] | null>(null);
  const [albumIndex, setAlbumIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleAlbumOpen = (images: string[]) => {
    setSelectedAlbum(images);
    setAlbumIndex(0);
  };

  const handleAlbumPrevious = () => {
    if (selectedAlbum) {
      setAlbumIndex(albumIndex === 0 ? selectedAlbum.length - 1 : albumIndex - 1);
    }
  };

  const handleAlbumNext = () => {
    if (selectedAlbum) {
      setAlbumIndex(albumIndex === selectedAlbum.length - 1 ? 0 : albumIndex + 1);
    }
  };

  const renderMedia = (item: GridItem) => {
    if (item.type === "stat") {
      return (
        <div className="w-full h-full min-h-[200px] bg-yellow-500 flex items-center justify-center p-6">
          <p className="text-black text-xl md:text-2xl font-bold text-center leading-tight">
            {item.text}
          </p>
        </div>
      );
    }

    if (item.type === "album" && item.media && item.albumImages) {
      return (
        <button
          onClick={() => handleAlbumOpen(item.albumImages!)}
          className="relative w-full h-full min-h-[250px] group cursor-pointer"
        >
          {/* Stacked photos effect */}
          <div className="absolute inset-2 bg-white/20 rounded-lg transform rotate-3" />
          <div className="absolute inset-2 bg-white/30 rounded-lg transform -rotate-2" />
          <img
            src={item.media[0].src}
            alt={item.text}
            className="relative w-full h-full object-cover rounded-lg"
          />
          {/* Badge */}
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 z-10">
            <Layers className="w-3 h-3" />
            +{item.albumImages.length - 1} More
          </div>
          {/* Text Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12 rounded-b-lg">
            <p className="text-white text-sm md:text-base font-medium">
              {item.text}
            </p>
          </div>
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 rounded-lg" />
        </button>
      );
    }

    if (item.type === "image" && item.media) {
      return (
        <div className="relative w-full h-full min-h-[200px] group">
          <img
            src={item.media[0].src}
            alt={item.text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12">
            <p className="text-white text-sm md:text-base font-medium">
              {item.text}
            </p>
          </div>
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        </div>
      );
    }

    if (item.type === "video" && item.media) {
      return (
        <div className="relative w-full h-full min-h-[250px] group">
          <video
            src={item.media[0].src}
            controls
            className="w-full h-full object-cover"
            preload="metadata"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12 pointer-events-none">
            <p className="text-white text-sm md:text-base font-medium">
              {item.text}
            </p>
          </div>
        </div>
      );
    }

    if (item.type === "cluster" && item.media) {
      const hasVideo = item.media.some((m) => m.type === "video");
      const images = item.media.filter((m) => m.type === "image");
      const videos = item.media.filter((m) => m.type === "video");

      if (hasVideo && item.media.length === 3) {
        // 2 images + 1 video layout
        return (
          <div className="relative w-full h-full min-h-[300px] group">
            <div className="grid grid-cols-2 gap-1 h-full">
              <div className="flex flex-col gap-1">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt=""
                    className="w-full h-1/2 object-cover"
                  />
                ))}
              </div>
              <video
                src={videos[0].src}
                controls
                className="w-full h-full object-cover"
                preload="metadata"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12 pointer-events-none">
              <p className="text-white text-sm md:text-base font-medium">
                {item.text}
              </p>
            </div>
          </div>
        );
      }

      // Split view (2 images)
      return (
        <div className="relative w-full h-full min-h-[200px] group">
          <div className="flex gap-1 h-full">
            {item.media.map((m, idx) => (
              <img
                key={idx}
                src={m.src}
                alt=""
                className="w-1/2 h-full object-cover"
              />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-12">
            <p className="text-white text-sm md:text-base font-medium">
              {item.text}
            </p>
          </div>
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        </div>
      );
    }

    return null;
  };

  return (
    <section id="level-500" className="min-h-screen py-24 px-6 lg:px-12 bg-muted/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <span className="text-sm font-medium text-primary tracking-wider uppercase">
            Fifth Year
          </span>
          <h2 className="text-3xl md:text-5xl font-light mt-2 text-foreground">
            500 Level - The Victory Lap
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            The final chapter. From resumption to graduation. Every moment mattered.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {gridItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`break-inside-avoid overflow-hidden rounded-xl bg-card shadow-lg ${
                item.wide ? "sm:col-span-2 lg:col-span-3" : ""
              }`}
            >
              {renderMedia(item)}
            </motion.div>
          ))}
        </motion.div>

        {/* Album Lightbox */}
        <Dialog open={selectedAlbum !== null} onOpenChange={() => setSelectedAlbum(null)}>
          <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur-md border-border overflow-hidden">
            <AnimatePresence mode="wait">
              {selectedAlbum && (
                <motion.div
                  key={albumIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <img
                    src={selectedAlbum[albumIndex]}
                    alt={`Album photo ${albumIndex + 1}`}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                    <p className="text-sm text-muted-foreground">
                      Photo {albumIndex + 1} of {selectedAlbum.length}
                    </p>
                  </div>

                  {/* Navigation buttons */}
                  <button
                    onClick={handleAlbumPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-background transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleAlbumNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-background transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto mt-24 text-center"
      >
        <p className="text-2xl md:text-3xl font-light text-foreground mb-4">
          "Arriesgar Nada, Ganar Nada"
        </p>
        <p className="text-muted-foreground">
          Risk nothing, gain nothing. Thank you for being part of my journey.
        </p>
      </motion.div>
    </section>
  );
};

export default Level500;
