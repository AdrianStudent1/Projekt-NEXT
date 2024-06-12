import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1
        className="text-6xl
        text-cyan-400">
          Adrian Krzywokulski
      </h1>
      <p
      className="text-xl
      text-teal-600
      font-bold">
        Nr albunu: 119766
      </p>
      <div className="przycisk">
      <Link href="/page2">
      <button className="bg-fuchsia-300 hover:bg-teal-300 text-4xl">Przejdź na kolejną stronę
      </button>
      </Link>
      </div>
    </main>
  );
}
