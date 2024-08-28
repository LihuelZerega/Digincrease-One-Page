import React from "react";
import Image from "next/image";
import DigincreaseLogo from "@/images/digincrease-logo.png";

function index() {
  return (
    <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t border-neutral-100">
      <div className="text-center">
        <div className="flex justify-center">
            <Image src={DigincreaseLogo} width={50} height={50} alt="Digincrease Logo" className="mb-3"/>
          {/* <a className="flex-none text-xl font-semibold text-black" href="#" aria-label="Brand">Brand</a> */}
        </div>
    
        <div className="mt-3">
          {/* <p className="text-gray-500">We're part of the <a className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="#">Htmlstream</a> family.</p> */}
          <p className="text-gray-500">© Digincrease 2024. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default index;
