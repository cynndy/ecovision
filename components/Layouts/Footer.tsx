import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex justify-center w-full">
      <Image
        className="object-cover w-full"
        src="/Footer.png"
        alt="Footer will be Here soon"
        width={1440}
        height={389}
      />
    </div>
  );
};

export default Footer;
