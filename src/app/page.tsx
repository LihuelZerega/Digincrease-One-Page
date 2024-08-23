import Image from "next/image";
import NavBar from "@/components/home/nav";
import Hero from "@/components/home/hero";
import Pricing from "@/components/home/web-development/pricing";
import Brands from "@/components/home/web-development/brands";
import Testimonials from "@/components/home/web-development/testimonials";
import Steps from "@/components/home/marketing/steps";
import CallToAction from "@/components/home/call-to-action";
import Faq from "@/components/home/faq";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <Hero />
      <Pricing />
      {/* <Brands /> */}
      <Testimonials />
      <Steps />
      <CallToAction />
      <Faq />
      <Footer />
    </main>
  );
}
