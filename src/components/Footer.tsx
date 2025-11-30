import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary">NH</span>
              </div>
              <div className="font-display font-bold text-lg">
                New Horizon Academy
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Empowering the next generation of leaders through excellence in education,
              innovation, and character development.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary/10 hover:bg-secondary/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/campus-life" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link to="/portal" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Parent Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Academics</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/academics" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Primary School
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Secondary School
                </Link>
              </li>
              <li>
                <Link to="/vr-tour" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Virtual Tour
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  15 Academic Drive, Rayfield,
                  <br />
                  Jos, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+2341234567890"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@newhorizonacademy.ng"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  info@newhorizonacademy.ng
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} New Horizon Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
