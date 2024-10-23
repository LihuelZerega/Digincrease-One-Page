"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/home/nav";
import Hero from "@/components/home/hero";
import Pricing from "@/components/home/web-development/pricing";
import Testimonials from "@/components/home/testimonials";
import Steps from "@/components/home/marketing/steps";
import CallToAction from "@/components/home/call-to-action";
import Faq from "@/components/home/faq";
import OurServices from "@/components/home/our-services";
import Footer from "@/components/home/footer";
import LanguageModal from "@/components/home/language-modal";
import { MarqueeDemo } from "@/components/home/brands";
import Web from "@/components/home/web";
import Marketing from "@/components/home/marketing";

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

  const [isModalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <LanguageModal isOpen={isModalOpen} onClose={closeModal} />
      <NavBar />
      <Hero />
      <hr />
      <OurServices />
      <MarqueeDemo />
      <Web />
      <Marketing />
      <Testimonials />
      {/* <div id="marketing">
        <Steps />
      </div> */}
      <div className="text-transparent select-none border-b w-full mx-auto max-w-2xl px-6 lg:px-8 py-0">
        s
      </div>
      <Faq />
      <CallToAction />
      <Footer />
    </main>
  );
}
