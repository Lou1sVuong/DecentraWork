export default function Footer() {
  return (
    <footer className="w-full px-8 py-6 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 DecentraWork. All rights reserved.
          </p>
          <nav className="flex gap-6 mt-4 md:mt-0">
            <a
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              href="#"
            >
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
