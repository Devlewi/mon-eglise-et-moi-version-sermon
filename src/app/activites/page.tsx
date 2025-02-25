"use client";

const articles = [
  {
    id: 1,
    title: "Culte de Louange et Adoration",
    date: "12 Août 2024",
    description: "Rejoignez-nous pour un moment de louange exceptionnel avec notre chorale.",
    image: "/images/news1.jpg",
    category: "Culte",
    tags: ["Louange", "Adoration", "Église"],
  },
  {
    id: 2,
    title: "Conférence des Jeunes",
    date: "5 Septembre 2024",
    description: "Une journée spéciale dédiée aux jeunes avec des enseignements inspirants.",
    image: "/images/news2.jpg",
    category: "Jeunesse",
    tags: ["Conférence", "Jeunes", "Inspiration"],
  },
  {
    id: 3,
    title: "Mission d'Évangélisation",
    date: "20 Août 2024",
    description: "Participez à notre mission pour répandre la parole de Dieu dans la ville.",
    image: "/images/news3.jpg",
    category: "Mission",
    tags: ["Évangélisation", "Parole", "Mission"],
  },
  {
    id: 4,
    title: "Séminaire de Prière",
    date: "1 Octobre 2024",
    description: "Un temps fort de prière et d'enseignement avec nos pasteurs invités.",
    image: "/images/news4.jpg",
    category: "Prière",
    tags: ["Prière", "Séminaire", "Église"],
  },
  {
    id: 5,
    title: "Culte de Louange et Adoration",
    date: "12 Août 2024",
    description: "Rejoignez-nous pour un moment de louange exceptionnel avec notre chorale.",
    image: "/images/news1.jpg",
    category: "Culte",
    tags: ["Louange", "Adoration", "Église"],
  },
  {
    id: 6,
    title: "Conférence des Jeunes",
    date: "5 Septembre 2024",
    description: "Une journée spéciale dédiée aux jeunes avec des enseignements inspirants.",
    image: "/images/news2.jpg",
    category: "Jeunesse",
    tags: ["Conférence", "Jeunes", "Inspiration"],
  },
  {
    id: 7,
    title: "Mission d'Évangélisation",
    date: "20 Août 2024",
    description: "Participez à notre mission pour répandre la parole de Dieu dans la ville.",
    image: "/images/news3.jpg",
    category: "Mission",
    tags: ["Évangélisation", "Parole", "Mission"],
  },
  {
    id: 8,
    title: "Séminaire de Prière",
    date: "1 Octobre 2024",
    description: "Un temps fort de prière et d'enseignement avec nos pasteurs invités.",
    image: "/images/news4.jpg",
    category: "Prière",
    tags: ["Prière", "Séminaire", "Église"],
  },
  {
    id: 9,
    title: "Culte de Louange et Adoration",
    date: "12 Août 2024",
    description: "Rejoignez-nous pour un moment de louange exceptionnel avec notre chorale.",
    image: "/images/news1.jpg",
    category: "Culte",
    tags: ["Louange", "Adoration", "Église"],
  },
  {
    id: 10,
    title: "Conférence des Jeunes",
    date: "5 Septembre 2024",
    description: "Une journée spéciale dédiée aux jeunes avec des enseignements inspirants.",
    image: "/images/news2.jpg",
    category: "Jeunesse",
    tags: ["Conférence", "Jeunes", "Inspiration"],
  },
  {
    id: 11,
    title: "Mission d'Évangélisation",
    date: "20 Août 2024",
    description: "Participez à notre mission pour répandre la parole de Dieu dans la ville.",
    image: "/images/news3.jpg",
    category: "Mission",
    tags: ["Évangélisation", "Parole", "Mission"],
  },
  {
    id: 12,
    title: "Séminaire de Prière",
    date: "1 Octobre 2024",
    description: "Un temps fort de prière et d'enseignement avec nos pasteurs invités.",
    image: "/images/news4.jpg",
    category: "Prière",
    tags: ["Prière", "Séminaire", "Église"],
  },
  {
    id: 13,
    title: "Culte de Louange et Adoration",
    date: "12 Août 2024",
    description: "Rejoignez-nous pour un moment de louange exceptionnel avec notre chorale.",
    image: "/images/news1.jpg",
    category: "Culte",
    tags: ["Louange", "Adoration", "Église"],
  },
  {
    id: 14,
    title: "Conférence des Jeunes",
    date: "5 Septembre 2024",
    description: "Une journée spéciale dédiée aux jeunes avec des enseignements inspirants.",
    image: "/images/news2.jpg",
    category: "Jeunesse",
    tags: ["Conférence", "Jeunes", "Inspiration"],
  },
  {
    id: 15,
    title: "Mission d'Évangélisation",
    date: "20 Août 2024",
    description: "Participez à notre mission pour répandre la parole de Dieu dans la ville.",
    image: "/images/news3.jpg",
    category: "Mission",
    tags: ["Évangélisation", "Parole", "Mission"],
  },
  // Ajoutez d'autres articles si nécessaire
];


