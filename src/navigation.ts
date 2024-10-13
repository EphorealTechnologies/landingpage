import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
     
    },
    { 
      text: 'Services',
      links: [
        {
          text: 'Strategic Consult',
          href: getPermalink('/homes/Consult'),
        },
        {
          text: 'GenAI',
          href: getPermalink('/homes/GenAI'),
        },
        {
          text: 'Data Engineering',
          href: getPermalink('/homes/dataEngineering'),
        },
        {
          text: 'Custom Machine Learning',
          href: getPermalink('/homes/dataScience'),
        },
        {
          text: 'Computer Vision',
          href: getPermalink('/homes/ComputerVision'),
        },
        {
          text: 'IOT',
          href: getPermalink('/homes/IOT'),
        },
        {
          text: 'MLOPS',
          href: getPermalink('/homes/MLOPS'),
        },
      ],
    },
    {
      text: 'Industries',
      links: [
        {
          text: 'Healthcare',
          href: getPermalink('/homes/Healthcare'),
        },
        {
          text: 'Manufacturing',
          href: getPermalink('/homes/Manufacturing'),
        },
        {
          text: 'Retail',
          href: getPermalink('/homes/Retail'),
        },
        {
          text: 'banking and finance',
          href: getPermalink('/homes/banking_finance'),
        },
        {
          text: 'Logistics and supply chain',
          href: getPermalink('/homes/logistics_supplychain'),
        },
      ],
    },
    {
      text: 'AboutUs',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
   
    {
      text: 'Blog',
      href: getBlogPermalink(),
     
    },
    
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Strategic consult', href: '/homes/Consult' },
        { text: 'GenAI', href: '/homes/GenAI' },
        { text: 'Data Engineering', href: '/homes/dataEngineering' },
        { text: 'Custom Machine Learning', href: '/homes/dataScience' },
        { text: 'Computer Vision', href: '/homes/ComputerVision' },
        { text: 'IOT', href: '/homes/IOT' },
        { text: 'MLOPS', href: '/homes/MLOPS' },
      ],
    },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
    {
      title: 'Contact Us',
      links: [
        { text: 'Email: info@ephoreal.com', href: 'mailto:contact@ephoreal.com' },
        { text: 'Book a meeting', href: getPermalink('/contact') },
        { text: 'Address: 2nd floor, 14, Rajaji Street, Sudhana Nagar, Nainarmandapam, Puducherry, India-605004'},
        // { text: 'Skills', href: '#' },
        // { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text:"LinkedIn", icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/ephoreal-technologies/' },
        { text:"X",icon: 'tabler:brand-X', href: 'https://www.X.com/EphorealTech' },
        // { text: 'X', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/ephoreal-technologies/' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/EphorealTech' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/EphorealTechnologies' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://res.cloudinary.com/dgpcn8e7x/image/upload/v1728810916/Logo_hlpksp.svg"  alt="onWidget logo" loading="lazy"></img>
    ©2024 by Ephoreal Technologies. All Rights Reserved.
  `,
};
