import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import handleWhatsAppClick from "@/helpers/whatsapp";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },

  {
    title: "Code Support",
    link: "/code-support",
  },
];

const MobileNavigation = (props) => {
  const router = useRouter();
  const activeLink = router.pathname;

  const sendMessageHandler = () => {
    handleWhatsAppClick(
      "Hello! 👋 I just visited your portfolio and I'm truly inspired by your journey and skills. I'd love to connect and potentially discuss collaboration opportunities or seek advice in the field. Looking forward to chatting with you further! 🚀"
    );
  };

  return (
    <div className="overflow-y-auto bg-white text-white pb-8 w-full h-full">
      <div className="overflow-y-auto h-full">
        {" "}
        <div>
          {" "}
          {navLinks.map((linkData, index) => {
            const textColor =
              activeLink === linkData.link
                ? "text-primary text-medium animate-flicker-neon"
                : "text-primary1";
            return (
              <Link
                onClick={props.onClick}
                key={index}
                className={`${textColor} my-5 text-lg block py-5 border-b w-full text-center`}
                href={linkData.link}
              >
                {linkData.title}
              </Link>
            );
          })}{" "}
        </div>
        <button
          onClick={sendMessageHandler}
          className="flex items-center mx-auto bg-black px-5 py-3 text-white rounded-md"
        >
          <p> Send Message</p>

          <Image
            src="images/icon/arrow-right.svg"
            alt="Message Icon: Reach Out and Connect with OpulenceDeveloper"
            className="h-4 w-4 ml-2"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
