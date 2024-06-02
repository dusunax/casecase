// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-yellow-400 border-yellow-400

import { PRODUCT_PRICES } from "@/config/product";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  { label: "Yellow", value: "yellow", tw: "yellow-400" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      brand: "apple",
      label: "iPhone X",
      value: "iphonex",
    },
    {
      brand: "apple",
      label: "iPhone 11",
      value: "iphone11",
    },
    {
      brand: "apple",
      label: "iPhone 12",
      value: "iphone12",
    },
    {
      brand: "apple",
      label: "iPhone 13",
      value: "iphone13",
    },
    {
      brand: "apple",
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      brand: "apple",
      label: "iPhone 15",
      value: "iphone15",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "Soft grippy texture",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;

export interface DesignOptions {
  color: (typeof COLORS)[number];
  model: (typeof MODELS.options)[number];
  material: (typeof MATERIALS.options)[number];
  finish: (typeof FINISHES.options)[number];
}
