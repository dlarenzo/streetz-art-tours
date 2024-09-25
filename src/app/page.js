"use client";
import StreetArtzTours from "../components/StreetArtzTours";
import FourSquare from "../components/FourSquare";
import Image from "next/image";
import Link from "next/link";
import FourImageSection from "../components/FourImageSection";
import Inspiration from "../components/Inspiration";
import WordOfMouth from "../components/WordOfMouth";
import Footer from "../components/Footer";

export default function Home() {
  return (
    // ! CREATE LOGIN POSSIBILITY, CREATE LIBRARY, USER ABLE TO LOGIN AND ADD TO LIBRARY

    <main className="flex min-h-screen flex-col items-center justify-between bg-[#fdfefe]">
      {/* 4 SQUARE */}
      <FourSquare />

      {/* # STREET ARTZ TOURS */}
      <StreetArtzTours />

      {/* # 4 IMAGE SECTiON */}
      <FourImageSection />

      {/* INSPIRATION SECTION */}
      <Inspiration />

      {/* WORD OF MOUTH */}
      <WordOfMouth />

      {/* # FOOTER DON'T MISS OUT */}
      <Footer />
    </main>
  );
}