const LatestActivitiesSection = () => {
  return (
    <section className="py-16 px-6 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Zone de filtre à gauche */}
        <div className="lg:w-1/4 bg-white p-6 border border-gray-200 rounded-lg shadow-md" style={{ marginTop: 40, height: 280 }}>
          <h3 className="text-xl font-semibold mb-4" style={{ fontSize: 15 }}>
            Filtrer par
          </h3>
          <form>
            {/* Filtrage par date */}
            <div className="mb-6">
              <label htmlFor="filter-date" className="block text-sm font-medium text-gray-700">Date</label>
              <select id="filter-date" className="mt-2 p-2 w-full border rounded-lg" style={{ fontSize: 14 }}>
                <option value="">Choisir un critère</option>
                <option value="new-to-old">Du plus récent au plus ancien</option>
                <option value="old-to-new">Du plus ancien au plus récent</option>
              </select>
            </div>
            {/* Filtrage par catégorie */}
            <div className="mb-6">
              <label htmlFor="filter-category" className="block text-sm font-medium text-gray-700">Catégorie</label>
              <select id="filter-category" className="mt-2 p-2 w-full border rounded-lg" style={{ fontSize: 15 }}>
                <option value="">Choisir une catégorie</option>
                <option value="Culte">Culte</option>
                <option value="Jeunesse">Jeunesse</option>
                <option value="Mission">Mission</option>
              </select>
            </div>
          </form>
        </div>

        {/* Zone des produits à droite */}
        <div className="lg:w-3/4 flex flex-col lg:mt-10 mt-0">
          <h2 className="font-bold text-left mb-8 text-[20px] md:text-[22px]" style={{ color: "#07193c" }}>
            Activités de l'église
          </h2>
          <div className="mb-8" style={{ height: '4px', backgroundColor: '#07193c', width: '20%', marginTop: -20 }}></div>

          {/* Grille des articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-10 transition-all duration-300"
              >
                <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#07193c]">{article.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                  <p className="text-gray-700 text-sm">{article.description}</p>
                  {/* Label de catégorie */}
                  <div className="flex justify-between items-center">
  <div className="mt-2 px-2 py-1 text-sm font-medium text-white bg-[#fb544c] rounded-full inline-block">
    {article.category}
  </div>
  <button className="mt-4 text-[#fb544c] font-semibold hover:underline ml-auto">
    Tout lire →
  </button>
</div>

                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center space-x-4">
            <button className="bg-[#fb544c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">1</button>
            <button className="bg-[#fb544c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">2</button>
            <button className="bg-[#fb544c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">3</button>
            <button className="bg-[#fb544c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">4</button>
          </div>

          {/* Section des Tags */}
          <div className="mt-12 bg-[#07193c] text-white py-6 px-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-4">Tags</h4>
            <div className="flex flex-wrap gap-4">
              {articles[0].tags.map((tag, index) => (
                <span key={index} className="bg-[#fb544c] text-white text-sm font-medium px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestActivitiesSection;
