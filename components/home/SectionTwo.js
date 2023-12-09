const SectionTwo = () => {
  return (
    <>
      <div className="relative px-3 max-w-4xl mx-auto bg-black-50 overflow-hidden flex justify-between items-center h-[20rem] md:px-12">
        <div className="absolute -top-32 -left-12 bg-primary rounded-[80px] -rotate-12 h-[30rem] w-1/2 md:-left-24"></div>
        <p className="absolute bottom-2 right-2 text-sm opacity-30">
          PromiseDev
        </p>
        <p className="leading-normal w-1/2 z-20 flex flex-col justify-center  font-bold text-xl md:text-4xl">
          My Gurantee
        </p>

        <div className="w-1/2 z-20 flex flex-col text-2xl md:text-5xl justify-center font-bold">
          <p className="text-7xl -mb-10">''</p>
          <p className="leading-normal ">
            I leave you, <br />
            The best of myself
          </p>
        </div>
      </div>
    </>
  );
};
export default SectionTwo;
