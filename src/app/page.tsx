import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import ProjectsSection from "../components/ProjectsSection";
import AboutMeSection from "../components/AboutMeSection";
import ContactMeSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-gray-950 dark:text-foreground transition-all duration-300">
      
      {/* Clean, self-contained Header component */}
      <Header />  

      <main className="flex-1 flex flex-col items-center justify-center p-4 gap-14">
        {/* Your content goes here */}
        <HomeSection/>
        <AboutMeSection/>
        <ProjectsSection/>
        <ContactMeSection/>

      </main>
      <Footer/>
    </div>
  );
}