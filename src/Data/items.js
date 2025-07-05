import P1 from '../assest/Cake1.jpg';
import P2 from '../assest/P2.jpg';
import P3 from '../assest/P3.jpg';
import P4 from '../assest/P4.jpg';
import P5 from '../assest/P5.jpg';
import P6 from '../assest/P6.jpg';

import B1 from '../assest/BirthdayPage/Birth3.jpg';
import B2 from '../assest/BirthdayPage/Birth4.jpg';
import B3 from '../assest/BirthdayPage/Birth5.jpg';
import B4 from '../assest/BirthdayPage/Birth6.jpg';
import B5 from '../assest/BirthdayPage/Birth7.jpg';
import B6 from '../assest/BirthdayPage/Birth8.jpg';
import B7 from '../assest/BirthdayPage/Birth9.jpg';
import B8 from '../assest/BirthdayPage/Birth10.jpg';
import B9 from '../assest/BirthdayPage/Birth11.jpg';
import B10 from '../assest/BirthdayPage/Birth12.jpg';
import B11 from '../assest/BirthdayPage/Birth15.jpg';
import B12 from '../assest/BirthdayPage/Birth14.jpg';


import CO1 from '../assest/Cookies/CO1.jpg';
import CO2 from '../assest/Cookies/CO2.jpg';
import CO3 from '../assest/Cookies/CO3.jpg';
import CO4 from '../assest/Cookies/CO4.jpg';
import CO5 from '../assest/Cookies/CO5.jpg';
import CO6 from '../assest/Cookies/CO6.jpg';
import CO7 from '../assest/Cookies/CO7.jpg';

import CA1 from '../assest/Cakes/CA1.jpg';
import CA2 from '../assest/Cakes/CA2.jpg';
import CA3 from '../assest/Cakes/CA3.jpg';
import CA4 from '../assest/Cakes/CA4.jpg';
import CA5 from '../assest/Cakes/CA5.jpg';
import CA6 from '../assest/Cakes/CA6.jpg';
import CA7 from '../assest/Cakes/CA7.jpg';


export const cakeProducts = [
  {
    id: '1',
    name: 'Oreo Cake',
    type: 'cake',
    price: 22.99,
    image: P1,
    description: 'Rich, moist chocolate layers with crushed Oreos and creamy vanilla frosting. A must for Oreo lovers!', 
    isBirthday: false
  },
  {
    id: '2',
    name: 'Strawberry Mango Cake',
    type: 'cake',
    price: 24.99,
    image: P2,
    description: 'Light vanilla sponge layered with whipped cream, juicy strawberries, and sweet mangoes.', 
    isBirthday: false
  },
  {
    id: '4',
    name: 'Pineapple Coconut Cake',
    type: 'cake',
    price: 23.99,
    image: P4,
    description: 'Fluffy vanilla sponge with whipped cream, tropical pineapple chunks, and toasted coconut.', 
    isBirthday: false
  },
];

export const cookieProducts = [
  {
    id: '3',
    name: 'Cookies with White Chocolate',
    type: 'cookie',
    price: 12.99,
    image: P3,
    description: 'Soft, golden cookies loaded with creamy white chocolate chunks. Sweet and comforting.', 
    isBirthday: false
  },
  {
    id: '5',
    name: 'Chocolate Chip Cookie',
    type: 'cookie',
    price: 10.99,
    image: P5,
    description: 'Classic chewy chocolate chip cookies baked to perfection with melty chips in every bite.', 
    isBirthday: false
  },
  {
    id: '6',
    name: 'Fudgy Brownie Crinkle Cookies',
    type: 'cookie',
    price: 10.99,
    image: P6,
    description: 'Deep chocolate flavor with a crinkly top and gooey brownie center. A rich, indulgent treat.', 
    isBirthday: false
  },
];

