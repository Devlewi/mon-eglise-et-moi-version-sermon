const JoinDepartmentSection = () => {
  return (
    <section className="relative py-20 px-6 flex flex-col items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/jeune-ho.jpg')" }}>
      
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-[#07193c] opacity-80"></div>

      {/* Conteneur de la carte  transition transform hover:scale-105*/}
      <div className="relative bg-white text-gray-800 max-w-3xl mx-auto p-8 rounded-2xl shadow-2xl">
        {/* Titre */}
        <h2 className="font-bold text-[#07193c] mb-2 text-[20px] md:text-[22px]">Besoin de Conseil ?</h2>

        {/* Sous-titre */}
        <p className="text-lg text-gray-600 mb-2 font-bold" style={{fontSize:15}}>
        Désormais Évitez les files d'attente ! <br/>
        </p>

        {/* Texte descriptif */}
        <p className="text-gray-700 mb-6">
        Posez vos questions et préoccupations directement au pasteur depuis votre espace.
        Plus besoin d'attendre après un service ! Déposez vos préoccupations en toute confidentialité
          et recevez une réponse personnalisée. Le pasteur vous répondra directement depuis votre espace.

        </p>

        {/* Bouton d'action */}
        <button className="bg-[#fb544c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">
          Poser votre question
        </button>
      </div>
    </section>
  );
};

export default JoinDepartmentSection;
