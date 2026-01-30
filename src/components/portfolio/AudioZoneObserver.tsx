import { useEffect } from "react";
import { useAudio } from "@/contexts/AudioContext";

const ZONE_MAP: Record<string, number> = {
  "hero-section": 0,
  "level-100": 0,
  "level-200": 1,
  "level-300": 2,
  "level-400": 3,
  "level-500": 4,
};

const AudioZoneObserver = () => {
  const { setCurrentZone } = useAudio();

  useEffect(() => {
    const sections = Object.keys(ZONE_MAP)
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        let mostVisible: { id: string; ratio: number } | null = null;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!mostVisible || entry.intersectionRatio > mostVisible.ratio) {
              mostVisible = {
                id: entry.target.id,
                ratio: entry.intersectionRatio,
              };
            }
          }
        });

        if (mostVisible) {
          const zone = ZONE_MAP[mostVisible.id];
          if (zone !== undefined) {
            setCurrentZone(zone);
          }
        }
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setCurrentZone]);

  return null;
};

export default AudioZoneObserver;
