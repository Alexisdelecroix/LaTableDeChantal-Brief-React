import React from "react";

import { v4 as uuidv4 } from "uuid";

const DataPlat = [
  {
    id: uuidv4,
    categorie: 1,
    title: "Filet de Saumon fumée",
    text: "Viens gouter notre saumon",
    image: `https://cdn.shopify.com/s/files/1/2390/5583/products/Filet_saumon_500g_740x.jpg?v=1579011660`,
    alt: "",
    prix: "9.99€",
  },

  {
    id: uuidv4,
    categorie: 1,
    title: "Salade de mangue verte",
    text: "Pour donner un petit côté ensoleillé",
    image: `https://resize-elle.ladmedia.fr/r/300,386,center-middle,forcey,ffffff/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/salade-de-mangue-verte-1162376/13603372-6-fre-FR/Salade-de-mangue-verte.jpg`,
    alt: "",
    prix: "7.99€",
  },

  {
    id: uuidv4,
    categorie: 1,
    title: "Terrine de sanglier",
    text: "Une recette traditionnnelle pour les inconditionnels des gibiers",
    image: `https://resize-elle.ladmedia.fr/r/300,386,center-middle,forcey,ffffff/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/la-terrine-de-sanglier-a-l-ancienne-2078428/22054892-2-fre-FR/La-terrine-de-sanglier-a-l-ancienne.jpg`,
    alt: "",
    prix: "8.99€",
  },
  {
    id: uuidv4,
    categorie: 1,
    title: "Bouillon de poireau",
    text: "Servis avec du quinoa ou sarrasin",
    image: `https://resize-elle.ladmedia.fr/r/300,386,center-middle,forcey,ffffff/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/bouillon-de-poireaux-3972213/95729060-1-fre-FR/Bouillon-de-poireaux.jpg`,
    alt: "",
    prix: "6.99€",
  },
  {
    id: uuidv4,
    categorie: 1,
    title: "Beignets de pommes de terre",
    text: "Ces galettes sont aussi appelées rösties",
    image: `https://resize-elle.ladmedia.fr/r/300,386,center-middle,forcey,ffffff/img/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/beignets-de-pommes-de-terre-de-ma-grand-mere-2068314/21707372-2-fre-FR/Beignets-de-pommes-de-terre-de-ma-grand-mere.jpg`,
    alt: "",
    prix: "6.99€",
  },

  {
    id: uuidv4,
    categorie: 2,
    title: "Lasagnes",
    text: "Les bonnes lasagnes",
    image: `https://img.cuisineaz.com/660x660/2016/05/22/i87267-lasagnes-a-la-vraie-bolognaise.jpg`,
    alt: "",
    prix: "14.99€",
  },

  {
    id: uuidv4,
    title: "Raclette",
    categorie: 2,
    text: "Avec son bon fromage alpin",
    image: `https://www.hervecuisine.com/wp-content/uploads/2017/12/recette-raclette.jpg.webp?x79635`,
    alt: "",
    prix: "19.99€",
  },

  {
    id: uuidv4,
    categorie: 2,
    title: "Tarte au saumon",
    text: "Pour un petit peu de fraicheur",
    image: `https://assets.afcdn.com/recipe/20200219/107906_w1024h768c1cx2760cy1842.jpg`,
    alt: "",
    prix: "13.99€",
  },

  {
    id: uuidv4,
    categorie: 2,
    title: "Moules-frites",
    text: "Pour l'air marin venez gouter nos moules",
    image: `https://sf1.viepratique.fr/wp-content/uploads/sites/2/2014/02/shutterstock_115952584.jpg`,
    alt: "",
    prix: "12.99€",
  },
  {
    id: uuidv4,
    categorie: 2,
    title: "Jarrets d'agneau",
    text: "Spécialité vin rouge",
    image: `https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2019.2F10.2F03.2F63e66490-bc5a-416b-bb48-3dbdd514837c.2Ejpeg/422x316/quality/80/crop-from/center/focus-point/764%2C543/jarrets-d-agneau.jpeg`,
    alt: "",
    prix: "19.99€",
  },
  {
    id: uuidv4,
    categorie: 3,
    title: "Tiramisu",
    text: "Pour les amateurs de gourmandises",
    image: `https://img.cuisineaz.com/660x660/2016/11/02/i94096-tiramisu-facile-facile-et-rapide.webp`,
    alt: "",
    prix: "5.99€",
  },

  {
    id: uuidv4,
    title: "Crêpes",
    categorie: 3,
    text: "Servis avec chocolat et chantilly",
    image: `https://img.cuisineaz.com/660x660/2015/01/29/i113699-photo-de-crepe-facile.webp`,
    alt: "",
    prix: "5.99€",
  },

  {
    id: uuidv4,
    categorie: 3,
    title: "Ile flottante",
    text: "",
    image: `https://img.cuisineaz.com/660x660/2013/12/20/i78006-iles-flottantes-faciles.webp`,
    alt: "",
    prix: "4.99€",
  },

  {
    id: uuidv4,
    categorie: 3,
    title: "Cake pops aux petits beurre",
    text: "Cake pops aux petits beurre",
    image: `https://img.cuisineaz.com/660x660/2015/04/29/i77179-cake-pops-aux-petits-beurre.webp`,
    alt: "",
    prix: "4.99€",
  },
  {
    id: uuidv4,
    categorie: 3,
    title: "Clafoutis a la rhubarbe et a la cannelle",
    text: "Produits locaux",
    image: `https://img.cuisineaz.com/660x660/2015/03/26/i14054-clafoutis-a-la-rhubarbe-et-a-la-cannelle.webp`,
    alt: "",
    prix: "4.99€",
  },
  {
    id: uuidv4,
    categorie: 4,
    title : "Eau minérale",
    text : "Eau minérale naturelle venant tout droit du Mont Blanc",
    image : `https://img-3.journaldesfemmes.fr/yMxhHnh5sjHuZTb--yP8AntKqng=/1500x/smart/8d083661d9a440dcbd75075fbc3538dc/ccmcms-jdf/30776587.jpg`,
    alt: "",
    prix: "15.00€"
  },

  {
    id: uuidv4,
    categorie: 4,
    title: "Limonade",
    text: "Rafraichissez-vous avec notre excellente limonade avec des citrons pressés bien juteux",
    image: "https://c.pxhere.com/photos/f5/89/beer_lemonade_beverage_refreshment_alcohol_summer_alcoholic_drink-1336735.jpg!d",
    alt: "",
    prix: "12.00€"
  },

  {
    id: uuidv4,
    categorie: 4,
    title: "Café",
    text: "Café au lait pour une ambiance chaleureuse !",
    image: "https://handy.brussels/wp-content/uploads/2017/09/cafe.jpg",
    alt: "",
    prix: "13.00€"
  },

  {
    id: uuidv4,
    categorie: 4,
    title: "Hydromel",
    text: "Nous remettons un classique au gout du jour, l'un des premiers alcools jamais inventés, l'hydromel !",
    image: "https://revolutionfermentation.com/wp-content/uploads/2021/09/verre-melomel-petits-fruits-613x800-1.jpg",
    alt: "",
    prix: "18.00€"
  },
  {
    id: uuidv4,
    categorie: 4,
    title: "Vin rouge",
    text: "Spécialité vin rouge années 1995",
    image: `https://www.lhotellerie-restauration.fr/journal/produit-boisson/2019-12/img/thinkstockphotos-6152692.jpg`,
    alt: "",
    prix: "19.99€",
  },
  {
    id: uuidv4,
    categorie: 4,
    title: "Cocktail",
    text: "Un bon cocktail",
    image: `https://leblogdelili.fr/wp-content/uploads/2018/09/Hotel-Marignan-restaurant-limon-5.jpg`,
    alt: "",
    prix: "16.99€",
  },
  {
    id: uuidv4,
    categorie: 4,
    title: "Coca",
    text: "",
    image: `https://c8.alamy.com/compfr/2a6gmft/une-ancienne-bouteille-verre-de-coca-servi-dans-un-beau-restaurant-avec-un-verre-de-glace-2a6gmft.jpg`,
    alt: "",
    prix: ""
  },
  {
    id: uuidv4,
    categorie: 4,
    title: "Fanta",
    text: "",
    image: `https://mp.reshift.nl/zoom/B4C3EABEBDB4147860210815B9B2C47C-fanta.jpg?w=450`,
    alt: "",
    prix: ""
  },
  {
    id: uuidv4,
    categorie: 4,
    title: "Monster Blanche",
    text: "",
    image: `https://media.carrefour.fr/medias/ab6ec6e646463b16aaa564c9314458a2/p_540x540/05060335632302-h1n1-s01.jpg`,
    alt: "",
    prix: ""
  },
  {
    id: uuidv4,
    categorie: 4,
    title: "Oasis",
    text: "",
    image: `https://proxi-haironville.fr/3752-large_default/boisson-tropical-oasis.jpg`,
    alt: "",
    prix: ""
  },
  {
    id: uuidv4,
    categorie: 4,
    title: "Vin Blanc",
    text: "",
    image: `https://upload.wikimedia.org/wikipedia/commons/7/78/Vin_blanc_au_restaurant_Czerwone_Drzwi_%28Porte_Rouge%29_de_Gdansk.jpg`,
    alt: "",
    prix: ""
  },
];

//   const Plat = [
//     {
//       id: 1,
//       title: "",
//       text: "",
//       image: ``,
//       alt: "",
//     },

//     {
//       id: 1,
//       title: "",
//       text: "",
//       image: ``,
//       alt: "",
//     },

//     {
//       id: 1,
//       title: "",
//       text: "",
//       image: ``,
//       alt: "",
//     },
//   ];

//   const Desert = [
//     {
//       id: 1,
//       title: "",
//       text: "",
//       image: ``,
//       alt: "",
//     },

//     {
//       id: 1,
//       title: "",
//       text: "",
//       image: ``,
//       alt: "",
//     },

//     {
//       id: 1,
//       title: "",
//       text: "",
//       image: ``,
//       alt: "",
//     },
//   ];

export default DataPlat;
