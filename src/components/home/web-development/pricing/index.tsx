import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import BlurFade from "@/components/magicui/blur-fade";
import ShineBorder from "@/components/magicui/shine-border";
import { LanguageContext } from "@/contexts/LanguageContext";
import { MessageTranslations } from "@/lib/translations";
import { WebDevelopmentTranslations } from "@/lib/translations";
import { url } from "inspector";

interface PriceModel {
  id: number;
  name: string;
  priceUSA: number;
  priceArgentina: number;
}

function Index() {
  const { language } = useContext(LanguageContext);
  const translations = MessageTranslations[language];
  const t = WebDevelopmentTranslations[language];
  const [prices, setPrices] = useState<PriceModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [priceOnePage, setPriceOnePage] = useState(t.compareModelsMaintenanceAndSupportPerMonth);
  const [priceLandingPage, setPriceLandingPage] = useState(t.compareModelsMaintenanceAndSupportPerMonth);
  const [priceEcommercePage, setPriceEcommercePage] = useState(t.compareModelsMaintenanceAndSupportPerMonth);

  const phoneNumber = "5491133816778";

  const OnePagemessage = encodeURIComponent(
    translations.OnePageWhatsappMessage
  );

  const LandingPagemessage = encodeURIComponent(
    translations.LandingPageWhatsappMessage
  );

  const Ecommercemessage = encodeURIComponent(
    translations.EcommerceWhatsappMessage
  );

  const OnePagemessageClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${OnePagemessage}`,
      "_blank"
    );
  };

  const LandingPagemessageClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${LandingPagemessage}`,
      "_blank"
    );
  };

  const EcommerceClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${Ecommercemessage}`,
      "_blank"
    );
  };

  useEffect(() => {
    const currentUrl = window.location.pathname;
    if (currentUrl.endsWith('/ar')) {
      setPriceOnePage("8.000");
      setPriceLandingPage("8.000");
      setPriceEcommercePage("15.000");
    } else {
      setPriceOnePage("12");
      setPriceLandingPage("12");
      setPriceEcommercePage("15");
    }
  }, []);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://digincrease-api-production.up.railway.app/api/digincrease');
        setPrices(response.data);
      } catch (error) {
        setError('Error al cargar los precios');
        console.error('There was an error fetching the prices!', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <p>{error}</p>;

  const getPriceByName = (name: string, field: 'priceUSA' | 'priceArgentina') =>
    prices.find((p) => p.name === name)?.[field] || 0;

  const formatPrice = (price: number) => 
    new Intl.NumberFormat('es-AR').format(price);

  const url = window.location.href;
  const priceKey = url.endsWith('/ar') ? 'priceArgentina' : 'priceUSA';

  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <BlurFade
          inView
          className="max-w-2xl mx-auto text-center mb-10 lg:mb-14"
        >
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight bg-clip-text bg-gradient-to-l from-lime-600 to-lime-500 text-transparent">
            {t.title}
          </h2>
          <p className="mt-1 text-gray-600">{t.description}</p>
        </BlurFade>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-start">
          {/* ASESORIA GRATUITA */}
          <BlurFade
            inView
            delay={0.25}
            className="flex flex-col border border-gray-200 text-center rounded-xl p-8"
          >
            <h4 className="font-medium text-lg text-gray-800">
              {t.asesoriaTitle}
            </h4>
            <span className="mt-7 font-bold text-5xl text-lime-600">
              {t.asesoriaPrice}
            </span>

            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.asesoriaItem1}
                </span>
              </li>

              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.asesoriaItem2}
                </span>
              </li>

              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.asesoriaItem3}
                </span>
              </li>
            </ul>

            <a
              href="https://calendly.com/digincrease/asesoria-inicial-gratuita"
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
            >
              {t.asesoriaButton}
            </a>
          </BlurFade>

          {/* ONE PAGE */}
          <BlurFade
            inView
            delay={0.5}
            className="flex flex-col border border-gray-200 text-center rounded-xl p-8"
          >
            <h4 className="font-medium text-lg text-gray-800">One Page</h4>
            <span className="mt-5 font-bold text-5xl text-gray-800">
              <span className="font-bold text-2xl">$</span>
              {formatPrice(getPriceByName('One Page', priceKey))}
            </span>
            <p className="mt-2 text-sm text-gray-500">{t.onepageDescription}</p>

            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.onepageItem1}
                </span>
              </li>

              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.onepageItem2}
                </span>
              </li>

              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.onepageItem3}
                </span>
              </li>

              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.onepageItem4}
                </span>
              </li>

              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.onepageItem5}
                </span>
              </li>
            </ul>

            <button
              type="button"
              onClick={OnePagemessageClick}
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
            >
              {t.onepageButton}
            </button>
          </BlurFade>

          {/* LANDING PAGE */}
          <BlurFade inView delay={0.75}>
            <ShineBorder
              className="relative w-full flex flex-col border text-center shadow-xl rounded-lg p-8 items-center justify-center overflow-hidden bg-background md:shadow-xl"
              color={["#9dc353", "#76b658", "#3daa5b"]}
            >
              <p className="mb-3">
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-lime-100 text-lime-800">
                  {t.landingpageMostSold}
                </span>
              </p>
              <h4 className="font-medium text-lg text-gray-800">
                Landing Page
              </h4>
              <span className="mt-5 font-bold text-5xl text-gray-800">
                <span className="font-bold text-2xl">$</span>
                {formatPrice(getPriceByName('Landing Page', priceKey))}
              </span>
              <p className="mt-2 text-sm text-gray-500">
                {t.landingpageDescription}
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-lime-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 text-left">
                    {t.landingpageItem1}
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-lime-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 text-left">
                    {t.landingpageItem2}
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-lime-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 text-left">
                    {t.landingpageItem3}
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-lime-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 text-left">
                    {t.landingpageItem4}
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-lime-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 text-left">
                    {t.landingpageItem5}
                  </span>
                </li>
              </ul>

              <button
                type="button"
                onClick={LandingPagemessageClick}
                className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-lime-500 text-white hover:bg-lime-600 focus:outline-none focus:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                {t.landingpageButton}
              </button>
            </ShineBorder>
          </BlurFade>

          {/* E-COMMERCE */}
          <BlurFade
            inView
            delay={1.0}
            className="flex flex-col border border-gray-200 text-center rounded-xl p-8"
          >
            <h4 className="font-medium text-lg text-gray-800">E-Commerce</h4>
            <span className="mt-5 font-bold text-5xl text-gray-800">
              <span className="font-bold text-2xl">$</span>
              {formatPrice(getPriceByName('E-commerce', priceKey))}
            </span>
            <p className="mt-2 text-sm text-gray-500">
              {t.ecommerceDescription}
            </p>

            <ul className="mt-7 space-y-2.5 text-sm">
              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.ecommerceItem1}
                </span>
              </li>

              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.ecommerceItem2}
                </span>
              </li>

              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.ecommerceItem3}
                </span>
              </li>

              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.ecommerceItem4}
                </span>
              </li>

              <li className="flex gap-x-2">
                <svg
                  className="shrink-0 mt-0.5 size-4 text-lime-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-gray-800 text-left">
                  {t.ecommerceItem5}
                </span>
              </li>
            </ul>

            <button
              type="button"
              onClick={EcommerceClick}
              className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
            >
              {t.ecommerceButton}
            </button>
          </BlurFade>
        </div>

        <BlurFade inView className="mt-20 lg:mt-32">
          <div className="lg:text-center mb-10 lg:mb-20">
            <h3 className="text-2xl font-semibold">{t.compareModelsTitle}</h3>
          </div>

          <div className="space-y-24 lg:hidden">
            <section>
              <div className="px-4 mb-4">
                <h2 className="text-lg leading-6 font-medium text-gray-800">
                  One Page
                </h2>
              </div>
              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start">
                  General
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start">
                  Seguridad
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start">
                  Rendimiento
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Total social volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <div className="px-4 mb-4">
                <h2 className="text-lg leading-6 font-medium text-gray-800">
                  Landing Page
                </h2>
              </div>
              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start">
                  General
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start">
                  Seguridad
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start">
                  Rendimiento
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Total social volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                      <span className="sr-only">No</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <div className="px-4 mb-4">
                <h2 className="text-lg leading-6 font-medium text-gray-800">
                  E-commerce
                </h2>
              </div>
              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start">
                  General
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Open/High/Low/Close
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Price-volume difference indicator
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start">
                  Seguridad
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Network growth
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Average token age consumed
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Exchange flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Total ERC20 exchange funds flow
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Transaction volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Total circulation (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Velocity of tokens (beta)
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      ETH gas used
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table className="w-full">
                <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start">
                  Rendimiento
                </caption>
                <thead>
                  <tr>
                    <th className="sr-only" scope="col">
                      Feature
                    </th>
                    <th className="sr-only" scope="col">
                      Included
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Dev activity
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Topic search
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Relative social dominance
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>

                  <tr className="border-t border-gray-200">
                    <th
                      className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                      scope="row"
                    >
                      Total social volume
                    </th>
                    <td className="py-5 pe-4">
                      <svg
                        className="shrink-0 ms-auto size-5 text-lime-600"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>

          <div className="hidden lg:block">
            <table className="w-full h-px">
              <caption className="sr-only">Pricing plan comparison</caption>
              <thead className="sticky top-0 inset-x-0 bg-white">
                <tr>
                  <th
                    className="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start"
                    scope="col"
                  >
                    <span className="sr-only">Feature by</span>
                    <span className="">{t.compareModelsModel}</span>
                  </th>

                  <th
                    className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center"
                    scope="col"
                  >
                    One Page
                  </th>
                  <th
                    className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center"
                    scope="col"
                  >
                    Landing Page
                  </th>
                  <th
                    className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center"
                    scope="col"
                  >
                    E-commerce
                  </th>
                </tr>
              </thead>
              <tbody className="border-t border-gray-200 divide-y divide-gray-200">
                <tr>
                  <th
                    className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start"
                    colSpan={5}
                    scope="colgroup"
                  >
                    General
                  </th>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsMaintenanceAndSupportTitle}
                  </th>

                  <td className="py-5 px-6">
                    <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                      ${priceLandingPage}{t.compareModelsMaintenanceAndSupportPerMonth}
                    </p>
                  </td>

                  <td className="py-5 px-6">
                    <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                      ${priceEcommercePage}{t.compareModelsMaintenanceAndSupportPerMonth}
                    </p>
                  </td>

                  <td className="py-5 px-6">
                    <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                    ${priceEcommercePage}{t.compareModelsMaintenanceAndSupportPerMonth}
                    </p>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsNumberOfPagesTitle}
                  </th>

                  <td className="py-5 px-6">
                    <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                      1
                    </p>
                  </td>

                  <td className="py-5 px-6">
                    <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                      {t.compareModelsNumberOfPagesLandingPage}
                    </p>
                  </td>

                  <td className="py-5 px-6">
                    <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                      {t.compareModelsNumberOfPagesEcommerce}
                    </p>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsCustomDesignAndDevelopment}
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in One Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in E-commerce</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsCustomSalesCommission}
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">Included in One Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">Included in One Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">Included in One Page</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start"
                    colSpan={5}
                    scope="colgroup"
                  >
                    {t.compareModelsSecurityTitle}
                  </th>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsDDoSProtectionTitle}
                  </th>

                  <td className="py-5 px-6">
                    <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                      {t.compareModelsDDoSProtectionOnePage}
                    </p>
                  </td>

                  <td className="py-5 px-6">
                    <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                      {t.compareModelsDDoSProtectionLandingPage}
                    </p>
                  </td>

                  <td className="py-5 px-6">
                    <p className="ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap">
                      {t.compareModelsDDoSProtectionEcommerce}
                    </p>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsWebApplicationFirewall}
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in E-commerce</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsDataPrivacyProtection}
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in E-commerce</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsHighSecurityAndAvailabilityStandards}
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in E-commerce</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsHighInformationSecurityManagementStandards}
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in One Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in E-commerce</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start"
                    colSpan={5}
                    scope="colgroup"
                  >
                    {t.compareModelsPerformanceTitle}
                  </th>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {
                      t.compareModelsDistributionAcrossGlobalNetworOfHighPerformanceLowLatencyServers
                    }
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in One Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in E-commerce</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsImageOptimizationTitle}
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in One Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in E-commerce</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsMinificationAndCodeCompression}
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in One Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in E-commerce</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsCachingForReturningUsers}
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">Included in One Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in E-commerce</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap"
                    scope="row"
                  >
                    {t.compareModelsHighPerformanceAutoScalingDatabases}
                  </th>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">Included in One Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14" />
                    </svg>
                    <span className="sr-only">Included in Landing Page</span>
                  </td>

                  <td className="py-5 px-6">
                    <svg
                      className="mx-auto shrink-0 size-5 text-lime-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="sr-only">Included in E-commerce</span>
                  </td>
                </tr>

                <tr>
                  <th
                    className="py-5 ps-6 pe-6 text-sm font-normal text-transparent select-none text-start whitespace-nowrap"
                    scope="row"
                  >
                    Buttons
                  </th>

                  <td className="py-5 px-6 pl-[100px]">
                    <button
                      onClick={OnePagemessageClick}
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {t.onepageButton}
                    </button>
                  </td>

                  <td className="py-5 px-6 pl-[100px]">
                    <button
                      onClick={LandingPagemessageClick}
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-lime-500 text-white hover:bg-lime-600 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {t.landingpageButton}
                    </button>
                  </td>

                  <td className="py-5 px-6 pl-[100px]">
                    <button
                      onClick={EcommerceClick}
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {t.ecommerceButton}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-8 md:mt-12 flex justify-center items-center gap-x-3 w-full">
              <p className="text-sm text-gray-500">
                {t.compareModelsPersonalized}
              </p>

              <a
                href="https://calendly.com/digincrease/asesoria-inicial-gratuita"
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              >
                {t.compareModelsPersonalizedButton}
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}

export default Index;
