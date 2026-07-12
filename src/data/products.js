const products = [
  // ================= MEN =================

  {
    id: 1,
    name: "Premium White T-Shirt",
    category: "Men",
    brand: "LUXORA",
    price: 999,
    oldPrice: 1499,
    rating: 4.8,
    reviews: 152,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    description:
      "Premium cotton t-shirt with a modern fit and all-day comfort.",
  },

  {
    id: 2,
    name: "Classic Denim Jacket",
    category: "Men",
    brand: "LUXORA",
    price: 2499,
    oldPrice: 3199,
    rating: 4.7,
    reviews: 98,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800",
    description:
      "Stylish denim jacket designed for everyday premium fashion.",
  },

  {
    id: 3,
    name: "Black Premium Hoodie",
    category: "Men",
    brand: "LUXORA",
    price: 1899,
    oldPrice: 2499,
    rating: 4.9,
    reviews: 204,
    badge: "Hot",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800",
    description:
      "Soft fleece hoodie with premium stitching and modern fit.",
  },

  {
    id: 4,
    name: "Formal Slim Shirt",
    category: "Men",
    brand: "LUXORA",
    price: 1599,
    oldPrice: 2199,
    rating: 4.6,
    reviews: 76,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800",
    description:
      "Elegant formal shirt suitable for office and special occasions.",
  },

  // ================= WOMEN =================

  {
    id: 5,
    name: "Elegant Summer Dress",
    category: "Women",
    brand: "LUXORA",
    price: 2199,
    oldPrice: 2899,
    rating: 4.9,
    reviews: 181,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
    description:
      "Beautiful lightweight dress designed for elegance and comfort.",
  },

  {
    id: 6,
    name: "Casual Fashion Top",
    category: "Women",
    brand: "LUXORA",
    price: 1199,
    oldPrice: 1699,
    rating: 4.7,
    reviews: 92,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
    description:
      "Comfortable everyday top with a premium modern design.",
  },

  {
    id: 7,
    name: "Women's Fashion Jacket",
    category: "Women",
    brand: "LUXORA",
    price: 2799,
    oldPrice: 3499,
    rating: 4.8,
    reviews: 137,
    badge: "Limited",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
    description:
      "Premium jacket crafted for stylish winter fashion.",
  },

  {
    id: 8,
    name: "Premium Women's Outfit",
    category: "Women",
    brand: "LUXORA",
    price: 1999,
    oldPrice: 2599,
    rating: 4.8,
    reviews: 113,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    description:
      "Modern outfit combining elegance, comfort and luxury.",
  },  // ================= SHOES =================

  {
    id: 9,
    name: "White Running Shoes",
    category: "Shoes",
    brand: "LUXORA",
    price: 2999,
    oldPrice: 3699,
    rating: 4.9,
    reviews: 225,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    description:
      "Lightweight running shoes designed for maximum comfort and performance.",
  },

  {
    id: 10,
    name: "Classic White Sneakers",
    category: "Shoes",
    brand: "LUXORA",
    price: 2599,
    oldPrice: 3199,
    rating: 4.8,
    reviews: 164,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
    description:
      "Minimal white sneakers perfect for everyday fashion.",
  },

  {
    id: 11,
    name: "Black Street Sneakers",
    category: "Shoes",
    brand: "LUXORA",
    price: 2799,
    oldPrice: 3499,
    rating: 4.7,
    reviews: 119,
    badge: "Hot",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800",
    description:
      "Street-style sneakers with premium cushioning and modern design.",
  },

  {
    id: 12,
    name: "Performance Sports Shoes",
    category: "Shoes",
    brand: "LUXORA",
    price: 3499,
    oldPrice: 4299,
    rating: 5.0,
    reviews: 310,
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
    description:
      "Professional sports shoes built for performance and durability.",
  },

  // ================= BAGS =================

  {
    id: 13,
    name: "Luxury Leather Handbag",
    category: "Bags",
    brand: "LUXORA",
    price: 2499,
    oldPrice: 3199,
    rating: 4.9,
    reviews: 156,
    badge: "Luxury",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
    description:
      "Premium leather handbag with elegant craftsmanship.",
  },

  {
    id: 14,
    name: "Premium Tote Bag",
    category: "Bags",
    brand: "LUXORA",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
    reviews: 118,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    description:
      "Modern tote bag with spacious premium design.",
  },

  {
    id: 15,
    name: "Urban Backpack",
    category: "Bags",
    brand: "LUXORA",
    price: 2299,
    oldPrice: 2899,
    rating: 4.7,
    reviews: 103,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    description:
      "Stylish backpack suitable for travel, office and college.",
  },

  {
    id: 16,
    name: "Premium Travel Bag",
    category: "Bags",
    brand: "LUXORA",
    price: 3299,
    oldPrice: 3999,
    rating: 4.9,
    reviews: 214,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    description:
      "Large premium travel bag with durable material and elegant finish.",
  },
];

export default products;