const Hero = () => {
  return (
    <header className="p-3 w-full my-6 flex flex-col">
      <nav className="container mx-auto flex justify-between w-full">
        <div className="text-white uppercase text-2xl ">
          <span className="text-blue-400 font-bold pointer-events-none">
            Brief
          </span>
          ly
        </div>
        <div>
          <a
            href="https://github.com/Sachidananda-17"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gray-800 px-6 py-3 text-white transition-all hover:text-gray-800 hover:bg-white"
          >
            Github
          </a>
        </div>
      </nav>
      <div className="hero-content">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-white text-center py-16">
            <h1 className="text-5xl font-bold tracking-tighter xl:leading-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 px-2">
              Unlock the Web&apos;s Wisdom{" "}
              <span className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400">
                Instantly
              </span>
            </h1>

            <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-500 mx-auto">
              Our AI tool simplifies complex web content, providing concise summaries to save you time and effort. 
              Dive into the web's knowledge with ease and efficiency.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
