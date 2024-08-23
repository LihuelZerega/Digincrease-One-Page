import React from 'react'
import BlurFade from '@/components/magicui/blur-fade'

function index() {
  return (
    <div>
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <BlurFade inView className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight bg-clip-text bg-gradient-to-l from-lime-600 to-lime-500 text-transparent">Desarrollo Web</h2>
    <p className="mt-1 text-gray-600">Como marca, es escencial estar presente en el mundo digital. En Digincrease, nos enfocamos tanto en la creatividad y seguridad de un sitio, como en la experiencia del usuario.</p>
  </BlurFade>

  <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-start">

    {/* ASESORIA GRATUITA */}
    <BlurFade inView delay={0.25} className="flex flex-col border border-gray-200 text-center rounded-xl p-8">
      <h4 className="font-medium text-lg text-gray-800">Asesoría</h4>
      <span className="mt-7 font-bold text-5xl text-lime-600">Gratis</span>

      <ul className="mt-7 space-y-2.5 text-sm">
        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Servicio sin coste
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Analizamos tu empresa
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Encontramos puntos fuertes y puntos debiles
          </span>
        </li>
      </ul>

      <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50" href="#">
        Agendar asesoria
      </a>
    </BlurFade>

    {/* ONE PAGE */}
    <BlurFade inView delay={0.50} className="flex flex-col border border-gray-200 text-center rounded-xl p-8">
      <h4 className="font-medium text-lg text-gray-800">One Page</h4>
      <span className="mt-5 font-bold text-5xl text-gray-800">
        <span className="font-bold text-2xl">$</span>
        89
      </span>
      <p className="mt-2 text-sm text-gray-500">Potenciá tu presencia en línea, promocioná tus servicios y capturá potenciales clientes.</p>

      <ul className="mt-7 space-y-2.5 text-sm">
        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
            Navegación Fluida y Anclada
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
           Diseño Visual Atractivo en una sola página
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Enfoque en la Historia o Mensaje Central
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Optimización para Dispositivos Móviles
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Llamadas a la Acción Claras
          </span>
        </li>
      </ul>

      <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50" href="#">
        Comprar Ahora
      </a>
    </BlurFade>

    {/* LANDING PAGE */}
    <BlurFade inView delay={0.75} className="flex flex-col border-2 border-lime-500 text-center shadow-xl rounded-xl p-8">
      <p className="mb-3"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-lime-100 text-lime-800">Más Vendido</span></p>
      <h4 className="font-medium text-lg text-gray-800">Landing Page</h4>
      <span className="mt-5 font-bold text-5xl text-gray-800">
        <span className="font-bold text-2xl">$</span>
        39
      </span>
      <p className="mt-2 text-sm text-gray-500">Sitio web a medida. Capturá, convertí y potenciá clientes interesados en sus servicios.</p>

      <ul className="mt-7 space-y-2.5 text-sm">
        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Enfoque en un Solo Objetivo o Conversión
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Contenido Conciso y Persuasivo
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Diseño Minimalista y Enfocado
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Llamadas a la Acción Prominentes
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Pruebas Sociales y Elementos de Confianza
          </span>
        </li>
      </ul>

      <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-lime-500 text-white hover:bg-lime-600 focus:outline-none focus:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
      Comprar Ahora
      </a>
    </BlurFade>

    {/* E-COMMERCE */}
    <BlurFade inView delay={1.00} className="flex flex-col border border-gray-200 text-center rounded-xl p-8">
      <h4 className="font-medium text-lg text-gray-800">E-Commerce</h4>
      <span className="mt-5 font-bold text-5xl text-gray-800">
        <span className="font-bold text-2xl -me-2">$</span>
        149
      </span>
      <p className="mt-2 text-sm text-gray-500">Ideal para aquellos que venden productos y desean ampliar su alcance y llegar a una audiencia global.</p>

      <ul className="mt-7 space-y-2.5 text-sm">
        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Catálogo de productos con categorías y colecciones
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Carrito de compras y proceso de pago seguro
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Opciones de búsqueda avanzada
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Administracion de pedidos, clientes, divisas y regiones
          </span>
        </li>

        <li className="flex gap-x-2">
          <svg className="shrink-0 mt-0.5 size-4 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          <span className="text-gray-800 text-left">
          Gestión de inventario, codigos de descuentos y targetas de regalo
          </span>
        </li>
      </ul>

      <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50" href="#">
      Comprar Ahora
      </a>
    </BlurFade>
  </div>

  <BlurFade inView className="mt-20 lg:mt-32">
    <div className="lg:text-center mb-10 lg:mb-20">
      <h3 className="text-2xl font-semibold">Comparar modelos</h3>
    </div>

    <div className="space-y-24 lg:hidden">
      <section>
        <div className="px-4 mb-4">
          <h2 className="text-lg leading-6 font-medium text-gray-800">One Page</h2>
        </div>
        <table className="w-full">
          <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start">
            General
          </caption>
          <thead>
            <tr>
              <th className="sr-only" scope="col">Feature</th>
              <th className="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Open/High/Low/Close</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Price-volume difference indicator</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
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
              <th className="sr-only" scope="col">Feature</th>
              <th className="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Network growth</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                <span className="sr-only">No</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Average token age consumed</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                <span className="sr-only">No</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Exchange flow</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                <span className="sr-only">No</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Total ERC20 exchange funds flow</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                <span className="sr-only">No</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Transaction volume</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Total circulation (beta)</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Velocity of tokens (beta)</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">ETH gas used</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
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
              <th className="sr-only" scope="col">Feature</th>
              <th className="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Dev activity</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Topic search</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Relative social dominance</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                <span className="sr-only">No</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Total social volume</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <div className="px-4 mb-4">
          <h2 className="text-lg leading-6 font-medium text-gray-800">Landing Page</h2>
        </div>
        <table className="w-full">
          <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start">
            General
          </caption>
          <thead>
            <tr>
              <th className="sr-only" scope="col">Feature</th>
              <th className="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Open/High/Low/Close</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Price-volume difference indicator</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
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
              <th className="sr-only" scope="col">Feature</th>
              <th className="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Network growth</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Average token age consumed</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Exchange flow</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Total ERC20 exchange funds flow</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Transaction volume</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Total circulation (beta)</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Velocity of tokens (beta)</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                <span className="sr-only">No</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">ETH gas used</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
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
              <th className="sr-only" scope="col">Feature</th>
              <th className="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Dev activity</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                <span className="sr-only">No</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Topic search</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Relative social dominance</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Total social volume</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
                <span className="sr-only">No</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <div className="px-4 mb-4">
          <h2 className="text-lg leading-6 font-medium text-gray-800">E-commerce</h2>
        </div>
        <table className="w-full">
          <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-start">
            General
          </caption>
          <thead>
            <tr>
              <th className="sr-only" scope="col">Feature</th>
              <th className="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Open/High/Low/Close</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Price-volume difference indicator</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
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
              <th className="sr-only" scope="col">Feature</th>
              <th className="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Network growth</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Average token age consumed</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Exchange flow</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Total ERC20 exchange funds flow</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Transaction volume</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Total circulation (beta)</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Velocity of tokens (beta)</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">ETH gas used</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
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
              <th className="sr-only" scope="col">Feature</th>
              <th className="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Dev activity</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Topic search</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Relative social dominance</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>

            <tr className="border-t border-gray-200">
              <th className="py-5 px-4 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Total social volume</th>
              <td className="py-5 pe-4">
                <svg className="shrink-0 ms-auto size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="sr-only">Yes</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <div className="hidden lg:block">
      <table className="w-full h-px">
        <caption className="sr-only">
          Pricing plan comparison
        </caption>
        <thead className="sticky top-0 inset-x-0 bg-white">
          <tr>
            <th className="py-4 ps-6 pe-6 text-sm font-medium text-gray-800 text-start" scope="col">
              <span className="sr-only">Feature by</span>
              <span className="">Modelos</span>
            </th>

            <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center" scope="col">One Page</th>
            <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center" scope="col">Landing Page</th>
            <th className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center" scope="col">E-commerce</th>
          </tr>
        </thead>
        <tbody className="border-t border-gray-200 divide-y divide-gray-200">
          <tr>
            <th className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start" colSpan={5} scope="colgroup">General</th>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Mantenimiento y soporte</th>

            <td className="py-5 px-6">
              <p className='ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap'>$0.000/mes</p>
            </td>

            <td className="py-5 px-6">
              <p className='ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap'>$0.000/mes</p>
            </td>

            <td className="py-5 px-6">
              <p className='ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap'>$0.000/mes</p>
            </td>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Número de páginas</th>

            <td className="py-5 px-6">
            <p className='ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap'>1</p>
            </td>

            <td className="py-5 px-6">
            <p className='ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap'>Hasta 3 sin costo adicional</p>

            </td>

            <td className="py-5 px-6">
            <p className='ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap'>Ilimitado</p>

            </td>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Diseño y desarrollo personalizado</th>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in One Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in E-commerce</span>
            </td>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Comisión por Ventas</th>

            <td className="py-5 px-6">
            <svg className="mx-auto shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            <span className="sr-only">Included in One Page</span>
            </td>

            <td className="py-5 px-6">
            <svg className="mx-auto shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            <span className="sr-only">Included in One Page</span>
            </td>

            <td className="py-5 px-6">
            <svg className="mx-auto shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            <span className="sr-only">Included in One Page</span>
            </td>
          </tr>

          <tr>
            <th className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start" colSpan={5} scope="colgroup">Seguridad</th>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Protección DDoS</th>

            <td className="py-5 px-6">
            <p className='ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap'>Estándar</p>
            </td>

            <td className="py-5 px-6">
            <p className='ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap'>Mejorada</p>
            </td>

            <td className="py-5 px-6">
            <p className='ps-6 pe-6 text-sm font-normal text-gray-600 text-center whitespace-nowrap'>Mejorada</p>
            </td>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Firewall de aplicaciones web</th>

            <td className="py-5 px-6">
            <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in E-commerce</span>
            </td>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Proteccion de privacidad de datos (GDPR)</th>

            <td className="py-5 px-6">
            <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in E-commerce</span>
            </td>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Altos estándares de seguridad <br /> y disponibilidad (SOC 2)</th>

            <td className="py-5 px-6">
            <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in E-commerce</span>
            </td>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Altos estándares de gestión de la seguridad <br /> de la información (ISO 27001)</th>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in One Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in E-commerce</span>
            </td>
          </tr>

          <tr>
            <th className="py-3 ps-6 bg-gray-50 font-bold text-gray-800 text-start" colSpan={5} scope="colgroup">Rendimiento</th>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Distribución en una red global de servidores <br /> de alto rendimiento y baja latencia</th>


            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in One Page</span>
            </td>

            <td className="py-5 px-6">
            <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in E-commerce</span>
            </td>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Optimización de imágenes</th>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in One Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in E-commerce</span>
            </td>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Minificación y compresión de codigo</th>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in One Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in E-commerce</span>
            </td>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Almacenamiento en Caché para <br /> usuarios regresantes</th>

            <td className="py-5 px-6">
            <svg className="mx-auto shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            <span className="sr-only">Included in One Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
              <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in E-commerce</span>
            </td>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-gray-600 text-start whitespace-nowrap" scope="row">Bases de datos de alto rendimiento y <br /> escalado automatico</th>

            <td className="py-5 px-6">
            <svg className="mx-auto shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
            <span className="sr-only">Included in One Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
              <span className="sr-only">Included in Landing Page</span>
            </td>

            <td className="py-5 px-6">
              <svg className="mx-auto shrink-0 size-5 text-lime-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span className="sr-only">Included in E-commerce</span>
            </td>
          </tr>

          <tr>
            <th className="py-5 ps-6 pe-6 text-sm font-normal text-transparent select-none text-start whitespace-nowrap" scope="row">Buttons</th>

            <td className="py-5 px-6 pl-[100px]">
            <a
              href=""
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              Comprar ahora
            </a>
            </td>

            <td className="py-5 px-6 pl-[100px]">
            <a
              href=""
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md border border-transparent bg-lime-500 text-white hover:bg-lime-600 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
            >
              Comprar ahora
            </a>
            </td>

            <td className="py-5 px-6 pl-[100px]">
            <a
              href=""
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              Comprar ahora
            </a>
            </td>
          </tr>
        </tbody>

      </table>
        <div className="mt-8 md:mt-12 flex justify-center items-center gap-x-3 w-full">
      <p className="text-sm text-gray-500">
      ¿Necesitas un plan personalizado?
      </p>

      <a href="/contacto" type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-md bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
        Contactanos!
      </a>
    </div>
    </div>
  </BlurFade>
</div>
    </div>
  )
}

export default index