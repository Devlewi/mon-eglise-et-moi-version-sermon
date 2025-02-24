"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Importer les icônes

export default function AuthForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validation des champs
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez remplir tous les champs.",
      });
      return;
    }

    const response = await fetch("https://tplvictoire.coach-lewi.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.token) {
      // Stocker le token dans le localStorage avant de rediriger
      localStorage.setItem("token", data.token);

      // Affichage du message de succès avec SweetAlert
      Swal.fire({
        icon: "success",
        title: "Connexion réussie",
        text: "Bienvenue, " + data.name,
        showConfirmButton: false,
        timer: 1500,
      });

      // Redirection vers la page des prédictions après un délai
      setTimeout(() => {
        router.push("/predications");
        //window.location.reload(); // Rafraîchir la page après la redirection
      }, 1500);
    } else {
      // Affichage du message d'erreur
      Swal.fire({
        icon: "error",
        title: "Erreur de connexion",
        text: data.message || "Echec de la connexion. Veuillez réessayer.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ marginTop: -100 }}>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Authentification</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <div className="absolute left-3 top-9 text-gray-400">
              <FaEnvelope style={{marginTop:10}}/>
            </div>
            <input
              type="email"
              id="email"
              className="w-full pl-10 pr-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700">Mot de passe</label>
            <div className="absolute left-3 top-9 text-gray-400">
              <FaLock  style={{marginTop:10}}/>
            </div>
            <input
              type="password"
              id="password"
              className="w-full pl-10 pr-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white font-bold rounded-lg focus:outline-none focus:ring-2"
            style={{ background: '#1e293c' }}
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
