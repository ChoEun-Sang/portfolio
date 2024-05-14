"use client";
import { useRef } from "react";
import Intro from "@/components/Template/Intro";
import Footer from "@/components/Common/Footer";
import Haeder from "@/components/Common/Haeder";
import Education from "@/components/Template/Education";
import FoodieLog from "@/components/Template/FoodieLog";
import Officener from "@/components/Template/Officener";
import SweetHome from "@/components/Template/SweetHome";

export default function Home() {
  const section = useRef<HTMLDivElement>(null);

  const scrollTo = () => {
    if (section.current) {
      section.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="flex flex-col items-center">
      <Haeder />
      <div>
        <Intro scrollTo={scrollTo} />
      </div>

      <div ref={section}>
        <FoodieLog />
      </div>

      <Officener />

      <SweetHome />

      <Education />

      <Footer />
    </main>
  );
}
