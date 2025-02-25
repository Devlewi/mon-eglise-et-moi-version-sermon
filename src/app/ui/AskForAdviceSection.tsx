"use client";
import { motion } from "framer-motion";
import { FaQuestionCircle } from "react-icons/fa";

const AskForAdviceSection = () => {
  return (
    <section className="relative py-20 px-6 flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/jeune-ho.jpg')" }}>
      
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-[#07193c] opacity-50"></div>

      {/* Conteneur de la carte avec animation d'apparition */}
      <motion.div 
        className="relative bg-white text-gray-800 max-w-3xl mx-auto p-8 rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 50 }}  // Animation initiale
        animate={{ opacity: 1, y: 0 }}   // Animation finale
        transition={{ duration: 0.8 }}   // Durée de l'animation
      >
        {/* Titre */}

        <h2 className="font-bold text-[#07193c] mb-2 text-[20px] md:text-[22px] flex items-center justify-center gap-2 text-center">
  <FaQuestionCircle className="animate-puls" /> Pasteur, j'ai une question !
</h2>



        {/* Sous-titre */}
        <p className="text-lg text-gray-600 mb-2 font-bold" style={{fontSize:15}}>
          Désormais Évitez les files d'attente ! <br/>
        </p>

        {/* Texte descriptif */}
        <p className="text-gray-700 mb-6" style={{fontSize:15}}>
          Posez vos questions et préoccupations directement au pasteur depuis votre espace.
          Plus besoin d'attendre après un service ! Déposez vos préoccupations en toute confidentialité
          et recevez une réponse personnalisée. Le pasteur vous répondra directement depuis votre espace.
        </p>

        {/* Bouton d'action avec animation de survol */}
        <motion.button
          className="bg-[#fb544c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all"
          whileHover={{ scale: 1.05 }}   // Animation au survol
          whileTap={{ scale: 0.95 }}    // Animation au clic
        >
          Poser votre question
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AskForAdviceSection;
