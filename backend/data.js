const products = [
  // VEGETABLES 
  { id: 1, name: 'Farm Demo Greens', category: 'Vegetables', price: 36, marketPrice: 48, unit: 'kg', farmerName: 'Ramesh Patil', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80', rating: 4.8, reviews: 112, inStock: true }, // greens
  { id: 2, name: 'Baby Potatoes', category: 'Vegetables', price: 28, marketPrice: 35, unit: 'kg', farmerName: 'Vijay Shinde', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80', rating: 4.7, reviews: 85, inStock: true }, // potatoes
  { id: 3, name: 'Red Onions', category: 'Vegetables', price: 30, marketPrice: 40, unit: 'kg', farmerName: 'Sunita Jadhav', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80', rating: 4.9, reviews: 204, inStock: true }, // onions
  { id: 4, name: 'Fresh Tomatoes', category: 'Vegetables', price: 42, marketPrice: 55, unit: 'kg', farmerName: 'Ramesh Patil', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1524593166156-312f362cada0?auto=format&fit=crop&w=800&q=80', rating: 4.8, reviews: 156, inStock: true }, // tomatoes
  { id: 5, name: 'Green Cabbage', category: 'Vegetables', price: 25, marketPrice: 35, unit: 'kg', farmerName: 'Govind Rao', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?auto=format&fit=crop&w=800&q=80', rating: 4.5, reviews: 42, inStock: true }, // cabbage
  
  // FRUITS
  { id: 6, name: 'Alphonso Mangoes', category: 'Fruits', price: 180, marketPrice: 240, unit: 'kg', farmerName: 'Meera More', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80', rating: 4.9, reviews: 310, inStock: true }, // mangoes
  { id: 7, name: 'Fresh Strawberries', category: 'Fruits', price: 150, marketPrice: 200, unit: 'box', farmerName: 'Vishal Deshmukh', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80', rating: 4.8, reviews: 188, inStock: true }, // strawberries
  { id: 8, name: 'Green Grapes', category: 'Fruits', price: 60, marketPrice: 85, unit: 'kg', farmerName: 'Ravi Kale', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80', rating: 4.6, reviews: 92, inStock: true }, // grapes
  { id: 9, name: 'Fresh Pomegranate', category: 'Fruits', price: 120, marketPrice: 160, unit: 'kg', farmerName: 'Priya Kadam', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80', rating: 4.7, reviews: 145, inStock: true }, // pomegranate
  { id: 10, name: 'Sweet Orange', category: 'Fruits', price: 50, marketPrice: 70, unit: 'kg', farmerName: 'Ashok Chavan', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1547514701-427221017958?auto=format&fit=crop&w=800&q=80', rating: 4.5, reviews: 76, inStock: true }, // orange

  // GRAINS 
  { id: 11, name: 'Basmati Rice', category: 'Grains', price: 86, marketPrice: 105, unit: 'kg', farmerName: 'Prakash Kale', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80', rating: 4.6, reviews: 215, inStock: true }, // rice
  { id: 12, name: 'Whole Wheat', category: 'Grains', price: 32, marketPrice: 45, unit: 'kg', farmerName: 'Sanjay Pawar', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80', rating: 4.4, reviews: 68, inStock: true }, // wheat
  { id: 13, name: 'Pearl Millet', category: 'Grains', price: 28, marketPrice: 42, unit: 'kg', farmerName: 'Ganesh More', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80', rating: 4.7, reviews: 104, inStock: true }, // generic grain
  { id: 14, name: 'Sorghum (Jowar)', category: 'Grains', price: 30, marketPrice: 44, unit: 'kg', farmerName: 'Nitin Kulkarni', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80', rating: 4.5, reviews: 88, inStock: true }, 
  { id: 15, name: 'Finger Millet', category: 'Grains', price: 45, marketPrice: 60, unit: 'kg', farmerName: 'Smita Joshi', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80', rating: 4.8, reviews: 134, inStock: true }, 

  // SPICES 
  { id: 16, name: 'Green Chillies', category: 'Spices', price: 64, marketPrice: 82, unit: 'kg', farmerName: 'Dinesh Borse', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80', rating: 4.5, reviews: 67, inStock: true }, 
  { id: 17, name: 'Coriander', category: 'Spices', price: 48, marketPrice: 65, unit: 'kg', farmerName: 'Kiran Gaikwad', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?auto=format&fit=crop&w=800&q=80', rating: 4.7, reviews: 112, inStock: true }, 
  { id: 18, name: 'Turmeric Roots', category: 'Spices', price: 110, marketPrice: 150, unit: 'kg', farmerName: 'Vikas Borde', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=800&q=80', rating: 4.9, reviews: 290, inStock: true }, 
  { id: 19, name: 'Dry Red Chillies', category: 'Spices', price: 220, marketPrice: 280, unit: 'kg', farmerName: 'Deepak Patil', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1596645396650-681f21183c50?auto=format&fit=crop&w=800&q=80', rating: 4.8, reviews: 205, inStock: true }, 
  { id: 20, name: 'Garlic Bulbs', category: 'Spices', price: 80, marketPrice: 110, unit: 'kg', farmerName: 'Anil Desai', farmerVillage: 'India', image: 'https://images.unsplash.com/photo-1579624536768-3e4758b991ee?auto=format&fit=crop&w=800&q=80', rating: 4.6, reviews: 140, inStock: true }
];

const faqs = [
  { question: "How does FarmDirect work?", answer: "We connect you directly to local farmers across India, eliminating middlemen so you get fresher produce and farmers get fairer prices." },
  { question: "Are all products organic?", answer: "Not all, but we provide full transparency on farming methods. Many of our farmers use organic or pesticide-free practices." },
  { question: "How is the pricing decided?", answer: "The farmer sets the price based on their costs. We display both their price and the current market reference for full transparency." },
  { question: "When will my order be delivered?", answer: "Harvesting happens mostly on weekends and deliveries are done early morning the following day to ensure peak freshness." },
  { question: "What happens if produce is damaged?", answer: "We have a no-questions-asked refund policy for any damaged produce reported within 24 hours of delivery." }
];

const features = [
  { title: "Direct Sourcing", description: "Straight from the farm to your table in less than 24 hours." },
  { title: "Price Transparency", description: "See exactly how much the farmer makes and how much you save." },
  { title: "Quality Assured", description: "Handpicked, fresh, and rigorously checked for quality." },
  { title: "Support Local", description: "Empower local farmers and strengthen your community." }
];

const orders = [
  { id: 'ORD-101', customerName: 'Aarti Kadam', amount: 840, date: '2026-09-11', status: 'Delivered' },
  { id: 'ORD-102', customerName: 'Vikram Singh', amount: 1250, date: '2026-09-11', status: 'Processing' },
  { id: 'ORD-103', customerName: 'Sneha Patil', amount: 320, date: '2026-09-10', status: 'Delivered' },
  { id: 'ORD-104', customerName: 'Rohan Deshmukh', amount: 450, date: '2026-09-10', status: 'Shipped' },
  { id: 'ORD-105', customerName: 'Meghna Rao', amount: 980, date: '2026-09-09', status: 'Delivered' },
];

const users = [
  { id: 1, name: 'Aarti Kadam', email: 'aarti@example.com', role: 'Customer', joined: '2026-08-15' },
  { id: 2, name: 'Vikram Singh', email: 'vikram@example.com', role: 'Customer', joined: '2026-08-20' },
  { id: 3, name: 'Sneha Patil', email: 'sneha@example.com', role: 'Customer', joined: '2026-09-01' },
  { id: 4, name: 'Rohan Deshmukh', email: 'rohan@example.com', role: 'Customer', joined: '2026-09-05' },
];

module.exports = { products, faqs, features, orders, users };
