"use client";

import { FaSearch } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "Culte de Louange et Adoration",
    date: "12 Août 2024",
    description: "Rejoignez-nous pour un moment de louange exceptionnel avec notre chorale.",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    title: "Conférence des Jeunes",
    date: "5 Septembre 2024",
    description: "Une journée spéciale dédiée aux jeunes avec des enseignements inspirants.",
    image: "/images/news2.jpg",
  },
  {
    id: 3,
    title: "Mission d'Évangélisation",
    date: "20 Août 2024",
    description: "Participez à notre mission pour répandre la parole de Dieu dans la ville.",
    image: "/images/news3.jpg",
  },
  {
    id: 4,
    title: "Séminaire de Prière",
    date: "1 Octobre 2024",
    description: "Un temps fort de prière et d'enseignement avec nos pasteurs invités.",
    image: "/images/news4.jpg",
  },
  {
    id: 5,
    title: "Culte de Louange et Adoration",
    date: "12 Août 2024",
    description: "Rejoignez-nous pour un moment de louange exceptionnel avec notre chorale.",
    image: "/images/news1.jpg",
  },
  {
    id: 6,
    title: "Conférence des Jeunes",
    date: "5 Septembre 2024",
    description: "Une journée spéciale dédiée aux jeunes avec des enseignements inspirants.",
    image: "/images/news2.jpg",
  },
  {
    id: 7,
    title: "Mission d'Évangélisation",
    date: "20 Août 2024",
    description: "Participez à notre mission pour répandre la parole de Dieu dans la ville.",
    image: "/images/news3.jpg",
  },
  {
    id: 8,
    title: "Séminaire de Prière",
    date: "1 Octobre 2024",
    description: "Un temps fort de prière et d'enseignement avec nos pasteurs invités.",
    image: "/images/news4.jpg",
  },
  {
    id: 9,
    title: "Culte de Louange et Adoration",
    date: "12 Août 2024",
    description: "Rejoignez-nous pour un moment de louange exceptionnel avec notre chorale.",
    image: "/images/news1.jpg",
  },
  {
    id: 10,
    title: "Conférence des Jeunes",
    date: "5 Septembre 2024",
    description: "Une journée spéciale dédiée aux jeunes avec des enseignements inspirants.",
    image: "/images/news2.jpg",
  },
  {
    id: 11,
    title: "Mission d'Évangélisation",
    date: "20 Août 2024",
    description: "Participez à notre mission pour répandre la parole de Dieu dans la ville.",
    image: "/images/news3.jpg",
  },
  {
    id: 12,
    title: "Séminaire de Prière",
    date: "1 Octobre 2024",
    description: "Un temps fort de prière et d'enseignement avec nos pasteurs invités.",
    image: "/images/news4.jpg",
  },
  {
    id: 13,
    title: "Culte de Louange et Adoration",
    date: "12 Août 2024",
    description: "Rejoignez-nous pour un moment de louange exceptionnel avec notre chorale.",
    image: "/images/news1.jpg",
  },
  {
    id: 14,
    title: "Conférence des Jeunes",
    date: "5 Septembre 2024",
    description: "Une journée spéciale dédiée aux jeunes avec des enseignements inspirants.",
    image: "/images/news2.jpg",
  },
  {
    id: 15,
    title: "Mission d'Évangélisation",
    date: "20 Août 2024",
    description: "Participez à notre mission pour répandre la parole de Dieu dans la ville.",
    image: "/images/news3.jpg",
  },
  {
    id: 16,
    title: "Séminaire de Prière",
    date: "1 Octobre 2024",
    description: "Un temps fort de prière et d'enseignement avec nos pasteurs invités.",
    image: "/images/news4.jpg",
  },
  // Ajoutez le reste des articles ici
];

const LatestActivitiesSection = () => {
  return (
    <section className="py-16 px-6 bg-[#fff]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Titre principal */}
        <h2 className="font-bold text-center mb-8 text-[20px] md:text-[22px]" style={{ color: "#07193c", marginTop: 50 }}>
          Toutes Nos Activités
        </h2>

        <center>
          <div className="mb-8" style={{ height: "4px", backgroundColor: "#07193c", width: "20%", marginTop: -20 }}></div>
        </center>

        {/* Zone de recherche */}
        <div className="mb-12 flex justify-center">
  <div className="relative w-full max-w-md">
    <input
      type="text"
      placeholder="Rechercher par mot clé..."
      className="w-full p-3 rounded-md bg-white text-[#07193c] placeholder-gray-500 border-2 border-gray-300 shadow-lg focus:border-[#fb544c] focus:ring-2 focus:ring-[#fb544c] transition duration-300"
      style={{fontSize:15}}
    />
    <button className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#fb544c] hover:text-[#d93c3c] transition duration-300">
      <FaSearch style={{ fontSize: 24 }} />
    </button>
  </div>
</div>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#07193c]">{article.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                <p className="text-gray-700 text-sm">{article.description}</p>
                <button className="mt-4 text-[#fb544c] font-semibold hover:underline">
                  Tout lire →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination avec boutons */}
        <div className="mt-10 flex justify-center space-x-4">
          <button className="bg-[#fb544c] text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">
            1
          </button>
          <button className="bg-[#fb544c] text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">
            2
          </button>
          <button className="bg-[#fb544c] text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">
            3
          </button>
          <button className="bg-[#fb544c] text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">
            4
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestActivitiesSection;
