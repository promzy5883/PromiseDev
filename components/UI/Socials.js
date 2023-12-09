import Image from "next/image";

const socialInfo = [
  {
    imageName: "github",
    link: "https://github.com/promzy5883",
    value: "Promise Onuoha",
  },
  {
    imageName: "twitter",
    link: "https://twitter.com/Promzy_5",
    value: "Promzy_5",
  },
  {
    imageName: "linkedin",
    link: "https://www.linkedin.com/in/promise-onuoha",
    value: "promise-onuoha",
  },
  {
    imageName: "facebook",
    link: "https://facebook.com/Promise-Onuoha",
    value: "Promise Onuoha",
  },
];

const Socials = () => {
  return (
    <div className="mt-28 mb-16">
      <div className="border border-primary2  flex flex-col justify-center items-center space-y-4 p-6 md:space-x-5 xl:flex-row xl:space-y-0">
        <p className="text-lg ">Find me on:</p>
        {socialInfo.map((socialInfoData, index) => {
          return (
            <a
              key={index}
              href={socialInfoData.link}
              target="_blank"
              className="flex items-center"
            >
              <div className="h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={`/images/icon/${socialInfoData.imageName}-icon.gif`}
                  alt={`Connect on ${socialInfoData.imageName}: Join OpulenceDeveloper's Network on Social Media`}
                  className="w-full h-full"
                  width={43.7}
                  height={43.7}
                />
              </div>{" "}
              <p className="font-extralight ml-2">{socialInfoData.value}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Socials;
