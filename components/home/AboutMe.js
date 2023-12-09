export default function AboutMe() {
  const myDetails = [
    {
      label: "Name",
      value: "Promise Onuoha",
    },
    {
      label: "Date Of Birth",
      value: "5th september 2005",
    },
    {
      label: "Spoken Languages",
      value: "English, and Igbo",
    },
    {
      label: "State Of Origin",
      value: "Imo State",
    },
    {
      label: "Nationality",
      value: "Nigeria",
    },
    {
      label: "Interests",
      value: "Research, Remote Works, , Technology, Networking, Music, Journey",
    },
  ];

  const summaryOfSkills = [
    "Team player having exceptional problem-solving approach, organizational, and interpersonal skills.",
    "Proficient in debugging programs to identify and remove errors, and optimizing existing software code to add more functionalities as and when necessary.",
    "Adept in designing and developing software/web application modules as well as executing, and testing to ensure it delivers expected results.",
    "Expertise in translating client requirements into coding modules, and have a good understanding of agile technology to deliver quality software within deadline",
  ];

  return (
    <section>
      <div className="relative z-20 text-center flex flex-col h-max py-16 items-center justify-center space-y-8 text-primary1 px-5 md:px-12 ">
        <div className="w-full md:w-[95%]">
          {" "}
          <div className="relative z-50 flex flex-wrap justify-center items-center animate-text-glitch">
            <p className="text-lg font-medium md:text-4xl mb-12">About Me 👤</p>
          </div>
          <div className="w-full flex flex-col">
            <div className="relative w-full z-50 text-xl space-y-3  md:text-xl 2xl:text-2xl ">
              <h2 className="leading-[35px] text-justify font-semibold text-white">
                I am well organized, focused, resourceful, self - directed,
                dedicated, flexible and competent person who has a passionate
                commitment to workplace, priorities and solution development,
                within team and individual environments. An Erudite Software,
                Engineer with 1+ years of experience in Networking, System
                engineering and Software development according to client needs.
                Expertise in debugging, troubleshoot, and executing application
                programs to make sure it delivers expected output.
              </h2>
            </div>
            <div className="relative w-full z-50 text-xl space-y-3  md:text-xl 2xl:text-2xl py-8">
              <h2 className="text-justify font-semibold text-white pb-5">
                Summary Of Skills
              </h2>
              <ul className="w-full flex flex-col list-inside list-disc gap-4">
                {summaryOfSkills.map((skill) => {
                  return (
                    <li
                      key={skill}
                      className="font-semibold text-start text-white text-lg"
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pt-8 w-[500px] max-w-full z-50 flex flex-col gap-5 mb-8">
              {myDetails.map((data) => {
                return (
                  <div
                    key={data.label}
                    className="w-full flex justify-between items-start"
                  >
                    <div className="w-[40%] flex justify-between items-end">
                      <p className="w-[85%] text-start text-base text-white font-semibold">
                        {data.label}
                      </p>{" "}
                      <p className=" text-base text-white font-semibold">:</p>
                    </div>
                    <div className="w-[60%]">
                      <p className="text-start pl-6 text-base text-white font-semibold">
                        {data.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              href="https://matching.turing.com/developer-resume-preview/d93eaca0b89e08a46291a970cc871c34976e52871619f1"
              target="_blank"
              className="border w-max border-primary1 rounded-md flex items-center px-4 py-3 animate-flicker-neon"
            >
              View Online Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
