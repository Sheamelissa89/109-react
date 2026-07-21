const products = [
  {
    id: 1,
    name: "Healing Potion",
    description: "Restores health during difficult adventures.",
    details: "A powerful potion created with enchanted herbs.",
    price: 14.99,
    icon: "🧪",
  },
  {
    id: 2,
    name: "Enchanted Compass",
    description: "Guides travelers toward their destination.",
    details: "The compass glows when danger or treasure is nearby.",
    price: 24.99,
    icon: "🧭",
  },
  {
    id: 3,
    name: "Crystal Lantern",
    description: "Illuminates even the darkest pathways.",
    details: "A magical lantern powered by an everlasting crystal.",
    price: 32.5,
    icon: "🏮",
  },
  {
    id: 4,
    name: "Ancient Map",
    description: "Reveals forgotten lands and hidden locations.",
    details: "A carefully preserved map from an ancient kingdom.",
    price: 18.75,
    icon: "🗺️",
  },
  {
    id: 5,
    name: "Explorer Backpack",
    description: "Carries everything needed for an adventure.",
    details: "A durable backpack with several enchanted storage pockets.",
    price: 44.99,
    icon: "🎒",
  },
  {
    id: 6,
    name: "Mystic Key",
    description: "Unlocks mysterious doors and treasure chests.",
    details: "No one knows which ancient lock this key was designed to open.",
    price: 11.5,
    icon: "🗝️",
  },
];

export function getProducts() {
  return products;
}

export default products;