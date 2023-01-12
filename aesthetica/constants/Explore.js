import LivingRoom from "../public/home/rooms/living_room.png";
import Bedroom from "../public/home/rooms/bedroom.png";
import DiningRoom from "../public/home/rooms/dining_room.png";
import Bathroom from "../public/home/rooms/bathroom.png";
import Hallway from "../public/home/rooms/hallway.png";

import Beds from "../public/home/categories/beds.jpg";
import Chairs from "../public/home/categories/chairs.jpg";
import Cushions from "../public/home/categories/cushions.jpg";
import Lighting from "../public/home/categories/lighting.jpg";
import Sofas from "../public/home/categories/sofas.jpg";

export const exploreRooms = [
  { label: "Living room", image: LivingRoom, path: "living_room", index: "0" },
  { label: "Bedroom", image: Bedroom, path: "bedroom", index: "1" },
  { label: "Dining room", image: DiningRoom, path: "dining_room", index: "2" },
  { label: "Bathroom", image: Bathroom, path: "bathroom", index: "3" },
  { label: "Hallway", image: Hallway, path: "hallway", index: "4" },
];

export const exploreCategories = [
  { label: "Beds", image: Beds, path: "bedroom/beds" },
  { label: "Chairs", image: Chairs, path: "dining_room/chairs" },
  { label: "Cushions", image: Cushions, path: "living_room/cushions" },
  { label: "Lighting", image: Lighting, path: "living_room/lightning" },
  { label: "Sofas", image: Sofas, path: "living_room/sofas" },
];
