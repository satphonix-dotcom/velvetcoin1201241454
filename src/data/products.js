import { PRODUCT_IMAGES, CATEGORY_IMAGES } from '../constants/images';

export const products = [
  {
    id: 1,
    name: 'Royal Oak Chronograph',
    brand: 'Audemars Piguet',
    price: 85000,
    image: PRODUCT_IMAGES.watch1,
    category: 'Watches',
    description: 'A masterpiece of horological excellence, featuring the iconic octagonal bezel and tapisserie dial.'
  },
  {
    id: 2,
    name: 'Diamond Serpenti Necklace',
    brand: 'Bulgari',
    price: 125000,
    image: PRODUCT_IMAGES.jewelry1,
    category: 'Jewelry',
    description: 'Exquisite diamond-encrusted serpenti design, embodying timeless elegance.'
  },
  {
    id: 3,
    name: 'Birkin 30',
    brand: 'Hermès',
    price: 45000,
    image: PRODUCT_IMAGES.accessories,
    category: 'Accessories',
    description: 'The iconic Birkin bag in Togo leather with palladium hardware.'
  },
  {
    id: 4,
    name: 'Nautilus 5711',
    brand: 'Patek Philippe',
    price: 165000,
    image: PRODUCT_IMAGES.watch2,
    category: 'Watches',
    description: 'The legendary Nautilus in stainless steel, featuring the iconic porthole design.'
  },
  {
    id: 5,
    name: 'Diamond Tennis Bracelet',
    brand: 'Cartier',
    price: 75000,
    image: PRODUCT_IMAGES.jewelry2,
    category: 'Jewelry',
    description: 'Classic tennis bracelet featuring 10 carats of brilliant-cut diamonds.'
  }
];

export const categories = [
  {
    id: 'watches',
    name: 'Luxury Watches',
    image: CATEGORY_IMAGES.watches,
    description: 'Precision crafted timepieces'
  },
  {
    id: 'jewelry',
    name: 'Fine Jewelry',
    image: CATEGORY_IMAGES.jewelry,
    description: 'Timeless pieces that define elegance'
  },
  {
    id: 'accessories',
    name: 'Designer Accessories',
    image: CATEGORY_IMAGES.accessories,
    description: 'Exclusive fashion collections'
  },
  {
    id: 'collectibles',
    name: 'Rare Collectibles',
    image: CATEGORY_IMAGES.collectibles,
    description: 'Unique pieces for connoisseurs'
  }
];