export const BirthdayProducts = [
  {
    id: '7',
    name: 'Mickey Mouse Mini Cake',
    image: B1,
    price: 22.99,
    ageGroup: 'Kids',
    theme: 'Mickey',
    type: 'Cake',
    dietary: 'Nut-free',
    description: 'Mini chocolate cake decorated with Mickey Mouse ears and cheerful sprinkles — perfect for little ones.',
    isBirthday: true
  },
  {
    id: '8',
    name: 'Princess Cake',
    image: B2,
    price: 18.50,
    ageGroup: 'Kids',
    theme: 'Princess',
    type: 'Cake',
    dietary: 'Eggless',
    description: 'A pastel-pink vanilla cake adorned with tiara toppers and glittery frosting fit for a princess.',
    isBirthday: true
  },
  {
    id: '9',
    name: 'Chocolate Drip Birthday Cake',
    image: B3,
    price: 27.00,
    ageGroup: 'Adults',
    theme: 'Chocolate Lover',
    type: 'Cake',
    dietary: 'Vegan',
    description: 'Decadent vegan chocolate cake with rich ganache drip and dark chocolate curls.',
    isBirthday: true
  },
  {
    id: '10',
    name: 'Pink Cookie Box',
    image: B4,
    price: 16.99,
    ageGroup: 'Teens',
    theme: 'Elegant',
    type: 'Cookies',
    dietary: 'Nut-free',
    description: 'Elegant pink-themed cookies with delicate decorations, perfect for gifting or parties.',
    isBirthday: true
  },
  {
    id: '11',
    name: 'Baby pink Cookie Box',
    image: B5,
    price: 16.99,
    ageGroup: 'Teens',
    theme: 'Elegant',
    type: 'Cookies',
    dietary: 'Nut-free',
    description: 'Soft sugar cookies in baby pink tones, finished with pastel swirls and sprinkles.',
    isBirthday: true
  },
  {
    id: '12',
    name: 'Mix Cookie Box',
    image: B6,
    price: 16.99,
    ageGroup: 'Adults',
    theme: 'Elegant',
    type: 'Cookies',
    dietary: 'All',
    description: 'A delightful assortment of cookies — chocolate chip, butter, and shortbread — in one box.',
    isBirthday: true
  },
  {
    id: '13',
    name: 'Purpule Cookie Box',
    image: B7,
    price: 16.99,
    ageGroup: 'Teens',
    theme: 'Princess',
    type: 'Cookies',
    dietary: 'All',
    description: 'Whimsical purple cookies with shimmer dust and crown details — magical and tasty.',
    isBirthday: true
  },
  {
    id: '14',
    name: 'Strawberry Longcake',
    image: B8,
    price: 16.99,
    ageGroup: 'Adults',
    theme: 'Elegant',
    type: 'Cake',
    dietary: 'Nut-free',
    description: 'A long, airy sponge cake filled with fresh strawberries and cream — simple and elegant.',
    isBirthday: true
  },
  {
    id: '15',
    name: 'Strawberry Shortcake',
    image: B9,
    price: 16.99,
    ageGroup: 'Adults',
    theme: 'Elegant',
    type: 'Cake',
    dietary: 'Eggless',
    description: 'Classic shortcake layered with whipped cream and juicy strawberries — eggless and delightful.',
    isBirthday: true
  },
  {
    id: '16',
    name: 'Lemon Blossom Cake',
    image: B10,
    price: 16.99,
    ageGroup: 'Adults',
    theme: 'Elegant',
    type: 'Cake',
    dietary: 'All',
    description: 'Zesty lemon cake topped with a swirl of lemon buttercream and candied zest.',
    isBirthday: true
  },
  {
    id: '17',
    name: 'Flour Cake',
    image: B11,
    price: 16.99,
    ageGroup: 'Teens',
    theme: 'Elegant',
    type: 'Cake',
    dietary: 'Nut-free',
    description: 'Fluffy vanilla cake covered in floral-inspired frosting — simple, sweet, and beautiful.',
    isBirthday: true
  },
  {
    id: '18',
    name: 'Pistachio with Berries Cake',
    image: B12,
    price: 16.99,
    ageGroup: 'Teens',
    theme: 'Elegant',
    type: 'Cake',
    dietary: 'Nut-free',
    description: 'Nutty pistachio sponge topped with whipped cream and fresh berries for a vibrant bite.',
    isBirthday: true
  },
];

