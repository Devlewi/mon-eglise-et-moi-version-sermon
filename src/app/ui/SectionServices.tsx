"use client";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const SectionServices = () => {
  const cards = [
    { image: "/images/annonces.avif", title: "Annonces" },
    { image: "/images/service.avif", title: "Programme" },
    { image: "/images/store.avif", title: "Librairie" },
    { image: "/images/calendrier.avif", title: "Événements" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 mt-[-30px] lg:mt-[-10px]">
      {/* Titre */}
      <h2 className="font-bold text-center mb-8 text-[20px] md:text-[22px]">Nos Services</h2>

      <center>
        <div className="mb-8" style={{ height: "4px", backgroundColor: "#0d1f82", width: "20%", marginTop: -20 }}></div>
      </center>

      {/* Cartes avec grille responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-1 place-items-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative w-[180px] h-[150px] md:w-[250px] md:h-[250px] shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Image hexagonale */}
            <div className="relative w-full h-full overflow-hidden" 
     style={{ 
       clipPath: "path('M0,100 C20,80 40,60 60,80 C80,100 100,60 120,40 C140,20 160,40 180,60 C200,80 220,100 240,80 C260,60 280,40 300,60 L300,300 L0,300 Z')"
     }}>
  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
</div>


            {/* Texte en superposition */}
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 text-center py-2 flex items-center justify-center gap-2">
  <h3 className="font-semibold text-gray-800 text-[14px] sm:text-[16px] flex items-center">
    {card.title} <FaDownload className="ml-1 text-[12px] sm:text-[14px]"/>
  </h3>
</div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionServices;
