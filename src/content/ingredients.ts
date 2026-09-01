import type { Ingredient } from "@/types/content";

export const ingredients: Ingredient[] = [
  {
    id: "arnica",
    commonName: "Arnica",
    botanicalName: "Arnica montana",
    shortDescription:
      "A traditional botanical often chosen for massage blends and body-care rituals.",
    roleInProduct:
      "Included for its place in time-honored botanical body-care traditions.",
    sourcingNote: "Sourcing details to be confirmed.",
  },
  {
    id: "calendula",
    commonName: "Calendula",
    botanicalName: "Calendula officinalis",
    shortDescription:
      "A gentle golden flower valued in botanical skincare and massage oil formulations.",
    roleInProduct:
      "Adds a nurturing botanical note to the overall blend experience.",
    sourcingNote: "Sourcing details to be confirmed.",
  },
  {
    id: "clove",
    commonName: "Clove",
    botanicalName: "Syzygium aromaticum",
    shortDescription:
      "A warm, aromatic spice botanical with a distinctive depth of character.",
    roleInProduct:
      "Contributes warmth and aromatic complexity to the ritual experience.",
    sourcingNote: "Sourcing details to be confirmed.",
  },
  {
    id: "ginger",
    commonName: "Ginger",
    botanicalName: "Zingiber officinale",
    shortDescription:
      "A rooted botanical known for its invigorating aroma and traditional use.",
    roleInProduct:
      "Brings a grounding, warming presence to the massage ritual.",
    sourcingNote: "Sourcing details to be confirmed.",
  },
  {
    id: "goldenseal",
    commonName: "Goldenseal",
    botanicalName: "Hydrastis canadensis",
    shortDescription:
      "A North American botanical with a long history in herbal traditions.",
    roleInProduct:
      "Part of the considered botanical composition of the blend.",
    sourcingNote: "Sourcing details to be confirmed.",
  },
  {
    id: "grapefruit",
    commonName: "Grapefruit",
    botanicalName: "Citrus paradisi",
    shortDescription:
      "A bright citrus botanical that lends a fresh, uplifting aromatic quality.",
    roleInProduct:
      "Adds a luminous citrus note to the sensory experience of the oil.",
    sourcingNote: "Sourcing details to be confirmed.",
  },
  {
    id: "lemongrass",
    commonName: "Lemongrass",
    botanicalName: "Cymbopogon citratus",
    shortDescription:
      "A grassy, citrus-forward botanical beloved in aromatic body-care rituals.",
    roleInProduct:
      "Introduces a clean, herbal brightness to the blend's aroma profile.",
    sourcingNote: "Sourcing details to be confirmed.",
  },
  {
    id: "palm-christi",
    commonName: "Palm Christi",
    botanicalName: "Ricinus communis",
    shortDescription:
      "A traditional carrier botanical oil with a rich heritage in body-care practices.",
    roleInProduct:
      "Serves as a foundational botanical base within the formulation.",
    sourcingNote: "Sourcing details to be confirmed.",
  },
  {
    id: "peppermint",
    commonName: "Peppermint",
    botanicalName: "Mentha piperita",
    shortDescription:
      "A cooling, aromatic botanical recognized for its crisp, refreshing character.",
    roleInProduct:
      "Lends a cooling aromatic finish to the massage experience.",
    sourcingNote: "Sourcing details to be confirmed.",
  },
  {
    id: "turmeric",
    commonName: "Turmeric",
    botanicalName: "Curcuma longa",
    shortDescription:
      "A golden-rooted botanical with deep roots in traditional wellness rituals.",
    roleInProduct:
      "Completes the blend with its warm, earthy botanical presence.",
    sourcingNote: "Sourcing details to be confirmed.",
  },
];

export function getIngredient(id: string) {
  return ingredients.find((item) => item.id === id);
}
