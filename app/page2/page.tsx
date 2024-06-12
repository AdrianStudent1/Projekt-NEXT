import Image from 'next/image';
import React from "react";
import Link from "next/link";

export default function Page2() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl
  text-red-700">Witaj na drugiej stronie!</h1>
  <p className="text-xl
  text-cyan-400">Społeczna Akademia Nauk w Łodzi, skrót SAN (dawniej Społeczna Wyższa Szkoła Przedsiębiorczości i Zarządzania) – 
  uczelnia niepubliczna, funkcjonująca na podstawie decyzji Ministra Edukacji Narodowej z dnia 19 grudnia 1994 r. Nr DNS 3-0145/TBM/362/94 (wraz z późniejszymi zmianami).</p>

<p className="text-xl
  text-cyan-400">Organem założycielskim uczelni jest Stowarzyszenie Oświatowców Polskich. Oba podmioty są też ze sobą powiązane personalnie: rektorem szkoły jest prezes stowarzyszenia, dr hab. Roman Patora. Uczelnia ma charakter szkoły społecznej i działa na zasadzie instytucji non-profit.
  Warszawski oddział Społecznej Akademii Nauk w Łodzi i apartamentowiec Łucka City
  
  W 2000 roku Społeczna Wyższa Szkoła Przedsiębiorczości i Zarządzania, jako pierwsza uczelnia niepubliczna w Łodzi, otrzymała pełne uprawnienia magisterskie, a od 2006 także uprawnienia do nadawania tytułu doktora nauk ekonomicznych. W 2004 szkoła uzyskała pozytywną ocenę Państwowej Komisji Akredytacyjnej na wizytowanych kierunkach i została uhonorowana Medalem Europejskim (odznaczenie przyznane ponownie w 2006). W 2007 roku uczelnia otrzymała tytuł Lidera Polskiego Biznesu Business Centre Club. Do szkoły należy łącznie około 20 budynków o różnym przeznaczeniu, o łącznej powierzchni ponad 35 tys. m.kw. Budynki zlokalizowane są w centrum Łodzi oraz w innych miastach, gdzie znajdują się filie SAN.
  </p>
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Spo%C5%82eczna_Akademia_Nauk.jpg"
    alt="Budynek SAN w Łodzi"
    width={512}
    height={340}
  />
  <div className="przycisk">
      <Link href="/">
      <button className="bg-fuchsia-300 hover:bg-teal-300 text-4xl">Powrót na strone główną
      </button>
      </Link>
      </div>
  </main>
  );
}