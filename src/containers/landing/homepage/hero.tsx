import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className=" w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none mb-6">
          Decentralized Freelancing
          <span className="text-blue-600 dark:text-blue-400"> Reimagined</span>
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl mb-8">
          Secure, fair, and transparent freelancing powered by blockchain
          technology and smart contracts.
        </p>
        <div className="space-x-4">
          <Button className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white">
            Explore Services
          </Button>
          <Button
            variant="outline"
            className="border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white"
          >
            Offer Your Skills
          </Button>
        </div>
      </div>
    </section>
  );
}
