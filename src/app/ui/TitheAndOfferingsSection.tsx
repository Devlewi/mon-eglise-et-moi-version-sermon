const TitheAndOfferingsSection = () => {
  const methods = [
    {
      id: 1,
      name: "Orange Money",
      logo: "/images/logo_orange.png",
      description: "Par Orange Money au #144# Option 4 puis 3 et le code 0408",
    },
    {
      id: 2,
      name: "MTN Mobile Money",
      logo: "/images/logo_mtn.png",
      description: "Par MTN Mobile Money au +225 05 64 87 08 16",
    },
    {
      id: 3,
      name: "Moov Money",
      logo: "/images/logo_moov.png",
      description: "Par Moov Money au +225 01 40 54 19 19",
    },
  ];

  return (
    <section className="py-16 px-6 text-center bg-white">
      {/* Titre principal */}
      <h2 className="font-bold text-[22px] text-black mb-4">Dîmes et Offrandes</h2>
      <center>
        <div className="mb-8" style={{ height: "4px", backgroundColor: "#0d1f82", width: "20%", marginTop: 0 }}></div>
      </center>

      <p className="mb-10 text-[15px] text-black">
        Vous pouvez également apporter vos dîmes et offrandes via les options suivantes :
      </p>

      {/* Grille des méthodes de paiement */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {methods.map((method) => (
          <div key={method.id} className="text-black flex flex-col items-center">
            {/* Cercle contenant l’icône */}
            <div className="w-24 h-24 bg-[#07193c] flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <img src={method.logo} alt={method.name} className="w-16 h-16" />
            </div>
            {/* Texte sous l'icône */}
            <h3 className="text-lg font-semibold mt-4">{method.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{method.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TitheAndOfferingsSection;
