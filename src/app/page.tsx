// src/app/page.tsx
import { auth } from "./lib/auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

export const runtime = "edge";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Header session={session} />
      <main className="flex-grow container mx-auto py-8">
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}
