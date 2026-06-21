"use client";

import Photo from "./Photo";
import SocialLink from "./socialLink";

export default function HomeSection() {
    
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-10">

      <div className="
        flex flex-col lg:flex-row
        items-center justify-center gap-16
      ">

        {/* TEXT (left column on lg) */}
        <div className="flex flex-col max-w-xl gap-6 text-left order-2 lg:order-1">

          <h1 className="flex justify-center font-bold text-3xl sm:text-5xl pb-6">
            Marylle Laguna
          </h1>
          

          <div className="flex items-center justify-center sm:gap-6 gap-2">

            <div className="w-0.5 h-13 bg-foreground transition-colors duration-700" />

            <p className="sm:text-sm sm:text-left text-center">
              I am a Computer Science student at <br/>Visayas State University, aspiring to <br/>become a <i><b>Software Engineer</b></i>.
            </p>

          </div>
        </div>

        {/* PHOTO (middle column) */}
        <div className="flex justify-center order-1 lg:order-2">
          <Photo />
        </div>

        {/* LINKS (right column) */}
        <SocialLink className="flex sm:flex-col flex-row"/>

      </div>
    </section>
  );
}