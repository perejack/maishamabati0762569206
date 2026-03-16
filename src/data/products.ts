import boxProfileImg from "@/assets/products/box-profile.jpg";
import corrugatedImg from "@/assets/products/corrugated.jpg";
import versatileImg from "@/assets/products/versatile.jpg";
import romantileImg from "@/assets/products/romantile.jpg";
import aluZincImg from "@/assets/products/alu-zinc.jpg";
import maishaTileImg from "@/assets/products/maisha-tile.jpg";

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  isSale: boolean;
  isLimitedOffer: boolean;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Box Profile",
    slug: "box-profile",
    price: 470,
    image: boxProfileImg,
    description: "Premium box profile roofing sheets with superior strength and modern aesthetics. Perfect for residential and commercial buildings. Features clean lines and excellent water drainage capabilities.",
    features: [
      "High tensile strength steel",
      "Anti-corrosion coating",
      "Available in multiple colors",
      "25-year warranty",
      "Easy installation",
      "Superior weather resistance"
    ],
    isSale: true,
    isLimitedOffer: true,
    category: "Profile Sheets"
  },
  {
    id: "2",
    name: "Versatile",
    slug: "versatile",
    price: 555,
    image: versatileImg,
    description: "Our versatile premium tile offers the elegance of traditional tiles with the durability of modern steel. Ideal for homes that demand a sophisticated look without compromising on quality.",
    features: [
      "Elegant tile appearance",
      "Lightweight yet durable",
      "UV resistant coating",
      "Noise reduction technology",
      "30-year warranty",
      "Multiple color options"
    ],
    isSale: true,
    isLimitedOffer: true,
    category: "Premium Tiles"
  },
  {
    id: "3",
    name: "Romantile",
    slug: "romantile",
    price: 550,
    image: romantileImg,
    description: "Classic Roman tile profile that brings Mediterranean charm to your roof. Combines timeless beauty with modern engineering for lasting protection and stunning curb appeal.",
    features: [
      "Classic Roman design",
      "Premium steel core",
      "Fade-resistant colors",
      "Excellent ventilation",
      "25-year warranty",
      "Low maintenance"
    ],
    isSale: false,
    isLimitedOffer: true,
    category: "Premium Tiles"
  },
  {
    id: "4",
    name: "Corrugated Iron Sheet",
    slug: "corrugated-iron-sheet",
    price: 390,
    image: corrugatedImg,
    description: "Time-tested corrugated iron sheets that deliver reliable performance at an affordable price. Perfect for industrial, agricultural, and residential applications.",
    features: [
      "Classic corrugated design",
      "Galvanized coating",
      "Cost-effective solution",
      "Easy to install",
      "20-year warranty",
      "Versatile application"
    ],
    isSale: false,
    isLimitedOffer: true,
    category: "Iron Sheets"
  },
  {
    id: "5",
    name: "Maisha Alu-Zinc Mabati",
    slug: "alu-zinc-mabati",
    price: 390,
    image: aluZincImg,
    description: "Advanced aluminum-zinc alloy coating for maximum corrosion resistance. Outperforms traditional galvanized sheets and provides superior protection in harsh environments.",
    features: [
      "Alu-zinc alloy coating",
      "Superior corrosion resistance",
      "Heat reflective surface",
      "35-year warranty",
      "Eco-friendly",
      "Premium durability"
    ],
    isSale: true,
    isLimitedOffer: true,
    category: "Alu-Zinc"
  },
  {
    id: "6",
    name: "Maisha Tile",
    slug: "maisha-tile",
    price: 520,
    image: maishaTileImg,
    description: "Our signature tile profile combines aesthetic elegance with robust construction. The Maisha Tile is designed for discerning homeowners who want the best for their homes.",
    features: [
      "Signature tile design",
      "Premium steel quality",
      "Color-lock technology",
      "Thermal insulation",
      "30-year warranty",
      "Award-winning design"
    ],
    isSale: true,
    isLimitedOffer: true,
    category: "Premium Tiles"
  }
];

export const PHONE_NUMBER = "+254762569206";
export const WHATSAPP_LINK = `https://wa.me/254762569206`;

export const getWhatsAppOrderLink = (productName: string) => {
  const message = encodeURIComponent(`Hi! I'm interested in ordering ${productName} from Maisha Mabati. Please provide more details.`);
  return `https://wa.me/254762569206?text=${message}`;
};
