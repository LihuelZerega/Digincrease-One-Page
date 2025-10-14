"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/home/nav";
import HeroSection from "@/components/automations/hero-section";
import SuccessStories from "@/components/automations/success-stories";
import CallToAction from "@/components/automations/call-to-action";
import Faq from "@/components/automations/faq";
import Footer from "@/components/home/footer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <HeroSection />
      <SuccessStories />
      <CallToAction />
      <Faq />
      <Footer />
    </main>
  );
}
