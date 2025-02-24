import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Import de l'effet fade

const images = [
  "/images/slide5.png",
  "/images/slide4.png",
  "/images/slide3.png",
  "/images/slide2.png",
  "/images/slide1.png",
  "/images/slide6.png",
];

const BigSlider = () => {
  return (
    <div className="relative flex justify-center items-center" style={{ marginTop: 50 }}>
      <Swiper
        spaceBetween={0} // Pas d'espace pour un effet fluide
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Défilement automatique plus doux
        effect="fade" // Active l'effet de fondu
        fadeEffect={{ crossFade: true }} // Adoucit encore plus l'effet
        speed={1000} // Augmente la durée de transition
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        className="w-full h-[238px] lg:h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center relative">
            {/* Image avec effet de zoom progressif */}
            <div className="w-full h-full overflow-hidden">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transform scale-100 transition-all duration-1000 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 flex flex-col items-center justify-center text-white">
              {/* Titre */}
              <h2 className="text-[19px] sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
                Vos Prédications Avec Vous !
              </h2>

              {/* Description */}
              <p className="text-base sm:text-xl mb-4">Everywhere you go !</p>

              {/* Bouton */}
              <button className="bg-blue-500 px-6 py-2 rounded-full text-white hover:bg-blue-400 transition">
                En savoir plus
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Flèche gauche */}
      <button className="custom-prev absolute left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white shadow-lg rounded-full hover:bg-gray-200 transition">
        ◀
      </button>

      {/* Flèche droite */}
      <button className="custom-next absolute right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white shadow-lg rounded-full hover:bg-gray-200 transition">
        ▶
      </button>
    </div>
  );
};

export default BigSlider;
