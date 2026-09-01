import type { RitualStep } from "@/types/content";

export const ritualSteps: RitualStep[] = [
  {
    id: "prepare",
    number: "01",
    title: "Prepare",
    body: "Create a quiet space. Warm the room, dim the lights, and take a slow breath. Place a few drops of oil in your palms and let them rest there for a moment before you begin.",
    category: "massage",
  },
  {
    id: "massage",
    number: "02",
    title: "Massage",
    body: "Using slow, intentional strokes, massage the oil into clean skin. Follow the natural contours of the body. Let aroma and touch guide the pace — there is no rush.",
    category: "massage",
  },
  {
    id: "restore",
    number: "03",
    title: "Restore",
    body: "When the massage is complete, rest quietly. Allow the botanical aroma to linger. Drink water, wrap yourself in warmth, and carry the stillness forward.",
    category: "massage",
  },
];

export const ritualCategories = [
  { id: "morning", label: "Morning Ritual", available: false },
  { id: "after-shower", label: "After-Shower Ritual", available: false },
  { id: "massage", label: "Massage Ritual", available: true },
  { id: "evening", label: "Evening Ritual", available: false },
];
