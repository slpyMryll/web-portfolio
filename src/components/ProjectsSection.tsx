"use client";

import { projectData } from "../assets";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 pb-24 scroll-mt-20 w-full"
    >
      
      <div className="flex flex-col gap-6">

        {/* HEADER */}
        <h4 className="text-center text-lg font-semibold">
          Portfolio
        </h4>

        <h2 className="text-center text-3xl sm:text-4xl font-bold">
          Featured Projects
        </h2>

        <div className="flex justify-center px-6">
          <p className="text-center max-w-2xl text-muted-foreground">
            Thanks for stopping by! Explore the projects that showcase my journey
            in web development and software engineering.
          </p>
        </div>

        <div className="w-full flex justify-center px-6 sm:px-10 lg:px-16">

          <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            gap-5 sm:gap-2
            w-full max-w-[1250px]
            my-14
            justify-items-center
          ">

            {projectData?.map((project, index) => (
              <div
                key={index}
                className="
                  group relative 
                  min-w-87 sm:w-full
                  h-52 sm:h-60 md:h-72
                  overflow-hidden 
                  border border-border 
                  shadow-md 
                  hover:shadow-xl 
                  transition-all duration-300
                "
              >

                {/* IMAGE */}
                <div
                  className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${project.bgImage})`,
                  }}
                />

                {/* GRADIENT */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                {/* TEXT */}
                <div className="absolute inset-x-6 bottom-5 z-10 text-white">

                  <h3 className="text-sm sm:text-base font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-[11px] sm:text-sm text-white/80 mt-2 leading-relaxed">
                    {project.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}