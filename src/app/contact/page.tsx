"use client";
import React from "react";
import NavBar from "@/components/home/nav";
import ContactForm from "@/components/contact";
import Footer from "@/components/home/footer";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

function page() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "absolute inset-0 w-full h-full opacity-20 pointer-events-none",
            "[mask-image:linear-gradient(to_bottom_right,white,transparent)]"
          )}
        />
        <div className="relative z-10">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
