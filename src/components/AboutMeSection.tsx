"use client";
import { Download } from "lucide-react";
export default function AboutMeSection() {
  return (
    <section id="about" className="flex flex-col pt-24 gap-12 items-center">
      
      <h1 className="text-4xl font-bold">Who I Am</h1>

      <div className="flex flex-col lg:flex-row gap-16 max-w-5xl w-full px-6 lg:px-12 items-start">

        {/* LEFT SIDE - About Me */}
        <div className="flex flex-col flex-1 gap-9">

          <p className="text-muted-foreground leading-8">
            I am a passionate aspiring software developer with experience in
            academic and collaborative projects, where I have contributed as
            both a developer and project manager. These experiences have given
            me hands-on exposure to web development from planning to
            implementation.
          </p>

          <p className="text-muted-foreground leading-8">
            Passionate about problem-solving and continuous learning,
            I enjoy creating efficient, responsive, and user-friendly websites.
          </p>   
          <a
            href="/Resume-Laguna_Marylle.pdf"
            download
            className=" inline-flex items-center justify-center gap-2 px-6 py-3 mt-4
                w-full sm:w-fit rounded-xl bg-foreground text-background font-medium shadow-sm
                hover:shadow-md hover:scale-[1.03] transition">
            <Download size={18} />
            Download CV
            </a>

        </div>

        {/* RIGHT SIDE - SKILLS */}
            <div className="flex flex-col flex-1 max-w-md gap-6">

            <div className="border border-foreground/30 rounded-xl p-5 bg-background shadow-sm hover:shadow-lg transition">
                <div className="inline-flex px-4 py-1 rounded-full bg-foreground text-background text-sm font-medium mb-2">
                Team Collaboration
                </div>
                <p className="text-muted-foreground text-sm leading-6">
                I enjoy working in a team and communicating effectively with others to achieve shared goals.
                </p>
            </div>

            <div className="border border-foreground/30 rounded-xl p-5 bg-background shadow-sm hover:shadow-lg transition">
                <div className="inline-flex px-4 py-1 rounded-full bg-foreground text-background text-sm font-medium mb-2">
                Attention to Detail
                </div>
                <p className="text-muted-foreground text-sm leading-6">
                I am observant and able to identify issues or mistakes that may affect the quality of work.
                </p>
            </div>

            <div className="border border-foreground/30 rounded-xl p-5 bg-background shadow-sm hover:shadow-lg transition">
                <div className="inline-flex px-4 py-1 rounded-full bg-foreground text-background text-sm font-medium mb-2">
                Willingness to Learn
                </div>
                <p className="text-muted-foreground text-sm leading-6">
                I have a strong drive to continuously learn new things that help me grow and improve my skills.
                </p>
            </div>

            </div>

      </div>
        
    </section>
  );
}