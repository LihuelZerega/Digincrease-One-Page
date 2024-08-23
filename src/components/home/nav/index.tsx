import React from "react";
import Image from "next/image";
import DigincreaseLogo from "@/images/digincrease-logo.png";

function index() {
  return (
    <div>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 lg:py-4 fixed bg-white border-b border-neutral-100">
        <nav className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
          <div className="md:col-span-3">
            <a
              className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
              href="../templates/creative-agency/index.html"
              aria-label="Preline"
            >
              <Image
                src={DigincreaseLogo}
                width={50}
                height={50}
                alt="Digincrease Logo"
              />
            </a>
          </div>

          <div className="flex items-center gap-x-1 md:gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
            <a
              href="https://digincrease.com/sobre-nosotros-digincrease/"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
            >
              Conocenos
            </a>
            <a
              href=""
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-lime-400 text-white hover:bg-lime-500 focus:outline-none focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
            >
              Contactanos!
            </a>

            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                id="hs-navbar-hcail-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-hcail"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-hcail"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-4"
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="hs-navbar-hcail"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
            aria-labelledby="hs-navbar-hcail-collapse"
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-12 md:mt-0">
              {/* <div>
                <a
                  className="relative inline-block text-black focus:outline-none before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400"
                  href="#"
                  aria-current="page"
                >
                  Work
                </a>
              </div> */}
              <div>
                <a
                  className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 hover:underline hover:underline-offset-4 decoration-8 decoration-lime-400 hover:underline-lime-400"
                  href="#"
                >
                  Marketing
                </a>
              </div>
              <div>
                <a
                  className="inline-block text-black hover:text-gray-600 focus:outline-none focus:text-gray-600 hover:underline hover:underline-offset-4 decoration-8 decoration-lime-400 hover:underline-lime-400"
                  href="#"
                >
                  Desarrollo Web
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default index;