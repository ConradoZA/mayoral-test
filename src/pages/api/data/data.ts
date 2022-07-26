export type Article = {
  id: string;
  name: string;
  price: string;
  image: string;
  discount?: string;
  options?: string[];
};

export const articles: Article[] = [
  {
    id: '1',
    name: 'Camiseta manga corta print',
    price: '13,99',
    image: './camiseta-manga-corta-print-chico.jpg',
  },
  {
    id: '2',
    name: 'Camiseta manga corta ECOFRIENDS 3D',
    price: '16,99',
    image: './camiseta-manga-corta-ecofriends-3d.jpg',
    discount: '8,49',
  },
  {
    id: '3',
    name: 'Camiseta manga corta ECOFRIENDS relieve',
    price: '14,99',
    image: './camiseta-manga-corta-ecofriends-relieve.jpg',
    discount: '7,49',
    options: ['orange', 'brown', 'green'],
  },
  {
    id: '4',
    name: 'Camiseta manga corta ECOFRIENDS skate',
    price: '14,99',
    image: './camiseta-manga-corta-ecofriends-skate.jpg',
    discount: '7,49',
  },
  {
    id: '5',
    name: 'Camiseta manga corta ECOFRIENDS tropical',
    price: '13,99',
    image: './camiseta-manga-corta-ecofriends-tropical.jpg',
    discount: '6,99',
  },
  {
    id: '6',
    name: 'Camiseta manga corta ECOFRIENDS bolsillo',
    price: '13,99',
    image: './camiseta-manga-corta-ecofriends-bolsillo.jpg',
    discount: '6,99',
    options: ['surf-linen', 'palm trees-linen', 'surf-white', 'palm trees-white'],
  },
  {
    id: '7',
    name: 'Camiseta manga corta estampado',
    price: '13,99',
    image: './camiseta-manga-corta-estampado.jpg',
    discount: '6,99',
    options: ['sharks', 'jellyfish', 'mola mola'],
  },
  {
    id: '8',
    name: 'Camiseta manga corta ECOFRIENDS future',
    price: '13,99',
    image: './camiseta-manga-corta-ecofriends-future.jpg',
    discount: '6,99',
  },
  {
    id: '9',
    name: 'Camiseta piqué rayas',
    price: '19,99',
    image: './camiseta-pique-rayas.jpg',
  },
  {
    id: '10',
    name: 'Camiseta panadero rayas ECOFRIENDS',
    price: '19,99',
    image: './camiseta-panadero-rayas-ecofriends.jpg',
    discount: '9,99',
  },
];
