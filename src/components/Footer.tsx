import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl mb-4">Campus PG</h3>
            <p className="text-gray-400 mb-4">
              Premium student accommodation with world-class facilities. Your comfort and safety are our top priorities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#rooms" className="hover:text-white transition-colors">Rooms</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0" />
                <span>Sector 15, Near Engineering College, University Road, City - 160001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="shrink-0" />
                <span>info@campuspg.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Campus PG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
