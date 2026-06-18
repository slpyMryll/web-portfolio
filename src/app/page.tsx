import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-all duration-300">
      
      {/* Clean, self-contained Header component */}
      <Header />  

      <main className="flex-1 flex items-center justify-center p-4">
        {/* Your content goes here */}
      </main>

    </div>
  );
}