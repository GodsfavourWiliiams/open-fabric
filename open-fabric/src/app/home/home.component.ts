import { Component } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productList: Products[] = [
    {
      id: 1001,
      name: 'iPhone 12 Pro',
      desc: 'The iPhone 12 Pro is a powerful and sleek smartphone, featuring a stunning 6.1-inch Super Retina XDR display, A14 Bionic chip, and a triple-camera system for capturing professional-quality photos and videos.',
      imgUrl: 'https://example.com/iphone12pro.jpg',
    },
    {
      id: 1002,
      name: 'Samsung Galaxy S21 Ultra',
      desc: 'The Samsung Galaxy S21 Ultra is a flagship Android smartphone with a large 6.8-inch Dynamic AMOLED display, an Exynos 2100 or Qualcomm Snapdragon 888 processor, and an impressive quad-camera setup for exceptional photography.',
      imgUrl: 'https://example.com/galaxys21ultra.jpg',
    },
    {
      id: 1003,
      name: 'Sony PlayStation 5',
      desc: 'The Sony PlayStation 5 is the next-generation gaming console, offering immersive gaming experiences with its powerful hardware, ultra-fast SSD storage, and innovative DualSense controller for haptic feedback.',
      imgUrl: 'https://example.com/ps5.jpg',
    },
    {
      id: 1004,
      name: 'Apple MacBook Pro (16-inch)',
      desc: 'The Apple MacBook Pro (16-inch) is a high-performance laptop designed for professionals. It features a stunning Retina display, powerful Intel processors, up to 64GB of RAM, and a spacious trackpad for enhanced productivity.',
      imgUrl: 'https://example.com/macbookpro.jpg',
    },
    {
      id: 1005,
      name: 'Nikon D850 DSLR Camera',
      desc: 'The Nikon D850 is a professional-grade DSLR camera with a 45.7-megapixel sensor, 4K UHD video recording capabilities, and an advanced autofocus system. It offers exceptional image quality and versatility for photographers.',
      imgUrl: 'https://example.com/nikond850.jpg',
    },
    {
      id: 1006,
      name: 'Bose QuietComfort 35 II Headphones',
      desc: 'The Bose QuietComfort 35 II headphones are renowned for their exceptional noise-canceling capabilities, comfort, and audio quality. They offer wireless connectivity, built-in Google Assistant or Alexa, and up to 20 hours of battery life.',
      imgUrl: 'https://example.com/boseqc35ii.jpg',
    },
    {
      id: 1007,
      name: 'Amazon Echo Dot (3rd Generation)',
      desc: 'The Amazon Echo Dot is a compact smart speaker powered by Alexa, allowing you to play music, control smart home devices, and get information using voice commands. Its small size makes it perfect for any room in your home.',
      imgUrl: 'https://example.com/echodot.jpg',
    },
    {
      id: 1008,
      name: 'Fitbit Versa 3 Smartwatch',
      desc: 'The Fitbit Versa 3 is a feature-rich smartwatch designed to help you achieve your fitness goals. It tracks your heart rate, sleep patterns, and activity levels, and provides on-wrist workouts, GPS tracking, and notifications from your phone.',
      imgUrl: 'https://example.com/fitbitversa3.jpg',
    },
    {
      id: 1009,
      name: 'Dyson V11 Absolute Cordless Vacuum Cleaner',
      desc: 'The Dyson V11 Absolute is a powerful cordless vacuum cleaner with advanced suction technology, a high-capacity battery, and intelligent cleaning modes. It offers hassle-free cleaning with excellent performance on both carpets and hard floors.',
      imgUrl: 'https://example.com/dysonv11.jpg',
    },
    {
      id: 1010,
      name: 'Nintendo Switch',
      desc: 'The Nintendo Switch is a versatile gaming console that can be used both as a handheld device and connected to a TV. It offers a wide range of games, multiplayer capabilities, and the unique ability to switch between portable and home gaming.',
      imgUrl: 'https://example.com/nintendoswitch.jpg',
    },
  ];
}
