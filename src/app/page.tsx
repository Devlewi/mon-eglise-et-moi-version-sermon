// pages/index.js
"use client";

import Link from "next/link";
import CardSlider from "./ui/CardSlider";
import LeaderMessageSection from "./ui/LeaderMessageSection";
import Section from "./ui/Section";


export default function Home() {
  return (
    <>
    <CardSlider/>

    <Section />

    <LeaderMessageSection/>

      {/* Bouton Voir Plus */}
      <div className="mt-0 flex justify-center">
        <Link href={'/predications'}>
        <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition" style={{fontWeight:700}}>
          Ecouter Nos sermons
        </button>
        </Link>
      </div>
      <br/><br/>
    </>
  );
}
