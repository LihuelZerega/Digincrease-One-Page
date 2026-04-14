"use client";

import React, { useContext } from "react";
import { Check, Star, ArrowRight } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import ShineBorder from "@/components/magicui/shine-border";
import { LanguageContext } from "@/contexts/LanguageContext";
import { PricingTranslations } from "./translations";
import { cn } from "@/lib/utils";

const Index = () => {
  const { language } = useContext(LanguageContext);
  const t = PricingTranslations[language as keyof typeof PricingTranslations] || PricingTranslations.es;

  const handleWhatsAppClick = (planName: string) => {
    const phoneNumber = "34624354476";
    const message = t.whatsappMessage.replace("{plan}", planName);
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <BlurFade delay={0.1} inView>
            <span className="text-lime-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              {t.eyebrow}
            </span>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {t.title}
            </h2>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </BlurFade>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {/* Start Plan */}
          <BlurFade delay={0.4} inView className="h-full">
            <div className="h-full flex flex-col p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.start.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-gray-900">USD</span>
                  <span className="text-5xl font-extrabold text-gray-900">{t.start.price}</span>
                  <span className="text-gray-500">{t.start.period}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.start.description}
                </p>
              </div>
              
              <div className="h-px bg-gray-100 mb-6" />

              <ul className="space-y-4 mb-8 flex-grow">
                {t.start.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-lime-100 rounded-full p-0.5">
                      <Check className="w-3.5 h-3.5 text-lime-600" />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
                <p className="text-xs text-gray-500 italic">
                  {t.start.ideal}
                </p>
              </div>

              <button 
                onClick={() => handleWhatsAppClick(t.start.name)}
                className="w-full py-4 px-6 rounded-xl bg-gray-900 text-white font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors group-hover:translate-y-[-2px] duration-300"
              >
                {t.ctaStart}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </BlurFade>

          {/* Growth Plan (Featured) */}
          <BlurFade delay={0.5} inView className="h-full">
            <ShineBorder
              className="relative w-full h-full flex flex-col bg-white border-0 shadow-xl items-stretch overflow-hidden"
              color={["#82C915", "#A9E34B", "#5C940D"]}
            >
              <div className="relative z-10 h-full flex flex-col p-8">
                <div className="absolute top-4 right-4 bg-lime-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-current" />
                  {t.growth.popular}
                </div>

                <div className="mb-6 mt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.growth.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-gray-900">USD</span>
                    <span className="text-5xl font-extrabold text-lime-600">{t.growth.price}</span>
                    <span className="text-gray-500">{t.growth.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t.growth.description}
                  </p>
                </div>
                
                <div className="h-px bg-lime-100 mb-6" />

                <ul className="space-y-4 mb-8 flex-grow">
                  {t.growth.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 bg-lime-500 rounded-full p-0.5">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-lime-50 rounded-xl p-4 mb-6 border border-lime-100">
                  <p className="text-xs text-lime-700 italic font-medium">
                    {t.growth.ideal}
                  </p>
                </div>

                <button 
                  onClick={() => handleWhatsAppClick(t.growth.name)}
                  className="w-full py-4 px-6 rounded-xl bg-lime-500 text-white font-bold flex items-center justify-center gap-2 hover:bg-lime-600 transition-all border-b-4 border-lime-700 active:border-b-0 active:translate-y-[2px] shadow-lg"
                >
                  {t.ctaGrowth}
                  <ArrowRight className="w-4 h-4 shadow-sm" />
                </button>
              </div>
            </ShineBorder>
          </BlurFade>

          {/* Pro Plan */}
          <BlurFade delay={0.6} inView className="h-full">
            <div className="h-full flex flex-col p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.pro.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-gray-900">USD</span>
                  <span className="text-5xl font-extrabold text-gray-900">{t.pro.price}</span>
                  <span className="text-gray-500">{t.pro.period}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.pro.description}
                </p>
              </div>
              
              <div className="h-px bg-gray-100 mb-6" />

              <ul className="space-y-4 mb-8 flex-grow">
                {t.pro.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-lime-100 rounded-full p-0.5">
                      <Check className="w-3.5 h-3.5 text-lime-600" />
                    </div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
                <p className="text-xs text-gray-500 italic">
                  {t.pro.ideal}
                </p>
              </div>

              <button 
                onClick={() => handleWhatsAppClick(t.pro.name)}
                className="w-full py-4 px-6 rounded-xl border-2 border-gray-900 text-gray-900 font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 hover:text-white transition-all group-hover:translate-y-[-2px] duration-300"
              >
                {t.ctaPro}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default Index;