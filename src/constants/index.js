import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  nftmarketplace,
  firebase,
  stripe,
  filmpire,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  motobase,
  ziaway,
  threejs,
  mootobase,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Firebase Developer",
    icon: backend,
  },
  {
    title: "Stripe specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "stripe",
    icon: stripe,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Freelance React.js-Firebase-Stripe developer",
    company_name: "",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Building web applications for clients.",
      "Tutoring , Explaining the work through zoom meeting .",
      "Deploying web applications to different hosting platforms like vercel , netlify and hostinger.",
      "Meeting with clients and negotiating through zoom.",
    ],
  },
  {
    title: "Frontend React Developer",
    company_name: "Ziaway",
    icon: ziaway,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend React Developer",
    company_name: "Motobase Uk",
    icon: motobase,
    iconBg: "#383E56",
    date: "feb 2022 - Jul 2022",
    points: [
      "Lead the frontend development",
      "Developing and maintaining the website using React.js and other related technologies.",
      "Collaborating with other developers Frontend and backend developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      ,
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Malik is a very competent and professional developer, I really appreciated his fast delivery and service.",
    name: "ashraf abd rahman",
    designation: "United Kingdom",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Great work with Malik, he was quick, reactive and very helpful.",
    name: "raphaeldoa",
    designation: "France",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Very talented developer, he always goes above and beyond to get the project done and done right! Will be returning for more!",
    name: "Jadon",
    designation: "United State",
    company: "",

    image: "https://randomuser.me/api/portraits/men/6.jpg",

  },
];

const projects = [
  {
    name: "filmpire",
    description:
      "Web-based platform that allows users to search, filter, and save movies based on different categories and genres , helps them finding the best movies in the globe.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: filmpire,
    source_code_link: "https://github.com/malikbendevv/Movie-app",
    deployedSite: 'https://filmpiremovies.netlify.app'
  },
  {
    name: "Nft marketplace",
    description:
      "Web-3 Nft marketplace enables users to create , sell , buy and ressell Nfts with ability to search and filter nfts , and creators.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "Solidity",
        color: "pink-text-gradient",
      },
    ],
    image: nftmarketplace,

    source_code_link: "https://github.com/malikbendevv/NftMarketplace",
    deployedSite: 'https://nft-marketplace-tawny-seven.vercel.app/'

  },
  {
    name: "Motobase",
    description:
      "Motobase is a platform to register user's ownership of off-road motorbikes, it makes it easy for businesses and individuals to check the status of a motorbike when buying and selling,users can change the registered keeper in a few clicks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "custom css",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: mootobase,
    source_code_link: "",
    deployedSite: 'https://www.moto-base.co.uk'

  },
  // {
  //   name: "Ziaway-pro",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "",
  //   deployedSite: '/https://proziaway.com'

  // },
];

export { services, technologies, experiences, testimonials, projects };
