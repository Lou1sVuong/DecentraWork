import FeaturedServices from "@/containers/landing/homepage/featured-services";
import Hero from "@/containers/landing/homepage/hero";
import HowItWorks from "@/containers/landing/homepage/how-it-work";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 theme-transition">
      <main className="flex-1">
        <Hero />
        <FeaturedServices />
        <HowItWorks />
      </main>
    </div>
  );
}
