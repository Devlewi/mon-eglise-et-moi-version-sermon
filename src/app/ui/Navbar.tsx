"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBible, FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [tokenStatus, setTokenStatus] = useState<string>("supprimé");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    // Supprimer le token du localStorage
    localStorage.removeItem("token");

      // Redirection vers la page des prédictions après un délai
      setTimeout(() => {
        router.push("/");
        //window.location.reload(); // Rafraîchir la page après la redirection
      }, 1500);

  };

  // Navigation items array
  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Activités", href: "/activites" },
    { name: "Boutique", href: "/boutique" },
    { name: "Galerie Photos", href: "/" },
    { name: "Nous Contacter", href: "/" },
    //{ name: "Prédications", href: "/predications" },
  ];

  // 1er useEffect : Vérifie et met à jour l'état du token au chargement initial et ajoute un écouteur d'événement
  useEffect(() => {
    // Vérifie l'état initial du token au chargement du composant
    const checkTokenStatus = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setTokenStatus("existe");
      } else {
        setTokenStatus("supprimé");
      }
    };

    checkTokenStatus();

    // Écouter les changements dans localStorage pour suivre l'ajout ou suppression du token
    const syncTokenState = (event: StorageEvent) => {
      if (event.key === "token") {
        checkTokenStatus(); // Vérifie à nouveau l'état du token lorsque localStorage est modifié
      }
    };

    window.addEventListener("storage", syncTokenState);

    return () => {
      window.removeEventListener("storage", syncTokenState);
    };
  }, []); // Ce useEffect ne s'exécute qu'une seule fois, lors du premier rendu du composant

  // 2e useEffect : Surveillance directe de l'état du token dans le localStorage
  useEffect(() => {
    // Fonction pour surveiller le token dans localStorage
    const handleTokenChange = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setTokenStatus("existe");
      } else {
        setTokenStatus("supprimé");
      }
    };

    // Appeler la fonction de surveillance immédiatement après le rendu
    handleTokenChange();

    // Retourner une fonction de nettoyage qui s'exécute chaque fois que l'état change
    const interval = setInterval(handleTokenChange, 1000); // Surveillance du token toutes les 1 seconde (optionnel, vous pouvez ajuster)

    return () => clearInterval(interval); // Nettoyage de l'intervalle lorsqu'on quitte le composant
  }, [tokenStatus]); // Ce useEffect s'exécute chaque fois que l'état du token change

  //  
  //fixed top-0 left-0 w-full bg-white shadow-lg z-50
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 block w-full max-w-screen px-4 py-4 mx-auto bg-white bg-opacity-90  shadow lg:px-8 backdrop-blur-lg  backdrop-saturate-150 z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 text-gray-900 font-bold text-1xl flex items-center"
            style={{ fontSize: 17 }}
          >
            <FaBible className="mr-2 text-xl"/>
            EEADCI
          </Link>

          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b pb-4">
            <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 text-gray-900 font-bold text-1xl flex items-center mt-2"
            style={{ fontSize: 17 }}
          >
            <FaBible className="ml-2 mr-2 text-xl"/>
            EEADCI
          </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-slate-600 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-red-500"
                >
                  <Link href={item.href} className="flex items-center" style={{fontWeight:700, fontSize:14}}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
  {tokenStatus === "existe" ? (
    <button
    onClick={handleLogout}
    className="hover:bg-red-500 text-white px-3 py-2 rounded-md  flex items-center"
    style={{ background: "#07193c", fontWeight: 800 }}
  >
    <FaSignOutAlt className="mr-2"/>
    Déconnexion
  </button>
  ) : (
    <Link href="/connexion">
      <button
                      className="hover:bg-red-500 text-white px-8 py-2 rounded-md flex items-center"
                      style={{ background: "#07193c", fontWeight: 800 , fontSize:14}}
                    >
                    <FaUserAlt  className="mr-2" />
                      Espace Membre
                    </button>
    </Link>
  )}
</li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-1 text-lg gap-x-2 text-slate-60"
                >
                  <Link href={item.href} className="flex items-center" style={{ fontSize: 15, fontWeight: 700 }}>
                    {item.name}
                  </Link>
                </li>
              ))}

              <li>
                {tokenStatus === "existe" ? (
                  <button
                    onClick={handleLogout}
                    className="hover:bg-red-500 text-white px-3 py-2 rounded-md  flex items-center"
                    style={{ background: "#07193c", fontWeight: 800, fontSize:16 }}
                  >
                    <FaSignOutAlt className="mr-2"/>
                    Déconnexion
                  </button>
                ) : (
                  <Link href="/connexion">
                    <button
                      className="hover:bg-red-500 text-white px-8 py-2 rounded-md flex items-center"
                      style={{ background: "#07193c", fontWeight: 800, fontSize:16 }}
                    >
                    <FaUserAlt  className="mr-2" />
                    Espace Membre
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
