"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/home/nav";
import HeroSection from "@/components/marketing/hero-section";
import Services from "@/components/marketing/services";
import CallToAction from "@/components/marketing/call-to-action";
import Faq from "@/components/marketing/faq";
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
      <HeroSection />
      <Services />
      <CallToAction />
      <Faq />
      <Footer />
    </main>
  );
}
