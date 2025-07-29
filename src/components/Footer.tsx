
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/bitnbytesol-logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="bitNbytesol" className="h-8 w-8" />
              <span className="text-xl font-bold font-poppins">bitNbytesol</span>
            </Link>
            <p className="text-white/80 mb-4 max-w-md">
              Building future-ready technology solutions for modern businesses. 
              From IT infrastructure to AI automation and data analytics, we deliver 
              excellence in every project.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@bitnbytesol.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 text-accent" />
                <span className="text-white/80 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-1 text-accent" />
                <span className="text-white/80 text-sm">hello@bitnbytesol.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-accent" />
                <span className="text-white/80 text-sm">
                  123 Tech Street<br />
                  Innovation District, CA 94101
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 bitNbytesol. All rights reserved. Built for the future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
