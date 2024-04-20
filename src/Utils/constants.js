import {
  amexIcon,
  applePayIcon,
  gPayIcon,
  instagramIcon,
  linkedinIcon,
  masterCardIcon,
  oPayIcon,
  paypalIcon,
} from "@/Assets/Icons";

export const tabs = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

export const idealForOptions = [
  { label: "Men", value: "Men" },
  { label: "Women", value: "Women" },
  { label: "Baby & Kids", value: "Babt & Kids" },
];

export const options = [
  { label: `Option 1`, value: 1 },
  { label: `Option 2`, value: 2 },
];

export const langOptions = [
  { label: `ENG`, value: 1 },
  { label: `HINDI`, value: 2 },
  { label: `GUJARATI`, value: 3 },
];

export const filterOptions = [
  { label: `recommended`, value: 1 },
  { label: `Newest first`, value: 2 },
  { label: `popular`, value: 3 },
  { label: `Price : high to low`, value: 4 },
  { label: `Price : low to high`, value: 5 },
];

export const sidebarData = [
  {
    heading: "Ideal For",
    options: idealForOptions,
  },
  {
    heading: "Occasion",
    options: options,
  },
  {
    heading: "Fabric",
    options: options,
  },
  {
    heading: "Work",
    options: options,
  },
  {
    heading: "Segment",
    options: options,
  },
  {
    heading: "Suitable For",
    options: options,
  },
  {
    heading: "Raw Materials",
    options: options,
  },
  {
    heading: "Pattern",
    options: options,
  },
];

export const museData = [
  { label: "About Us", value: 1 },
  { label: "Stories", value: 2 },
  { label: "Artisans", value: 3 },
  { label: "Boutiques", value: 4 },
  { label: "Contact Us", value: 5 },
  { label: "EU Compliances Docs", value: 6 },
];

export const quickLinks = [
  { label: "Orders & Shipping", value: 1 },
  { label: "Join/Login as a Seller", value: 2 },
  { label: "Payment & Pricing", value: 3 },
  { label: "Return & Refunds", value: 4 },
  { label: "FAQs", value: 5 },
  { label: "Privacy Policy", value: 6 },
  { label: "Terms & Conditions", value: 7 },
];

export const mediaLinks = [instagramIcon, linkedinIcon];

export const paymentMethods = [
  gPayIcon,
  masterCardIcon,
  paypalIcon,
  amexIcon,
  applePayIcon,
  oPayIcon,
];
