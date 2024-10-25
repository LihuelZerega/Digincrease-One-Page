import React from "react";
import { Safari } from "@/components/magicui/safari";
import { Iphone15Pro } from "@/components/magicui/iphone-15-pro";

import Image from "next/image";
import DigincreaseWebDevelpmentImage from "@/images/DigincreaseWebDevelpmentImage.png"

function index() {
  return (
    <div className="relative flex items-center justify-center mx-auto pt-16">
      <Image src={DigincreaseWebDevelpmentImage} alt=""/>
    </div>
  );
}

export default index;
