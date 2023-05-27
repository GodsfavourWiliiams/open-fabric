import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Products[] = [
    {
      id: 26,
      title: 'Digital SLR Camera',
      price: 1299.99,
      color: 'Black',
      description:
        'Capture stunning photos with this professional-grade digital SLR camera. It features a high-resolution sensor, advanced autofocus system, and a range of manual controls for creative photography.',
      imgUrl: 'https://via.placeholder.com/600/aa8f2e',
    },
    {
      id: 27,
      title: 'Gaming Laptop',
      price: 1999.99,
      color: 'RGB',
      description:
        'Experience gaming like never before with this powerful gaming laptop. It boasts a high-refresh-rate display, a fast processor, dedicated graphics, and a customizable RGB keyboard for an immersive gaming experience.',
      imgUrl: 'https://via.placeholder.com/600/6f2b2b',
    },
    {
      id: 28,
      title: 'Wireless Charging Pad',
      price: 39.99,
      color: 'White',
      description:
        'Conveniently charge your compatible devices with this wireless charging pad. Simply place your device on the pad, and it will start charging without the need for cables or connectors.',
      imgUrl: 'https://via.placeholder.com/600/121fa9',
    },
    {
      id: 29,
      title: 'Robotic Vacuum Cleaner',
      price: 299.99,
      color: 'Silver',
      description:
        'Keep your floors clean effortlessly with this robotic vacuum cleaner. It navigates your home, detects obstacles, and automatically adjusts its cleaning patterns to effectively remove dust and dirt.',
      imgUrl: 'https://via.placeholder.com/600/2c6f99',
    },
    {
      id: 30,
      title: 'Wireless Noise-Canceling Headphones',
      price: 249.99,
      color: 'Black',
      description:
        'Immerse yourself in music without distractions with these wireless noise-canceling headphones. They provide crystal-clear sound, active noise cancellation, and a comfortable over-ear design for long listening sessions.',
      imgUrl: 'https://via.placeholder.com/600/ae7f2c',
    },
    {
      id: 1,
      title: 'Stylish Blue Dress',
      price: 49.99,
      color: 'Blue',
      description:
        'Look elegant and fashionable with this stylish blue dress. Made with high-quality fabric and a flattering fit, it is perfect for any occasion.',
      imgUrl: 'https://via.placeholder.com/600/92c952',
    },
    {
      id: 2,
      title: 'Classic Leather Wallet',
      price: 29.99,
      color: 'Brown',
      description:
        'Keep your essentials organized with this classic leather wallet. It features multiple card slots, a bill compartment, and a slim design that fits comfortably in your pocket.',
      imgUrl: 'https://via.placeholder.com/600/771796',
    },
    {
      id: 3,
      title: 'Vintage Sunglasses',
      price: 3999,
      color: 'Black',
      description:
        'Protect your eyes in style with these vintage sunglasses. The retro design and high-quality lenses provide both fashion and UV protection.',
      imgUrl: 'https://via.placeholder.com/600/24f355',
    },
    {
      id: 21,
      title: 'Wireless Bluetooth Earbuds',
      price: 79.99,
      color: 'Black',
      description:
        'Enjoy immersive audio and freedom of movement with these wireless Bluetooth earbuds. They offer high-quality sound, long battery life, and a comfortable fit for all-day use.',
      imgUrl: 'https://via.placeholder.com/600/8e973b',
    },
    {
      id: 22,
      title: 'Premium Leather Handbag',
      price: 149.99,
      color: 'Cognac',
      description:
        'Carry your essentials in style with this premium leather handbag. It features a spacious interior, multiple compartments, and a timeless design that complements any outfit.',
      imgUrl: 'https://via.placeholder.com/600/ae7f2c',
    },
    {
      id: 23,
      title: 'Smart Home Security System',
      price: 199.99,
      color: 'White',
      description:
        'Protect your home with this smart security system. It includes cameras, motion sensors, and a central hub that allows you to monitor and control your home security from anywhere.',
      imgUrl: 'https://via.placeholder.com/600/2c6f99',
    },
    {
      id: 24,
      title: 'Fitness Tracker Watch',
      price: 89.99,
      color: 'Rose Gold',
      description:
        'Track your fitness goals with this stylish and feature-packed fitness tracker watch. It monitors your heart rate, counts steps, analyzes sleep patterns, and provides real-time workout data.',
      imgUrl: 'https://via.placeholder.com/600/121fa9',
    },
    {
      id: 25,
      title: 'Portable Bluetooth Speaker',
      price: 59.99,
      color: 'Red',
      description:
        'Take your music wherever you go with this portable Bluetooth speaker. It delivers high-quality sound, has a long battery life, and is water-resistant, making it perfect for outdoor adventures.',
      imgUrl: 'https://via.placeholder.com/600/6f2b2b',
    },
  ];
  getAllProduct(): Products[] {
    return this.productList;
  }

  getSingleProduct(id: number): Products | undefined {
    return this.productList.find((product) => product.id === id);
  }

  constructor() {}
}
