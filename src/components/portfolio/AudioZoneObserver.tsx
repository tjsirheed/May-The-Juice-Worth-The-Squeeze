import { useEffect } from "react";
import { useAudio } from "@/contexts/AudioContext";

// UPDATED MAPPING: Song 1 covers everything up to Level 200
const ZONE_MAP: Record<string, number> = {
  "hero-section": 0, // Plays Song 1
  "level-100": 0,    // Plays Song 1 (Shared - No fade, just continues)
  "level-200": 1,    // Plays Song 2
  "level-300": 2,    // Plays Song 3
  "level-400": 3,    // Plays Song 4
  "level-500": 4,    // Plays Song 5
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