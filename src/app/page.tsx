import InteractiveFeatures from "@/components/InteractiveFeatures";
import AIChatSimulator from "@/components/AIChatSimulator";
import SmileBot from "@/components/SmileBot";
import PhotoEditor from "@/components/PhotoEditor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Pixen</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          A minimal toolkit for playing with pixels and design.
          Perfect for building creative experiments, graphics, or image-based projects.
        </p>
      </section>
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <PhotoEditor />
    </div>
      {/* Chatbots Container */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-12 w-full">
        <div className="flex-1 max-w-md">
          <AIChatSimulator />
        </div>
        <div className="flex-1 max-w-md">
          <SmileBot />
        </div>
      </section>

      {/* Other interactive tools */}
      <InteractiveFeatures />
    </main>
  );
}
