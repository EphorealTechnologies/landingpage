import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { 
      text: 'Services',
      links: [
        {
          text: 'Strategic Consult',
          href: getPermalink('/homes/Consult'),
        },
        {
          text: 'Data Engineering',
          href: getPermalink('/homes/dataEngineering'),
        },
        {
          text: 'Machine Learning',
          href: getPermalink('/homes/dataScience'),
        },
            {
      text: 'Generative AI',
      href: getPermalink('/homes/GenAI'),
    },
            {
      text: 'Custom Software',
      href: getPermalink('/homes/customSoftware'),
    },

        // {
        //   text: 'GenAI',
        //   href: getPermalink('/homes/GenAI'),
        // },
        // {
        //   text: 'Computer Vision',
        //   href: getPermalink('/homes/ComputerVision'),
        // },
      ],
    },
    // {
    //   text: 'Industries',
    //   links: [
    //     {
    //       text: 'Healthcare',
    //       href: getPermalink('/homes/Healthcare'),
    //     },
    //     {
    //       text: 'Manufacturing',
    //       href: getPermalink('/homes/Manufacturing'),
    //     },
    //     {
    //       text: 'Retail',
    //       href: getPermalink('/homes/Retail'),
    //     },
    //     {
    //       text: 'banking and finance',
    //       href: getPermalink('/homes/banking_finance'),
    //     },
    //     {
    //       text: 'Logistics and supply chain',
    //       href: getPermalink('/homes/logistics_supplychain'),
    //     },
    //   ],
    // },
    {
      text: 'AboutUs',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
   
    // {
    //   text: 'Blog',
    //   href: getBlogPermalink(),
     
    // },
    
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Strategic consult', href: '/homes/Consult' },
        // { text: 'GenAI', href: '/homes/GenAI' },
        { text: 'Data Engineering', href: '/homes/dataEngineering' },
        { text: 'Machine Learning', href: '/homes/dataScience' },
        // { text: 'Computer Vision', href: '/homes/ComputerVision' },
        { text: 'Generative AI', href: '/homes/GenAI' },
        { text: 'Custom Software', href: '/homes/customSoftware' },
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
        { text: '<strong>Email:</strong> info@ephoreal.com', href: 'mailto:contact@ephoreal.com' },
        { text: '<strong>Chat with us</strong>', href: getPermalink('/contact') },
        { text: "<strong>India Office:</strong> 2nd floor, 14, Rajaji Street, Sudhana Nagar, Nainarmandapam, Puducherry, India-605004 <strong>Contact:</strong> +91 97901 76084",
          href: "https://maps.app.goo.gl/c9XPSdQsRt1qCdrs9"
         }
        
// { text: 'Skills', href: '#' },
        // { text: 'Status', href: '#' },
      ],
    },
    // {
    //   title: 'Other offices:',
    //   links: [
    // { text: "<strong>Romania Office:</strong> Starda Bulevardul Lulia mania 69 Bucharest 077042, Romania <strong>Contact:</strong> +40 727 111 188" },
    // { text: "<strong>Poland Headquarters:</strong> Ul. Emilii Plater 36a, Warsaw, 00-113, Poland <br> <strong>Contact:</strong> +48 730 305 933" },

    //   ],
    // },
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
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://res.cloudinary.com/dgpcn8e7x/image/upload/v1728810916/Logo_hlpksp.svg"  alt="Ephoreal Technologies logo" loading="lazy"></img>
    ©2024 by Ephoreal Technologies. All Rights Reserved.
  `,
};
