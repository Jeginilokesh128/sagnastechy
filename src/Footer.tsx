import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

interface FooterProps {
  logoSrc: string;
  logoAlt: string;
  companyName: string;
  slogan: string;
  address: string;
  email: string;
  phone: string;
  socialLinks: { href: string; icon: string }[];
}

const ContactInfo: React.FC<FooterProps> = ({
  logoSrc,
  logoAlt,
  companyName,
  address,
  email,
  phone,
  socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebookF /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
  ],
}) => {
  return (
    <footer className="bg-[#141f40] text-white pt-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Contact */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <img src={logoSrc} alt={logoAlt} className="h-12 w-auto" />
          </div>
          <ul className="space-y-2 text-sm text-gray-200 list-disc list-inside">
            <li>📍 {address}</li>
            <li>
              📧{" "}
              <a href={`mailto:${email}`} className="hover:text-blue-400">
                {email}
              </a>
            </li>
            <li>
              📞{" "}
              <a href={`tel:${phone}`} className="hover:text-blue-400">
                {phone}
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-xl font-semibold">Newsletter</h3>
          <p className="text-sm text-gray-300 text-center">
            Stay updated with our latest news
          </p>
          <div className="flex w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 p-2 rounded-l-md text-gray-900 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition">
              → Subscribe
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center space-y-3">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <p className="text-sm text-gray-300">Let us be social</p>
          <div className="flex space-x-4 text-2xl">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition  w-[16px] justify-center"
                dangerouslySetInnerHTML={{ __html: link.icon }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700  text-center text-gray-400 text-sm h-10 flex items-center justify-center">
        &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
      </div>
    </footer>
  );
};

export default ContactInfo;
