import Head from "next/head";
import { useRouter } from "next/router";

import SectionOne from "@/components/home/SectionOne";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";
import MyServices from "@/components/home/MyServices";
import SuccessfulProjects from "@/components/home/SuccessfulProjects";
import Portal from "@/components/UI/Portal";
import AboutMe from "@/components/home/AboutMe";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Promise Onuoha | Frontend Software Engineer</title>
        <meta
          property="title"
          content="Promise Onuoha | Frontend Software Engineer"
        />{" "}
        <meta
          name="description"
          content="Welcome to Promise's portfolio! Want a website? Want an App? I'm available for you, Explore a collection of projects showcasing FullStack Software Engineering expertise."
        />
        <meta
          name="keywords"
          content="Promise Onuoha, Portfolio, Frontend Software Engineer, Web Development, Mobile Application Development, Back End Development in Progress, Promise Dev"
        />
        <meta name="author" content="Promise Onuoha" />
        <meta
          property="og:title"
          content="Promise Onuoha | Frontend Software Engineer"
        />
        <meta
          property="og:description"
          content="Want a website? Want an App? I'm available for you, Discover a portfolio of Frontend and FullStack Software Engineering projects by Promise Onuoha. Explore web and application development expertise."
        />
      </Head>
      <SectionOne />
      <AboutMe />
      <MyServices />
      <SuccessfulProjects />

      <SectionTwo />
      <SectionThree />
    </>
  );
}
