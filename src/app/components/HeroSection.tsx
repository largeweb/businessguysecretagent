// src/app/components/HeroSection.tsx
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold mb-8 text-black">
        Welcome to BusinessGuySecretAgent
      </h1>
      <p className="text-xl text-black mb-8">
        Unleash the power of AI agents for your business
      </p>
      <Link
        href="/dashboard"
        className="inline-block px-8 py-3 rounded-full bg-white text-indigo-600 font-bold shadow-lg hover:shadow-xl transition duration-200"
      >
        Go to Dashboard
      </Link>
    </section>
  );
}
