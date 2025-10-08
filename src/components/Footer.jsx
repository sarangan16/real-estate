import React from "react";
import { assets } from "../assets/assets";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-400 pt-16 pb-8 px-6 md:px-20 lg:px-32 w-full"
      id="Footer"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col h-full justify-between">
          <h3 className="text-white text-lg font-semibold mb-4">
            GoldStack Gmbh
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Goldstack Construction steht für Qualität, Zuverlässigkeit und
            moderne Architektur – seit über einem Jahrzehnt in attraktiven Lagen
            aktiv.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Schnellzugriff
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#About" className="hover:text-white transition">
                Über uns
              </a>
            </li>
            <li>
              <a href="#Projects" className="hover:text-white transition">
                Projekte
              </a>
            </li>
            <li>
              <a href="#Testimonial" className="hover:text-white transition">
                Referenzen
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white transition">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Kontakt</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-blue-400" />
              <span>Musterstraße 123, 10115 Berlin</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-blue-400" />
              <span>+49 30 123456</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-blue-400" />
              <span>info@goldstack.de</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Erhalten Sie aktuelle Informationen zu neuen Projekten und
            Angeboten.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="p-3 rounded-lg bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none flex-1"
            />
            <button className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition">
              Anmelden
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2025 Goldstack Construction. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

export default Footer;
