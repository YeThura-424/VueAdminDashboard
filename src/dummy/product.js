const products = [
  {
    name: "Wireless Headphones",
    sku: "WH001",
    barcode: "123456789",
    description: "Premium wireless headphones with noise cancellation feature.",
    bestprice: "99.99",
    discount: "10%",
    inStock: true,
    variantsname: "Color",
    variantsvalue: "Black",
    vendor: "AudioTech",
    category: "Electronics",
    collection: "Audio",
    status: "Active",
    tag: "New Arrival",
  },
  {
    name: "Smartphone Charger",
    sku: "SC002",
    barcode: "987654321",
    description:
      "Fast-charging smartphone charger compatible with most devices.",
    bestprice: "19.99",
    discount: "5%",
    inStock: true,
    variantsname: "Connector",
    variantsvalue: "USB-C",
    vendor: "ChargeX",
    category: "Electronics",
    collection: "Accessories",
    status: "Active",
    tag: "Best Seller",
  },
  {
    name: "Organic Green Tea",
    sku: "GT003",
    barcode: "456789123",
    description:
      "Organically grown green tea leaves for a refreshing experience.",
    bestprice: "8.99",
    discount: "0%",
    inStock: false,
    variantsname: "Weight",
    variantsvalue: "100g",
    vendor: "GreenLeaf",
    category: "Food & Beverages",
    collection: "Tea",
    status: "Out of Stock",
    tag: "Organic",
  },
  {
    name: "Stainless Steel Water Bottle",
    sku: "SB001",
    barcode: "123456789",
    description:
      "Eco-friendly and durable stainless steel water bottle for outdoor activities.",
    bestprice: "14.99",
    discount: "0%",
    inStock: true,
    variantsname: "Capacity",
    variantsvalue: "750ml",
    vendor: "EcoGear",
    category: "Outdoor",
    collection: "Travel Essentials",
    status: "Active",
    tag: "Environmentally Friendly",
  },
  {
    name: "Classic Leather Wallet",
    sku: "WL002",
    barcode: "987654321",
    description:
      "Handcrafted leather wallet with multiple compartments for cards and cash.",
    bestprice: "39.99",
    discount: "15%",
    inStock: true,
    variantsname: "Color",
    variantsvalue: "Brown",
    vendor: "LeatherCraft",
    category: "Fashion",
    collection: "Accessories",
    status: "Active",
    tag: "Classic",
  },
  {
    name: "Fitness Tracker Watch",
    sku: "FTW003",
    barcode: "456789123",
    description:
      "Water-resistant fitness tracker watch with heart rate monitoring and GPS functionality.",
    bestprice: "79.99",
    discount: "20%",
    inStock: true,
    variantsname: "Color",
    variantsvalue: "Blue",
    vendor: "FitLife",
    category: "Fitness",
    collection: "Wearables",
    status: "Active",
    tag: "Health & Wellness",
  },
  {
    name: "Premium Espresso Machine",
    sku: "EM004",
    barcode: "987654321",
    description:
      "Italian-designed espresso machine for brewing café-quality espresso at home.",
    bestprice: "299.99",
    discount: "0%",
    inStock: false,
    variantsname: "Color",
    variantsvalue: "Silver",
    vendor: "EspressoMasters",
    category: "Kitchen Appliances",
    collection: "Coffee Lovers",
    status: "Out of Stock",
    tag: "Premium",
  },
  {
    name: "Yoga Mat",
    sku: "YM005",
    barcode: "123456789",
    description:
      "High-quality yoga mat with non-slip surface for optimal grip during yoga practice.",
    bestprice: "29.99",
    discount: "10%",
    inStock: true,
    variantsname: "Thickness",
    variantsvalue: "6mm",
    vendor: "YogiEssentials",
    category: "Fitness",
    collection: "Yoga Gear",
    status: "Active",
    tag: "Yoga Essentials",
  },
  {
    name: "Wireless Mouse",
    sku: "WM006",
    barcode: "456789123",
    description:
      "Ergonomically designed wireless mouse with smooth tracking and long battery life.",
    bestprice: "19.99",
    discount: "5%",
    inStock: true,
    variantsname: "Color",
    variantsvalue: "White",
    vendor: "TechGear",
    category: "Electronics",
    collection: "Computer Accessories",
    status: "Active",
    tag: "Wireless",
  },
  {
    name: "Gourmet Chocolate Box",
    sku: "CB007",
    barcode: "987654321",
    description:
      "Handcrafted gourmet chocolates in a beautifully packaged gift box.",
    bestprice: "24.99",
    discount: "0%",
    inStock: true,
    variantsname: "Flavor",
    variantsvalue: "Assorted",
    vendor: "ChocoDelight",
    category: "Food & Beverages",
    collection: "Gifts",
    status: "Active",
    tag: "Luxury",
  },
  {
    name: "Portable Bluetooth Speaker",
    sku: "BS008",
    barcode: "123456789",
    description:
      "Compact and portable Bluetooth speaker with powerful sound for outdoor use.",
    bestprice: "49.99",
    discount: "10%",
    inStock: true,
    variantsname: "Color",
    variantsvalue: "Red",
    vendor: "SoundWave",
    category: "Electronics",
    collection: "Audio",
    status: "Active",
    tag: "Portable",
  },
  {
    name: "Leather Laptop Bag",
    sku: "LB009",
    barcode: "456789123",
    description:
      "Premium leather laptop bag with padded compartments for laptops and accessories.",
    bestprice: "89.99",
    discount: "5%",
    inStock: true,
    variantsname: "Color",
    variantsvalue: "Black",
    vendor: "LeatherCraft",
    category: "Fashion",
    collection: "Accessories",
    status: "Active",
    tag: "Business Casual",
  },
  {
    name: "Natural Wood Desk Organizer",
    sku: "DO010",
    barcode: "987654321",
    description:
      "Handcrafted natural wood desk organizer for keeping your workspace tidy and organized.",
    bestprice: "34.99",
    discount: "0%",
    inStock: true,
    variantsname: "Material",
    variantsvalue: "Bamboo",
    vendor: "EcoLiving",
    category: "Office Supplies",
    collection: "Organizers",
    status: "Active",
    tag: "Eco-Friendly",
  },
  {
    name: "Digital Alarm Clock",
    sku: "AC011",
    barcode: "123456789",
    description:
      "Modern digital alarm clock with LED display and snooze function.",
    bestprice: "12.99",
    discount: "0%",
    inStock: true,
    variantsname: "Color",
    variantsvalue: "White",
    vendor: "TechGear",
    category: "Electronics",
    collection: "Home Essentials",
    status: "Active",
    tag: "Digital",
  },
  {
    name: "Herbal Shampoo",
    sku: "HS012",
    barcode: "456789123",
    description:
      "Gentle herbal shampoo enriched with natural extracts for healthy and shiny hair.",
    bestprice: "9.99",
    discount: "0%",
    inStock: false,
    variantsname: "Volume",
    variantsvalue: "300ml",
    vendor: "NatureCare",
    category: "Beauty & Personal Care",
    collection: "Hair Care",
    status: "Out of Stock",
    tag: "Natural",
  },
  {
    name: "Digital Camera",
    sku: "DC013",
    barcode: "987654321",
    description:
      "Compact digital camera with high-resolution sensor and built-in Wi-Fi connectivity.",
    bestprice: "199.99",
    discount: "10%",
    inStock: true,
    variantsname: "Color",
    variantsvalue: "Silver",
    vendor: "TechGadgets",
    category: "Electronics",
    collection: "Cameras",
    status: "Active",
    tag: "Photography",
  },
  {
    name: "Portable Power Bank",
    sku: "PB014",
    barcode: "123456789",
    description:
      "Compact and portable power bank for charging smartphones and other devices on-the-go.",
    bestprice: "29.99",
    discount: "5%",
    inStock: true,
    variantsname: "Capacity",
    variantsvalue: "10000mAh",
    vendor: "ChargeX",
    category: "Electronics",
    collection: "Accessories",
    status: "Active",
    tag: "Portable Charger",
  },
  {
    name: "Stainless Steel Cooking Set",
    sku: "CS015",
    barcode: "456789123",
    description:
      "Durable stainless steel cooking set with pots, pans, and utensils for home chefs.",
    bestprice: "129.99",
    discount: "15%",
    inStock: true,
    variantsname: "Set Size",
    variantsvalue: "10 Pieces",
    vendor: "KitchenMasters",
    category: "Kitchenware",
    collection: "Cookware",
    status: "Active",
    tag: "Kitchen Essentials",
  },
];

export default products;
