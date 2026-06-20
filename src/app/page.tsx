import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-gray-950 dark:text-foreground transition-all duration-300">
      
      {/* Clean, self-contained Header component */}
      <Header />  

      <main className="flex-1 flex flex-col items-center justify-center p-4 gap-14">
        {/* Your content goes here */}
        <HomeSection/>
        <ProjectsSection/>
      </main>

    </div>
  );
}