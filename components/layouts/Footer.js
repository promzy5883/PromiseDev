import { useRouter } from "next/router";

import Socials from "../UI/Socials";

const codingQuotes = [
  {
    link: "/",
    quotes: "1's and 0's do not lie",
    cite: "https://PromiseDev.github.io",
  },
  {
    link: "/code-support",
    quotes:
      "Debugging is like being the detective in a crime movie where you are also the murderer. lol",
    cite: "https://dev.to/cleancodestudio/10-insightful-programming-wisdom-quotes-18ba",
  },
];

const Footer = (props) => {
  const router = useRouter();
  const activeLink = router.pathname;
  return (
    <footer className="relative z-40">
      <div className="px-5 md:px-12">
        <Socials />

        {codingQuotes.map((codingQuotesData, index) => (
          <p
            key={index}
            className="leading-loose pb-10 italic text-2xl font-extralight text-center md:text-3xl"
          >
            {codingQuotesData.link === activeLink && (
              <q cite={codingQuotesData.cite}>{codingQuotesData.quotes}</q>
            )}
          </p>
        ))}
      </div>
      <div className=" py-10 bg-black space-y-2 text-center">
        <p>© 2023 Promise Onuoha. All Rights Reserved</p>
        <a href="mailto:pebuka351@gmail.com" className="underline">
          pebuka351@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
