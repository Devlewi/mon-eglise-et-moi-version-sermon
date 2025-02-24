/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css"; // Import des styles pour un design propre
import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

type PredictionType = {
  label: string;
  audio_file: string;
};

export default function Predications() {
  //const [predications, setpredications] = useState([]);
   
  const [predications, setpredications] = useState<PredictionType[]>([]);

   
  const [loading, setLoading] = useState(true);
   
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState(""); // État pour la recherche
  const [currentPage, setCurrentPage] = useState(1); // État pour la page courante
  const [totalPages, setTotalPages] = useState(1); // Total de pages pour la pagination
//  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioRef = useRef<AudioPlayer | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  //const token = localStorage.getItem("token");  // Vérification du token pour l'utilisateur
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Si l'utilisateur n'est pas connecté, on affiche un message d'erreur
  if (!token) {
    return (
      <div className=" flex items-center justify-center p-4 mt-[250px] sm:mt-[300px] lg:mt-[300px]">
        <div className="w-full max-w-3xl rounded-lg p-6">
        <div className="bg-red-500 text-white p-4 rounded text-center" style={{marginTop:-200}}>
        Non autorisé. Vous devez vous connecter pour accéder aux prédications.
  <br />
  
</div>
<p style={{color:'gray'}}>
<br />
Pour accéder aux prédictions et aux sermons, il est nécessaire d&apos;être membre de notre communauté. 
<br />
Nous vous invitons à prendre contact avec notre secrétariat pour toute information concernant l&apos;adhésion. En devenant membre, vous pourrez bénéficier d&apos;un accès exclusif à toutes les prédictions et à de nombreuses autres ressources spirituelles et communautaires. 
<br/><br/>
Pour vous inscrire ou pour plus de détails, veuillez contacter notre secrétariat au numéro suivant : 
  <strong>+225 07 88 14 90 44</strong>. Notre équipe se fera un plaisir de vous guider à travers le processus d&apos;inscription et de vous fournir toutes les informations nécessaires.
  <br />
  <br />
  Rejoignez-nous dès aujourd&apos;hui pour vivre cette expérience enrichissante avec notre communauté. Nous serions ravis de vous accueillir parmi nous !
  <br />
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione libero rem aliquam voluptate culpa cupiditate odio beatae numquam eius recusandae quae vel, quam delectus expedita iure doloremque debitis sequi.
  
  <br />
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione libero rem aliquam voluptate culpa cupiditate odio beatae numquam eius recusandae quae vel, quam delectus expedita iure doloremque debitis sequi.
  <br />
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione libero rem aliquam voluptate culpa cupiditate odio beatae numquam eius recusandae quae vel, quam delectus expedita iure doloremque debitis sequi.
  <br />
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ratione libero rem aliquam voluptate culpa cupiditate odio beatae numquam eius recusandae quae vel, quam delectus expedita iure doloremque debitis sequi.

</p>

        </div>
      </div>
    );
  }

  // Fonction de récupération des prédictions avec recherche et pagination
  const fetchpredications = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://tplvictoire.coach-lewi.com/api/predications?page=${currentPage}&search=${searchText}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.data) {
        setpredications(data.data);

        // Calcul du nombre total de pages
        const totalPages = Math.ceil(data.meta.total / data.meta.per_page);
        setTotalPages(totalPages);
      } else {
        setError(data.message || "Erreur lors de la récupération des prédictions");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError("Erreur serveur : " + error.message);
      } else {
        setError("Une erreur inconnue est survenue.");
      }
    } finally {
      setLoading(false);
    }
    
  };

  // Effect pour charger les prédictions au changement de page ou de recherche
   
  useEffect(() => {
    fetchpredications();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);  // Ajout de searchText dans le tableau de dépendances searchText

   
  useEffect(() => {
    if (!audioRef.current || audioContextRef.current) return; // Ajout de cette condition
  
    audioContextRef.current = new AudioContext();
    analyserRef.current = audioContextRef.current.createAnalyser();
  
    // Vérification que l'élément audio est bien un HTMLMediaElement
    if (audioRef.current instanceof HTMLMediaElement) {
      const source = audioContextRef.current.createMediaElementSource(audioRef.current);
      source.connect(analyserRef.current);
      analyserRef.current.connect(audioContextRef.current.destination);
    }
  }, [audioRef]); // Suppression de `audioRef.current`
  

  // Fonction pour changer de page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Fonction pour valider la recherche et la soumettre
  const handleSearchSubmit = () => {
    fetchpredications(); // Lancer la recherche au clic
  };

  // Fonction pour gérer l'entrée de recherche
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value); // Mettre à jour la valeur à chaque frappe
  };

  // Fonction pour gérer la soumission avec la touche Entrée
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-gray-500">Chargement des prédictions...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl rounded-lg p-6" style={{marginTop:70}}>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Prédications</h2>

        {error && <div className="bg-red-500 text-white p-2 rounded mb-4 text-center">{error}</div>}

        {/* Moteur de recherche */}
        <div className="mb-4 flex items-center">
  <input
    onChange={handleSearchChange}
    value={searchText}
    type="text"
    placeholder="Rechercher..."
    onKeyDown={handleKeyPress}
    className="w-full p-2 border border-gray-300 rounded"
  />
  <button 
    onClick={handleSearchSubmit} // Lancer la recherche au clic
    className="ml-2 text-gray-600 hover:text-gray-800"
  >
    <FaSearch style={{fontSize:40}}/>
  </button>
</div>

        {predications.length > 0 ? (
          <ul className="space-y-6">
            {predications.map((predication, index) => (
              <li key={index} className="p-4 bg-gray-50 rounded-lg shadow" style={{background:"#c9e7e4"}}>
                <h3 className="text-lg font-semibold text-gray-800">{predication.label}</h3>

                {/* Lecteur audio avec ref */}
                <div className="mt-2">
                  <AudioPlayer
                    ref={audioRef}
                    src={`https://tplvictoire.coach-lewi.com/${predication.audio_file}`}
                    showJumpControls={false}
                    layout="horizontal-reverse"
                    customAdditionalControls={[]} // Supprime les boutons inutiles
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">Aucune prédication disponible.</p>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1} // Désactive le bouton "Précédent" si on est sur la première page
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
          >
            Précédent
          </button>
          <span className="px-4 py-2">{`Page ${currentPage} sur ${totalPages}`}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages} // Désactive le bouton "Suivant" si on est sur la dernière page
            className="px-4 py-2 bg-gray-900 text-white rounded-lg disabled:bg-gray-300"
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  );
}
