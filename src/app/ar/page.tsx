"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/home/nav";
import Hero from "@/components/home/hero";
import Pricing from "@/components/home/web-development/pricing";
import Testimonials from "@/components/home/web-development/testimonials";
import Steps from "@/components/home/marketing/steps";
import CallToAction from "@/components/home/call-to-action";
import Faq from "@/components/home/faq";
import Footer from "@/components/home/footer";
import LanguageModal from "@/components/home/language-modal";

export default function Home() {
  // const router = useRouter();

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

  const [isModalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col">
      {/* <LanguageModal isOpen={isModalOpen} onClose={closeModal} /> */}
      <NavBar />
      <Hero />
      <div id="web-development">
        <Pricing />
      </div>
      <Testimonials />
      <div id="marketing">
        <Steps />
      </div>
      <CallToAction />
      <Faq />
      <Footer />
    </main>
  );
}
