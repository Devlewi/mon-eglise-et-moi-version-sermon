import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Culte de Louange et Adoration",
    date: "12 Août 2024",
    description: "Rejoignez-nous pour un moment de louange exceptionnel avec notre chorale.",
    image: "/images/news1.jpg",
    category: "Culte",
  },
  {
    id: 2,
    title: "Conférence des Jeunes",
    date: "5 Septembre 2024",
    description: "Une journée spéciale dédiée aux jeunes avec des enseignements inspirants.",
    image: "/images/news2.jpg",
    category: "Jeunesse",
  },
  {
    id: 3,
    title: "Mission d'Évangélisation",
    date: "20 Août 2024",
    description: "Participez à notre mission pour répandre la parole de Dieu dans la ville.",
    image: "/images/news3.jpg",
    category: "Mission",
  },
  {
    id: 4,
    title: "Séminaire de Prière",
    date: "1 Octobre 2024",
    description: "Un temps fort de prière et d'enseignement avec nos pasteurs invités.",
    image: "/images/news4.jpg",
    category: "Prière",
  },
  {
    id: 5,
    title: "Culte de Louange et Adoration",
    date: "12 Août 2024",
    description: "Rejoignez-nous pour un moment de louange exceptionnel avec notre chorale.",
    image: "/images/news1.jpg",
    category: "Culte",
  },
  {
    id: 6,
    title: "Conférence des Jeunes",
    date: "5 Septembre 2024",
    description: "Une journée spéciale dédiée aux jeunes avec des enseignements inspirants.",
    image: "/images/news2.jpg",
    category: "Jeunesse",
  },
  {
    id: 7,
    title: "Mission d'Évangélisation",
    date: "20 Août 2024",
    description: "Participez à notre mission pour répandre la parole de Dieu dans la ville.",
    image: "/images/news3.jpg",
    category: "Mission",
  },
  {
    id: 8,
    title: "Séminaire de Prière",
    date: "1 Octobre 2024",
    description: "Un temps fort de prière et d'enseignement avec nos pasteurs invités.",
    image: "/images/news4.jpg",
    category: "Prière",
  },
];

const LatestArticlesSection = () => {
  return (
    <section className="py-16 px-6 bg-[#07193c]">
      <div className="max-w-7xl mx-auto text-center">
        {/* Titre principal */}
        <h2 className="font-bold text-center mb-8 text-[20px] md:text-[22px]" style={{ color: "white" }}>
          Nos Dernières Activités
        </h2>
        <center>
          <div className="mb-8" style={{ height: "4px", backgroundColor: "#fff", width: "20%", marginTop: -20 }}></div>
        </center>

        {/* Grille des articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                {/* Titre et catégorie */}
                <h3 className="text-lg font-semibold text-[#07193c]">{article.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                
                {/* Catégorie et bouton Tout lire */}
                <div className="flex justify-between items-center">
                  <div className="px-2 py-1 text-sm font-medium text-white bg-[#fb544c] rounded-full">
                    {article.category}
                  </div>
                  <button className="text-[#fb544c] font-semibold hover:underline ml-auto">
                    Tout lire →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Voir Plus */}
        <div className="mt-10">
          <Link href={"/activites"}>
            <button className="bg-[#fb544c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">
              Voir plus d'activités
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticlesSection;