export const cookies = [
  {
    id: "19",
    name: "Classic Chocolate Chip",
    description: "Soft and chewy with rich chocolate chips in every bite.",
    price: 3.99,
    image: CO1,
    flavor: "chocolate",
    texture: "soft",
    dietary: [],
    popularity: "bestseller",
  },
  {
    id: "20",
    name: "Oatmeal Raisin",
    description: "A classic blend of oats and juicy raisins for a hearty treat.",
    price: 3.49,
    image: CO2,
    flavor: "classic",
    texture: "chewy",

    dietary: ["nut-free"],
    popularity: "fan-favorite",

  },
  {
    id: "21",
    name: "Peanut Butter Delight",
    description: "Creamy peanut butter packed into a crunchy cookie.",
    price: 3.79,
    image: CO3,
    flavor: "peanut butter",
    texture: "crunchy",
    dietary: [],
    popularity: "new",
  },
  {
    id: "22",
    name: "Lemon Zest",
    description:"Bright and zesty lemon flavor with a delicate crunch.",
    price: 3.59,
    image: CO4,
    flavor: "fruity",
    texture: "crunchy",

    dietary: ["dairy-free"],
    popularity: "fan-favorite",

  },
  {
    id: "23",
    name: "Mint Chocolate Fudge",
    description: "Fudgy mint-infused cookies with dark chocolate chips.",
    price: 4.25,
    image: CO5,
    flavor: "mint",
    texture: "fudgy",

    dietary: [],
    popularity: "bestseller",

  },
  {
    id: "24",
    name: "Vegan Double Chocolate",
    description: "Rich double chocolate cookies made without dairy or eggs.",
    price: 4.49,
    image: CO6,
    flavor: "chocolate",
    texture: "soft",

    dietary: ["vegan", "dairy-free"],
    popularity: "new",

  },
  {
    id: "25",
    name: "Strawberry Shortbread",
    description: "Buttery shortbread cookies with real strawberry bits.",
    price: 3.89,
    image: CO7,
    flavor: "fruity",
    texture: "soft",

    dietary: [],
    popularity: "fan-favorite",

  },

 

];

