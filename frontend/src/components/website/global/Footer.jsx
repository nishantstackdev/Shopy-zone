import React from 'react';
import {
    Box,
    CircleDollarSign,
    Headphones,
    CreditCard,
    ArrowUpRight,
    Facebook,
    Instagram,
    Youtube,
    Music2,
    Twitter
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#111111] text-white font-sans">
            {/* 1. Features Bar */}
            <div className="border-b border-gray-800 bg-[#1a1c20]">
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureItem
                        icon={<Box size={24} />}
                        title="Free Shipping"
                        desc="On order over $49.00"
                    />
                    <FeatureItem
                        icon={<CircleDollarSign size={24} />}
                        title="Money Guarantee"
                        desc="Within 30 days for an exchange"
                    />
                    <FeatureItem
                        icon={<Headphones size={24} />}
                        title="Online Support"
                        desc="24 hours a day, 7 days a week"
                    />
                    <FeatureItem
                        icon={<CreditCard size={24} />}
                        title="Flexible Payment"
                        desc="Pay with Multiple Credit Cards"
                    />
                </div>
            </div>

            {/* 2. Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-black tracking-tighter mb-6">
                            ENTRY<span className="text-red-500 ml-1 text-xl">▲</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <p>5611 Wellington Road, Suite 115, Gainesville</p>
                            <p className="text-2xl font-bold text-white">(84) 943 446 000</p>
                            <a href="mailto:entry@support.com" className="underline hover:text-red-500 transition">
                                entry@support.com
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <FooterColumn title="Information" links={['Specials', 'SiteMap', 'Delivery Return', 'Privacy Policy', 'Terms & Conditions']} />
                    <FooterColumn title="Customer Services" links={['Brands', 'Affiliates', 'Returns', 'Shopping Cart', 'Gift Certificates']} />
                    <FooterColumn title="Contact Us" links={['About Us', 'Contact Us', 'FAQs', 'Wishlist', 'Shopping Cart']} />

                    {/* Newsletter & Socials */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-bold mb-6 leading-tight">
                            Join Our Newsletter And Get $50 Discount For Your First Order
                        </h3>

                        <div className="relative mb-8">
                            <input
                                type="email"
                                placeholder="Your email address..."
                                className="w-full bg-transparent border border-gray-700 rounded-full py-3 px-6 text-sm outline-none focus:border-red-500 transition"
                            />
                            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                                <ArrowUpRight size={20} />
                            </button>
                        </div>

                        <div className="flex gap-3">
                            <SocialIcon icon={<Facebook size={18} />} />
                            <SocialIcon icon={<Instagram size={18} />} />
                            <SocialIcon icon={<Twitter size={18} />} />
                            <SocialIcon icon={<Music2 size={18} />} />
                            <SocialIcon icon={<Youtube size={18} />} />
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

// Sub-components for cleaner code
const FeatureItem = ({ icon, title, desc }) => (
    <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center flex-shrink-0">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-sm">{title}</h4>
            <p className="text-gray-400 text-xs mt-1">{desc}</p>
        </div>
    </div>
);

const FooterColumn = ({ title, links }) => (
    <div>
        <h3 className="text-lg font-bold mb-6">{title}</h3>
        <ul className="space-y-4 text-gray-400 text-sm">
            {links.map((link) => (
                <li key={link} className="hover:text-red-500 cursor-pointer transition">
                    {link}
                </li>
            ))}
        </ul>
    </div>
);

const SocialIcon = ({ icon }) => (
    <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white hover:border-red-500 cursor-pointer transition-all">
        {icon}
    </div>
);

export default Footer;