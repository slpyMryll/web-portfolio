import Header from "../components/Header";
import HomeSection from "../components/HomeSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-gray-950 dark:text-foreground transition-all duration-300">
      
      {/* Clean, self-contained Header component */}
      <Header />  

      <main className="flex-1 flex items-center justify-center p-4">
        {/* Your content goes here */}
        <HomeSection/>
      </main>

    </div>
  );
}