"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/home/nav";
import Pricing from "@/components/home/web-development/pricing";
import Projects from "@/components/home/web-development/projects";
import Faq from "@/components/home/web-development/faq";
import Footer from "@/components/home/footer";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   const checkLocation = async () => {
  //     try {
  //       const response = await fetch("https://ipapi.co/json/");
  //       const data = await response.json();

  //       if (data.country_code === "AR") {
  //         router.push("/ar");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching location:", error);
  //     }
  //   };

  //   checkLocation();
  // }, [router]);

  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="mt-12 lg:mt-24">
        <Pricing />
      </div>
      <Projects />
      <Faq />
      <Footer />
    </main>
  );
}
