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
    title: "Lasagnes",
    text: "Les bonnes lasagnes",
    image: `https://img.cuisineaz.com/660x660/2016/05/22/i87267-lasagnes-a-la-vraie-bolognaise.jpg`,
    alt: "",
    prix: "14.99€",
  },

  {
    id: uuidv4,
    title: "Raclette",
    categorie: 3,
    text: "Avec son bon fromage alpin",
    image: `https://www.hervecuisine.com/wp-content/uploads/2017/12/recette-raclette.jpg.webp?x79635`,
    alt: "",
    prix: "19.99€",
  },

  {
    id: uuidv4,
    categorie: 3,
    title: "Tarte au saumon",
    text: "Pour un petit peu de fraicheur",
    image: `https://assets.afcdn.com/recipe/20200219/107906_w1024h768c1cx2760cy1842.jpg`,
    alt: "",
    prix: "13.99€",
  },

  {
    id: uuidv4,
    categorie: 3,
    title: "Moules-frites",
    text: "Pour l'air marin venez gouter nos moules",
    image: `https://sf1.viepratique.fr/wp-content/uploads/sites/2/2014/02/shutterstock_115952584.jpg`,
    alt: "",
    prix: "12.99€",
  },
  {
    id: uuidv4,
    categorie: 3,
    title: "Jarrets d'agneau",
    text: "Spécialité vin rouge",
    image: `https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2019.2F10.2F03.2F63e66490-bc5a-416b-bb48-3dbdd514837c.2Ejpeg/422x316/quality/80/crop-from/center/focus-point/764%2C543/jarrets-d-agneau.jpeg`,
    alt: "",
    prix: "19.99€",
  },
  {
    id: uuidv4,
   
    
  },

  {
    id: uuidv4,
   
  },

  {
    id: uuidv4,
    
  },

  {
    id: uuidv4,
    
  },
  {
    id: uuidv4,
    categorie: 4,
    title: "Vin rouge",
    text: "Spécialité vin rouge années 1995",
    image: `https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2019.2F10.2F03.2F63e66490-bc5a-416b-bb48-3dbdd514837c.2Ejpeg/422x316/quality/80/crop-from/center/focus-point/764%2C543/jarrets-d-agneau.jpeg`,
    alt: "",
    prix: "19.99€",
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
