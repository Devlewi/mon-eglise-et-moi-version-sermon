"use client"
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Pour les icônes sociales

export default function Footer() {
  return (
    <footer className=" text-white py-8" style={{background:"#03091a"}}>
      <div className="container mx-auto px-6">
        {/* Section avec les liens de navigation */}
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4">Mon Eglise et Moi</h3>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">Accueil</Link>
              </li>
              <li>
                <Link href="/predications" className="text-gray-400 hover:text-white">Prédications</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">À propos</Link>
              </li>
            </ul>
          </div>

          {/* Section avec les informations de contact */}
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Adresse : 123 Rue de l&apos;Église, Abidjan, Côte d&apos;Ivoire</p>
            <p className="text-gray-400">Email : contact@monéglise.com</p>
            <p className="text-gray-400">Téléphone : +225 01 23 45 67</p>
          </div>

          {/* Section avec les réseaux sociaux */}
          <div className="w-full sm:w-1/4 mb-6">
            <h3 className="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <FaFacebookF className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Section Copyright */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Mon Eglise et Moi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
