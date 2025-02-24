"use client";

const LeaderMessageSection = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 mt-[-50px] lg:mt-[-40px]">
      {/* Titre de la section */}
      <h2 className="font-bold text-center mb-8 text-[20px] md:text-[22px]">
      Mot du Leader
      </h2>
<center>
<div className="mb-8" style={{ height: '4px', backgroundColor: '#0d1f82', width: '20%', marginTop:-20 }}></div>
</center>


      {/* Conteneur principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
        {/* Zone photo */}
        <div className="flex justify-center items-center">
          <img
            src="/images/leader.png" // Remplace cette URL par la photo du leader
            alt="Mot du Leader"
            className="w-full max-w-sm md:max-w-none rounded-lg shadow-xl"
          />
        </div>

        {/* Zone texte */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{fontSize:17}}>Bienvenue sur notre site web</h3>
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
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia quo magnam impedit non maxime in corporis nulla dicta, et commodi est fugit animi debitis sapiente pariatur eum numquam iure!
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia quo magnam impedit non maxime in corporis nulla dicta, et commodi est fugit animi debitis sapiente pariatur eum numquam iure!
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quia quo magnam impedit non maxime in corporis nulla dicta, et commodi est fugit animi debitis sapiente pariatur eum numquam iure!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaderMessageSection;
