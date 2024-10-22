const steps = [
  {
    step: 1,
    title: "Connect Your Wallet",
    description:
      "Link your cryptocurrency wallet to access our decentralized platform securely.",
  },
  {
    step: 2,
    title: "Browse or Post Gigs",
    description:
      "Find the services you need or offer your skills to potential clients globally.",
  },
  {
    step: 3,
    title: "Smart Contract Escrow",
    description:
      "Work and payments are secured by blockchain-based smart contracts for full transparency.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500 text-white text-xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
