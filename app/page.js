import React from "react";
import Navbar from "./_components/Navbar";
import WordleGuess from "./_components/WordleGuess";

export default function Home() {
  return(
    <main>
      <Navbar />
      <WordleGuess />
    </main>
  );
}
