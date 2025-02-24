"use client";

const Section = () => {
  const cards = [
    {
      image: "/images/annonces.avif", // Assure-toi que l'image existe dans ton dossier public
      title: "Annonces",
    },
    {
      image: "/images/service.avif",
      title: "Programme",
    },
    {
      image: "/images/store.avif",
      title: "Librairie",
    },
    {
      image: "/images/calendrier.avif",
      title: "Evénéments",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 mt-[-30px] lg:mt-[-10px]">
      {/* Titre */}      
      <h2 className="font-bold text-center mb-8 text-[20px] md:text-[22px]">
        Nos Services
      </h2>

      <center>
        <div className="mb-8" style={{ height: '4px', backgroundColor: '#0d1f82', width: '20%', marginTop:-20 }}></div>
      </center>

      {/* Cartes avec Grille responsive */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
  {cards.map((card, index) => (
    <div key={index} className="relative rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all">
      {/* Image en arrière-plan */}
      <img 
  src={card.image} 
  alt={card.title} 
  className="w-[160px] h-[239px] object-cover sm:w-[200px] sm:h-[260px] md:w-full md:h-full" 
/>


      {/* Zone de texte en superposition */}
      <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-center py-2">
        <h3 className="font-semibold text-gray-800 text-[15px] sm:text-[16px] lg:text-[15px]">{card.title}</h3>
      </div>
    </div>
  ))}
</div>


      {/*
      <div className="mt-6 flex justify-center">
        <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
          Voir plus
        </button>
      </div>
      */}
    </div>
  );
};

export default Section;
