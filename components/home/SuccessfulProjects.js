import ProjectsList from "../UI/ProjectsList";

const projects = [
  {
    title: "Happy Clients",
    alt: "Promise Onuoha Happy Clients Icon",
    number: 30,
    image: "happy-clients-icon.png",
  },
  {
    title: "Software Projects",
    alt: "Promise Onuoha Software Projects Icon",
    number: 50,
    image: "software-projects-icon.jpg",
  },
  {
    title: "Developers Bugs Fixed",
    number: "80",
    alt: "Promise Onuoha Bugs Solved Icon",
    image: "bugs-solved-icon.jpg",
  },
];

const SuccessfulProjects = () => {
  return (
    <section className="z-0 bg-black-50 py-16 flex">
      <div className=" flex flex-col justify-center max-w-[120rem] mx-auto lg:justify-evenly lg:flex-row">
        {projects.map((projectData, index) => (
          <span key={index}>
            <ProjectsList projectData={projectData} />
          </span>
        ))}{" "}
      </div>
    </section>
  );
};

export default SuccessfulProjects;
