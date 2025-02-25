"use client";

import { motion } from "framer-motion";

const LeaderMessageSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 mt-[-30px] lg:mt-[-20px]">
      {/* Titre de la section */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="font-bold text-center mb-8 text-[20px] md:text-[22px]"
      >
        Mot du Leader
      </motion.h2>

      <center>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8"
          style={{ height: '4px', backgroundColor: '#0d1f82', width: '20%', marginTop: -20 }}
        ></motion.div>
      </center>

      {/* Conteneur principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Zone photo */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <img
            src="/images/leader2.jpg"
            alt="Mot du Leader"
            className="w-full max-w-sm md:max-w-none rounded-lg shadow-xl"
          />
        </motion.div>

        {/* Zone texte */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-bold mb-4 text-[18px] md:text-[20px]">
            Bienvenue sur notre site web
          </h2>
          
          <h4 className="text-lg font-medium text-gray-600 mb-4">Révérend Valentin</h4>
          <p className="text-gray-700 leading-relaxed" style={{fontSize:15}}>
            Voici une description détaillée du message du leader. Cette zone peut contenir un texte long qui
            explique en profondeur le message que le leader souhaite partager avec la communauté. Tu peux
            ajouter plusieurs paragraphes, des citations, ou même des informations importantes pour inspirer
            et motiver l&apos;audience.
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia quo magnam impedit non maxime in corporis nulla dicta, et commodi est fugit animi debitis sapiente pariatur eum numquam iure!            
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia quo magnam impedit non maxime in corporis nulla dicta, et commodi est fugit animi debitis sapiente pariatur eum numquam iure!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LeaderMessageSection;