export const cakes = [
  {
    id: 'cake1',
    name: 'Classic Vanilla Cake',
    image: '/images/cakes/vanilla.jpg',
    price: '29.99',
    flavor: 'vanilla',
    dietary: ['nut-free'],
    popularity: 'fan-favorite',
    type: 'Cake',
  },
  {
    id: 'cake2',
    name: 'Chocolate Fudge Cake',
    image: '/images/cakes/chocolate-fudge.jpg',
    price: '34.99',
    flavor: 'chocolate',
    dietary: ['vegetarian'],
    popularity: 'best-seller',
    type: 'Cake',
  },
  {
    id: 'cake3',
    name: 'Red Velvet Cake',
    image: '/images/cakes/red-velvet.jpg',
    price: '32.99',
    flavor: 'red velvet',
    dietary: ['nut-free', 'eggless'],
    popularity: 'fan-favorite',
    type: 'Cake',
  },
  {
    id: 'cake4',
    name: 'Lemon Zest Cake',
    image: '/images/cakes/lemon.jpg',
    price: '28.99',
    flavor: 'lemon',
    dietary: ['dairy-free'],
    popularity: 'new',
    type: 'Cake',
  },
  {
    id: 'cake5',
    name: 'Carrot Cake',
    image: '/images/cakes/carrot.jpg',
    price: '31.99',
    flavor: 'spiced',
    dietary: ['vegetarian'],
    popularity: 'classic',
    type: 'Cake',
  },
  {
    id: 'cake6',
    name: 'Strawberry Shortcake',
    image: '/images/cakes/strawberry.jpg',
    price: '30.99',
    flavor: 'fruity',
    dietary: ['nut-free'],
    popularity: 'seasonal',
    type: 'Cake',
  },
  {
    id: 'cake7',
    name: 'Black Forest Cake',
    image: '/images/cakes/black-forest.jpg',
    price: '33.99',
    flavor: 'chocolate',
    dietary: ['vegetarian'],
    popularity: 'classic',
    type: 'Cake',
  },
  {
    id: 'cake8',
    name: 'Tiramisu Cake',
    image: '/images/cakes/tiramisu.jpg',
    price: '35.99',
    flavor: 'coffee',
    dietary: ['nut-free'],
    popularity: 'fan-favorite',
    type: 'Cake',
  },
  {
    id: 'cake9',
    name: 'Funfetti Celebration Cake',
    image: '/images/cakes/funfetti.jpg',
    price: '29.49',
    flavor: 'vanilla',
    dietary: ['eggless'],
    popularity: 'new',
    type: 'Cake',
  },
  {
    id: 'cake10',
    name: 'Mocha Espresso Cake',
    image: '/images/cakes/mocha.jpg',
    price: '36.99',
    flavor: 'coffee',
    dietary: ['vegan'],
    popularity: 'best-seller',
    type: 'Cake',
  },
];


export const Cake = [
  {
    id: 'cake1',
    name: 'Classic Vanilla Cake',
    image: CA1,
    price: '29.99',
    flavor: 'vanilla',
    dietary: ['nut-free'],
    popularity: 'fan-favorite',
    type: 'Cake',
    description: 'A soft, golden sponge infused with pure vanilla for timeless delight.'
  },
  {
    id: 'cake2',
    name: 'Chocolate Fudge Cake',
    image: CA2,
    price: '34.99',
    flavor: 'chocolate',
    dietary: ['vegetarian'],
    popularity: 'best-seller',
    type: 'Cake',
    description: 'Rich, moist chocolate layers with a creamy fudge finish.'
  },
  {
    id: 'cake3',
    name: 'Red Velvet Cake',
    image: CA3,
    price: '32.99',
    flavor: 'red velvet',
    dietary: ['nut-free', 'eggless'],
    popularity: 'fan-favorite',
    type: 'Cake',
    description: 'Elegant red sponge with a hint of cocoa, topped with silky cream cheese.'
  },
  {
    id: 'cake4',
    name: 'Lemon Zest Cake',
    image: CA4,
    price: '28.99',
    flavor: 'lemon',
    dietary: ['dairy-free'],
    popularity: 'new',
    type: 'Cake',
    description: 'Bright and citrusy with a fresh lemon zing in every bite.'
  },
  {
    id: 'cake5',
    name: 'Carrot Cake',
    image: CA5,
    price: '31.99',
    flavor: 'spiced',
    dietary: ['vegetarian'],
    popularity: 'classic',
    type: 'Cake',
    description: 'A spiced favorite with fresh carrots, walnuts, and a creamy frosting.'
  },
  {
    id: 'cake6',
    name: 'Strawberry Shortcake',
    image: CA6,
    price: '30.99',
    flavor: 'fruity',
    dietary: ['nut-free'],
    popularity: 'seasonal',
    type: 'Cake',
    description: 'Light layers of sponge with whipped cream and sweet strawberries.'
  },
  {
    id: 'cake7',
    name: 'Black Forest Cake',
    image: CA7,
    price: '33.99',
    flavor: 'chocolate',
    dietary: ['vegetarian'],
    popularity: 'classic',
    type: 'Cake',
    description: 'Decadent chocolate sponge layered with cherries and whipped cream.'
  }
];
