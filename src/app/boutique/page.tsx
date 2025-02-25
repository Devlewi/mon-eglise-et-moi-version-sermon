"use client";

import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "La Bible - Version Francaise",
    price: "15 000 CFA",
    image: "/images/product1.jpg",
    dateAdded: "2025-01-15",
  },
  {
    id: 2,
    name: "Chants de louange chrétienne",
    price: "10 000 CFA",
    image: "/images/product2.jpg",
    dateAdded: "2024-12-01",
  },
  {
    id: 3,
    name: "Les enseignements de Jésus",
    price: "25 000 CFA",
    image: "/images/product3.jpg",
    dateAdded: "2024-11-20",
  },
  {
    id: 4,
    name: "Carnet de prières quotidien",
    price: "8 000 CFA",
    image: "/images/product4.jpg",
    dateAdded: "2024-10-05",
  },
  {
    id: 5,
    name: "T-shirt chrétien - Jésus t'aime",
    price: "12 000 CFA",
    image: "/images/product1.jpg",
    dateAdded: "2024-09-30",
  },
  {
    id: 6,
    name: "Calendrier de prières chrétiennes",
    price: "5 000 CFA",
    image: "/images/product2.jpg",
    dateAdded: "2024-08-10",
  },
  {
    id: 7,
    name: "Le chrétien et la prière",
    price: "18 000 CFA",
    image: "/images/product3.jpg",
    dateAdded: "2024-07-25",
  },
  {
    id: 8,
    name: "Bracelet chrétien - Foi, Espoir, Amour",
    price: "3 500 CFA",
    image: "/images/product4.jpg",
    dateAdded: "2024-06-15",
  },
  {
    id: 9,
    name: "La vie de Saint Paul",
    price: "20 000 CFA",
    image: "/images/product1.jpg",
    dateAdded: "2024-05-05",
  },
  {
    id: 10,
    name: "Livre de méditations bibliques",
    price: "22 000 CFA",
    image: "/images/product2.jpg",
    dateAdded: "2024-04-18",
  },
  {
    id: 11,
    name: "Dictionnaire des termes bibliques",
    price: "30 000 CFA",
    image: "/images/product3.jpg",
    dateAdded: "2024-03-30",
  },
  {
    id: 12,
    name: "Pochette de prière - Versets inspirants",
    price: "10 000 CFA",
    image: "/images/product4.jpg",
    dateAdded: "2024-02-20",
  }
];

const ShopPage = () => {
  return (
    <section className="py-16 px-6 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Zone de filtre à gauche */}
        <div className="lg:w-1/4 bg-white p-6 border border-gray-200 rounded-lg shadow-md"  style={{marginTop:40, height:400}}>
          <h3 className="text-xl font-semibold mb-4" style={{fontSize:15}}>Filtrer par</h3>
          <form>
            {/* Filtrage par prix */}
            <div className="mb-6">
              <label htmlFor="filter-price" className="block text-sm font-medium text-gray-700" style={{fontSize:14}}>Prix</label>
              <select id="filter-price" className="mt-2 p-2 w-full border rounded-lg" style={{fontSize:14}}>
                <option value="">Choisir un prix</option>
                <option value="low-to-high">Du moins cher au plus cher</option>
                <option value="high-to-low">Du plus cher au moins cher</option>
              </select>
            </div>

            {/* Filtrage par date */}
            <div className="mb-6">
              <label htmlFor="filter-date" className="block text-sm font-medium text-gray-700">Date</label>
              <select id="filter-date" className="mt-2 p-2 w-full border rounded-lg" style={{fontSize:14}}>
                <option value="">Choisir un critère</option>
                <option value="new-to-old">Du plus récent au plus ancien</option>
                <option value="old-to-new">Du plus ancien au plus récent</option>
              </select>
            </div>
            {/* Filtrage par date */}
            <div className="mb-6">
              <label htmlFor="filter-date" className="block text-sm font-medium text-gray-700">Catégorie</label>
              <select id="filter-date" className="mt-2 p-2 w-full border rounded-lg" style={{fontSize:15}}>
                <option value="">Choisir une catégorie</option>
                <option value="new-to-old">Du plus récent au plus ancien</option>
                <option value="old-to-new">Du plus ancien au plus récent</option>
              </select>
            </div>


          </form>
        </div>

        {/* Zone des produits à droite */}
        <div className="lg:w-3/4 flex flex-col lg:mt-10 mt-0">
          <h2 className="font-bold text-left mb-8 text-[20px] md:text-[22px]" style={{ color: "#07193c" }}>
            Boutique de l'église
          </h2>


            <div className="mb-8" style={{ height: '4px', backgroundColor: '#07193c', width: '20%', marginTop: -20 }}></div>


          {/* Grille des produits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <center>
                <img src={product.image} alt={product.name} className="mt-5" />
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#07193c]" style={{fontSize:15}}>{product.name}</h3>
                  <p className="text-xl text-[#fb544c] mb-2" style={{fontSize:15}}>{product.price}</p>
                  <button className="mt-0 text-[#fb544c] font-semibold py-2 px-4 border-2 border-[#fb544c] rounded-lg bg-[#fb544c] text-white transition-all" style={{fontSize:15}}>
                    Ajouter au panier <FaShoppingCart className="inline ml-2" />
                  </button>
                </div>
                </center>
                
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center space-x-4">
            <button className="bg-[#fb544c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">
              1
            </button>
            <button className="bg-[#fb544c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">
              2
            </button>
            <button className="bg-[#fb544c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">
              3
            </button>
            <button className="bg-[#fb544c] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#e14b43] transition-all">
              4
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
