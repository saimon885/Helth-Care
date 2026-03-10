import Logo from "@/Components/Links/Logo";
import React from "react";
import {
  FaFacebook,
 
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="footer container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <aside className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed">
            HomeCare is your trusted partner for professional home services. We
            provide expert solutions to maintain and improve your living space
            with reliability and care.
          </p>
          <div className="flex gap-4 mt-2">
            <a className="link link-hover hover:text-primary transition-colors cursor-pointer">
              <FaFacebook size={20} />
            </a>
            <a className="link link-hover hover:text-primary transition-colors cursor-pointer">
              <FaGithub size={20}></FaGithub>
              
            </a>
            <a className="link link-hover hover:text-primary transition-colors cursor-pointer">
              <FaInstagram size={20} />
            </a>
            <a className="link link-hover hover:text-primary transition-colors cursor-pointer">
              <FaLinkedin size={20} />
            </a>
          </div>
        </aside>

        <nav>
          <h6 className="footer-title opacity-100 font-bold text-primary">
            Our Services
          </h6>
          <a className="link link-hover mb-1">Baby Care</a>
          <a className="link link-hover mb-1">Elderly Care</a>
          <a className="link link-hover mb-1">Sick People Care</a>
          <a className="link link-hover mb-1">Special Needs Care</a>
          <a className="link link-hover mb-1">Night Care Service</a>
        </nav>

        <nav>
          <h6 className="footer-title opacity-100 font-bold text-primary">
            Company
          </h6>
          <a className="link link-hover mb-1">About Us</a>
          <a className="link link-hover mb-1">Contact Support</a>
          <a className="link link-hover mb-1">Careers</a>
          <a className="link link-hover mb-1">Our Partners</a>
          <a className="link link-hover mb-1">Service Areas</a>
        </nav>

        <nav>
          <h6 className="footer-title opacity-100 font-bold text-primary">
            Support & Legal
          </h6>
          <a className="link link-hover mb-1">Help Center</a>
          <a className="link link-hover mb-1">Terms of Service</a>
          <a className="link link-hover mb-1">Privacy Policy</a>
          <a className="link link-hover mb-1">Refund Policy</a>
          <a className="link link-hover mb-1">Cookie Policy</a>
        </nav>
      </div>

      <div className="border-t border-base-300 bg-base-300/50">
        <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>
            © {new Date().getFullYear()} HomeCare Industries Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <span>Built for Comfort</span>
            <span>Reliable Care</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
