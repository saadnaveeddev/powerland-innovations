import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="font-display font-bold text-xl tracking-wide">
                PowerLand<span className="text-accent">House</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Powering industries with excellence. Your trusted partner for electrical equipment and industrial solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {['Transformers', 'Dynamo Motors', 'AC Generators', 'DC Generators', 'Custom Solutions'].map((item) => (
                <li key={item}>
                  <span className="text-primary-foreground/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">Industrial Zone, City</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">info@powerlandhouse.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 PowerLand House. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon rounded-full animate-pulse" />
            <span className="text-primary-foreground/50 text-sm">Powering Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
