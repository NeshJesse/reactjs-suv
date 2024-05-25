/*this is a data source that feeds specific sections of the landing page including
features,Workflow ,pricing and the footer*/
import dev from "../assets/profile-pictures/dev.jpg";

import { CreditCard, Layout, Database, BookOpen, LifeBuoy } from 'lucide-react';

export const features = [
  {
    icon: <CreditCard />,
    text: "Mpesa Pre-integrated",
    description:
      "Seamlessly integrate Mpesa STK push payments into your application, simplifying the transaction process for your users.",
  },
  {
    icon: <Layout />,
    text: "Conversion Optimized Landing Page",
    description:
      "Utilize a professionally designed landing page optimized for high conversion rates, ensuring your product makes a strong first impression.",
  },
  {
    icon: <Database />,
    text: "Working MongoDB Backend",
    description:
      "Leverage a fully functional MongoDB backend to handle your data storage needs efficiently and securely.",
  },
  {
    icon: <BookOpen />,
    text: "Comprehensive Documentation",
    description:
      "Access detailed documentation to help you get started quickly and troubleshoot any issues you may encounter.",
  },
  {
    icon: <LifeBuoy />,
    text: "Dedicated Support",
    description:
      "Receive dedicated support to assist you with any challenges, ensuring a smooth development experience.",
  },
];


export const checklistItems = [
  {
    title: "Payment Integration",
    description: "Simplify transactions with pre-integrated Mpesa STK push."
  },
  {
    title: "Optimized Landing Page",
    description: "Maximize conversions with a professionally designed landing page."
  },
  {
    title: "MongoDB Backend(PRO FEATURE)",
    description: "Efficient data management with a fully functional MongoDB backend."
  },
  {
    title: "Detailed Documentation",
    description: "Access comprehensive guides to help you get started quickly."
  },
  {
    title: "Dedicated Support",
    description: "Receive expert support to overcome any development challenges."
  }
];

export const pricingOptions = [
  {
    stack: "Mini SUV",
    title:"Mini",
    price: "Ksh 1200",
    features: [
      "React& Next Js, Php , Flask",
      "Editable Landing page",
      "Mpesa STK Push integrated",
      "User Authentication",
      "MongoDB Database",
      "Good Documentation",

    ],
  },

  {
    stack: "Medium SUV",
    title:"Popular",
    price: "Ksh 2000",
    features: [
      "React& Next Js, Php , Flask",
      "Editable Landing page",
      "Mpesa STK Push integrated",
      "User Authentication",
      "MongoDB Database",
      "Good Documentation",
      "MySqlDB spare wheel"

    ],
  },
  {
    stack: "Full SUV",
    title:"Pro",
    price: "Ksh 4500",
    features: [
      "React& Next Js, Php , Flask",
      "Editable Landing page",
      "Mpesa STK Push integrated",
      "User Authentication",
      "Good Documentation",
      "MongoDB Database",
      "MySqlDB spare wheel",
      "Life time support",
      "Free updates"
    
    ],
  },

];
export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const developer = [
  {
    user: "Jesse Nehemiah Onyango",
    company: "Stellar Solutions",
    role: "Founder & Full-stack Developer",
    image: dev,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },


];