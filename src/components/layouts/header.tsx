import { ModeToggle } from "@/components/common/mode-toggle";
import { Button } from "@/components/ui/button";
import { Cpu, Wallet } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 px-8 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="hidden font-bold sm:inline-block">
              DecentraWork
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              href="/services"
            >
              Services
            </a>
            <a
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              href="/freelancers"
            >
              Freelancers
            </a>
            <a
              className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              href="/how-it-works"
            >
              How It Works
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button
            variant="outline"
            className="hidden sm:flex bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white border-none"
          >
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
