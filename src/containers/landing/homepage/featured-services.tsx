import ServiceCard from "@/components/common/service-card";
import { Code, FileText, Cpu } from "lucide-react";

const services = [
  {
    title: "Smart Contract Development",
    icon: Code,
    description:
      "Build secure and efficient smart contracts for your decentralized applications.",
  },
  {
    title: "DeFi Content Writing",
    icon: FileText,
    description:
      "Create compelling content for decentralized finance projects and platforms.",
  },
  {
    title: "Blockchain Consulting",
    icon: Cpu,
    description:
      "Get expert advice on implementing blockchain solutions for your business.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Featured Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
