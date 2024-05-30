import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { snefersShoe1, snefersShoe2, snefersShoe3, customer1, customer2, thumbnail1, thumbnail2, thumbnail3, products1, products2, products3, products4 } from "../assets/images";

export const navLinks = [
    { href: "#", label: "Home", goto: "home" },
    { href: "#", label: "About Us", goto: "about" },
    { href: "#", label: "Products", goto: "products" },
    { href: "#", label: "Contact Us", goto: "contact" },
];

export const shoes = [
    {
        thumbnail: thumbnail1,
        bigShoe: snefersShoe1,
    },
    {
        thumbnail: thumbnail2,
        bigShoe: snefersShoe2,
    },
    {
        thumbnail: thumbnail3,
        bigShoe: snefersShoe3,
    },
];

export const statistics = [
    { value: '500+', label: 'Brands' },
    { value: '5k+', label: 'Shops' },
    { value: '550k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: products1,
        name: "Snefers Super Sportify",
        price: "$200.20",
    },
    {
        imgURL: products2,
        name: "Snefers Casual Comfort",
        price: "$210.20",
    },
    {
        imgURL: products3,
        name: "Snefers G-10",
        price: "$220.20",
    },
    {
        imgURL: products4,
        name: "Snefers Casual C-10",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy a seamless shopping journey with our no-cost shipping."
    },
    {
        imgURL: shieldTick,
        label: "Secure Transactions",
        subtext: "Shop confidently with our protected payment solutions."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Rick Fury',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Scarlett Larson',
        rating: 4.4,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Snefers G-12", link: "/" },
            { name: "Snefers Sport S-1", link: "/" },
            { name: "Snefers Classic C-23", link: "/" },
            { name: "Snefers Zig Grip", link: "/" },
            { name: "Snefers Neon N-4", link: "/" },
            { name: "Snefers Shoot SS-11", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@snefers.com", link: "mailto:customer@snefers.com" },
            { name: "+919090202021", link: "tel:+8998211209" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", href:"#" },
    { src: twitter, alt: "twitter logo", href:"#" },
    { src: instagram, alt: "instagram logo", href:"#" },
];