import handleWhatsAppClick from "@/helpers/whatsapp";
import Image from "next/image";

const openSourceProjectInfo = [
  {
    name: "Goal Todo List App",
    description:
      "A Todo List mobile application UI, Looks good on Android and IOS... The app was built with React Native.",
    image: "OIP.jpg",
    url: "https://github.com/promzy5883/Goal-App.git",
  },
  {
    name: "Where In The World",
    description:
      "The code provided could be of significant assistance should the need arise for integrating a website that displays The list of all countries in the world in an amazing UI... whereby users can search for a perticular country, filter countries by region, click on a country to see more important details about that country, etc. By utilizing the provided code as a foundation, you can potentially save valuable development time and effort. The website was developed with React.js",
    image: "where-in-the-world.jpg",
    url: "https://github.com/promzy5883/where-in-the-world.git",
  },
  {
    name: "Advice Generator Website",
    description:
      "A site where users can generate so many useful piece of advice..",
    image: "advice.jpg",
    url: "https://github.com/promzy5883/advice-generator.git",
  },
];

const brandsWorkedWith = [
  {
    logo: "analogueshifts.png",
    alt: "Analogue Shifts",
    website: "https://www.analogueshifts.com",
  },
  {
    logo: "cinnamon.png",
    alt: "Cinnamon19fashion",
    website: "https://cinnamon19fashion.com",
  },
  {
    logo: "fowgate.jpeg",
    alt: "Fowgate",
    website: "https://fowgate.com",
  },
  {
    logo: "jack.webp",
    alt: "Jack LLc",
    website: "https://staging.jack.parts",
  },
];

const sendMessageHandler = () => {
  handleWhatsAppClick(
    "Hello! 👋 I just visited your portfolio and I'm truly inspired by your journey and skills. I'd love to connect and potentially discuss collaboration opportunities or seek advice in the field. Looking forward to chatting with you further! 🚀"
  );
};

const SectionThree = () => {
  return (
    <section className="mt-32 ">
      <div>
        <p className="text-xl px-5 md:px-12 md:text-2xl">
          Some Open Source Code
        </p>
        <div className="border-primary1 border-t-2 border-opacity-50 flex justify-center mt-5 items-start space-x-auto flex-wrap pt-5 mx-4 md:mx-12 md:pt-8 md:justify-evenly 2xl:justify-start space-x-2">
          {openSourceProjectInfo.map((openSourceProjectData, index) => (
            <div
              key={index}
              className="w-80 py-2 duration-300 hover:scale-105 mb-8 space-y-2"
            >
              <div className="h-64 w-full rounded-tl-lg rounded-tr-lg overflow-hidden md:h-72">
                <Image
                  src={`images/${openSourceProjectData.image}`}
                  loading="eager"
                  priority
                  alt={openSourceProjectData.image}
                  className="h-full w-full object-cover"
                  width={540}
                  height={388}
                />
              </div>
              <p className="font-medium text-xl text-center">
                {openSourceProjectData.name}
              </p>

              <p className="p-auto text-center text-sm leading-tight">
                {openSourceProjectData.description}
              </p>
              <a
                target="_blank"
                href={openSourceProjectData.url}
                className="w-max flex items-center border-primary1 border-b-2 border-opacity-50 mx-auto pb-0.5"
              >
                <p className="text-sm">Open in GitHub</p>{" "}
                <div className="ml-1">
                  <Image
                    src="images/icon/arrow-right.svg"
                    alt="GitHub Link: Explore OpulenceDeveloper's Projects on GitHub"
                    loading="eager"
                    priority
                    className="h-4 w-4 transform -rotate-45"
                    width={16}
                    height={16}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-24 mb-32 px-5 md:px-12">
        <p className="text-xl font-medium md:text-2xl">
          Some brands I've worked with
        </p>
        <hr className="border-t-2 my-3 border-primary1 opacity-50" />
        <div className="space-x-auto flex flex-wrap justify-evenly pt-3 h-max">
          {brandsWorkedWith.map((brandsWorkedWithData, index) => (
            <a
              href={brandsWorkedWithData.website}
              key={index}
              className="h-24 mb-5 mx-3 w-40 md:w-52"
            >
              <Image
                src={`images/${brandsWorkedWithData.logo}`}
                alt={brandsWorkedWithData.alt}
                className="h-full w-full object-contain"
                width={208}
                height={80}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="pb-10 space-y-5 px-5 md:px-12">
        <p className="text-lg">Let's build magic together</p>
        <hr className="border-t-2 my-3 border-primary1 opacity-50" />
        <p className="leading-loose text-lg font-light ">
          "I am deeply passionate about crafting elegant and efficient solutions
          for intricate challenges, and I am thrilled at the opportunity to
          apply my skills to your forthcoming project. With comprehensive
          experience encompassing front-end, I possess the flexibility to
          operate across a spectrum of programming languages and frameworks.
          From designing responsive mobile applications and websites to
          engineering robust server architectures. However, my focus extends
          beyond mere coding. As a software engineer, I recognize the
          significance of collaboration, effective communication, and empathy. I
          collaborate closely with stakeholders to ensure that I deliver not
          just any solution, but the right solution. Moreover, I possess an
          unyielding enthusiasm to understand your business, objectives, and
          your users on a deeper level. Whether you seek a dedicated full-time
          professional, an adept part-time consultant, a troubleshooter for your
          code, or a skilled contract developer, I am enthusiastic to learn
          about your project. Please feel free to contact me through any of my
          social media channels - I am eager to initiate our collaboration. Your
          project holds great promise, and I am eagerly looking forward to
          joining forces with you to embark on this journey."
        </p>
        <button
          onClick={sendMessageHandler}
          className="flex items-center bg-black px-5 py-3 text-white rounded-sm"
        >
          Send Message
          <Image
            src="images/icon/arrow-right.svg"
            alt="Message Icon: Reach Out and Connect with OpulenceDeveloper"
            className="h-4 w-4 ml-2"
            width={16}
            height={16}
          />
        </button>
      </div>
    </section>
  );
};

export default SectionThree;
