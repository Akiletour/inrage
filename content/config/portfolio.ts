export const ProjectTechnologies = [
  { name: 'Adobe XD', image: '/images/technologies/adobe-xd.webp' },
  {
    name: 'API Google Map',
    image: '/images/technologies/api-google-map.webp',
  },
  { name: 'Sage 10', image: '/images/technologies/sage10.webp' },
  { name: 'WordPress', image: '/images/technologies/wordpress.webp' },
  { name: 'WooCommerce', image: '/images/technologies/woocommerce.svg' },
];

type ProjectSupport = {
  [key: string]: {
    name: string;
    image: string;
  };
};

export const ProjectSupports: ProjectSupport = {
  wordpress: {
    name: 'WordPress',
    image: '/images/supports/creation-wordpress.webp',
  },
  prestashop: {
    name: 'PrestaShop',
    image: '/images/supports/creation-prestashop.webp',
  },
  'application-web': {
    name: 'Application web',
    image: '/images/supports/developpement-application-web.webp',
  }
};
